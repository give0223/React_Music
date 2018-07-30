import React from 'react';

class Progress extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className='wiper-progress'>
        <div className='components-progress' style={{'width':this.props.progress}}>
        </div>
        <div>{this.props.times},get {this.props.Urls}</div>
      </div>
    );
  }
}

export default Progress;