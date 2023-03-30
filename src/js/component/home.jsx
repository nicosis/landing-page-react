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
      <div className="card-flex margin-content">
        <Card
          url="https://picsum.photos/500/325?random=1"
          title="El café gigante del pulpo"
          description="Un pulpo gigante disfrutando de un café en una taza del tamaño de una piscina."
        />
        <Card
          url="https://picsum.photos/500/325?random=2"
          title="La llama ciclista con estilo"
          description="Una llama montando en bicicleta con gafas de sol y una gorra de béisbol."
        />
        <Card
          url="https://picsum.photos/500/325?random=3"
          title="El elefante con paraguas en la ducha"
          description="Un elefante tomando una ducha con una manguera mientras sostiene un paraguas."
        />
        <Card
          url="https://picsum.photos/500/325?random=4"
          title="El gorila de negocios en el parque"
          description="Un gorila vestido con un traje y corbata leyendo el periódico en un banco del parque."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
