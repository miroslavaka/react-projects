import React from 'react';

const List = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((item) => {
        const { id, image, name, age } = item;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
