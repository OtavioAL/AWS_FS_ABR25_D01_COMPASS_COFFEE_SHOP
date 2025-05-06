import { getFeedbacks } from "../services/data-store.js";
import { createElement } from "../utils/dom.js";
import { hideSpinner, showSpinner } from "../utils/spinner.js";

export async function renderFeedbacks(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  showSpinner(container);

  try {
    const feedbacks = await getFeedbacks();

    if (feedbacks?.status !== "success") return;

    feedbacks.data.forEach((feedback) => {
      const card = createElement("div", { classList: ["feedbacks-card"] });

      const quote = createElement("p", {
        classList: ["feedbacks-text-highlight"],
        textContent: "“",
      });

      const text = createElement("p", {
        classList: ["feedbacks-text"],
        textContent: feedback.message,
      });

      const name = createElement("p", {
        classList: ["feedbacks-text-name-user"],
        textContent: feedback.full_name,
      });

      const profession = createElement("p", {
        classList: ["feedbacks-text-user-profession"],
        textContent: feedback.profession,
      });

      const imageContainer = createElement("div", {
        classList: ["feedbacks-container-image-user"],
      });

      const image = createElement("img", {
        attributes: {
          src: feedback.image_url || "/assets/images/image-user.png",
          alt: `photo user ${feedback.name}`,
        },
      });

      imageContainer.appendChild(image);
      card.append(quote, text, name, profession, imageContainer);

      container.appendChild(card);
    });

    new Glider(document.querySelector(".glider"), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: ".dots",
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  } catch (error) {
    console.error("Error loading feedbacks:", error);
  } finally {
    hideSpinner(container);
  }
}
