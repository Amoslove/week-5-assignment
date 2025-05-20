// Change text content and style
document.getElementById("change-text").addEventListener("click", () => {
  const text = document.getElementById("dynamic-text");
  text.textContent = "The text has been changed dynamically!";
  text.style.color = "blue";
  text.style.fontWeight = "bold";
});

// Add or remove an element
const toggleBtn = document.getElementById("toggle-element");
const container = document.getElementById("element-container");
let added = false;

toggleBtn.addEventListener("click", () => {
  if (!added) {
    const newElement = document.createElement("p");
    newElement.id = "new-item";
    newElement.textContent = "Power Learn Project Africa.";
    container.appendChild(newElement);
    added = true;
  } else {
    const existing = document.getElementById("new-item");
    if (existing) {
      container.removeChild(existing);
    }
    added = false;
  }
});
