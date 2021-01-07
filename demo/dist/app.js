window.customElements.define('my-module', class Module extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: open});
    this.innerHTML = /*html*/`
      <style>
  :host {
    display: block;
    width: 100%;
    height: 100%;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-family: sans-serif;
    color: white;
    text-align: center;
  }
</style>
      <h1>Hello, world</h1>
    `;
  }

});

window.customElements.define('my-app', class App extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: open});
    this.innerHTML = /*html*/`
      <style>
  :host {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
      <my-module></my-module>
    `;
  }

});
