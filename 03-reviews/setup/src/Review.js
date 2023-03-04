import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [current, setCurrent] = useState(0);
  //as we want to show currently 1st person, destructure 1st person:
  const { name, job, image, text } = people[current];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextSlide = () => {
    //setCurrent(current === people.length - 1 ? 0 : current + 1);
    setCurrent((current) => {
      let nextPerson = current + 1;
      return checkNumber(nextPerson);
    });
  };

  const prevSlide = () => {
    //setCurrent(current === 0 ? people.length - 1 : current - 1);
    setCurrent((current) => {
      let prevPerson = current - 1;
      return checkNumber(prevPerson);
    });
  };

  const randomSlide = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === current) {
      randomNumber = current + 1;
    }
    setCurrent(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomSlide}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
