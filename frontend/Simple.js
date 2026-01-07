import React, { useState } from "react";
import axios from "axios";
import "./Simple.css";
import { FaSun } from "react-icons/fa";

function Simple() {
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 try {
      await axios.post("http://localhost:5000/students", formData);
      alert("Good morning! Student added ");

      setFormData({
        name: "",
        phone_no: "",
        email: "",
      });
    } catch (err) {
      alert("Something went wrong ");
      console.error(err);
    }
};

  return (
    <div className="morning-app">
      <div className="card">
        <h1>Good Morning <FaSun /> </h1>
        <p>Have a great day! Add a student below</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required/>

          <input type="text" name="phone_no" placeholder="Phone Number"
            value={formData.phone_no}
            onChange={handleChange}
            required />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required />

          <button type="submit">Submit </button>
        </form>
      </div>
    </div>
  );
}

export default Simple;

