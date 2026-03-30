 import './Auth.css'
import Navbar from '../components/Navbar'
import bgImage from '../assets/library.jpg'

function Login() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <img src={bgImage} className="auth-bg" />

        <div className="auth-overlay">
          <div className="auth-card">
            <h2>Login</h2>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
