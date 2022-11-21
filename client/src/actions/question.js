import React from 'react';

import * as api from '../api';

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: 'POST_QUESTION', payload: data });
    dispatch(fetcAllQuestions());
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
export const fetcAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllQuestions();
    dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered
    );
    dispatch({ data: 'POST_ANSWER', payload: data });
    dispatch(fetcAllQuestions);
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion=(id,navigate)=>async(dispatch)=>{
  try {
    const {data}=api.deleteQuestion(id)
    dispatch(fetcAllQuestions())
    navigate("/")
  } catch (error) {
    console.log(error);
    
  }
}