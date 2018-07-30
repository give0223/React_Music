import React from 'react';
import Header from '../js/header.js';
import TrackInfo from '../js/trackInfo.js';
import ProgressBar from '../js/progress.js';
import Controls from '../js/controls.js';
import Times from '../js/times.js';
import "../scss/main.scss";

class Root extends React.Component{
  constructor(props){
    super(props);
    this.updatePlayStatus = this.updatePlayStatus.bind(this);
    this.playStart = this.playStart.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      currentTrackLen: this.props.MusicLists.tracks.length, //歌曲數
      currentTrackIndex: 0, //目前播放歌曲索引,基本設定為第一首
      currentTime: 0, //目前歌曲播放時間
      currentTotalTime: 0, //目前歌曲總時間
      playStatus: true, //true為播放狀態,false為停止播放
    }
  }

  //更新播放狀態
  updatePlayStatus(){
    if(this.state.playStatus){
      this.audioValue.play();
    }else{
      this.audioValue.pause();
    }
    //在audio標籤載入歌曲後使用ondurationchange取得時間長度
    this.audioValue.ondurationchange = () => {
      this.setState((prevState) => {
        return{
          currentTotalTime: this.audioValue.duration
        }
      });
    };
  }

  //播放事件
  playStart(){
    this.setState({playStatus: !this.state.playStatus},
      () => {
        this.updatePlayStatus();
      }
    );
  }

  //上一首
  previous(){
    if(this.state.currentTrackIndex - 1 < 0){
      alert("沒有上一首囉");
    }else{
      this.setState({currentTrackIndex: --this.state.currentTrackIndex},
        () => {
          this.updatePlayStatus();
        }
      );
    }
  }

  //下一首
  next(){
    if(this.state.currentTrackIndex + 1 >= this.state.currentTrackLen){
      alert("沒有下一首囉");
    }else{
      this.setState({currentTrackIndex: ++this.state.currentTrackIndex},
        () => {
          this.updatePlayStatus();
        }
      );
    }
  }

  //自動播放下一首
  componentDidMount() {
    this.updatePlayStatus();
    this.autoplay = setInterval(()=> {
      this.setState({currentTime: this.audioValue.currentTime},()=> {
        if(this.state.currentTime >= this.state.currentTotalTime){
          this.next();
        }
      });
    },300);
  }

  componentWillUnmount(){
    clearInterval(this.autoplay);
  }

  render() {
    return(
      <div>
        {/*播放器名稱*/}
        <Header appName={"React版 Music"}/>

        {/*音樂訊息*/}
        < TrackInfo track = {this.props.MusicLists.tracks[this.state.currentTrackIndex]}      
        />

        {/*播放進度*/}
        <ProgressBar Urls={this.props.MusicLists.tracks[this.state.currentTrackIndex].mp3Url} progress={this.state.currentTime / this.state.currentTotalTime * 100 + '%'} times={this.state.currentTotalTime}/>

        {/*播放控制*/}
        <Controls isPly={this.state.playStatus}
                  onPlay={this.playStart}
                  onPrevios={this.previous}
                  onNext={this.next}
        />

        {/*播放時間*/}
        <Times  currentTime={this.state.currentTime}
                currentTotalTime={this.state.currentTotalTime}
        />

        {/*音樂控制*/}
        < audio id = "audio_music" ref={(audio) => {this.audioValue = audio}} controls>
          <source src={this.props.MusicLists.tracks[this.state.currentTrackIndex].mp3Url} type="audio/mpeg"/>
        </audio>
      </div>
    );
  }
}

export default Root;