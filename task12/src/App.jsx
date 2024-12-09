import React from 'react';
import Post from './components/Post';
import Show from './components/Show';
import Delete from './components/Delete';
import Put from './components/Put';
import './components/style.css'; 

const App = () => {
  return (
    <div className="container"> 
      <h1>Transfer Management</h1>
      <div className="form-container"> 
        <Post />
        <Show />
      </div>
      <div className="form-container"> 
        <Delete />
        <Put />
      </div>
    </div>
  );
};

export default App;
