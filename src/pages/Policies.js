import React from "react";

function Policies() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Website Policies</h1>

      {/* Privacy Policy */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Privacy Policy</h2>
        <p style={styles.text}>
          We respect your privacy. Any personal information collected through
          this website — including name, email, phone, or donation-related data —
          will only be used for verification, communication, and accounting
          purposes. We do not sell, trade, or share your information with any
          third party except as required by law.
        </p>
        <p style={styles.text}>
          All payment information is processed securely using Razorpay’s
          encrypted payment gateway. We do not store your card or bank details.
        </p>
      </section>

      {/* Terms & Conditions */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Terms & Conditions</h2>
        <p style={styles.text}>
          By using this website, you agree to comply with all applicable laws
          and regulations. Donations made on this platform are voluntary and are
          considered final once processed.
        </p>
        <p style={styles.text}>
          We reserve the right to modify website content, policies, or donation
          guidelines at any time without prior notice.
        </p>
      </section>

      {/* Refund Policy */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Refund & Cancellation Policy</h2>
        <p style={styles.text}>
          Donations made through this platform are non-refundable as they are
          voluntary contributions toward public welfare and awareness programs.
        </p>
        <p style={styles.text}>
          In case of incorrect transactions, duplicate payments, or technical
          errors, you may contact us within 24 hours with valid proof, and we
          will review the issue for possible reversal.
        </p>
      </section>

      <p style={styles.footer}>
        If you have any questions about these policies, please contact us.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "900px",
    margin: "auto",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#007bff",
  },
  section: {
    marginBottom: "30px",
  },
  subheading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "10px",
  },
  footer: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "14px",
    color: "#777",
  },
};

export default Policies;
