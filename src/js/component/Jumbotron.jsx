import React from "react";
import "/workspace/react-hello/src/styles/index.css";

const jumbotron = () => {
  return (
    <div className="margin-content">
      <div className="container-fluid py-5 px-4 lightGreen">
        <h1 className="display-5 fw-bold">A Matrix Welcome!</h1>
        <p className="col-md fs-4">
          "What you know you can't explain, but you feel it. You've felt it your
          entire life, that there's something wrong with the world. You don't
          know what it is, but it's there, like a splinter in your mind, driving
          you mad." - Morpheus
        </p>
        <button className="btn btn-dark btn-lg" type="button">
          Take the red pill
        </button>
      </div>
    </div>
  );
};

export default jumbotron;
