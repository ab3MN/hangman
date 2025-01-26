(()=>{"use strict";const e=JSON.parse('[{"name":"head","src":"./img/gallows/head.png"},{"name":"body","src":"./img/gallows/body.png"},{"name":"left--hand","src":"./img/gallows/left__hand.png"},{"name":"right--hand","src":"./img/gallows/right__hand.png"},{"name":"left--leg","src":"./img/gallows/left__leg.png"},{"name":"right--leg","src":"./img/gallows/right__leg.png"}]');class t{constructor(e){Object.assign(this,{parent:e})}generateGallows(){const t=this.createDomNode("article","hangman__gallows");let s='\n      <div class="gallows">\n        <div class="gallows__left">\n          <img src="./img/gallows/gallows.png" alt="gallows">\n        </div>\n        <div class="gallows__right">\n    ';e.forEach((({name:e,src:t})=>{s+=`\n      <div class="gallows__item ${e}">\n        <img class="gallows__img" src=${t} alt=${e}>\n      </div>`})),s+='\n        </div>\n      </div>\n      <h2 class="hangman__title">hangman game</h2>\n    ',t.innerHTML=s,this.parent.append(t)}createDomNode(e="div",...t){const s=document.createElement(e);return s.classList.add(...t),s}}class s{generateKeyboard(e){const t=this.createDomNode("ul","keyboard");return e.forEach((e=>{const s=this.createDomNode("li","keyboard__item");e.forEach((e=>{const t=this.createKey(e);s.append(t)})),t.append(s)})),t}createDomNode(e="div",...t){const s=document.createElement(e);return s.classList.add(...t),s}createKey(e){const t=this.createDomNode("button","keyboard__key");return t.innerText=e,t.dataset.key=e,t}}const a=()=>{if("undefined"==typeof document)return;const e=document.documentElement,{body:t}=document;e.style.position="",e.style.overflow="",t.style.position="",t.style.overflow="",t.style.paddingRight=""},n=JSON.parse('["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]');function i(e,t){const s=e[(a=e.length-1,Math.floor(Math.random()*a))];var a;return s.id===t?i(e,t):s}const o=new class{constructor(){this.start=0,this.count="",this.isTimerActive=!1,this.time=0,this.timerInterval}play(){this.isTimerActive||(this.isTimerActive=!0,this.start=Date.now(),this.timerInterval=setInterval((()=>{this.time=Date.now()-this.start}),1e3))}stop(){if(this.isTimerActive){const e=this.time;return this.time=0,this.isTimerActive=!1,clearInterval(this.timerInterval),e}}},r=new class{constructor(e){this.classes=e,this.modal="",this.modalContent="",this.modalCloseBtn="",this.backdrop=""}genereateModal(e){this.backdrop=this.createDomNode("div","backdrop"),this.modal=this.createDomNode("div","modal"),this.modalContent=this.createDomNode("div","modal__content"),this.setContent(e),this.appendModalElements(),this.handleOpen()}createDomNode(e="div",...t){const s=document.createElement(e);return s.classList.add(...t),s}setContent(e){"string"==typeof e?this.modalContent.innerHTML=e:(this.modalContent.innerHTML="",this.modalContent.append(e))}handleKeyPress(e){"Escape"!==e.code||this.handleClose()}handleBackdropClick(e){e.target!==e.currentTarget||this.handleClose()}handleClose(){this.backdrop.remove(),window.removeEventListener("keydown",this.handleKeyPress.bind(this)),this.backdrop.removeEventListener("click",this.handleBackdropClick.bind(this)),a()}handleOpen(){document.body.append(this.backdrop),window.addEventListener("keydown",this.handleKeyPress.bind(this)),this.backdrop.addEventListener("click",this.handleBackdropClick.bind(this)),(()=>{if("undefined"==typeof document)return;const e=document.documentElement,{body:t}=document,s=window.innerWidth-e.clientWidth,a=parseInt(window.getComputedStyle(t).getPropertyValue("padding-right"))||0;e.style.position="relative",t.style.position="relative",e.style.overflow="hidden",t.style.overflow="hidden",t.style.paddingRight=`${a+s}px`})()}appendModalElements(){this.modal.append(this.modalContent),this.backdrop.append(this.modal)}},l=JSON.parse('[{"question":"Which mammal is known to have the most powerful bite in the world?","answer":"hippopotamus","id":1},{"question":"What object does a male penguin often gift to a female penguin to win her over?","answer":"a pebble","id":2},{"question":"A dog sweats through which part of its body?","answer":"its paws","id":3},{"question":"What is the size of a newborn kangaroo?","answer":"one inch","id":4},{"question":"Which animal is known to spend 90% of its day sleeping?","answer":"koalas","id":5},{"question":"What color is the tongue of a giraffe?","answer":"purple","id":6},{"question":"Which animal’s stripes are on their skin as well as their fur?","answer":"tiger","id":7},{"question":"Which animal’s poop is known to take the shape of cubes?","answer":"wombat","id":8},{"question":"Under their white fur, what color is a polar bear’s skin?","answer":"black","id":9},{"question":"How many compartments are in a cow’s stomach?","answer":"four","id":10},{"question":"How long does it take a sloth to digest a meal?","answer":"two weeks","id":11},{"question":"What is the name of the fastest land animal?","answer":"cheetah","id":12},{"question":"A baby goat is called what?","answer":"kid","id":13},{"question":"What’s the only mammal that’s able to fly?","answer":"bat","id":14},{"question":"What’s a group of kittens called?","answer":"four","id":15},{"question":"How many compartments are in a cow’s stomach?","answer":"kindle","id":16},{"question":"What are the horns of a rhinoceros made of?","answer":"hair","id":17},{"question":"How many compartments are in a cow’s stomach?","answer":"four","id":18},{"question":"How many humps does a Bactrian camel have?","answer":"two","id":19},{"question":"What name is given to a female deer?","answer":"doe","id":20},{"question":"What animal is said to have nine lives?","answer":"cat","id":21},{"question":"What animal is known by the nickname \'sea cow\'?","answer":"manatee","id":22},{"question":"What is the only mammal that can’t jump?","answer":"elephant","id":23},{"question":"What animal is the largest mammal in the world?","answer":"blue whale","id":24},{"question":"What animal eats mainly bamboo?","answer":"elephant","id":25},{"question":"What is the only mammal that can’t jump?","answer":"panda","id":26},{"question":"What animal is known to be \'man’s best friend\'?","answer":"dog","id":27},{"question":"Which animal can stand on its tail?","answer":"kangaroo","id":28},{"question":"Which animal is the tallest in the world??","answer":"giraffe","id":29},{"question":"What animal is covered in quills?","answer":"porcupine","id":30},{"question":"What kind of turtle can’t retract into its shell?","answer":"sea turtle","id":31},{"question":"What kind of animal is a Komodo dragon?","answer":"a lizard","id":32},{"question":"What does a snake shed a few times a year?","answer":"its skin","id":33},{"question":"Which animal can move its eyes independently?","answer":"a chameleon","id":34},{"question":"What animal breathes out of its butt?","answer":"turtles","id":35},{"question":"How many layers of skin does a chameleon have?","answer":"four","id":36},{"question":"What do snakes use to smell?","answer":"their tongue","id":37},{"question":"The King Cobra is also called what?","answer":"the hamadryad","id":38},{"question":"What feature is visibly different between alligators and crocodiles?","answer":"their snout","id":39},{"question":"What’s the name of the largest snake in the world?","answer":"anaconda","id":40},{"question":"What type of reptiles are leatherbacks and ridleys?","answer":"turtles","id":41},{"question":"What reptile is known for the ability to change its body color?","answer":"chameleon","id":42},{"question":"What reptile is known for the ability to change its body color?","answer":"lizard","id":43},{"question":"The larvae stage of a frog is called what?","answer":"tadpole","id":44},{"question":"Do frogs lay eggs?","answer":"yes","id":45},{"question":"Which amphibian has a tail?","answer":"salamanders","id":46},{"question":"How many groups of amphibians are there?","answer":"three","id":47},{"question":"A wart-covered amphibian with leathery skin is a what?","answer":"toad","id":48},{"question":"Are frogs more active during the day or at night?","answer":"at night","id":49},{"question":"What do you call a frog’s ears?","answer":"tympanums","id":50},{"question":"Which butterfly migrates?","answer":"monarchs","id":51},{"question":"What color is an Elephant Hawk-Moth?","answer":"pink","id":52},{"question":"What’s the largest group of insects?","answer":"beetles","id":53},{"question":"How many legs do cockroaches have?","answer":"six","id":54},{"question":"What’s a newly hatched butterfly called?","answer":"caterpillar","id":55},{"question":"What is the loudest insect in the world?","answer":"cicada","id":56},{"question":"What insect was the first living creature to be sent into space?","answer":"fruit fly","id":57},{"question":"What is the smallest known insect?","answer":"fairyfly","id":58},{"question":"Which ant has the most painful sting?","answer":"bullet ant","id":59},{"question":"How many stages of metamorphosis do most insects go through?","answer":"four","id":60},{"question":"What part of its body does a butterfly taste with?","answer":"its feet","id":61},{"question":"How many flowers do honey bees have to visit in order to make one pound of honey?","answer":"two million","id":62},{"question":"How many eyes do caterpillars have?","answer":"twelve","id":63}]'),d=document.querySelector("#body");new class extends s{constructor(e,t){super(),Object.assign(this,{data:e,node:t,wrapper:"",count:0,selectedtLetters:[],id:null})}getRandomQuestion(){const{question:e,answer:t,id:s}=i(this.data,this.id);this.id=s;const a=new Array(t.length).fill(null);Object.assign(this,{question:e,answer:t,userAnswer:a})}createDomNode(e="div",...t){const s=document.createElement(e);return s.classList.add(...t),s}generateHangman(){this.node.innerHTML="",document.addEventListener("keydown",this.handlePress.bind(this));const e=this.createDomNode("section","section","hangman");this.getRandomQuestion(),this.wrapper=this.createDomNode("div","wrapper"),this.generateGallows(),this.generateQuestion(),e.append(this.wrapper);const t=this.generatePlayButton();e.append(t),this.node.prepend(e)}generateQuestion(){o.play();const e=this.createDomNode("article","hangman__question"),t=this.generateAnswers(this.answer);this.answers__list=t,e.append(t);const s=`\n      <h3 class="hangman__issue">${this.question}</h3>\n      <p class="hangman__guesses">Incorrect gueses: \n        <span class="hangman__count" id="hangman__count">0 / 6</span>\n      </p>\n      `;e.insertAdjacentHTML("beforeend",s);const a=this.generateKeyBoard();e.append(a),this.wrapper.append(e)}generateAnswers(e){const t=this.createDomNode("ul","hangman__answers");return e.split("").forEach((e=>{const s=this.createDomNode("li","hangman__answers--item");s.innerHTML=`<span class='letter'>${e}</span>`," "===e&&s.classList.add("active"),t.append(s)})),t}generateKeyBoard(){const e=(9,n.reduce(((e,t,s)=>{const a=Math.floor(s/9);return e[a]||(e[a]=[]),e[a].push(t),e}),[]));const t=super.generateKeyboard(e);return this.keyboard=Array.from(t.children).reduce(((e,t)=>{const s=Array.from(t.children);return[...e,...s.flat()]}),[]),t.addEventListener("click",this.handleClick.bind(this)),t}generatePlayButton(){const e=this.createDomNode("button","hangman__result--button");return e.innerText="play again",e.addEventListener("click",this.handlePlay.bind(this)),e}handlePlay(){a(),this.reset(),this.generateHangman()}reset(){this.wrapper="",this.count=0,this.selectedtLetters=[]}handlePress(e){const t=e.key.toLowerCase();n.includes(t)&&!this.selectedtLetters.includes(t)&&(this.selectedtLetters.push(t),this.keyboard.find((e=>e.dataset.key===t)).disabled=!0,this.isLetterInAnswer(t))}handleClick(e){if("keyboard__key"!==e.target.className||6===this.count)return;const{key:t}=e.target.dataset;e.target.disabled=!0,this.isLetterInAnswer(t)}isLetterInAnswer(e){const t=this.answer.split("");if(!t.includes(e))return this.changeCount();var s;(s=e,t.reduce(((e,t,a)=>(t===s&&e.push(a),e)),[])).forEach((t=>{this.answers__list.children[t].classList.add("active"),this.userAnswer[t]=e})),this.userAnswer.join("")===this.answer.replace(" ","")&&this.generateResult("won :)")}changeCount(){const e=document.querySelector("#hangman__count");this.getGallows(),this.count+=1,e.textContent=`${this.count} / 6`,6===this.count&&this.generateResult("loosed :(")}generateResult(e){this.keyboard.forEach((e=>e.disabled=!0));const t=o.stop(),s=this.createResultTemplate(e,t),a=this.generatePlayButton();s.append(a),r.genereateModal(s)}createResultTemplate(e,t){const s=this.createDomNode("article","hangman__result");let a=`      \n    <h3 class="hangman__result--title">You ${e}</h3>\n    <p class="hangman__result--answer">The answer is \n      <span>${this.answer}</span>\n    </p>\n    `;return"won :)"===e&&(a+=`<p class="hangman__result--answer">Your time is\n      <span>${(e=>{let t=Math.floor(e/36e4);t>=0&&t<9&&(t="0"+t);let s=Math.floor(e/6e4);s>=0&&s<10&&(s="0"+s);let a=Math.floor(e/1e3);return a>=0&&a<10&&(a="0"+a),`${t}:${s}:${a}`})(t)}</span>\n    </p> `),s.innerHTML=a,s}generateGallows(){new t(this.wrapper).generateGallows()}getGallows(){document.querySelectorAll(".gallows__item")[this.count].classList.add("active")}}(l,d).generateHangman()})();