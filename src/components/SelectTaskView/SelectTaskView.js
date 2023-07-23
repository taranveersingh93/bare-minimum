import tasks from '../../data/data';
import './SelectTaskView.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import savedData from '../../dataList/savedData';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import refresh from '../../images/refresh.png';
import save from '../../images/save.png';

const SelectTaskView = () => {
  const { category } = useParams();

  const [currentTasks, setCurrentTasks] = useState([]);
  const [unseenTasks, setUnseenTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [tasksToShow, setTasksToShow] = useState(false);
  const [displaySavedResponse, setDisplaySavedResponse] = useState(false);
  const [saveSuccessful, setSaveSuccessful] = useState(false);
  const [saveResponse, setSaveResponse] = useState('')

  const fetchTasks = (category) => {
    if (category !== 'all') {
      setCurrentTasks(tasks[category]);
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
    const filteredTasks = tasks.filter((task) => {
      return !task.seen && !task.saved;
    });
    setUnseenTasks(filteredTasks);
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
      setTimeout(() => {refreshTasks(allTasks)}, 1000);
    } else {
      setSaveSuccessful(false);
      setDisplaySavedResponse(true);
    }
  };

  useEffect(()=> {
    if (saveSuccessful) {
      setSaveResponse('Saved!')
    } else {
      setSaveResponse('Something went wrong... but you tried!')
    }
  }, [saveSuccessful])
  
  // useEffect(() => {
  //   console.log('savedData', savedData);
  //   console.log('unseenTasks', unseenTasks);
  // }, [unseenTasks]);

  // useEffect(() => {
  //   console.log('currentTask', currentTask)
  // }, [currentTask])

  return (
    <div className="new-task-page">
      <h1 className="category-title">{currentTask.category}</h1>
      <div className="task-card">
        {tasksToShow && <p className='task-text'>{currentTask.task}</p>}
        {!tasksToShow && <ErrorMessage />}
        <p className={displaySavedResponse? 'save-display saved-confirmation': 'saved-confirmation'}>
          {saveResponse}
        </p>
        {tasksToShow && <div className="task-card-buttons">
          <div className='icon-container'  onClick={markTaskRead}>
            <img src={refresh} className='refresh-icon card-icon'/>
            <p className='icon-text refresh-text'>Show another task</p>
          </div>
          <div className='icon-container'  onClick={postTask}>
            <img src={save} className='save-icon card-icon'/>
            <p className='icon-text save-text'>Save task</p>
          </div>
        </div>}
      </div>
      <Link to="/">
        <button className="back-button"></button>
      </Link>
    </div>
  );
};

export default SelectTaskView;
