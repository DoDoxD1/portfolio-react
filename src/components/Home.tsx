import React from "react";
import Header from "./header/Header";
import TopSection from "./top-section/TopSection";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header></Header>
      <main className="main">
        <TopSection></TopSection>
      </main>
    </div>
  );
};

export default Home;
