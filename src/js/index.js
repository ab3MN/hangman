/* ==================== HANGMAN ==================== */
import Hangman from './Components/hangman';
import questions from '../data/questions.json';

const BODY = document.querySelector('#body');
const hangman = new Hangman(questions, BODY);

hangman.generateHangman();
