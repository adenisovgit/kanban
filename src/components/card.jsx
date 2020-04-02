/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Modal from './modal';

const Card = (props) => {
  const { card, updateTask } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalClose = (e) => {
    if (e) e.stopPropagation();
    setModalOpen(false);
    window.history.back();
  };

  const handleClick = () => {
    window.history.pushState({ page: 'Edit task' }, 'Task', `card/${card.id}`);
    setModalOpen(true);
  };

  return (
    <div
      role="textbox"
      tabIndex={0}
      className="card"
      title={card.title}
      onClick={handleClick}
    >
      <div className="card_text">
        {card.title}
      </div>
      {isModalOpen && <Modal card={card} closeModal={handleModalClose} updateTask={updateTask} />}
    </div>
  );
};

export default Card;
