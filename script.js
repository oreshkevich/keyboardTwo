class Keyboard {
  constructor(main, keysContainer) {
    this.main = main;
    this.keysContainer = keysContainer;
  }

  init() {
    this.keysContainer = document.createElement("div");
    this.keysContainer.classList.add("keyboard__keys");
    this.keysContainer.appendChild(this.createKeys());
    this.main.appendChild(this.keysContainer);
    document.body.appendChild(this.main);
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = {
      Digit1: "1",
      Digit2: "2",
      Digit3: "3",
      Digit4: "4",
      Digit5: "5",
      Digit6: "6",
      Digit7: "7",
      Digit8: "8",
      Digit9: "9",
      Digit0: "0",
      Minus: "-",
      Equal: "=",
      Backspace: "backspace",
      KeyQ: "Q",
      KeyW: "W",
      KeyE: "E",
      KeyR: "R",
      KeyT: "T",
      KeyY: "Y",
      KeyU: "U",
      KeyI: "I",
      KeyO: "O",
      KeyP: "P",
      BracketLeft: "[",
      BracketRight: "]",
      CapsLock: "caps",
      KeyA: "A",
      KeyS: "S",
      KeyD: "D",
      KeyF: "F",
      KeyG: "G",
      KeyH: "H",
      KeyJ: "J",
      KeyK: "K",
      KeyL: "L",
      Semicolon: ";",
      Quote: "'",
      Enter: "enter",
      ShiftLeft: "shift",
      KeyZ: "Z",
      KeyX: "X",
      KeyC: "C",
      KeyV: "V",
      KeyB: "B",
      KeyN: "N",
      KeyM: "M",
      Comma: ",",
      Period: ".",
      Slash: "?",
      Space: "space",
    };

    for (let key in keyLayout) {
      const keyElement = document.createElement("button");
      const insertLineBreak =
        ["backspace", "]", "enter", "?"].indexOf(keyLayout[key]) !== -1;
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");
      keyElement.setAttribute("data", key);
      keyElement.textContent = keyLayout[key];
      fragment.appendChild(keyElement);
      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    }
    return fragment;
  }
}
const mainKeyboard = document.getElementById("keyboard");
let keyboard = new Keyboard(mainKeyboard, null);
keyboard.init();

const showColor = document.querySelector(".show-color");
showColor.addEventListener("click", (event) => {
  document.querySelectorAll(".keyboard__key").forEach((elem) => {
    elem.classList.toggle("keyboard__key--coloring");
  });
});

document.addEventListener("keydown", (event) => {
  document.querySelectorAll(".keyboard__key").forEach((elem) => {
    elem.style.backgroundColor = "";
  });

  document.querySelector(
    '.keyboard__key[data="' + event.code + '"]'
  ).style.backgroundColor = "red";
});

const hideKeyboard = document.querySelector(".show-keyboard");
const showHand = document.querySelector(".show-hand");
const rightHandOne = document.querySelector(".right-hand-one");
hideKeyboard.addEventListener("click", (event) => {
  mainKeyboard.classList.toggle("keyboard--hidden");
});
showHand.addEventListener("click", (event) => {
  rightHandOne.classList.toggle("active--hand");
  console.log("hi");
});
