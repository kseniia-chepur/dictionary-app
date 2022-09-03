import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row mb-4">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4">
                <img
                  className="img-fluid shadow-sm rounded mt-4"
                  src={photo.src.landscape}
                  alt={photo.alt}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
