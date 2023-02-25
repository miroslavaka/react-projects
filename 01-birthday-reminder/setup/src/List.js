import React from 'react';

const List = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((item) => {
        const { image, name, age } = item;
        return (
          <article className="person">
            <img src={image} alt="" />
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
