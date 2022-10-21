import dataArr from "./data.js"

function randomQuestion(length, arr) {
  let arrQuestions = []
  for( let i = 0; i < length; i++){
      let random = Math.floor(Math.random() * (dataArr.length - 1))
      if (arrQuestions.includes(dataArr[random])){
        i--
      } else {
        arrQuestions[i] = dataArr[random]
      }
  } 
  return arrQuestions
}

export default randomQuestion