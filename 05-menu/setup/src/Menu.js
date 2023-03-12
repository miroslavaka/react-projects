import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, price, title, img, desc } = menuItem;
        return (
          <article className="menu-item" key={id}>
            <img className="img" src={img} alt={title}></img>
            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <span className="item-price">$ {price}</span>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
