export function setupMobileMenu(
  menuSelector,
  toggleSelector,
  closeSelector,
  linkSelector
) {
  const menu = document.querySelector(menuSelector);
  const menuToggle = document.querySelector(toggleSelector);
  const closeBtn = document.querySelector(closeSelector);

  menuToggle.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  document.querySelectorAll(linkSelector).forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}
