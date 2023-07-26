import './SelectTaskView.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import savedData from '../../dataList/savedData';
import { fetchAllTasks, fetchCategoryTask } from '../apiCalls'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import refresh from '../../images/refresh.png';
import savePurpleIcon from '../../images/save.png';
import saveGreenIcon from '../../images/save-green.png';
import saveRedIcon from '../../images/save-red.png';

const SelectTaskView = () => {
  const { category } = useParams();

  const [currentTasks, setCurrentTasks] = useState([]);
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState({ error: false, response: '' })
  const [unseenTasks, setUnseenTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [tasksToShow, setTasksToShow] = useState(false);
  const [displaySavedResponse, setDisplaySavedResponse] = useState(false);
  const [saveSuccessful, setSaveSuccessful] = useState(false);
  const [saveResponse, setSaveResponse] = useState('');
  const [saveIcon, setSaveIcon] = useState(savePurpleIcon);

  useEffect(() => {
    fetchAllTasks().then(
      data => setTasks(data)
    ).catch(error => setError({ error: true, response: error })
    )
  }, [])

  const fetchTasks = (category) => {
    if (category !== 'all') {
      fetchCategoryTask(category).then(
        data => setCurrentTasks(data)
      ).catch(error => setError({ error: true, response: error }))
    } else {
  let allTasks = [];
  tasks.forEach((task) => {
    allTasks.push(...tasks[task]);
  });
  setCurrentTasks(allTasks);
}
  };

useEffect(() => {
  fetchTasks(category);
}, []);

const getUnseenTasks = (tasks) => {
  if (tasks.length !== 0) {
    const filteredTasks = tasks.filter((task) => {
      return !task.seen && !task.saved;
    })
    setUnseenTasks(filteredTasks);
  };
};

useEffect(() => {
  if (unseenTasks.length) {
    setTasksToShow(true)
  } else {
    setTasksToShow(false)
  }
}, [unseenTasks])

useEffect(() => {
  getUnseenTasks(currentTasks);
}, [currentTasks]);

const getCurrentTask = (tasks) => {
  let randomIndex = Math.floor(Math.random() * tasks.length);
  setCurrentTask(tasks[randomIndex]);
};

useEffect(() => {
  if (unseenTasks.length) {
    getCurrentTask(unseenTasks);
  }
}, [unseenTasks]);

const checkForReset = () => {
  if (unseenTasks.length === 1) {
    const cloneTasks = [...currentTasks];
    cloneTasks.forEach((task) => {
      task.seen = false;
    });
    setCurrentTasks(cloneTasks);
  }
};

useEffect(() => {
  if (displaySavedResponse) {
    setTimeout(() => {
      setDisplaySavedResponse(false)
    }, 1000)
  }
}, [displaySavedResponse])

const markTaskRead = () => {
  const allTasks = [...currentTasks];
  allTasks.find((task) => task.id === currentTask.id).seen = true;

  setCurrentTasks(allTasks);
  checkForReset();
};

const refreshTasks = tasks => {
  setCurrentTasks(tasks);
  checkForReset()
}

const postTask = () => {
  const acceptedTask = {
    id: currentTask.id,
    category: currentTask.category,
    task: currentTask.task,
  };
  if (!savedData.find((task) => task.id === acceptedTask.id)) {
    savedData.push(acceptedTask);
    setSaveSuccessful(true);
    setDisplaySavedResponse(true);
    const allTasks = [...currentTasks];
    allTasks.find((task) => task.id === currentTask.id).seen = true;
    allTasks.find((task) => task.id === currentTask.id).saved = true;
    setTimeout(() => { refreshTasks(allTasks) }, 1000);
  } else {
    setSaveSuccessful(false);
    setDisplaySavedResponse(true);
  }
};

useEffect(() => {
  if (saveSuccessful) {
    setSaveResponse('Saved!')
  } else {
    setSaveResponse('Something went wrong... but you tried!')
  }
}, [saveSuccessful])

useEffect(() => {
  if (displaySavedResponse && saveSuccessful) {
    setSaveIcon(saveGreenIcon);
  };
  if (displaySavedResponse && !saveSuccessful) {
    setSaveIcon(saveRedIcon);
  }
  if (!displaySavedResponse) {
    setSaveIcon(savePurpleIcon);
  }
}, [displaySavedResponse, saveSuccessful])

return (
  <div className="new-task-page">
    <h1 className="category-title">{currentTask.category}</h1>
    <div className="task-card">
      {tasksToShow === false && <h1>Loading...</h1>}
      {(tasksToShow && tasks.length !== 0 && !error.error) && <p className='task-text'>{currentTask.task}</p>}
      {(!tasksToShow && !error.error) && <ErrorMessage />}
      {error.error && <p className='error-message'>{`We apologize! ${error.response}. Please try again later.`}</p>}
      <p className={displaySavedResponse ? 'save-display saved-confirmation' : 'saved-confirmation'}>
        {saveResponse}
      </p>
      {(tasksToShow && tasks.length !== 0) && <div className="task-card-buttons">
        <div className='refresh-icon-container icon-container' onClick={markTaskRead}>
          <img src={refresh} className='refresh-icon card-icon' />
          <p className='icon-text refresh-text'>New task</p>
        </div>
        <div className='icon-container' onClick={postTask}>
          <img src={saveIcon} className='save-icon card-icon' />
          <p className='icon-text save-text'>Save task</p>
        </div>
      </div>}
    </div>
    <div className='navigation-buttons'>
      <Link to="/">
        <button className="back-button navigation-button">Choose categories</button>
      </Link>
      <Link to="/tasklist">
        <button className='task-button navigation-button'>View saved tasks</button>
      </Link>
    </div>
  </div>
);
};

export default SelectTaskView;
