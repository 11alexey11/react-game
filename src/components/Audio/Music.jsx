import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import music from '../../assets/background.mp3';

const Music = (props) => {
    return (
        <ReactAudioPlayer src={music} muted={props.isMusic} autoPlay loop volume={Number(props.musicValue) / 100} />
    );
}

export default Music;