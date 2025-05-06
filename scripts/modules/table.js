import { createElement } from "../utils/dom.js";
import { formatPrice } from "../utils/formatPrice.js";

export function renderTable(items, tbodySelector) {
  const tbody = document.querySelector(tbodySelector);
  if (!tbody) return;

  tbody.innerHTML = "";

  items.forEach((item) => {
    const row = createElement("tr", {
      classList: ["table-body-row"],
    });

    const nameTd = createElement("td", {
      classList: ["table-body-item"],
      textContent: item.name,
    });
    const typeTd = createElement("td", {
      classList: ["table-body-item"],
      textContent: item.type,
    });
    const priceTd = createElement("td", {
      classList: ["table-body-item"],
      textContent: formatPrice(item.price),
    });

    row.append(nameTd, typeTd, priceTd);
    tbody.appendChild(row);
  });
}
