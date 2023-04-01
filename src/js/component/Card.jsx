import React from "react";
import "/workspace/react-hello/src/styles/index.css";

const Card = (props) => {
  return (
    <div className="card text-bg-light card-width mt-2">
      <img src={props.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-dark">
          Enter The Matrix
        </a>
      </div>
    </div>
  );
};

export default Card;
