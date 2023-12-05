import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'

import { NavLink, useLocation } from "react-router-dom";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Signin", "Signup", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const fonts = ["fa fa-user", "fa fa-gauge", "fa fa-book", "fa fa-calendar", "fa fa-inbox", 
                "fa fa-clock", "fa fa-tv", "fa fa-circle-arrow-right", "fa fa-question"]
  const { pathname } = useLocation();
  return (
    <div className="sidebar" style={{ width: 100}}>
      <div>
        <img src="/northeastern-logo.jpeg" width="70" height="65"></img>
      </div>
      <div className='list-item '>
        {links.map((link, index) => (
            <NavLink 
              key={index}
              to={`/Kanbas/${link}`}
              style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',  
                backgroundColor: isActive ? 'white' : 'black', 
                height:65, width:100, textAlign: 'center'})}
              className={`row mt-2 no-underline ${pathname.includes(link)}`}>
                 <i className={fonts[index]} style={{marginTop: 5, color:"red"}}/>
              {link}
            </NavLink>
        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;