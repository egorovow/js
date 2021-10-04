const quantitiSelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = quantiti => {
  let markup = "";

  for (let i = 0; i < quantiti; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;
  }
  return markup;
}

let changed = false;

quantitiSelector.addEventListener("change", e => {
  const quantiti = e.target.value;
  const markup = createMarkup(quantiti);
  
  blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
};

colorSelector.addEventListener ("change", e => {
  const color = e.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items [i];
    const blockNumber = i + 1;
    let colorToPlay = "";

    if (changed) {
      colorToPlay = blockNumber % 2 !== 0 ? color : "#fff";  
    } else {
      colorToPlay = blockNumber % 2 == 0 ? color : "#fff";
    }
    colorTheBlock(currentBlock, colorToPlay);
  }
})