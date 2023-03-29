import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
	  <Jumbotron />
	  <Card />
    </div>
  );
};

export default Home;
