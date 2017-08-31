import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    let body = {
      fontSize: "1em"
    }

    let header = {
      backgroundColor: "lightgray",
      height: 75
    }

    let ul = {
      listStyle: "none",
      padding: 26,
      margin: 0
    }

    let li = {
      display: "inline",
      marginTop: "20px"
    }

    let link = {
      color: "#FF4571",
      backgroundColor: "black",
      border: "1px solid #FF4571",
      borderRadius: 75,
      padding: "20px",
      marginRight: "15px",
      textDecoration: "none"
    }

    let footer = {
      textAlign: "center",
      backgroundColor: "lightgray",
      height: 50,
      margin: "0 auto"
    }

    return(
      <div style ={body}>
        <div style={header}>
          <ul style={ul}>
            <li style={li}>
              <NavLink to="/" style={link}>Home</NavLink>
            </li>
            <li style={li}>
              <NavLink to="/about" style={link}>About</NavLink>
            </li>
            <li style={li}>
              <NavLink to="/portfolio" style={link}>Portfolio</NavLink>
            </li>
          </ul>
        </div>
        <div style={{backgroundColor: "black", height: "75px"}}>
          {this.props.children}
        </div>
        <footer style={footer}>
        </footer>
      </div>
    );
  }
}
