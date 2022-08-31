import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      {props.data.synonyms.map(function (synonym, index) {
        return (
          <ul key={index}>
            <li>{synonym}</li>
          </ul>
        );
      })}
    </div>
  );
}
