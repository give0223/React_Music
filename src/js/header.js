import React from 'react';
import "../scss/main.scss";

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className='component-header'>
        <img src='./src/img/images.png' width='40' alt='music' className='music-logo'/>
        < h1 className = 'caption'>{this.props.appName}</h1>
        <h4></h4>
      </div>
    );
  }
}

export default Header;