/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  hasAction,
  ActionHandlerEvent,
  handleAction,
  LovelaceCardEditor,
  getLovelace,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import './editor';
import { repeat } from "lit-html/directives/repeat";
import type { TaskListCardConfig, Task, TaskItem } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';
import { PaperCheckboxElement } from "@polymer/paper-checkbox/paper-checkbox";
import { PaperInputElement } from "@polymer/paper-input/paper-input";

/* eslint no-console: 0 */
console.info(
  `%c  TASK-LIST-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'task-list-card',
  name: 'TaskList Card',
  description: 'A template custom card for you to create something awesome',
},
{
  type: 'task-list-detail-card',
  name: 'TaskList detail Card',
  description: 'Custom task list detail card',
});

// TODO Name your custom element
@customElement('task-list-card')
export class TaskListCard extends LitElement {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('task-list-card-editor');
  }

  public static getStubConfig(): object {
    return {};
  }

  @property({ attribute: false }) public hass!: HomeAssistant;
  @internalProperty() private config!: TaskListCardConfig;
  @internalProperty() private tasksDone!: Task[];
  @internalProperty() private tasks!: Task[];


  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: TaskListCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Task list name',
      ...config,
    };
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected _handleMoreInfo(task?: Task) {
    console.log(task)
    let cardTools = customElements.get('card-tools');
    if (task) {
      cardTools.popUp("Detail", {type: "custom:task-list-detail-card", data: task}, false);
    } else
    {
      cardTools.popUp("Detail", {type: "custom:task-list-detail-card", data: {name: "", task_list_id: this.config.entity.replace("sensor.task_list_", ""), done: false, items: []}}, false);
      }
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    // TODO Check for stateObj or other necessary things and render a warning if missing
    if (this.config.show_warning) {
      return this._showWarning(localize('common.show_warning'));
    }

    if (this.config.show_error) {
      return this._showError(localize('common.show_error'));
    }
    console.info("render html")
    let taskList = this.hass.states[this.config.entity]
    this.tasks = taskList.attributes['tasks']
    this.tasks.sort((a:Task, b:Task) =>  a.done !== b.done ? (a.done == true ? 1 : 0) - (b.done == true ? 1 : 0) : a.id - b.id)
    for (let task of this.tasks) {
      task.items.sort((a:TaskItem, b:TaskItem) =>
          a.done !== b.done ? (a.done == true ? 1 : 0) - (b.done == true ? 1 : 0) : a.position - b.position
      )
    }

    return html`
      <ha-card class="header"

        .header=${`${this.config.header || 'Task List'}: ${taskList.attributes["friendly_name"] || 'No task define Defined'}`}
      >
       <ha-icon @click=${( ) => this._handleMoreInfo()} icon="hass:plus-circle-outline"></ha-icon>
       ${this.tasks.length == 0 ? html `<div class="info flex">No tasks!</div>` : ''}
        ${repeat(
          this.tasks!,
          (task) => task.id,
          (task) =>
            html`
              <div class="info flex container" style="border-style: outset;margin-bottom: 1em;">
              <div class="grid-container">
                  <div class="edit"> <ha-icon   icon="hass:pencil" @click=${() => this._handleMoreInfo(task)}></ha-icon></ha-icon></div>
                  <div class="delete">  <ha-icon   icon="hass:delete" @click=${() =>  this.taskDelete(task)}></ha-icon></div>
                  <div class="toggle">  ${task.done == true ?
                               html` <ha-icon   icon="hass:check-box-outline" @click=${() =>  this.taskToggle(task)}}></ha-icon>` :
                               html` <ha-icon   icon="hass:checkbox-blank-outline" @click=${() =>  this.taskToggle(task)}></ha-icon>`
                               }</ha-icon></div>

                  <div class="name"><h3 >${task.name}</h3></div>
                 ${task.description ?
                      html`
                            <ha-icon class="icon"  icon="hass:message-text-outline"></ha-icon>
                                <paper-textarea row="3" class="text">
                                    ${task.description}
                                </paper-textarea>

                        ` : ''}
                        ${task.due_date ?
                      html`
                            <ha-icon class="icon_due_date"  icon="hass:alarm"></ha-icon>
                                <paper-textarea row="3" class="due_date_text">
                                    ${task.due_date}
                                </paper-textarea>

                        ` : ''}




                         <div class="item_area">
                         <div class="addRow secondary row">
                          <ha-icon
                            class="addButton"
                            icon="hass:plus"
                            .title=${this.hass!.localize(
                              "ui.panel.lovelace.cards.shopping-list.add_item"
                            )}
                            @click=${(ev) => this._addItem(ev, task)}
                          >
                          </ha-icon>
                          <paper-input
                            no-label-float
                            class="addBox column" id="${task.id}"
                            placeholder=${this.hass!.localize(
                              "ui.panel.lovelace.cards.shopping-list.add_item"
                            )}
                            @keydown=${(ev) => this._addKeyPress(ev, task)}
                          ></paper-input>

                        </div>
                        ${task.items.length > 0 ?
                    html`
                         ${repeat(
                            task.items.filter(i => i.done == false)!,
                            (item) => item.position,
                           (item) =>
                             html`
                              <div class="secondary row">
                              ${item.done == true ?
                               html` <ha-icon class="icon_task"  icon="hass:check-box-outline" @click=${() => this.updateItem(task, item)}}></ha-icon>` :
                               html` <ha-icon class="icon_task"  icon="hass:checkbox-blank-outline" @click=${() => this.updateItem(task, item)}></ha-icon>`
                               }

<paper-input  no-label-float class="column" .value=${item.name} @change=${(ev) =>this.updateItemName(ev, task, item)} ></paper-input>
                        </div>

                             `
              )}

${task.items.filter(i => i.done == true).length > 0 ? html`
               <div class="checked">
                <span>
                  ${this.hass!.localize(
                    "ui.panel.lovelace.cards.shopping-list.checked_items"
                  )}
                </span>
                <ha-icon
                  class="clearall"
                  tabindex="0"
                  icon="hass:notification-clear-all"
                  .title=${this.hass!.localize(
                    "ui.panel.lovelace.cards.shopping-list.clear_items"
                  )}
                  @click=${() => this.clearItems(task)}
                >
                </ha-icon>
              </div>` : ''}

${repeat(
  task.items.filter(i => i.done == true)!,
  (item) => item.position,
 (item) =>
   html`
    <div class="secondary row">
    ${item.done == true ?
     html` <ha-icon class="icon_task"  icon="hass:check-box-outline" @click=${() => this.updateItem(task, item)}}></ha-icon>` :
     html` <ha-icon class="icon_task"  icon="hass:checkbox-blank-outline" @click=${() => this.updateItem(task, item)}></ha-icon>`
     }

  <paper-input  no-label-float class="column" .value=${item.name} @change=${(ev) =>this.updateItemName(ev, task, item)} ></paper-input>
</div>

   `
)}
                         </div>
                     </div>
                    `: ''
                  }
              </div>

            `
        )}</div>
      </ha-card>
    `;
  }

  private _addKeyPress(ev, task: Task): void {
    console.log("_addKeyPress")
    if (ev.keyCode === 13) {
      this._addItem(null, task);
    }
  }

  private _addItem(ev, task: Task): void {
    console.log("_addItem")
    const newItem = this._newItem(task.id);

    if (newItem.value!.length > 0) {
      task.items.push({ name: newItem.value!, done: false, position: -1})
      this.taskUpdate(task)
    }

    newItem.value = "";
    if (ev) {
      newItem.focus();
    }
  }

  private _newItem(id): PaperInputElement {
    return this.shadowRoot!.getElementById(id) as PaperInputElement;
  }

  private clearItems(task: Task) {
    console.log("clearItems")
    console.log(task)
    this.hass.callService("task_list", "service_delete_done_items", {"id": task.id, "task_list_id": task.task_list_id})
  }

  private updateItem(task: Task, item: TaskItem) {
    console.log("updateItem")
    console.log(task)
    item.done = !item.done
    this.hass.callService("task_list", "service_update_task", task)
  }

  private updateItemName(ev, task: Task, item: TaskItem) {
    console.log("updateItem")
    console.log(task)
    item.name =  ev.target.value
    this.hass.callService("task_list", "service_update_task", task)
  }

  private taskUpdate(task: Task): void {
    console.log("taskUpdate")
    console.log(task)
    this.hass.callService("task_list", "service_update_task", task)
  }

  private taskToggle(task: Task): void {
    console.log("updateTask")
    console.log(task)
    task.done = !task.done
    this.hass.callService("task_list", "service_update_task", task)
  }

  private taskDelete(task: Task): void {
    console.log("taskDelete")
    console.log(task)
    this.hass.callService("task_list", "service_delete_task", {"id": task.id, "task_list_id": task.task_list_id})
  }

  private _handleAction(ev: ActionHandlerEvent): void {
    if (this.hass && this.config && ev.detail.action) {
      handleAction(this, this.hass, this.config, ev.detail.action);
    }
  }

  private _showWarning(warning: string): TemplateResult {
    return html`
      <hui-warning>${warning}</hui-warning>
    `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement('hui-error-card');
    errorCard.setConfig({
      type: 'error',
      error,
      origConfig: this.config,
    });

    return html`
      ${errorCard}
    `;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
            .row:after {
              content: "";
              display: table;
              clear: both;
            }
          .column {
              float: right;
              width: 90%;
            }
           .icon_task {
              float: left;
              width: 10%;
            }

            .flex {
              display: flex;
              margin-bottom: 1em;
              justify-content: space-between;
            }
            .checked {
              display: flex;
              flex-direction: row;
              align-items: center;
            }

            .checked {
              margin: 12px 0;
              justify-content: space-between;
            }

            .checked span {
              color: var(--primary-color);
            }


            .clearall {
              cursor: pointer;
            }
            .grid-container {
              width: 100%;
              display: grid;
              grid-template-columns: 1% 10% 70% 6% 6% 6% 1%;
              grid-template-rows: auto auto auto auto;
              gap: 0em 0em;
              grid-template-areas:
                ". name name toggle edit delete ."
                ". icon text text text text ."
                ". icon_due_date due_date_text due_date_text due_date_text due_date_text ."
                ". item_area item_area item_area item_area item_area .";
            }      .icon { grid-area: icon; }
            .name { grid-area: name; }
            .text { grid-area: text; }
            .edit { grid-area: edit; }
            .delete { grid-area: delete; }
            .toggle { grid-area: toggle; }
            .icon_due_date { grid-area: icon_due_date; }
            .due_date_text { grid-area: due_date_text; }
            .icon_item { grid-area: icon_item; }
            .item_area { grid-area: item_area; }
    `;
  }
}



