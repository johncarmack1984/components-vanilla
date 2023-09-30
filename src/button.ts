/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { Component } from "./factory";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    button {
      background-color: blue;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }
  </style>
  <button id="ui-button"><slot /></button>
`;

export class UIButton extends Component {
  constructor() {
    super({
      name: "ui-button",
      template,
    });
  }

  handleClick() {
    alert("Button clicked!");
  }

  connectedCallback() {
    this.shadowRoot!.querySelector(`#${this.name}`)!.addEventListener(
      "click",
      this.handleClick
    );
  }

  disconnectedCallback() {
    this.shadowRoot!.querySelector(`#${this.name}`)!.removeEventListener(
      "click",
      this.handleClick
    );
  }
}
