import { getAllItems } from "../services/data-store.js";
import { createElement } from "../utils/dom.js";
import { formatPrice } from "../utils/formatPrice.js";
import { hideSpinner, showSpinner } from "../utils/spinner.js";

const DEFAULT_IMAGE = "../assets/images/image-user.png";

export async function renderNewItems(containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) return;

  showSpinner(container);

  try {
    const items = await getAllItems();

    if (items?.status !== "success") return;

    const newItems = items.data.filter((item) => item.is_new);

    newItems.forEach((item) => {
      const productsCard = createElement("div", {
        classList: ["products-card"],
      });

      const img = createElement("img", {
        attributes: {
          src: item.imagem_url || DEFAULT_IMAGE,
          alt: item.name,
        },
        classList: ["products-card-image"],
      });

      const productsCardInformations = createElement("div", {
        classList: ["products-card-informations"],
      });

      const productsTitle = createElement("h3", {
        textContent: item.name,
        classList: ["products-card-title"],
      });

      const productsText = createElement("p", {
        textContent: `${item.ingredients_ratio[0].ingredient} ${item.ingredients_ratio[0].percentage}% | ${item.ingredients_ratio[1].ingredient} ${item.ingredients_ratio[1].percentage}%`,
        classList: ["products-card-text"],
      });

      const productsCardPrice = createElement("p", {
        textContent: formatPrice(item.price),
        classList: ["products-card-price"],
      });

      const productsCardButtonOrderNow = createElement("div", {
        classList: ["products-card-button-order-now"],
      });

      const orderNowButton = createElement("button", {
        classList: ["order-now"],
      });

      const orderNowButtonA = createElement("a", {
        textContent: "Order Now",
        classList: ["order-now-button"],
      });

      orderNowButton.append(orderNowButtonA);
      productsCardButtonOrderNow.append(orderNowButton);

      productsCardInformations.append(
        productsTitle,
        productsText,
        productsCardPrice,
        productsCardButtonOrderNow
      );
      productsCard.append(img, productsCardInformations);
      container.appendChild(productsCard);
    });
  } catch (error) {
    console.log("renderNewItems error", error);
  } finally {
    hideSpinner(container);
  }
}
