import { styles } from './module.css.js';

window.customElements.define('my-module', class Module extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: open});
    this.innerHTML = /*html*/`
      <style>${styles}</style>
      <h1>Hello, world</h1>
    `
  }

})