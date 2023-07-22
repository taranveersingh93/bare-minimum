import tasks from '../../data/data';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SelectTaskView = () => {
  const { category } = useParams();

  const [currentTasks, setCurrentTasks] = useState([]);
  const [unseenTasks, setUnseenTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const getTasks = (cat) => {
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
    getTasks(category);
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
    // options[randomIndex].seen = true;
    setCurrentTask(options[randomIndex]);
  };

  useEffect(() => {
    getCurrentTask(unseenTasks);
  }, []);

  console.log(currentTasks)
  console.log(unseenTasks)
  
  return (
    <div className="new-task-page">
      <div className="task-card">
        {/* <p className="task-text">${currentTask.text}</p> */}
        <div className="task-card-buttons">
          <button className="deny-button"></button>
          <button className="accept-button"></button>
        </div>
      </div>
      <button className="back-button"></button>
    </div>
  );
};

export default SelectTaskView;
