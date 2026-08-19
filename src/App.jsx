import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Background */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          NEX<span>ORA</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-btn">Let's Talk</button>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">

        <div className="hero-text">
          <p className="tag">✦ DIGITAL INNOVATION STUDIO</p>

          <h1>
            We Create
            <span> Digital </span>
            Experiences.
          </h1>

          <p className="description">
            NEXORA transforms creative ideas into powerful digital
            experiences using modern technology, design and innovation.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Work →
            </button>

            <button className="secondary-btn">
              Watch Story ▶
            </button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="hero-card">

          <div className="circle">
            <div className="circle-inner">
              NX
            </div>
          </div>

          <div className="floating-card card-one">
            <span>⚡</span>
            <div>
              <b>Innovation</b>
              <small>Always Forward</small>
            </div>
          </div>

          <div className="floating-card card-two">
            <span>◈</span>
            <div>
              <b>Creative</b>
              <small>Beyond Limits</small>
            </div>
          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="stats">

        <div>
          <h2>50+</h2>
          <p>Projects</p>
        </div>

        <div>
          <h2>25+</h2>
          <p>Clients</p>
        </div>

        <div>
          <h2>8+</h2>
          <p>Countries</p>
        </div>

        <div>
          <h2>99%</h2>
          <p>Satisfaction</p>
        </div>

      </section>

      {/* Services */}
      <section id="services" className="section">

        <p className="tag">WHAT WE DO</p>

        <h2 className="section-title">
          Turn Ideas Into
          <span> Reality.</span>
        </h2>

        <div className="services">

          <div className="service">
            <div className="icon">◉</div>
            <h3>Web Development</h3>
            <p>
              Fast, responsive and modern websites built with
              cutting-edge technologies.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          <div className="service featured">
            <div className="icon">✦</div>
            <h3>UI / UX Design</h3>
            <p>
              Beautiful interfaces designed around your users and
              your brand identity.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          <div className="service">
            <div className="icon">⌁</div>
            <h3>Digital Strategy</h3>
            <p>
              Smart digital strategies that help businesses grow
              and reach new audiences.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">

        <p className="tag">SELECTED WORK</p>

        <h2 className="section-title">
          Projects That
          <span> Inspire.</span>
        </h2>

        <div className="projects">

          <div className="project project-one">
            <div>
              <p>01 / WEB DESIGN</p>
              <h3>Future Finance</h3>
            </div>
            <span>↗</span>
          </div>

          <div className="project project-two">
            <div>
              <p>02 / BRANDING</p>
              <h3>Nova Studio</h3>
            </div>
            <span>↗</span>
          </div>

          <div className="project project-three">
            <div>
              <p>03 / MOBILE APP</p>
              <h3>Orbit AI</h3>
            </div>
            <span>↗</span>
          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="about">

        <div className="about-number">N</div>

        <div className="about-content">

          <p className="tag">ABOUT NEXORA</p>

          <h2>
            Design is not just
            <span> what it looks like.</span>
          </h2>

          <p>
            We believe great digital products should feel as good
            as they look. Our team combines technology, creativity
            and strategy to build experiences people remember.
          </p>

          <button className="primary-btn">
            Discover NEXORA →
          </button>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="contact">

        <p className="tag">START A PROJECT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's build it.</span>
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We will contact you soon.");
          }}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Tell us about your project..."
            rows="5"
            required
          ></textarea>

          <button className="primary-btn" type="submit">
            Send Message →
          </button>

        </form>

      </section>

      {/* Footer */}
      <footer>

        <div className="logo">
          NEX<span>ORA</span>
        </div>

        <p>
          Creating tomorrow's digital experiences.
        </p>

        <div className="social">
          Instagram · LinkedIn · GitHub
        </div>

        <small>
          © 2026 NEXORA. All rights reserved.
        </small>

      </footer>

    </div>
  );
}

export default App;