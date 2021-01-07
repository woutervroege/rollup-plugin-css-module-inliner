import { styles } from './app.css';
import './module';

window.customElements.define('my-app', class App extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: open});
    this.innerHTML = /*html*/`
      <style>${styles}</style>
      <my-module></my-module>
    `
  }

})