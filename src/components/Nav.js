import React from 'react';
import { Link } from 'react-router-dom';


const Nav = (props) => {
    return (
    
        <nav className="main-nav">
            <ul>
                <li><Link to='/hibiscus'>Hibiscus</Link></li>
                <li><Link to='/tulips'>Tulips</Link></li>
                <li><Link to='/roses'>Roses</Link></li>
            </ul>
        </nav>
        
    );
  }
  
  export default Nav;
  
  