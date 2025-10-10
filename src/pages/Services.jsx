import React, { useEffect } from "react";
import "./services.css";
import sunny from "../assets/sunny.jpg";
import rain from "../assets/rainy.jpg";
import clouds from "../assets/cloudy.jpg";
import storm from "../assets/storm.jpg";
import wind from "../assets/wind.jpg";

function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="services-page">
      {/* ===== Page Header ===== */}
      <section className="services-header fade-in-up">
        <h1>Our Weather Services</h1>
        <p>
          Explore a range of weather solutions designed to keep you informed and prepared
          for every condition — anywhere, anytime.
        </p>
      </section>

      {/* ===== Services Cards ===== */}
      <section className="service-section">
        <div className="service-cards">
          <div className="service-card fade-in-up">
            <img src={sunny} alt="Sunny Weather" />
            <h3>Sunny Conditions</h3>
            <p>
              Get real-time UV index, temperature, and heatwave alerts for bright, sunny days.
            </p>
          </div>

          <div className="service-card fade-in-up">
            <img src={rain} alt="Rainy Weather" />
            <h3>Rain Forecast</h3>
            <p>
              Stay prepared with rainfall predictions, humidity data, and real-time precipitation updates.
            </p>
          </div>

          <div className="service-card fade-in-up">
            <img src={clouds} alt="Cloudy Weather" />
            <h3>Cloud Coverage</h3>
            <p>
              Monitor sky conditions, visibility, and cloud density for overcast and partly cloudy days.
            </p>
          </div>

          <div className="service-card fade-in-up">
            <img src={storm} alt="Storm Alerts" />
            <h3>Storm Alerts</h3>
            <p>
              Receive instant notifications for thunderstorms, heavy winds, and extreme weather conditions.
            </p>
          </div>

          <div className="service-card fade-in-up">
            <img src={wind} alt="Wind Updates" />
            <h3>Wind Patterns</h3>
            <p>
              Track wind direction, speed, and gusts to plan your outdoor and travel activities better.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Call To Action Section ===== */}
      <section className="cta-section fade-in-up">
        <div className="cta-content">
          <h2>Get Live Weather Updates Instantly</h2>
          <p>
            Our API integration (coming soon!) will bring you real-time weather data from
            cities around the world. Stay tuned and be the first to experience it.
          </p>
          <button className="cta-btn">Coming Soon</button>
        </div>
      </section>
    </div>
  );
}

export default Services;
