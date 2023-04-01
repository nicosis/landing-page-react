import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import "/workspace/react-hello/src/styles/index.css";
import morpheus from "../../img/img-morpheus.jpg";
import trinity from "../../img/img-trinity.jpg";
import neo from "../../img/img-neo.jpg";
import smith from "../../img/img-smith.jpg";

const cardInfo = [
  {
    url: morpheus,
    title: "Morpheus",
    description:
      '"Unfortunately, no one can be told what the Matrix is. You have to see it for yourself."',
  },
  {
    url: trinity,
    title: "Trinity",
    description: '"Touch Me And That Hand Will Never Touch Anything Again."',
  },
  {
    url: neo,
    title: "Neo",
    description: `"I don't believe in fate, because I still have a choice."`,
  },
  {
    url: smith,
    title: "Agent Smith",
    description: '"We are the ones who control the Matrix."',
  },
];
console.log(cardInfo);

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <div className="card-flex margin-content">
        {cardInfo.map((item, i) => (
          <Card
            key={i}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
