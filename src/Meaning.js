import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <small>{definition.example}</small>
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
    </section>
  );
}
