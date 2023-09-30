import { UIButton } from "./button.ts";

// Register the custom element
customElements.define("ui-button", UIButton);

// Make the custom element available in the DOM
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `<slot />`;
