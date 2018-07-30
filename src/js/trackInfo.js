import React from 'react';

class TrackInfo extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <img className = 'albumPic'src = {this.props.track.album.picUrl}/>
        <div className='trackInfo'>
          <div className='name'>{this.props.track.name}</div>
          <div className='artist'>{this.props.track.artists[0].name}</div>
          <div className='album'>{this.props.track.album.name}</div>
        </div>
      </div>
    );
  }
}

export default TrackInfo;