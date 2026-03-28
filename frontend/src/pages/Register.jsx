import './Auth.css'
import Navbar from '../components/Navbar'
import bgImage from '../assets/library.jpg'

function Register() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <img src={bgImage} className="auth-bg" />

        <div className="auth-overlay">
          <div className="auth-card">
            <h2>Register</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register