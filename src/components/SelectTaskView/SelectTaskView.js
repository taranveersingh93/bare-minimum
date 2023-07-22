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

  const fetchTasks = (cat) => {
    if (cat !== 'all') {
      setCurrentTasks(tasks[cat]);
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

  const getCurrentTask = (options) => {
    let randomIndex = Math.floor(Math.random() * options.length);
    setCurrentTask(options[randomIndex]);
  };

  useEffect(() => {
    if (!unseenTasks.length) {
      
    } else {
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

  const markTaskRead = () => {
    const allTasks = [...currentTasks];
    allTasks.find((task) => task.id === currentTask.id).seen = true;

    setCurrentTasks(allTasks);
    checkForReset();
  };

  const postTask = () => {
    const acceptedTask = {
      id: currentTask.id,
      category: currentTask.category,
      task: currentTask.task,
    };
    if (!savedData.find((task) => task.id === acceptedTask.id)) {
      savedData.push(acceptedTask);
    }
    const allTasks = [...currentTasks];
    allTasks.find((task) => task.id === currentTask.id).seen = true;
    allTasks.find((task) => task.id === currentTask.id).saved = true;

    setCurrentTasks(allTasks);
    checkForReset();
  };
  
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
        {tasksToShow && <p className="task-text">{currentTask.task}</p>}
        {!tasksToShow && <ErrorMessage />}
        {tasksToShow && <div className="task-card-buttons">
          <img onClick={markTaskRead} src={refresh} className='refresh-icon'/>
          <img onClick={postTask} src={save} className='save-icon'/>
        </div>}
      </div>
      <Link to="/">
        <button className="back-button"></button>
      </Link>
    </div>
  );
};

export default SelectTaskView;
