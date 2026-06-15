import React from "react";

const Disclaimer = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        padding: "80px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "auto",
          background: "#0f172a",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(255,140,0,0.15)",
        }}
      >
        <h1
          style={{
            color: "#ff9731",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Disclaimer
        </h1>

        <p style={{ lineHeight: "1.9", color: "#cbd5e1" }}>
          The information provided on ShopNest is for general informational and
          shopping purposes only.
        </p>

        <p style={{ lineHeight: "1.9", color: "#cbd5e1" }}>
          While we strive to ensure accuracy, product descriptions, pricing,
          availability, and images may occasionally contain errors or
          inaccuracies.
        </p>

        <p style={{ lineHeight: "1.9", color: "#cbd5e1" }}>
          ShopNest reserves the right to modify product details, prices, and
          services without prior notice.
        </p>

        <p style={{ lineHeight: "1.9", color: "#cbd5e1" }}>
          We are not responsible for any losses or damages resulting from the
          use of information available on this website.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;