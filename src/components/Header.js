import React from 'react';
import { NavLink } from 'react-router-dom';

 const Header = () => {
    return(
    <div>
        <ul>
            <li>
              <NavLink  exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  exact to="/cart">Cart</NavLink>
            </li>
        </ul>
        
    </div>
    )
 }
export default Header;