import React, { useState } from 'react';

import Modal from './modal';

const Card = (props) => {
  const { card, updateTask } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = (e) => {
    if (e) e.stopPropagation();
    setModalOpen(false);
  };

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div
      role="textbox"
      tabIndex={0}
      className="card"
      title={card.title}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="card_text">
        {card.title}
      </div>
      {isModalOpen && <Modal card={card} closeModal={handleModalClose} updateTask={updateTask} />}
    </div>
  );
};

export default Card;
