import React from "react";
import "./About.css";

// Import local images
import ShayanImage from "../assets/shayan.jpg";
import ZainImage from "../assets/zain.jpg";
import UzairImage from "../assets/uzair.jpg";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1200&q=80"
          alt="Weather Background"
        />
        <div className="hero-text">
          <h1>About WeatherApp</h1>
          <p>
            Your trusted companion for real-time and accurate weather updates
            worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="card">
          <img
            src="https://img.icons8.com/color/96/earth-planet.png"
            alt="Mission"
          />
          <h2>🌍 Our Mission</h2>
          <p>
            To make weather data accessible, reliable, and easy to understand
            for everyone, anywhere in the world.
          </p>
        </div>
        <div className="card">
          <img
            src="https://img.icons8.com/color/96/light-on.png"
            alt="Vision"
          />
          <h2>💡 Our Vision</h2>
          <p>
            To be the go-to weather platform, combining technology and design to
            empower smarter daily decisions.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose WeatherApp?</h2>
        <ul>
          <li>✔ Real-time and accurate data</li>
          <li>✔ Beautiful, responsive design</li>
          <li>✔ Easy-to-use interface</li>
          <li>✔ Powered by trusted APIs</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={ShayanImage} alt="Shayan Ashfaq" />
            <h3>Shayan Ashfaq</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="team-card">
            <img src={ZainImage} alt="Zain Ali Yousaf" />
            <h3>Zain Ali Yousaf</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-card">
            <img src={UzairImage} alt="Uzair Ali" />
            <h3>Uzair Ali</h3>
            <p>Project Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
