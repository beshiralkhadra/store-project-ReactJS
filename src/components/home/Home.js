import React from "react";
import "./home.css";

function Home() {
  return (
    <div
      className="home"
      style={{
        background: ` rgba(0, 0, 0, 0.7) url("/aaron-burden-0fA3gVTGwjQ-unsplash-min.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <div className="content">
        {" "}
        <h2>About Us</h2>
        <h4>
          Sager exist to extract the true commercial value of drones and aid on
          their commercialization in the Middle east by Empowering industries
          through Drone-based technology, within regulated environment to meet
          the emerging needs of drone technology.
        </h4>
      </div>
    </div>
  );
}

export default Home;
