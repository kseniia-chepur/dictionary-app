import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4">
                <img
                  className="img-fluid shadow-sm rounded mb-4"
                  src={photo.src.landscape}
                  alt={photo.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return null;
}
