import React from "react";

const ReturnPolicy = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        padding: "50px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#0b0f19",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "18px",
          padding: "35px",
          boxShadow: "0 0 20px rgba(255,140,0,.08)",
        }}
      >
        <h1
          style={{
            color: "#ff8c32",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          Return & Refund Policy
        </h1>

        <div style={{ lineHeight: "1.9", color: "#c9c9c9" }}>
          <h3 style={{ color: "#ff8c32" }}>
            1. Return Eligibility
          </h3>

          <p>
            Products may be returned within seven (7) calendar days
            from the date of successful delivery, provided the item
            remains unused, undamaged, and in its original packaging.
          </p>

          <h3 style={{ color: "#ff8c32" }}>
            2. Refund Approval Process
          </h3>

          <p>
            Once your return is physically received and internally
            inspected, an approval notification will be sent.
            Approved refunds are processed back to the original
            payment method within 5–7 business days.
          </p>

          <h3 style={{ color: "#ff8c32" }}>
            3. Exempted Output Goods
          </h3>

          <p>
            Certain categories including digital products,
            downloadable software, gift cards, personalized
            products, and perishable goods are not eligible
            for return or refund.
          </p>

          <h3 style={{ color: "#ff8c32" }}>
            4. Shipping Transit Costs
          </h3>

          <p>
            Customers remain responsible for outbound return
            shipping expenses unless the return results from
            an incorrect or defective item delivered by ShopNest.
          </p>

          <h3 style={{ color: "#ff8c32" }}>
            5. Damaged Deliveries
          </h3>

          <p>
            Any damaged, defective, or incorrect product must
            be reported within 48 hours of delivery along with
            photographic evidence for verification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;