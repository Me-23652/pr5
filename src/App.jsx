 import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyWebsite</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Build Your Future With React</h1>
          <p>
            Create modern, fast and responsive websites using React JS.
          </p>

          <button onClick={() =>
            document.getElementById("services").scrollIntoView()
          }>
            Explore Services
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>
              Modern and responsive websites using React JS.
            </p>
          </div>

          <div className="card">
            <h3>UI Design</h3>
            <p>
              Clean and attractive user interfaces for your website.
            </p>
          </div>

          <div className="card">
            <h3>Responsive Design</h3>
            <p>
              Websites that work perfectly on mobile, tablet and desktop.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div>
          <h2>About Us</h2>
          <p>
            We create simple, beautiful and powerful websites using
            modern web technologies. React JS helps us build fast and
            interactive user experiences.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact Us</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent successfully!");
        }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 MyWebsite. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;