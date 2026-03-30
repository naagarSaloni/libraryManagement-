 import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Longues.css";

function Longues() {
  const lounges = [
    {
      icon: "💬",
      title: "Discussion Room",
      description:
        "Exchange ideas, ask doubts, and have meaningful discussions with other learners in an active community space.",
      buttonText: "Join Discussion",
    },
    {
      icon: "📚",
      title: "Reading Zone",
      description:
        "A calm and focused space designed for reading, self-study, and quiet learning without distractions.",
      buttonText: "Start Reading",
    },
    {
      icon: "👥",
      title: "Group Study",
      description:
        "Work together with friends, revise topics, solve problems, and make learning more interactive and effective.",
      buttonText: "Join Group",
    },
    {
      icon: "🧠",
      title: "Brainstorm Hub",
      description:
        "Share creative thoughts, project ideas, and innovative solutions with a collaborative mindset.",
      buttonText: "Explore Ideas",
    },
    {
      icon: "🎯",
      title: "Focus Pods",
      description:
        "Reserved productivity corners for intense concentration, task completion, and goal-based study sessions.",
      buttonText: "Enter Pod",
    },
    {
      icon: "☕",
      title: "Relax Corner",
      description:
        "Take a short break, recharge your mind, and enjoy a comfortable space between study sessions.",
      buttonText: "Take a Break",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="longues-page">
        <section className="longues-hero">
          <div className="longues-hero-overlay">
            <p className="longues-subtitle">Connect • Learn • Grow</p>
            <h1 className="page-heading">Community Lounges</h1>
            <p className="longues-description">
              Discover interactive spaces made for collaboration, quiet reading,
              focused study, and student engagement.
            </p>

            <div className="longues-hero-buttons">
              <button className="primary-btn">Explore Spaces</button>
              <button className="secondary-btn">View Activities</button>
            </div>
          </div>
        </section>

        <section className="lounges-section">
          <h2 className="section-heading">Choose Your Space</h2>

          <div className="lounges-grid">
            {lounges.map((lounge, index) => (
              <div className="lounge-card" key={index}>
                <div className="lounge-icon">{lounge.icon}</div>
                <h3>{lounge.title}</h3>
                <p>{lounge.description}</p>
                <button className="card-btn">{lounge.buttonText}</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Longues;