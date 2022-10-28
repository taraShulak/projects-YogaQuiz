import randomQuestion from './randomizer.js'
import dataArr from './data.js'

const start = document.querySelector('.start-button')
const mainQuestion = document.querySelector('.main__question')
const timerTitle = document.querySelector('.timer__title')
const timerMinutes = document.querySelector('.timer-minutes')
const timerSeconds = document.querySelector('.timer-seconds')
const mainImg = document.querySelector('.main__image-img')
const mainAnswer = document.querySelector('.main__answer')
const answerTitle = document.querySelector('.answer__title')
const progressLine = document.querySelector('.progress__block-items')
const progressTitle = document.querySelector('.progress__block-title')
let number = 10
progressLine.style.gridTemplateColumns =  `repeat(${number}, 1fr)`

start.addEventListener('click', createQuestion)
mainAnswer.addEventListener('click', chouseAnswer)

let progressAllItem;
let answersItems;
let listAnswer;
let selectItem;
let proItem = 0;
let questionBlock
let questionBlockQuestion;
let questionBlockTitle
let questions = []
let seconds
let interval
let selectAnswer = false;
let selectNumber;
let allredyAnswer = false;
let correctAnswer = 0;
let inProgres = false;

function endQuiz() {
  clearMain()
  clearInterval(interval)
  allredyAnswer = false
  inProgres = false   
  mainImg.setAttribute('src', `./img/end.jpg`)
  let massege;
  if(correctAnswer < number*0.5 ) {
    massege = `You can try again, and learn more about yoga`
  } else  if(correctAnswer < number*0.9 ){
    massege = `You know about yoga enough but you can better`
    } else {
      massege = `You are a great Yogin !!!!!`
    }
  const text = `
    <div class="main__result">
      <div class="result correct-result"> You result ${correctAnswer} from ${number} </div>
      <div class="result text-result"> ${massege}</div>
    </div>
    `
    mainQuestion.insertAdjacentHTML('afterbegin', text)    
    start.textContent = 'Start new quiz'
    correctAnswer = 0
}

function deleteProgress() {
  for(let item of progressAllItem) {
    item.remove();
  }
}

function progress(){
  proItem = 0
  for( let i = 0; i < number; i++) {
    const textItem = `
      <div class="progress-item progress-item-${i}"></div>
    `    
    progressLine.insertAdjacentHTML('beforeend', textItem)
  }
  progressAllItem = document.querySelectorAll('.progress-item')
}

function nextQuestion() {

  if(allredyAnswer == false && inProgres == false){
  } else if (allredyAnswer == false ){
          questions.push(questions.shift())          
        } else if ( questions.length == 0 && inProgres == true) {   
                endQuiz()                
              } 
}

function verify(selectNumber) { 
  if ( questions.length > 0){
    let answerItem = document.querySelector(`.item-${selectNumber}`).textContent    
    if(answerItem == questions[0].rightAnswer) {
        document.querySelector(`.item-${selectNumber}`).classList.add('right__item')
        document.querySelector(`.item-${selectNumber}`).classList.remove('chouse__item')
        questionBlockQuestion.textContent = `${questions[0].note}`
        questionBlockTitle.textContent = 'Excellent!!! You are right!!!'
        correctAnswer++;
        allredyAnswer = true
        progressAllItem[proItem].classList.add('gold')
        proItem++
        questions.shift()
    } else {
        document.querySelector(`.item-${selectNumber}`).classList.add('wrong__item')
        document.querySelector(`.item-${selectNumber}`).classList.remove('chouse__item')
        questionBlockTitle.textContent = 'Wrong...You are mistaken...'       
        allredyAnswer = true
        progressAllItem[proItem].classList.add('cyan')
        proItem++   
        questions.shift()        
      }   
  }
}

function select(selectClass) {      
      document.querySelector(`.${selectClass}`).classList.add('chouse__item')
      selectAnswer = true;   
}

function chouseAnswer(event) {  
    
  if (event.target.classList.contains('answer-item') &&
      !event.target.classList.contains('chouse__item') &&
      allredyAnswer == false) {
      if(selectAnswer) {
        document.querySelector(`.item-${selectNumber}`).classList.remove('chouse__item')    
      }
      let selectClass = event.target.className.split(' ').pop() 
      selectNumber = selectClass.split('-').pop()     
    select(selectClass)
  } else if (event.target.classList.contains('answer-item') &&
             event.target.classList.contains('chouse__item') &&
             allredyAnswer == false) { 
             verify(selectNumber)
            }
}

function clearMain(){
  mainQuestion.firstElementChild.remove()
  mainAnswer.lastElementChild.remove()
  answerTitle.textContent = ''
}
function createFirstQuestion() {
  const textQuestion = `
    <div class="question-block">
      <div class="question-block-title">Question : </div>
      <div class="question-block-question"> ${questions[0].question}</div>
    </div>  
    `
    mainQuestion.insertAdjacentHTML('afterbegin', textQuestion)
    questionBlockTitle = document.querySelector('.question-block-title')
    questionBlock = document.querySelector('.question-block')
    questionBlockQuestion = document.querySelector('.question-block-question')
}

function createAnswers() {
    listAnswer = document.createElement('ul')
    listAnswer.classList.add('answer__list')
    mainAnswer.append(listAnswer)
    questions[0].answer.map((item, index) => {
      const textAnswer = `
        <li class="answer-item item-${index}">${item}</li>
    `
    listAnswer.insertAdjacentHTML('beforeend', textAnswer) 
    })
    answersItems = document.querySelectorAll('.answer-item')
}

function createQuestion(event) {  
   
  if(event.target == start && inProgres == false) {
    if(start.textContent == 'Start new quiz') {      
      deleteProgress()
    }
    progress()
    progressTitle.textContent = 'Your progress :'
    mainQuestion.firstElementChild.remove()
    questions = randomQuestion(number, dataArr)
    createAnswers()
    createFirstQuestion()
    let random = 1 + Math.floor(Math.random() * 24)
    mainImg.setAttribute('src', `./img/${random}.jpeg`)
    start.textContent = 'Next question'
    seconds = 300
    timer(seconds)
  }
 
  if(event.target == start && inProgres == true) {
    let random = 1 + Math.floor(Math.random() * 22)
    mainImg.setAttribute('src', `./img/${random}.jpeg`)
    nextQuestion()    
  } 
  if (inProgres == true && questions.length > 0) {
    if( selectNumber){
      selectItem = document.querySelector(`.item-${selectNumber}`)  
      
      if( selectItem.classList.contains('right__item')){
        questionBlockTitle.textContent = 'Question :'
        selectItem.classList.remove('right__item')
      }
      if( selectItem.classList.contains('wrong__item')) {
        selectItem.classList.remove('wrong__item')
        questionBlockTitle.textContent = 'Question :'
      }
      if ( selectItem.classList.contains('chouse__item')) {
        selectItem.classList.remove('chouse__item')
      }
    }
  }

    questionBlockQuestion.textContent = `${questions[0].question}`
    answerTitle.textContent = 'Choose an answer :'
    questions[0].answer.map((item, index) => {
      answersItems[index].textContent = `${item}`
    })     
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
