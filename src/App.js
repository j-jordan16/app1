import React from 'react';
import TaskList from './tasklist.js';

function App() {
  const tasks = [
    {id: 0, description: 'do this', done: false},
    {id: 1, desciprtion: 'do that', done: false},
  ];
  return (
    <div>
      <TaskList />
    </div>
  );
}

export default App;
