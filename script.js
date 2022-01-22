class Keyboard {
  constructor(main, keysContainer, keys) {
    this.main = main;
    this.keysContainer = keysContainer;
    this.keys = keys;
  }

  init() {
    this.main = document.createElement("div");
    this.keysContainer = document.createElement("div");
    this.keysContainer.classList.add("keyboard__keys");
    this.keysContainer.appendChild(this.createKeys());
    this.keys = this.keysContainer.querySelectorAll(".keyboard__key");
    this.main.appendChild(this.keysContainer);
    document.body.appendChild(this.main);
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "backspace",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "caps",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "enter",
      "shift",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "?",
      "space",
    ];

    keyLayout.forEach((key) => {
      const keyElement = document.createElement("button");
      const insertLineBreak =
        ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");
      keyElement.textContent = key.toLowerCase();
      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  }
}

let keyboard = new Keyboard(null, null, []);

window.addEventListener("DOMContentLoaded", function () {
  keyboard.init();
});
