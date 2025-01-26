/* ==================== Components ==================== */
import Gallows from "./gallows";
import Keyboard from "./keyboard";
import Modal from "./modal";
import Timer from "../Components/timer";

import englishAlpabet from "../../data/englishAlpabet.json";
/* ==================== HELPERS ==================== */
import createChunk from "../helpers/createChunk";
import getAllIndexes from "../helpers/getAllIndexes";
import { allowScroll } from "../helpers/scroll";
import { convertTime } from "../helpers/convertTime";
import { getRandomDifferentItem } from "../helpers/getRandomInt";

const timer = new Timer();
const modal = new Modal();

export default class Hangman extends Keyboard {
  constructor(data, node) {
    super();
    Object.assign(this, {
      data,
      node,
      wrapper: "",
      count: 0,
      selectedtLetters: [],
      id: null,
    });
  }
  /* ==================== GET RANDOM QUESTION ==================== */
  getRandomQuestion() {
    const { question, answer, id } = getRandomDifferentItem(this.data, this.id);
    this.id = id;

    const userAnswer = new Array(answer.length).fill(null);
    Object.assign(this, { question, answer, userAnswer });
  }

  /* ==================== HELPERS ==================== */
  createDomNode(el = "div", ...classes) {
    const domElement = document.createElement(el);
    domElement.classList.add(...classes);
    return domElement;
  }

  /* ==================== GENERATE HANGMAN ==================== */
  generateHangman() {
    this.node.innerHTML = "";
    document.addEventListener("keydown", this.handlePress.bind(this));
    const hangman = this.createDomNode("section", "section", "hangman");

    this.getRandomQuestion();

    this.wrapper = this.createDomNode("div", "wrapper");
    this.generateGallows();
    this.generateQuestion();

    hangman.append(this.wrapper);

    const playButton = this.generatePlayButton();
    hangman.append(playButton);

    this.node.prepend(hangman);
  }

  generateQuestion() {
    timer.play();
    const hangman__question = this.createDomNode(
      "article",
      "hangman__question"
    );

    const answers__list = this.generateAnswers(this.answer);
    this.answers__list = answers__list;
    hangman__question.append(answers__list);

    const template = `
      <h3 class="hangman__issue">${this.question}</h3>
      <p class="hangman__guesses">Incorrect gueses: 
        <span class="hangman__count" id="hangman__count">0 / 6</span>
      </p>
      `;
    hangman__question.insertAdjacentHTML("beforeend", template);

    const keyboard = this.generateKeyBoard();
    hangman__question.append(keyboard);

    this.wrapper.append(hangman__question);
  }

  generateAnswers(answer) {
    const answers = this.createDomNode("ul", "hangman__answers");

    answer.split("").forEach((letter) => {
      const answerItem = this.createDomNode("li", "hangman__answers--item");
      answerItem.innerHTML = `<span class='letter'>${letter}</span>`;
      if (letter === " ") answerItem.classList.add("active");
      answers.append(answerItem);
    });

    return answers;
  }

  generateKeyBoard() {
    const alphabet = createChunk(englishAlpabet, 9);
    const keyboard = super.generateKeyboard(alphabet);

    this.keyboard = Array.from(keyboard.children).reduce((acc, element) => {
      const row = Array.from(element.children);
      acc = [...acc, ...row.flat()];
      return acc;
    }, []);

    keyboard.addEventListener("click", this.handleClick.bind(this));
    return keyboard;
  }

  /* ==================== NEW GAME ==================== */
  generatePlayButton() {
    const playButton = this.createDomNode("button", "hangman__result--button");
    playButton.innerText = "play again";
    playButton.addEventListener("click", this.handlePlay.bind(this));
    return playButton;
  }

  handlePlay() {
    allowScroll();
    this.reset();
    this.generateHangman();
  }
  reset() {
    this.wrapper = "";
    this.count = 0;
    this.selectedtLetters = [];
  }

  /* ==================== CKECK WINNER ==================== */
  handlePress(e) {
    const key = e.key.toLowerCase();
    if (!englishAlpabet.includes(key) || this.selectedtLetters.includes(key))
      return;

    this.selectedtLetters.push(key);
    const keyboardItem = this.keyboard.find((el) => el.dataset.key === key);
    keyboardItem.disabled = true;

    this.isLetterInAnswer(key);
  }

  handleClick(e) {
    if (e.target.className !== "keyboard__key" || this.count === 6) return;

    const { key } = e.target.dataset;

    e.target.disabled = true;
    this.isLetterInAnswer(key);
  }

  isLetterInAnswer(key) {
    const answer = this.answer.split("");

    if (!answer.includes(key)) return this.changeCount();

    const indexes = getAllIndexes(answer, key);

    indexes.forEach((i) => {
      const item = this.answers__list.children[i];
      item.classList.add("active");
      this.userAnswer[i] = key;
    });

    if (this.userAnswer.join("") === this.answer.replace(" ", "")) {
      this.generateResult("won :)");
    }
  }

  changeCount() {
    const count = document.querySelector("#hangman__count");
    this.getGallows();
    this.count += 1;
    count.textContent = `${this.count} / 6`;

    if (this.count === 6) this.generateResult("loosed :(");
  }

  generateResult(res) {
    this.keyboard.forEach((key) => (key.disabled = true));
    const time = timer.stop();

    const result = this.createResultTemplate(res, time);

    const playButton = this.generatePlayButton();
    result.append(playButton);
    modal.genereateModal(result);
  }

  createResultTemplate(res, time) {
    const result = this.createDomNode("article", "hangman__result");

    let tamplate = `      
    <h3 class="hangman__result--title">You ${res}</h3>
    <p class="hangman__result--answer">The answer is 
      <span>${this.answer}</span>
    </p>
    `;

    if (res === "won :)") {
      tamplate += `<p class="hangman__result--answer">Your time is
      <span>${convertTime(time)}</span>
    </p> `;
    }
    result.innerHTML = tamplate;

    return result;
  }
  /* ==================== GALLOWS ==================== */
  generateGallows() {
    const gallows = new Gallows(this.wrapper);
    gallows.generateGallows();
  }

  getGallows() {
    const gallowsItems = document.querySelectorAll(".gallows__item");
    const item = gallowsItems[this.count];
    item.classList.add("active");
  }
}
