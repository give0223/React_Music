import React from 'react';
import Header from '../js/header.js'
import Progress from '../js/progress.js'
import "../scss/main.scss";

class Root extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    
  }
  render() {
    return(
      <div>
        {/*播放器名稱*/}
        <Header/>

        {/*音樂訊息*/}
        <TrackInfo/>

        {/*播放進度*/}
        <Progress/>

        {/*播放控制*/}
        <Controls/>

        {/*播放時間*/}
        <Time/>

        {/*音樂控制*/}
        <audio id="audio_music"></audio>
      </div>
    );
  }
}

export default Root;