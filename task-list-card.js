/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,i,s){var n,o=arguments.length,r=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,i,r):n(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${n}`);class r{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:m}}=e;for(;u<m;){const e=r.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let s=0;for(let e=0;e<i;e++)a(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=p[u],i=d.exec(t)[2],s=i.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const r=n.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:r}),u+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,n=t.split(o),r=n.length-1;for(let t=0;t<r;t++){let i,o=n[t];if(""===o)i=c();else{const e=d.exec(o);null!==e&&a(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}s.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===n[r]?(s.insertBefore(c(),e),i.push(e)):e.data=n[r],u+=r}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(c(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const a=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:s}=e,n=document.createTreeWalker(i,133,null,!1);let o=p(s),r=s[o],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,o=p(s,o),r=s[o]}c.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,g=e=>"function"==typeof e&&m.has(e),f={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,a=0,c=n.nextNode();for(;r<s.length;)if(o=s[r],l(o)){for(;a<o.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=i.pop(),c=n.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${s} `;class S{constructor(e,t,i,s){this.strings=e,this.values=t,this.type=i,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const a=d.exec(e);t+=null===a?e+(i?w:n):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==y&&(t=y.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new N(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!k(e))return e}let s="";for(let n=0;n<t;n++){s+=e[n];const t=i[n];if(void 0!==t){const e=t.value;if(b(e)||!k(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===f||b(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=f,e(this)}this.value!==f&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}const e=this.__pendingValue;e!==f&&(b(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),s=i._clone();i.update(e.values),this.__commitNode(s),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,s=0;for(const n of e)i=t[s],void 0===i&&(i=new C(this.options),t.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(t[s-1])),i.setValue(n),i.commit(),s++;s<t.length&&(t.length=s,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class P{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=f}}class M extends x{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends N{}let $=!1;(()=>{try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class E{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=f,e(this)}if(this.__pendingValue===f)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=f}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function D(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(s);return i=t.keyString.get(n),void 0===i&&(i=new r(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const O=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const I=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,s){const n=t[0];if("."===n){return new M(e,t.slice(1),i).parts}if("@"===n)return[new E(e,t.slice(1),s.eventContext)];if("?"===n)return[new P(e,t.slice(1),i)];return new x(e,t,i).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const U=(e,...t)=>new S(e,t,"html",I)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,R=(e,t)=>`${e}--${t}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const H=e=>t=>{const i=R(t.type,e);let n=O.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(i,n));let o=n.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(s);if(o=n.keyString.get(a),void 0===o){const i=t.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(i,e),o=new r(t,i),n.keyString.set(a,o)}return n.stringsArray.set(t.strings,o),o},j=["html","svg"],q=new Set,z=(e,t,i)=>{q.add(e);const s=i?i.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,e);const r=document.createElement("style");for(let e=0;e<o;e++){const t=n[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{j.forEach(t=>{const i=O.get(R(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const a=s.content;i?function(e,t,i=null){const{element:{content:s},parts:n}=e;if(null==i)return void s.appendChild(t);const o=document.createTreeWalker(s,133,null,!1);let r=p(n),a=0,l=-1;for(;o.nextNode();){l++;for(o.currentNode===i&&(a=u(t),i.parentNode.insertBefore(t,i));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=p(n,r);return}r=p(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const L={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),B={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:F};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const s=this._attributeNameForProperty(i,t);void 0!==s&&(this._attributeToPropertyMap.set(s,i),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||B}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=F){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,s=t.converter||L,n="function"==typeof s?s:s.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,s=t.converter;return(s&&s.toAttribute||L.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=B){const s=this.constructor,n=s._attributeNameForProperty(e,i);if(void 0!==n){const e=s._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(e);if(void 0!==s){const e=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let s=!0;if(void 0!==e){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function K(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Z(e,t)}function G(e){return K({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class ee{constructor(e,t){if(t!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const i=t.reduce((t,i,s)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[s+1],e[0]);return new ee(i,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ie={};class se extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),s=[];i.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Q){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),X)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ie&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ie}}se.finalized=!0,se.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,o=V.has(t),r=Y&&11===t.nodeType&&!!t.host,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=V.get(t);void 0===n&&(i(t,t.firstChild),V.set(t,n=new C(Object.assign({templateFactory:D},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:H(n)},s)),a){const e=V.get(l);V.delete(l);const s=e.value instanceof v?e.value.template:void 0;z(n,l,s),i(t,t.firstChild),t.appendChild(l),V.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)};var ne=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,oe="[^\\s]+",re=/\[([^]*?)\]/gm;function ae(e,t){for(var i=[],s=0,n=e.length;s<n;s++)i.push(e[s].substr(0,t));return i}var le=function(e){return function(t,i){var s=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return s>-1?s:null}};function ce(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var s=0,n=t;s<n.length;s++){var o=n[s];for(var r in o)e[r]=o[r]}return e}var de=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],he=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=ae(he,3),pe={dayNamesShort:ae(de,3),dayNames:de,monthNamesShort:ue,monthNames:he,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},me=ce({},pe),ge=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},fe={D:function(e){return String(e.getDate())},DD:function(e){return ge(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ge(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ge(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ge(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ge(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ge(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ge(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ge(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ge(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ge(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ge(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ge(Math.floor(Math.abs(t)/60),2)+":"+ge(Math.abs(t)%60,2)}},_e=function(e){return+e-1},ve=[null,"[1-9]\\d?"],ye=[null,oe],we=["isPm",oe,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],Se=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],be=(le("monthNamesShort"),le("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var ke=function(e,t,i){if(void 0===t&&(t=be.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var s=[];t=(t=be[t]||t).replace(re,(function(e,t){return s.push(t),"@@@"}));var n=ce(ce({},me),i);return(t=t.replace(ne,(function(t){return fe[t](e,n)}))).replace(/@@@/g,(function(){return s.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var xe=["closed","locked","off"],Ne=function(e,t,i,s){s=s||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,e.dispatchEvent(n),n},Ce=function(e){Ne(window,"haptic",e)},Pe=function(e,t,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(Ce("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&Ne(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),Ne(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(e,t){(function(e,t,i){void 0===i&&(i=!0);var s,n=function(e){return e.substr(0,e.indexOf("."))}(t),o="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}e.callService(o,s,{entity_id:t})})(e,t,xe.includes(e.states[t].state))}(t,i.entity),Ce("success"));break;case"call-service":if(!s.service)return void Ce("failure");var n=s.service.split(".",2);t.callService(n[0],n[1],s.service_data),Ce("success");break;case"fire-dom-event":Ne(e,"ll-custom",s)}};function Me(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var s=t.get("hass");return!s||s.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}var Te=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null};const $e={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},header:{icon:"tundescriptione",name:"Optional",secondary:"Required options for this card to function",show:!0}};let Ee=class extends se{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}render(){var e;if(!this.hass||!this._helpers)return U``;this._helpers.importMoreInfoControl("climate");const t=Object.keys(this.hass.states).filter(e=>e.startsWith("sensor.task_list"));return U`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+$e.required.icon}></ha-icon>
            <div class="title">${$e.required.name}</div>
          </div>
          <div class="secondary">${$e.required.secondary}</div>
        </div>
        ${$e.required.show?U`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map(e=>U`
                        <paper-item>${e}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
           ${$e.header.show?U`
              <div class="values" id="testJakNevim">
              <paper-input
                 label="Header"
                 value="${null===(e=this._config)||void 0===e?void 0:e.header}"
                .configValue="${"header"}"
                @value-changed="${this._valueChanged}"
              ></paper-input>
              </div>
            `:""}
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleOption(e){this._toggleThing(e,$e)}_toggleThing(e,t){const i=!t[e.target.option].show;for(const[e]of Object.entries(t))t[e].show=!1;t[e.target.option].show=i,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),Ne(this,"config-changed",{config:this._config}))}static get styles(){return te`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};e([K({attribute:!1})],Ee.prototype,"hass",void 0),e([G()],Ee.prototype,"_config",void 0),e([G()],Ee.prototype,"_toggle",void 0),e([G()],Ee.prototype,"_helpers",void 0),Ee=e([J("task-list-card-editor")],Ee);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ae=(e,t)=>{const i=e.startNode.parentNode,s=void 0===t?e.endNode:t.startNode,n=i.insertBefore(c(),s);i.insertBefore(c(),s);const o=new C(e.options);return o.insertAfterNode(n),o},De=(e,t)=>(e.setValue(t),e.commit(),e),Oe=(e,t,i)=>{const s=e.startNode.parentNode,n=i?i.startNode:e.endNode,o=t.endNode.nextSibling;o!==n&&((e,t,i=null,s=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,s),t=i}})(s,t.startNode,o,n)},Ve=e=>{i(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},Ie=(e,t,i)=>{const s=new Map;for(let n=t;n<=i;n++)s.set(e[n],n);return s},Ue=new WeakMap,Re=new WeakMap,Ye=(e=>(...t)=>{const i=e(...t);return m.set(i,!0),i})((e,t,i)=>{let s;return void 0===i?i=t:void 0!==t&&(s=t),t=>{if(!(t instanceof C))throw new Error("repeat can only be used in text bindings");const n=Ue.get(t)||[],o=Re.get(t)||[],r=[],a=[],l=[];let c,d,h=0;for(const t of e)l[h]=s?s(t,h):h,a[h]=i(t,h),h++;let u=0,p=n.length-1,m=0,g=a.length-1;for(;u<=p&&m<=g;)if(null===n[u])u++;else if(null===n[p])p--;else if(o[u]===l[m])r[m]=De(n[u],a[m]),u++,m++;else if(o[p]===l[g])r[g]=De(n[p],a[g]),p--,g--;else if(o[u]===l[g])r[g]=De(n[u],a[g]),Oe(t,n[u],r[g+1]),u++,g--;else if(o[p]===l[m])r[m]=De(n[p],a[m]),Oe(t,n[p],n[u]),p--,m++;else if(void 0===c&&(c=Ie(l,m,g),d=Ie(o,u,p)),c.has(o[u]))if(c.has(o[p])){const e=d.get(l[m]),i=void 0!==e?n[e]:null;if(null===i){const e=Ae(t,n[u]);De(e,a[m]),r[m]=e}else r[m]=De(i,a[m]),Oe(t,i,n[u]),n[e]=null;m++}else Ve(n[p]),p--;else Ve(n[u]),u++;for(;m<=g;){const e=Ae(t,r[g+1]);De(e,a[m]),r[m++]=e}for(;u<=p;){const e=n[u++];null!==e&&Ve(e)}Ue.set(t,r),Re.set(t,l)}});var He={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},je={common:He},qe={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},ze={common:qe};const Le={en:Object.freeze({__proto__:null,common:He,default:je}),nb:Object.freeze({__proto__:null,common:qe,default:ze})};function Fe(e,t="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=e.split(".").reduce((e,t)=>e[t],Le[s])}catch(t){n=e.split(".").reduce((e,t)=>e[t],Le.en)}return void 0===n&&(n=e.split(".").reduce((e,t)=>e[t],Le.en)),""!==t&&""!==i&&(n=n.replace(t,i)),n}console.info(`%c  TASK-LIST-CARD \n%c  ${Fe("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"task-list-card",name:"TaskList Card",description:"A template custom card for you to create something awesome"},{type:"task-list-detail-card",name:"TaskList detail Card",description:"Custom task list detail card"});let Be=class extends se{static async getConfigElement(){return document.createElement("task-list-card-editor")}static getStubConfig(){return{}}setConfig(e){if(!e)throw new Error(Fe("common.invalid_configuration"));e.test_gui&&Te().setEditMode(!0),this.config=Object.assign({name:"Task list name"},e)}shouldUpdate(e){return!!this.config&&Me(this,e,!1)}_handleMoreInfo(e){console.log(e);let t=customElements.get("card-tools");e?t.popUp("Detail",{type:"custom:task-list-detail-card",data:e},!1):t.popUp("Detail",{type:"custom:task-list-detail-card",data:{name:"",task_list_id:this.config.entity.replace("sensor.task_list_",""),done:!1,items:[]}},!1)}render(){if(this.config.show_warning)return this._showWarning(Fe("common.show_warning"));if(this.config.show_error)return this._showError(Fe("common.show_error"));console.info("render html");let e=this.hass.states[this.config.entity];this.tasks=e.attributes.tasks,this.tasks.sort((e,t)=>e.done!==t.done?(1==e.done?1:0)-(1==t.done?1:0):e.id-t.id);for(let e of this.tasks)e.items.sort((e,t)=>e.done!==t.done?(1==e.done?1:0)-(1==t.done?1:0):e.position-t.position);return U`
      <ha-card class="header"

        .header=${`${this.config.header||"Task List"}: ${e.attributes.friendly_name||"No task define Defined"}`}
      >
       <ha-icon @click=${()=>this._handleMoreInfo()} icon="hass:plus-circle-outline"></ha-icon>
       ${0==this.tasks.length?U`<div class="info flex">No tasks!</div>`:""}
        ${Ye(this.tasks,e=>e.id,e=>U`
              <div class="info flex container" style="border-style: outset;margin-bottom: 1em;">
              <div class="grid-container">
                  <div class="edit"> <ha-icon   icon="hass:pencil" @click=${()=>this._handleMoreInfo(e)}></ha-icon></ha-icon></div>
                  <div class="delete">  <ha-icon   icon="hass:delete" @click=${()=>this.taskDelete(e)}></ha-icon></div>
                  <div class="toggle">  ${1==e.done?U` <ha-icon   icon="hass:check-box-outline" @click=${()=>this.taskToggle(e)}}></ha-icon>`:U` <ha-icon   icon="hass:checkbox-blank-outline" @click=${()=>this.taskToggle(e)}></ha-icon>`}</ha-icon></div>

                  <div class="name"><h3 >${e.name}</h3></div>
                 ${e.description?U`
                            <ha-icon class="icon"  icon="hass:message-text-outline"></ha-icon>
                                <paper-textarea row="3" class="text">
                                    ${e.description}
                                </paper-textarea>

                        `:""}
                        ${e.due_date?U`
                            <ha-icon class="icon_due_date"  icon="hass:alarm"></ha-icon>
                                <paper-textarea row="3" class="due_date_text">
                                    ${e.due_date}
                                </paper-textarea>

                        `:""}




                         <div class="item_area">
                         <div class="addRow secondary row">
                          <ha-icon
                            class="addButton"
                            icon="hass:plus"
                            .title=${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}
                            @click=${t=>this._addItem(t,e)}
                          >
                          </ha-icon>
                          <paper-input
                            no-label-float
                            class="addBox column"
                            placeholder=${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}
                            @keydown=${t=>this._addKeyPress(t,e)}
                          ></paper-input>

                        </div>
                        ${e.items.length>0?U`
                         ${Ye(e.items.filter(e=>0==e.done),e=>e.position,t=>U`
                              <div class="secondary row">
                              ${1==t.done?U` <ha-icon class="icon_task"  icon="hass:check-box-outline" @click=${()=>this.updateItem(e,t)}}></ha-icon>`:U` <ha-icon class="icon_task"  icon="hass:checkbox-blank-outline" @click=${()=>this.updateItem(e,t)}></ha-icon>`}

<paper-input  no-label-float class="column" .value=${t.name} @change=${i=>this.updateItemName(i,e,t)} ></paper-input>
                        </div>

                             `)}

${e.items.filter(e=>1==e.done).length>0?U`
               <div class="checked">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.shopping-list.checked_items")}
                </span>
                <ha-icon
                  class="clearall"
                  tabindex="0"
                  icon="hass:notification-clear-all"
                  .title=${this.hass.localize("ui.panel.lovelace.cards.shopping-list.clear_items")}
                  @click=${()=>this.clearItems(e)}
                >
                </ha-icon>
              </div>`:""}

${Ye(e.items.filter(e=>1==e.done),e=>e.position,t=>U`
    <div class="secondary row">
    ${1==t.done?U` <ha-icon class="icon_task"  icon="hass:check-box-outline" @click=${()=>this.updateItem(e,t)}}></ha-icon>`:U` <ha-icon class="icon_task"  icon="hass:checkbox-blank-outline" @click=${()=>this.updateItem(e,t)}></ha-icon>`}

  <paper-input  no-label-float class="column" .value=${t.name} @change=${i=>this.updateItemName(i,e,t)} ></paper-input>
</div>

   `)}
                         </div>
                     </div>
                    `:""}
              </div>

            `)}</div>
      </ha-card>
    `}_addKeyPress(e,t){console.log("_addKeyPress"),13===e.keyCode&&this._addItem(null,t)}_addItem(e,t){console.log("_addItem");const i=this._newItem;i.value.length>0&&(t.items.push({name:i.value,done:!1,position:-1}),this.taskUpdate(t)),i.value="",e&&i.focus()}get _newItem(){return this.shadowRoot.querySelector(".addBox")}clearItems(e){console.log("clearItems"),console.log(e),this.hass.callService("task_list","service_delete_done_items",{id:e.id,task_list_id:e.task_list_id})}updateItem(e,t){console.log("updateItem"),console.log(e),t.done=!t.done,this.hass.callService("task_list","service_update_task",e)}updateItemName(e,t,i){console.log("updateItem"),console.log(t),i.name=e.target.value,this.hass.callService("task_list","service_update_task",t)}taskUpdate(e){console.log("taskUpdate"),console.log(e),this.hass.callService("task_list","service_update_task",e)}taskToggle(e){console.log("updateTask"),console.log(e),e.done=!e.done,this.hass.callService("task_list","service_update_task",e)}taskDelete(e){console.log("taskDelete"),console.log(e),this.hass.callService("task_list","service_delete_task",{id:e.id,task_list_id:e.task_list_id})}_handleAction(e){this.hass&&this.config&&e.detail.action&&function(e,t,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),Pe(e,t,i,n)}(this,this.hass,this.config,e.detail.action)}_showWarning(e){return U`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),U`
      ${t}
    `}static get styles(){return te`
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
    `}};e([K({attribute:!1})],Be.prototype,"hass",void 0),e([G()],Be.prototype,"config",void 0),e([G()],Be.prototype,"tasksDone",void 0),e([G()],Be.prototype,"tasks",void 0),Be=e([J("task-list-card")],Be);let We=class extends se{setConfig(e){if(!e)throw new Error(Fe("common.invalid_configuration"));e.test_gui&&Te().setEditMode(!0),this.config=Object.assign({name:"Task list name"},e)}shouldUpdate(e){return!!this.config&&Me(this,e,!1)}_handleMoreInfo(e){console.log(e)}render(){return console.info("render html detail"),console.info(this.config),this.task=this.config.data,U`
      <ha-card class="header" >
          <div class="info flex container" style="border-style: outset;margin-bottom: 1em;">
          <div class="grid-container-detail">
              <paper-input  @change=${this._saveName} label="Name" minlength=3 class="name" value="${this.task.name}"></paper-input>
              <textarea label="Description" class="description" @change=${this._saveDescription}>${this.task.description}</textarea>
              </paper-input-decorator>
              <paper-input @change=${this._saveDueDate} label="Due Date" type="date"  class="due_date" value="${this.task.due_date?this.task.due_date:""}"></paper-input>
              <div class="save"> <ha-icon   icon="hass:check-bold" @click=${this.updateItem}></ha-icon></ha-icon></div>
              </div>

          </div>
      </ha-card>
    `}_saveDueDate(e){this.task.due_date=e.target.value}_saveDescription(e){this.task.description=e.target.value}_saveName(e){this.task.name=e.target.value}updateItem(){console.log("updateItem"),this.task.id&&this.task.id>0?this.hass.callService("task_list","service_update_task",this.task).then(()=>{customElements.get("card-tools").closePopUp()}):this.hass.callService("task_list","service_add_task",this.task).then(()=>{customElements.get("card-tools").closePopUp()})}static get styles(){return te`
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

    `}};e([K({attribute:!1})],We.prototype,"hass",void 0),e([G()],We.prototype,"config",void 0),e([G()],We.prototype,"task",void 0),We=e([J("task-list-detail-card")],We);export{Be as TaskListCard,We as TaskListDetailCard};
