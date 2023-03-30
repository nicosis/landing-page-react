import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import "/workspace/react-hello/src/styles/index.css";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="card-flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    <Footer />
    </div>
  );
};

export default Home;
