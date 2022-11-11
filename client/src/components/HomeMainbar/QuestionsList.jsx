import React from 'react'
import Questions from './Questions'
import "./HomeMainbar.css"
const QuestionsList = ({questionsList}) => {
  return (
    <>
     { 
        questionsList.map((question)=>(
          <Questions question={question} key={question.id}/>
        ))}
    </>
  )
}

export default QuestionsList