@customElement('task-list-detail-card')
export class TaskListDetailCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @internalProperty() private config!: TaskListCardConfig;
  @internalProperty() private task!: Task;


  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: TaskListCardConfig): void {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = {
      name: 'Task list name',
      ...config,
    };
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected _handleMoreInfo(task?: Task) {
      console.log(task)
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {

    console.info("render html detail")
    console.info(this.config)
    this.task = this.config.data

    return html`
      <ha-card class="header" >
          <div class="info flex container" style="border-style: outset;margin-bottom: 1em;">
          <div class="grid-container-detail">
              <paper-input  @change=${this._saveName} label="Name" minlength=3 class="name" value="${this.task.name}"></paper-input>
              <textarea label="Description" class="description" @change=${this._saveDescription}>${this.task.description }</textarea>
              </paper-input-decorator>
              <paper-input @change=${this._saveDueDate} label="Due Date" type="date"  class="due_date" value="${this.task.due_date ? this.task.due_date : ""}"></paper-input>
              <div class="save"> <ha-icon   icon="hass:check-bold" @click=${this.updateItem}></ha-icon></ha-icon></div>
              </div>

          </div>
      </ha-card>
    `;
  }

  private _saveDueDate(e): void {
      this.task.due_date = e.target.value
  }

  private _saveDescription(e): void {
    this.task.description = e.target.value
  }

  private _saveName(e): void {
    this.task.name = e.target.value
  }

  private updateItem() {
    console.log("updateItem")

    if (this.task.id && this.task.id > 0) {
      this.hass.callService("task_list", "service_update_task", this.task)
        .then(() => {
        let cardTools = customElements.get('card-tools')
        cardTools.closePopUp()
      })
    } else {
      this.hass.callService("task_list", "service_add_task", this.task)
        .then(() => {
        let cardTools = customElements.get('card-tools')
        cardTools.closePopUp()
      })
    }

  }


  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
          .column {
              float: right;
              width: 90%;
            }

            .flex {
              display: flex;
              margin-bottom: 1em;
              justify-content: space-between;
            }

            .grid-container-detail {
              width: 100%;
              display: grid;
              grid-template-columns: 90% 10%;
              grid-template-rows: auto auto auto auto;
              gap: 0em 0em;
              grid-template-areas:
                ". save"
                "name name"
                "description description"
                "due_date .";
            }
            .icon { grid-area: icon; }
            .name { grid-area: name; }
            .description { grid-area: description; }
            .due_date { grid-area: due_date; }
            .save { grid-area: save; }

    `;
  }
}