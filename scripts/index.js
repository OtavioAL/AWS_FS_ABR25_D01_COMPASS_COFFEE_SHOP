import { renderFeedbacks } from "./modules/feedbacks.js";
import { renderFilters } from "./modules/filters.js";
import { setupMobileMenu } from "./modules/header.js";
import { renderNewItems } from "./modules/newItems.js";
import { setupSubscribe } from "./modules/subscribe.js";

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu("#menu", "#menuToggle", "#closeBtn", ".menu-list a");
  renderNewItems(".products-list-cards");
  renderFilters(".table-products-container-filters");
  renderFeedbacks(".glider");
  setupSubscribe(".subscribe-container-input", ".subscribe-message");
});
