import { isValidEmail } from "../utils/validateEmail.js";

const EMAIL_KEY = "user-subscription";

function showMessage(container, message, type = "info") {
  container.textContent = message;
  container.className = `subscribe-message-${type}`;
}

function updateUIAsSubscribed(form, messageContainer, email) {
  form.querySelector(".subscribe-input").value = email;
  form.querySelector(".subscribe-input").disabled = true;
  form.querySelector(".subscribe-button").textContent = "Unsubscribe";

  showMessage(messageContainer, "You are already subscribed!", "success");
}

function resetUI(form, messageContainer) {
  form.querySelector(".subscribe-input").value = "";
  form.querySelector(".subscribe-input").disabled = false;
  form.querySelector(".subscribe-button").textContent = "Subscribe";

  showMessage(messageContainer, "", "info");
}

export function setupSubscribe(formSelector, messageSelector) {
  const form = document.querySelector(formSelector);
  const messageContainer = document.querySelector(messageSelector);

  if (!form || !messageContainer) return;

  const emailInput = form.querySelector(".subscribe-input");

  const savedEmail = localStorage.getItem(EMAIL_KEY);
  if (savedEmail) {
    updateUIAsSubscribed(form, messageContainer, savedEmail);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (localStorage.getItem(EMAIL_KEY)) {
      localStorage.removeItem(EMAIL_KEY);
      resetUI(form, messageContainer);
      return;
    }

    if (!isValidEmail(email)) {
      showMessage(
        messageContainer,
        "Invalid email. Please check and try again.",
        "error"
      );
      return;
    }

    localStorage.setItem(EMAIL_KEY, email);
    updateUIAsSubscribed(form, messageContainer, email);
  });
}
