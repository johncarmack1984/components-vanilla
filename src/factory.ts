export interface ComponentProps {
  name: string;
  template: HTMLTemplateElement;
}

export class Component extends HTMLElement {
  name: string;
  constructor({
    name,
    template,
  }: {
    name: string;
    template: HTMLTemplateElement;
  }) {
    super();
    this.name = name;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
