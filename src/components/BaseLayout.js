import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    let header = {
      backgroundColor: "gray",
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

    let footerStyle = {
      textAlign: "center",
      backgroundColor: "gray",
      height: 50,
      margin: "0 auto"
    }

    return(
      <div>
        <div style={header}>
          <ul style={ul}>
            <li style={li}>
              <Link to="/" style={link}>Home</Link>
            </li>
            <li style={liStyle}>
              <Link to="/about" style={link}>About</Link>
            </li>
            <li style={liStyle}>
              <Link to="/portfolio" style={link}>Portfolio</Link>
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
