import tasks from '../../data/data';
import './SelectTaskView.css'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SelectTaskView = () => {
  const { category } = useParams();

  const [currentTasks, setCurrentTasks] = useState([]);
  const [unseenTasks, setUnseenTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

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
      return !task.seen;
    });
    setUnseenTasks(filteredTasks);
  };

  useEffect(() => {
    getUnseenTasks(currentTasks);
  }, [currentTasks]);

  const getCurrentTask = (options) => {
    let randomIndex = Math.floor(Math.random() * options.length);
    setCurrentTask(options[randomIndex]);
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

  const markTaskRead = () => {
    const allTasks = [...currentTasks];
    allTasks.find((task) => task.id === currentTask.id).seen = true;

    setCurrentTasks(allTasks);
    checkForReset();
  };

  const postTask = () => {}

  // useEffect(() => {
  //   console.log('currentTasks', currentTasks);
  // }, [currentTasks])

  // useEffect(() => {
  //   console.log('unseenTasks', unseenTasks);
  // }, [unseenTasks])

  // useEffect(() => {
  //   console.log('currentTask', currentTask)
  // }, [currentTask])

  return (
    <div className="new-task-page">
      <div className="task-card">
        <p className="task-text">{currentTask.text}</p>
        <div className="task-card-buttons">
          <button onClick={markTaskRead} className="deny-button"></button>
          <button onClick={postTask} className="accept-button"></button>
        </div>
      </div>
      <Link to='/'><button className="back-button"></button></Link>
    </div>
  );
};

export default SelectTaskView;
