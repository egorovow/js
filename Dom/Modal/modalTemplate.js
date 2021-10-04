const openButton = document.querySelector("openOverlay");
const successModal = creatModal("The message has been sent");
const body = document.body;

openButton.addEventListener ("click", e => {
  body.appendChild(successModal);
})

function creatModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  const template = document.querySelector("#overlayTemplate");
  overlayElement.addEventListener ("click", e => {
    if (e.target == overlayElement) {
      closeElement.click();
    }
  })

  overlayElement.innerHTML = template.innerHTML; 

  const closeElement = overlayElement.querySelector(".close");
  closeElement.addEventListener ("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })

  const contentElement = overlayElement.querySelector("content");
  contentElement.innerHTML = content;

  return overlayElement;
};