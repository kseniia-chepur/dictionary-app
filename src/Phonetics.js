import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.data.audio) {
    return (
      <div>
        <p>{props.data.text}</p>
        <ReactAudioPlayer src={props.data.audio} controls />
      </div>
    );
  } else
    return (
      <div>
        <p>{props.data.text}</p>
      </div>
    );
}
