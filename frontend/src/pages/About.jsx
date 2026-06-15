import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "#fff",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          background: "#0b1224",
          borderRadius: "25px",
          padding: "50px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 40px rgba(255,140,0,0.15)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: "30px",
            background: "rgba(255,140,0,0.15)",
            color: "#ff9731",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          ✨ About ShopNest
        </div>

        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
          }}
        >
          Welcome to ShopNest
        </h1>

        <h3
          style={{
            color: "#ff9731",
            marginBottom: "25px",
          }}
        >
          Premium E-Commerce Experience
        </h3>

        <p
          style={{
            color: "#cbd5e1",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          ShopNest is a modern online shopping platform designed to
          provide customers with a seamless, secure, and enjoyable
          shopping experience. We bring quality products,
          competitive prices, and trusted service together in one place.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "35px",
          }}
        >
          <button className="about-btn">🚚 Fast Delivery</button>
          <button className="about-btn">🔒 Secure Payments</button>
          <button className="about-btn">⭐ Quality Products</button>
          <button className="about-btn">💬 24/7 Support</button>
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div className="feature-card">
            <h2>🚀</h2>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping services.</p>
          </div>

          <div className="feature-card">
            <h2>🔒</h2>
            <h3>Secure Payments</h3>
            <p>100% safe and protected transactions.</p>
          </div>

          <div className="feature-card">
            <h2>⭐</h2>
            <h3>Premium Quality</h3>
            <p>Carefully selected products for customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;