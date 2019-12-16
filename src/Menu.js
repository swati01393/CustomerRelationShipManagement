import React from 'react';
import './menustyle.css';
import {Link} from 'react-router-dom';

const menu =() => {
    return(
        <div className="menustyle">
            <ul >
                <li> <Link to ="/">Home</Link></li>
                <li><Link to ="about">About</Link></li>
                <li><Link to ="contact">Contact</Link></li>
            </ul>
        </div>
    )

}

  
  
export default menu;
