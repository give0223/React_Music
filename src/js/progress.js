import React from 'react';

class Progress extends React.Component{
  render() {
    return(
      <div className='components-progress row'>
        <audio controls>
          < source src = './src/music/DreamItPossible.mp3'/>
        </audio>
      </div>
    );
  }
}

export default Progress;