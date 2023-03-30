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
	  <div className="content">
      <Jumbotron />
      <div className="flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Home;
