import randomQuestion from './randomizer.js'
import dataArr from './data.js'

const start = document.querySelector('.start-button')
const mainQuestion = document.querySelector('.main__question')
const mainTimer = document.querySelector('.timer')
const timerTitle = document.querySelector('.timer__title')
const timerMinutes = document.querySelector('.timer-minutes')
const timerSeconds = document.querySelector('.timer-seconds')
const mainAnswer = document.querySelector('.main__answer')
const answerButton = document.querySelector('.main-button-answer')
const nextButton = document.querySelector('.main-button-next')
const progressLine = document.querySelector('.progress__block-items')
const progressTitle = document.querySelector('.progress__block-title')
let number = 10
progressLine.style.gridTemplateColumns =  `repeat(${number}, 1fr)`

start.addEventListener('click', createQuestion)
mainAnswer.addEventListener('click', chouseAnswer)
answerButton.addEventListener('click', verify)
nextButton.addEventListener('click', nextQuestion)
let progressAllItem;
let proItem = 0;
let questionBlock
let questions = []
let seconds;
let interval
let selectAnswer = false;
let selectNumber;
let allredyAnswer = false;
let correctAnswer = 0;
let inProgres = false;

function endQuiz() {
  clearInterval(interval)
  clearMain()
  mainTimer.style.zIndex = '-1'
  allredyAnswer = false
  inProgres = false   
  let massege;
  if(correctAnswer < number*0.5 ) {
    massege = `You can try again, and learn more about yoga`
  } else  if(correctAnswer < number*0.9 ){
    massege = `You know about yoga anough but you can better`
    } else {
      massege = `You are a great Yogin !!!!!`
    }
  const text = `
    <div class="main__result">
      <div class="result correct-result"> You result ${correctAnswer} from 10 </div>
      <div class="result text-result"> ${massege}</div>
    </div>
    `
    mainQuestion.insertAdjacentHTML('afterbegin', text)
    answerButton.innerHTML = 'Good Luck'
    mainQuestion.style.backgroundImage = `url(/img/end.jpg)`
    
    correctAnswer = 0
}

function deleteProgress() {
  //const progressAllItem = document.querySelectorAll('.progress-item')
  for(const item of progressAllItem) {
    item.remove();
  }
}

function progress(colorItem){
  proItem = 0
  for( let i = 0; i < number; i++) {
    const textItem = `
      <div class="progress-item progress-item-${i}"></div>
    `    
    progressLine.insertAdjacentHTML('beforeend', textItem)
  }
  progressAllItem = document.querySelectorAll('.progress-item')
}

function nextQuestion(event) {

  if(allredyAnswer == false && inProgres == false){
  } else if (allredyAnswer == false ){
          questions.push(questions.shift())
          createQuestion(event)
        } else if ( questions.length == 0 && inProgres == true) {   
                endQuiz()                
              } else {
                  createQuestion(event)
                 }
}

function verify(event) { 
  if ( questions.length > 0){
    console.log('answer ',questions[0].rightAnswer);
    let answerItem = document.querySelector(`.item-${selectNumber}`).textContent
    console.log('answerchouse ', answerItem);
    if(answerItem == questions[0].rightAnswer) {
        document.querySelector(`.item-${selectNumber}`).classList.add('right__item')
        answerButton.innerHTML = 'You are absolutely right!!!'
        questionBlock.insertAdjacentHTML('beforeend', `<div class="question-block-note">${questions[0].note}</div>`)
        correctAnswer++;
        allredyAnswer = true
        progressAllItem[proItem].classList.add('gold')
        proItem++
        questions.shift()
    } else {
        document.querySelector(`.item-${selectNumber}`).classList.add('wrong__item')
        answerButton.innerHTML = 'You are mistaken!!!'
        allredyAnswer = true
        progressAllItem[proItem].classList.add('cyan')
        proItem++   
        questions.shift()        
      }   
  }
}

function select(selectClass) {
      selectNumber = selectClass.split('-').pop()
      document.querySelector(`.${selectClass}`).classList.add('chouse__item')
      selectAnswer = true;   
}

function chouseAnswer(event) {  
      
  if (event.target.classList.contains('answer__item') &&
      !event.target.classList.contains('chouse__item') &&
      allredyAnswer == false) {
      if(selectAnswer) {
        document.querySelector(`.item-${selectNumber}`).classList.remove('chouse__item')    
      }
      let selectClass = event.target.className.split(' ').pop() 
      console.log('selectClass ', selectClass);
      
    select(selectClass)
  }  
}

function clearMain(){
  mainQuestion.firstElementChild.remove()
  mainAnswer.firstElementChild.remove()
}

function createQuestion(event) {  
  mainTimer.style.zIndex = '1'  
  if(event.target == start && inProgres == false) {
    progress()
    progressTitle.textContent = 'Progress :'
    mainQuestion.firstElementChild.remove()
    questions = randomQuestion(number, dataArr)
    seconds = 125
    timer(seconds)
  }
  if( event.target == start && inProgres == true) {   
    clearMain()
    deleteProgress()
    questions = randomQuestion(number, dataArr)
    seconds = 125
    timer(seconds)
  } else if (inProgres == true && questions.length > 0) {
    clearMain()
  }

    mainQuestion.style.backgroundImage = `url(/img/${1 + Math.floor(Math.random() * 27)}.jpeg)`
    const textQuestion = `
    <div class="question-block">
      <div class="question-block-question"> ${questions[0].question}</div>
    </div>  
    `
    mainQuestion.insertAdjacentHTML('afterbegin', textQuestion)
    questionBlock = document.querySelector('.question-block')
   
    
    const listAnswer = document.createElement('ul')
    listAnswer.classList.add('answer__list')
    mainAnswer.prepend(listAnswer)
    questions[0].answer.map((item, index) => {
      const textAnswer = `
        <li class="answer__item item-${index}">${item}</li>
    `
    listAnswer.insertAdjacentHTML('beforeend', textAnswer) 
    })
    answerButton.innerHTML = `I'am sure`
    selectAnswer = false
    selectNumber = undefined
    allredyAnswer = false  
    inProgres = true
  
}

function timer(timeForAnswer) {
  clearInterval(interval)
  timerTitle.textContent = 'Time left:'
  timerMinutes.innerHTML = `0${Math.floor(timeForAnswer/60)}  :`
  timerSeconds.innerHTML = timeForAnswer % 60 > 9 ? 
                          `${timeForAnswer % 60}` :
                          `0${timeForAnswer % 60}`
  interval = setInterval( startTimer, 1000)
}

function startTimer() {
  seconds--
  if(seconds > 59) {
    timerMinutes.innerHTML = `0${Math.floor(seconds/60)}  :`
    timerSeconds.innerHTML = seconds % 60 > 9 ? 
    `${seconds % 60}` :
    `0${seconds % 60}`
  }
  if( seconds < 60 ){
    timerMinutes.innerHTML = '00  :'
    timerSeconds.innerHTML = `${seconds}`
  }
  
  if(seconds < 10) {
    timerMinutes.innerHTML = '00  :'
    timerSeconds.innerHTML = `0${seconds}`
  } 

  if(seconds == 0) {
    endQuiz()
  }
}
