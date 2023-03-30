import React from "react";
import "/workspace/react-hello/src/styles/index.css";

const Card = (props) => {
  return (
    <div className="card card-width mt-2" id="card-centered">
      <img
        src={props.url}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.description}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
