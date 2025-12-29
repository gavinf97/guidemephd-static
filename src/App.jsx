import './App.css' // Imports your standard CSS file

function App() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">GF Consulting</div>
        <div className="links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Professional Guidance for Complex Problems</h1>
        <p>I help businesses navigate critical transitions.</p>
        <button onClick={() => window.location = 'mailto:contact@guidemephd.com'}>
          Get in Touch
        </button>
      </header>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="card">
          <h2>Strategy</h2>
          <p>Long-term planning and risk management.</p>
        </div>
        <div className="card">
          <h2>Execution</h2>
          <p>Turning plans into operational reality.</p>
        </div>
        <div className="card">
          <h2>Analysis</h2>
          <p>Deep-dive data analysis and reporting.</p>
        </div>
      </section>
    </div>
  )
}

export default App