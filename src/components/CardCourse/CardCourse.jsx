import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./CardCourse.css";
function CardCourse(props) {
  return (
    <div className="card">
      {/* https://www.youtube.com/embed/uau6k1wp1us */}
      <div className="card-video">
        <iframe
          width="150"
          height="90"
          src={props.video}
          frameborder="0"
          title="video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="card-data">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      {/* <div className="card-icon">
        <FontAwesomeIcon icon="faCoffee" />
      </div> */}
    </div>
  );
}

export default CardCourse;
