import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Header.css'

class Header extends Component {
  render() {
    return (

      <div className="Header mb-5" style={{backgroundColor: "white"}}>
        
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4">
          
          <Link to="/" style={{ textDecoration: 'none' , color:'black'}}>
            <div className="container-fluid logo">
                <h1 className = "link"><b>Kokila Ben's Rasoda</b></h1>

            </div>
          </Link>
          
        
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>     
      </div>
    );
  }
}

export default Header;
