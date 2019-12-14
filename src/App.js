import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Reactjs Project</h1>
      <div className="wrap">
        <form>
          <h2>Login with</h2><hr></hr>
        <label>User Name:-</label>
        <input type="text" placeholder="Enter name here"></input><br/>
        <label>Password:-</label>
        <input type="text" placeholder="Enter password here"></input><br/>
        <button>Submit</button></form>
      </div>
      
    </div>
  );
}

export default App;
