import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import click from '../../assets/click.mp3';

const Sound = (props) => {
    return (
        <ReactAudioPlayer src={click} muted={props.isSound} volume={Number(props.isSound) / 100} />
    );
}

export default Sound;