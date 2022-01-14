import React, {useState} from 'react';
import TaskList from './tasklist.js';
import NewTask from './newtask.js';

function App() {
  const [tasks, setTask] = useState([]);
  const [nextId, setNextId] = useState(0);
  
  const createTask = (description) => {
    setTask(tasks => ([...tasks, {id: nextId, description, done: false}]));
    setNextId(nextId +1);
  }

  const markTaskDone = id => {
    const newTaskList = tasks.map(task => {
      if(task.id === id) {
        task.done = true;
      }
      return task;
    });
    setTask(newTaskList);
  }

  const deleteTask = id => {
    setTask(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            <h1 className="display-4">Shopping List</h1>
          </div>
          <NewTask createTask={createTask} />
          <br />
          <TaskList tasks={tasks} markTaskDone={markTaskDone} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
