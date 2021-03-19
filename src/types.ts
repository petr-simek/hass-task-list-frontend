import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'task-list-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface TaskListCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  header?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entity: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export interface Task {
  name: string;
  done: boolean;
  id: number;
  description?: string;
  task_list_id: string;
  due_date?: string;
  items: TaskItem[]
}

export interface TaskItem {
  name: string;
  done: boolean;
  position: number;
}
