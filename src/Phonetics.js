import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props?.audio) {
    return (
      <div className="Phonetics">
        <h2>{props.word}</h2>
        <ReactAudioPlayer src={props.audio} controls />
        <span>{props.phonetic}</span>
      </div>
    );
  } else
    return (
      <div className="Phonetics">
        <h2>{props.word}</h2>
        <br/>
        <span className="ms-2">{props.phonetic}</span>
      </div>
    );
}
