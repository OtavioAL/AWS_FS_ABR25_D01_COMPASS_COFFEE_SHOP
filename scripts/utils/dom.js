export function createElement(
  tag,
  { classList = [], attributes = {}, textContent = "" } = {}
) {
  const element = document.createElement(tag);

  classList.forEach((cls) => element.classList.add(cls));

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  if (textContent) element.textContent = textContent;

  return element;
}
