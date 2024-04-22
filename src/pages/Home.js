import React from "react";
import pic from "../image/bgt.jpg";

const Home = () => {
  return (
    <div>
      <div className="containers">
        <img src={pic} alt="beautiful" />
        <div className="author-details">
          <h2>
            In the face of pressing environmental challenges, technology is
            emerging as a powerful ally in the quest for sustainability. From
            renewable energy solutions to efficient transportation systems,
            innovators are harnessing the power of tech to build a greener
            future. Whether it's leveraging
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
