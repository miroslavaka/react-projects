import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [current, setCurrent] = useState(0);
  //as we want to show currently 1st person, destructure 1st person:
  const { name, job, image, text } = people[current];
  console.log(name);

  const length = people.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const randomSlide = () => {
    setCurrent(Math.floor(Math.random() * length));
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
        <FaChevronLeft className="prev-btn" onClick={prevSlide} />
        <FaChevronRight className="next-btn" onClick={nextSlide} />
      </div>
      <button className="random-btn" onClick={randomSlide}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
