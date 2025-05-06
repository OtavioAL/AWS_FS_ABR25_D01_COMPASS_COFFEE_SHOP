import { createElement } from "./dom.js";

export function showSpinner(container) {
  const spinner = createElement("div", {
    classList: ["spinner"],
    attributes: { "data-spinner": "true" },
  });

  spinner.innerHTML = `
    <div class="loader"></div>
  `;

  container.appendChild(spinner);
}

export function hideSpinner(container) {
  const spinner = container.querySelector('[data-spinner="true"]');
  if (spinner) {
    spinner.remove();
  }
}
