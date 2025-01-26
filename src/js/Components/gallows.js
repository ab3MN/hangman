import gallows from '../../data/gallows.json';

export default class Gallows {
  constructor(parent) {
    Object.assign(this, { parent });
  }

  generateGallows() {
    const hangman__gallows = this.createDomNode('article', 'hangman__gallows');
    let template = `
      <div class="gallows">
        <div class="gallows__left">
          <img src="./img/gallows/gallows.png" alt="gallows">
        </div>
        <div class="gallows__right">
    `;
    gallows.forEach(({ name, src }) => {
      template += `
      <div class="gallows__item ${name}">
        <img class="gallows__img" src=${src} alt=${name}>
      </div>`;
    });

    template += `
        </div>
      </div>
      <h2 class="hangman__title">hangman game</h2>
    `;

    hangman__gallows.innerHTML = template;

    this.parent.append(hangman__gallows);
  }

  createDomNode(el = 'div', ...classes) {
    const domElement = document.createElement(el);
    domElement.classList.add(...classes);
    return domElement;
  }
}
