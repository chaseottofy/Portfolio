const createContext = (top, left, text) => {
  const contextWrapper = document.createElement("div");
  contextWrapper.classList.add("hover-context--wrapper");
  contextWrapper.style.top = `${top}px`;
  contextWrapper.style.left = `${left}px`;
  const context = document.createElement("div");
  context.classList.add("hover-context");
  context.textContent = text;
  contextWrapper.appendChild(context);
  document.body.prepend(contextWrapper);

  const rect = contextWrapper.getBoundingClientRect();
  if (rect.right > window.innerWidth) {
    contextWrapper.style.left = `${left - rect.width}px`;
  } else if (rect.left < 0) {
    contextWrapper.style.left = `${left + rect.width}px`;
  }
}
export default createContext;