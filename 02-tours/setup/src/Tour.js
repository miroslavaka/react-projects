import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  console.log('removeTour:', removeTour);
  const [readMore, setReadMore] = useState(false);

  const moreInfo = () => {
    setReadMore(!readMore);
  };
  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={moreInfo}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};
export default Tour;
