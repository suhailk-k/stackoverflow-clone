import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList';
import './Tags.css';

const Tags = () => {
  const tagList = [
    {
      id: 1,
      tagName: 'Reactjs',
      tagDesc:
        ' React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites. Originally built by Facebook, Meta and the open-source community now maintain it.',
    },
    {
      id: 2,
      tagName: 'JavaScript',
      tagDesc:
        "JavaScript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.",
    },
    {
      id: 3,
      tagName: 'HTML',
      tagDesc:
        "HTML is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
    },
    {
      id: 4,
      tagName: 'CSS',
      tagDesc:
        'CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML',
    },
    {
      id: 5,
      tagName: 'Node.js',
      tagDesc:
        'Node.js is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.',
    },
    {
      id: 6,
      tagName: 'Python',
      tagDesc:
        'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name' +
        'Python' +
        ' is a nod to the British comedy group Monty Python.',
    },
    {
      id: 7,
      tagName: 'Java',
      tagDesc:
        'Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages.',
    },
    {
      id: 8,
      tagName: 'C',
      tagDesc:
        'C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. C is strongly associated with UNIX, as it was developed to write the UNIX operating system.',
    },
    {
      id: 9,
      tagName: 'C++',
      tagDesc:
        'C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs. C++ is portable and can be used to develop applications that can be adapted to multiple platforms.',
    },
    {
      id: 10,
      tagName: 'PHP',
      tagDesc:
        'PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites. It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.',
    },
  ];

  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className='tags-p'>
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className='tags-list-container'>
          {tagList.map((tag) => (
            <TagsList tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
