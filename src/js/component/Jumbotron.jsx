import React from "react";
import "/workspace/react-hello/src/styles/index.css";

const jumbotron = () => {
  return (
    <div className="container-fluid py-5 backGreyColor">
      <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
      <p className="col-md-8 fs-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        debitis. Suscipit ipsam consequuntur nesciunt a soluta, voluptatem illo
        laudantium saepe.
      </p>
      <button className="btn btn-primary btn-lg" type="button">
        Call to action!
      </button>
    </div>
  );
};

export default jumbotron;
