import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ questions }) => {
  //console.log(questions);
  const [id, info, title] = questions;
  console.log(id, info, title);

  const [isActive, setIsActive] = useState(false);
  return (
    <section className="container">
      {questions.map((question) => {
        return (
          <article className="question">
            <header>
              <h4>{question.title}</h4>
              <button
                className="btn"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                {isActive ? <AiOutlinePlus /> : <AiOutlineMinus />}
              </button>
            </header>
            {isActive && <p>{question.info}</p>}
          </article>
        );
      })}
    </section>
  );
};

export default Question;
