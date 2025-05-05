import { getAllItems } from "../services/data-store.js";
import { createElement } from "../utils/dom.js";
import { hideSpinner, showSpinner } from "../utils/spinner.js";
import { renderTable } from "./table.js";

export async function renderFilters(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const tableContainer = document.querySelector(".table-body");
  if (!tableContainer) return;

  showSpinner(tableContainer);

  try {
    container.innerHTML = "";
    const tableContainerSelector = ".table-body";

    const { data: items } = await getAllItems();

    const types = [...new Set(items.map((item) => item.type))].sort();
    const allTypes = ["All Items", ...types];

    allTypes.forEach((type) => {
      const button = createElement("button", {
        classList:
          type === "All Items" ? ["order-now"] : ["order-now-disabled"],
        attributes: {
          "data-type": type.toLowerCase(),
        },
      });

      const buttonA = createElement("a", {
        textContent: type,
        classList: ["order-now-button"],
      });

      button.appendChild(buttonA);

      renderTable(tableContainerSelector, "All Items");

      button.addEventListener("click", () => {
        const selectedType = button.getAttribute("data-type");
        const filteredItems =
          selectedType === "all items"
            ? items
            : items.filter((item) => item.type.toLowerCase() === selectedType);

        renderTable(filteredItems, ".table-body");

        container.querySelectorAll(".order-now").forEach((btn) => {
          btn.classList.remove("order-now");
          btn.classList.add("order-now-disabled");
        });
        container.querySelectorAll(".order-now-disabled").forEach((btn) => {
          btn.classList.remove("order-now");
          btn.classList.add("order-now-disabled");
        });

        button.classList.remove("order-now-disabled");
        button.classList.add("order-now");
      });

      container.appendChild(button);
    });

    renderTable(items, ".table-body");
  } catch (error) {
    console.log("error in filters", error);
  } finally {
    hideSpinner(tableContainer);
  }
}
