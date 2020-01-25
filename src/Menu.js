import React from 'react';
import './menustyle.css';
import {Link} from 'react-router-dom';

const Menu =() => {
    return (
        <div className="menustyle">
        
            <div className="menuhello"> Hello,<input type="text" name="username" className="topinput" /></div>
           
            <div className="menubar">
            <ul >
                <li> <Link to ="/">Dashboard</Link></li>
                <li><Link to ="Dashboard">Log Histroty </Link></li>
                <li><Link to="contact">Profile</Link></li>
                <li><Link to="Logout">Logout</Link></li>            </ul>
                </div>
               
       </div>
            
    )

}


  
  
export default Menu;
