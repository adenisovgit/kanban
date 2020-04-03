import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import AddTaskButton from './addtaskbutton';
import TextForm from './textform';
import { actions as tasksActions } from '../features/tasksSlice';
import Card from './card';


const Panel = (props) => {
  const dispatch = useDispatch();
  const { panelTitle, status, cards } = props;
  const [isAddingCard, setAddingCard] = useState(false);

  return (
    <div className="panel">
      <div className="panel_title">{panelTitle}</div>
      <Droppable droppableId={status}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Card
                key={card.id}
                card={card}
                status={status}
                index={index}
                updateTaskData={((task) => dispatch(tasksActions.updateTaskData(task)))}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {isAddingCard ? (
        <TextForm
          handleAddCard={(title) => dispatch(tasksActions.addTask({ title, status }))}
          setState={() => setAddingCard(false)}
        />
      )
        : <AddTaskButton setState={() => setAddingCard(true)} />}
    </div>
  );
};

export default Panel;
