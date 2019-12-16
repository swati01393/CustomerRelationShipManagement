import React from 'react';
import './App.css';
import Menu from './Menu';
import About   from './About';
import Contact from './Contact';
import {BrowserRouter , Route, Switch} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>

      </Switch>
       
    </div>
    </BrowserRouter>
  );
}



const Home = () =>{
  return(
      
         <div className="wrap">
      <form>
        <h2>Login with</h2><hr></hr>
      <label>User Name:-</label>
      <input type="text" placeholder="Enter name here"></input><br/>
      <label>Password:-</label>
      <input type="text" placeholder="Enter password here"></input><br/>
      <button>Submit</button></form>
    </div>
    

  )
}


export default App;

