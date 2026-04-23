import React, { useState } from "react";
import "../styles/signup.css";


export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
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
            const response = await fetch(" http://localhost:3000/api/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
});

// const data = await res.json();
console.log(response);
            
        } catch (error) {
            console.log(error,'=======')
        } finally {
                setSubmitted(true);
        }
    }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p className="subtitle">Sign up by filling the form below</p>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
        </div>

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
            autoComplete="new-password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            autoComplete="bday"
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>

        {submitted && (
          <p className="success-message">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
}