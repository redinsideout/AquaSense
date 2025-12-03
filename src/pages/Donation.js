import React, { useState } from "react";
import axios from "axios";

function Donation() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Create order on backend
      const response = await axios.post(
        "https://YOUR-BACKEND-URL.onrender.com/api/payment/createOrder",
        { amount: amount },
        { headers: { "Content-Type": "application/json" } }
      );

      const order = response.data;

      // 2️⃣ Razorpay options
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID",
        amount: order.amount,
        currency: order.currency,
        name: "Water Quality Management",
        description: "Donation Payment",
        order_id: order.id,
        handler: function (res) {
          alert("🎉 Payment Successful!");
          alert("Payment ID: " + res.razorpay_payment_id);
          setSubmitted(true);
        },
        prefill: {
          name: name,
          email: "user@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#007bff",
        },
      };

      // 3️⃣ Open Razorpay popup
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Make a Donation</h1>
        <p style={styles.subtitle}>
          Your contribution helps support clean water initiatives and awareness.
        </p>

        {submitted ? (
          <p style={styles.success}>🎉 Thank you for your donation!</p>
        ) : (
          <form onSubmit={handlePayment}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="number"
              placeholder="Donation Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
              required
            />

            <textarea
              placeholder="Message (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={styles.textarea}
            />

            <button type="submit" style={styles.button}>
              Donate with Razorpay
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6dd5fa, #1e90ff)",
    padding: "20px",
  },
  card: {
    width: "450px",
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    height: "100px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "18px",
    cursor: "pointer",
  },
  success: {
    textAlign: "center",
    fontSize: "20px",
    color: "green",
    fontWeight: "bold",
  },
};

export default Donation;
