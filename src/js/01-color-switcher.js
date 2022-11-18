const refs = {
  startBtnRef: document.querySelector('[data-start]'),
  stopBtnRef: document.querySelector('[data-stop]'),
  bodyRef: document.body,
};

refs.startBtnRef.addEventListener('click', oncolorSwitcher);
refs.stopBtnRef.addEventListener('click', onSwitcherStop);

let setId = null;
let isActive = true;

function oncolorSwitcher() {
  if (isActive) {
    setId = setInterval(() => {
      refs.bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);

    refs.startBtnRef.setAttribute('disabled', true);
  }
  isActive = false;
}

function onSwitcherStop() {
  clearInterval(setId);
  if (!isActive) {
    refs.startBtnRef.removeAttribute('disabled', true);
  }
  isActive = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
