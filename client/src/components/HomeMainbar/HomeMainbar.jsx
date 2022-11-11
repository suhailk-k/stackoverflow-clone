import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import QuestionsList from './QuestionsList';
import './HomeMainbar.css';
const HomeMainbar = () => {
  var questionsList = [
    {
      id: 1,
      votes: 1,
      noOfAnswers: 5,
      questionTitle: 'What is a functions?',
      questionBody: 'It meant to be',
      questionTags: ['javascript', 'R', 'python'],
      userPosted: 'mono',
      askedOn: 'jan 1',
    },
    {
      id: 2,
      votes: 4,
      noOfAnswers: 4,
      questionTitle: 'What is a functions?',
      questionBody: 'It meant to be',
      questionTags: ['javascript', 'R', 'python'],
      userPosted: 'mono',
      askedOn: 'jan 1',
    },
    {
      id: 3,
      votes: 5,
      noOfAnswers: 1,
      questionTitle: 'What is a functions?',
      questionBody: 'It meant to be',
      questionTags: ['javascript', 'R', 'python'],
      userPosted: 'mono',
      askedOn: 'jan 1',
    },
  ];

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const checkAuth = () => {
    if (user === null) {
      alert('login or signup to ask a question');
      navigate('./Auth');
    }
    else {navigate("/AskQuestions ")}
  };

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {location.pathname === '/' ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className='ask-btn'>
          Ask Questions{' '}
        </button>
      </div>
      <div>
        {questionsList === null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <p>{questionsList.length} questions</p>
            <>{<QuestionsList questionsList={questionsList} />}</>
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
