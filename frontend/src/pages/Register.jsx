  import { useState } from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import bgImage from "../assets/library.jpg";
import { useEffect } from "react";

function Register() {
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age <= 15) {
      alert("Age must be greater than 15");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    alert("Form submitted successfully");
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <img src={bgImage} className="auth-bg" alt="Library" />

        <div className="auth-overlay">
          <div className="auth-card">
            <h2>Register</h2>

            <form onSubmit={handleSubmit} className="auth-form">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />

              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
