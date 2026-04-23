import React, { useState } from "react";
import "../styles/signup.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  async  function handleSubmit(e) {
          e.preventDefault();
      try {
            const res = await fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com",
    password: "123456"
  })
});

const data = await res.json();
console.log(data);
            
        } catch (error) {
            console.log(error,'=======')
        } finally {
                setSubmitted(true);
        }
    }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p className="subtitle">Login with your email and password</p>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Login
        </button>

        {submitted && (
          <p className="success-message">Login submitted successfully!</p>
        )}
      </form>
    </div>
  );
}