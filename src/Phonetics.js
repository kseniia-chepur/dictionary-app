import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div>
      <p>{props.data.text}</p>
      <ReactAudioPlayer src={props.data.audio} controls />
      {/* <a href={props.data.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a> */}
    </div>
  );
}
