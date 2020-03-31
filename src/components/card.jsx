import React from 'react';

const Card = (props) => {
  const { text } = props;
  return (
    <div className="card" title={text}>
      <div className="card_text">
        {text}
      </div>
    </div>
  );
};

export default Card;
