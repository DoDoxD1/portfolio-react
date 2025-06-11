import React from "react";
import Header from "./header/Header";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header></Header>
      <h1>Welcome to My Portfolio</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
