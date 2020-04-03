import React from 'react';
import { withTranslation } from 'react-i18next';
import { DragDropContext } from 'react-beautiful-dnd';

import connect from '../connect';
import Panel from './panel';

const mapStateToProps = ({ tasks }) => ({ tasks });

@connect(mapStateToProps)
@withTranslation()
class App extends React.PureComponent {
  onDragEnd = (result) => {
    console.log('!!!!!!!onDragEnd', result);
    const { source, destination } = result;
    const { moveTask } = this.props;
    moveTask({ source, destination });
  }

  render() {
    const { t, tasks } = this.props;
    const tasksInWork = tasks.inwork;
    const tasksChecking = tasks.checking;
    const tasksDone = tasks.done;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Panel panelTitle={t('titleinwork')} status="inwork" cards={tasksInWork} />
        <Panel panelTitle={t('titlecheсking')} status="checking" cards={tasksChecking} />
        <Panel panelTitle={t('titledone')} status="done" cards={tasksDone} />
      </DragDropContext>
    );
  }
}

export default App;
