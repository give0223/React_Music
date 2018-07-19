import React from 'react';
import "../scss/main.scss";

class Header extends React.Component{
  render() {
    return(
      <div className='component-header'>
        <img src='./src/img/images.png' width='40' alt='music' className='music-logo'/>
        <h1 className='caption'>React Music Player</h1>
      </div>
    );
  }
}

export default Header;