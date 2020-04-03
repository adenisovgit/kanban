/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';

import Modal from './modal';

const Card = (props) => {
  const { t } = useTranslation();
  const {
    card, updateTaskData, index, status,
  } = props;
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
    <>
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              role="textbox"
              tabIndex={0}
              className="card"
              title={`${t('cardactionsdescription')}`}
              onClick={handleClick}
            >
              <div className="card_text">
                {card.title}
              </div>
            </div>
          </div>
        )}
      </Draggable>
      {isModalOpen && (
        <Modal
          card={card}
          index={index}
          status={status}
          closeModal={handleModalClose}
          updateTaskData={updateTaskData}
        />
      )}
    </>

  );
};

export default Card;
