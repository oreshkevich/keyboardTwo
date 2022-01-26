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
      KeyQ: "q",
      KeyW: "w",
      KeyE: "e",
      KeyR: "r",
      KeyT: "t",
      KeyY: "y",
      KeyU: "u",
      KeyI: "i",
      KeyO: "o",
      KeyP: "p",
      BracketLeft: "[",
      BracketRight: "]",
      CapsLock: "caps",
      KeyA: "a",
      KeyS: "s",
      KeyD: "d",
      KeyF: "f",
      KeyG: "g",
      KeyH: "h",
      KeyJ: "j",
      KeyK: "k",
      KeyL: "l",
      Semicolon: ";",
      Quote: "'",
      Enter: "enter",
      ShiftLeft: "shift",
      KeyZ: "z",
      KeyX: "x",
      KeyC: "c",
      KeyV: "v",
      KeyB: "b",
      KeyN: "n",
      KeyM: "m",
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
      keyElement.textContent = keyLayout[key].toLowerCase();
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
hideKeyboard.addEventListener("click", (event) => {
  mainKeyboard.classList.toggle("keyboard--hidden");
});
