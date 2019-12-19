import React from 'react';
;
import Menu from './Menu';
import About   from './About';
import Contact from './Contact';
import Resume from './Resume';
import project from './project';

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
      <Route path="/Resume" component={Resume}/>
      <Route path="/project" component={project}/>

      </Switch>
       
    </div>
    </BrowserRouter>
  );
}



const Home = () =>{
  return(
    
      <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={1}>12</Cell>

      </Grid>
    </div>
      
         

  )
}


export default App;

