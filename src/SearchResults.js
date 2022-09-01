import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function SearchResults(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="SearchResults">
        <section>
          <Phonetics
            word={props.data.word}
            audio={props.data.phonetics[0].audio}
            phonetic={props.data.phonetic}
          />
          {/* <h2>{props.data.word}</h2>
          {props.data.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetics data={phonetics} />
              </div> */}
          {/* );
          })} */}
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
