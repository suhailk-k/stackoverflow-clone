import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Questions from '../../components/HomeMainbar/Questions';
import Avatar from '../../components/Avatar/Avatar';
import './Questions.css';
import moment from 'moment';
import copy from 'copy-to-clipboard';

const DisplayAnswer = ({ question }) => {
  const location = useLocation();
  console.log(location);
  const Url = 'http://localhost:3000';
  const handleShare = () => {
    // alert('Copied url :' + Url + location.pathname);
    alert('Copied url :' + Url + location.pathname);
    copy(Url + location.pathname);
  };

  return (
    <div>
      {question.answer.map((ans) => (
        <div className='display-ans' key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className='question-actions-user'>
            <div>
              <button type='button' onClick={handleShare}>
                Share
              </button>
              <button type='button'>Delete</button>
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/User/${question.userId}`}
                className='user-link'
                style={{ color: '#0086d8' }}
              >
                <Avatar backgroundColor='green' px='8px' py='5px'>
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
