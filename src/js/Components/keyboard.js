export default class Keyboard {
  generateKeyboard(alphabet) {
    const keyboard = this.createDomNode('ul', 'keyboard');

    alphabet.forEach((col) => {
      const item = this.createDomNode('li', 'keyboard__item');

      col.forEach((leter) => {
        const key = this.createKey(leter);
        item.append(key);
      });

      keyboard.append(item);
    });

    return keyboard;
  }

  createDomNode(el = 'div', ...classes) {
    const domElement = document.createElement(el);
    domElement.classList.add(...classes);
    return domElement;
  }

  createKey(leter) {
    const key = this.createDomNode('button', 'keyboard__key');
    key.innerText = leter;
    key.dataset.key = leter;
    return key;
  }
}
