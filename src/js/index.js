import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../js/root.js';
import MusicList from '../js/musicList.js';

//引入歌曲參數
ReactDOM.render(<Root MusicLists = {MusicList}></Root>,document.querySelector('#root'));