import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import "/workspace/react-hello/src/styles/index.css";
// import Neo from "../../img/neo.jpeg";

const cardInfo = [
  {
    url: "https://picsum.photos/500/325?random=1",
    title: "Morpheus",
    description:
      '"Unfortunately, no one can be told what the Matrix is. You have to see it for yourself."',
  },
  {
    url: "https://picsum.photos/500/325?random=2",
    title: "Trinity",
    description: '"The Matrix has you."',
  },
  {
    url: "https://picsum.photos/500/325?random=3",
    title: "Neo",
    description: `"I don't believe in fate, because I still have a choice."`,
  },
  {
    url: "https://picsum.photos/500/325?random=4",
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
