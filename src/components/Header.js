import React, { Component } from "react";
import classnames from "classnames";
import { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// function Header() {
  // const [showHeader, setShowHeader] = useState(false);
  // const path = window.location.pathname
//   return (
    // <div className="header">
    //   {showHeader ? (
    //     <RiCloseFill 
    //      onClick={()=>{setShowHeader(!showHeader)}}
    //     className="menu-icon position-fixed top-0 end-0" />
    //   ) : (
    //     <RiMenu3Fill className="menu-icon position-fixed top-0 end-0" onClick={()=>{setShowHeader(!showHeader)}}/>
    //   )}

    //   <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
    //       <li className={`${path=='/' && 'active'}`}><Link to='/'>Home</Link></li>
    //       <li className={`${path=='/projects' && 'active'}`}><Link to='projects'>Projects</Link></li>
    //       <li className={`${path=='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li>
    //   </ul>
    // </div>
//   );
// }

// export default Header;

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      path : window.location.pathname,
      showHeader:false
      
    };
  }


  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  // const [showHeader, setShowHeader] = useState(false);
  // const path = window.location.pathname
  handleScroll = () => {
    
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    const visible = this.state.visible;
    return (
      <div className="header">
        {this.state.showHeader ? (
          <RiCloseFill 
          onClick={()=>{this.setState({showHeader:false})}}
          className={visible?"menu-icon position-fixed top-0 end-0":""}/>
        ) : (
          <RiMenu3Fill className={visible?"menu-icon position-fixed top-0 end-0":""} onClick={()=>{this.setState({showHeader:true})}}/>
        )}

        <ul className={`${this.state.showHeader ? 'show-header' : 'hide-header'} n-box1`}>
        <li className={`${this.state.path=='/' && 'active'}`}><Link to='/'>Home</Link></li>
            <li className={`${this.state.path=='/projects' && 'active'}`}><Link to='projects'>Projects</Link></li>
            <li className={`${this.state.path=='/contact' && 'active'}`}><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>
    );
  }
}