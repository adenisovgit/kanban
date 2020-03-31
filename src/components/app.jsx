import React from 'react';
import { withTranslation } from 'react-i18next';

import connect from '../connect';
import Panel from './panel';

const mapStateToProps = ({ tasks }) => ({ tasks });

@connect(mapStateToProps)
@withTranslation()
class App extends React.PureComponent {
  render() {
    const { t, tasks } = this.props;
    const tasksInWork = tasks.filter((task) => task.status === 'inwork');
    const tasksChecking = tasks.filter((task) => task.status === 'checking');
    const tasksDone = tasks.filter((task) => task.status === 'done');
    return (
      <>
        <Panel panelTitle={t('titleinwork')} status="inwork" cards={tasksInWork} />
        <Panel panelTitle={t('titlecheсking')} status="checking" cards={tasksChecking} />
        <Panel panelTitle={t('titledone')} status="done" cards={tasksDone} />
      </>
    );
  }
}

export default App;
