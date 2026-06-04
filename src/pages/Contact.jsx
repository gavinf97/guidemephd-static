import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Whether you are a research institution, project consortium, or individual researcher, get in touch to discuss how we can work together.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <form className="contact-form" action="https://formsubmit.co/contact@guidemephd.com" method="POST">
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_subject" value="New Enquiry via GuideMePhD Website" />
            <input type="text" name="_honey" className="honeypot-field" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="First &amp; Last Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="email@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="" disabled defaultValue="">Select an option</option>
                <option value="consulting">Consulting Enquiry (General)</option>
                <option value="ec-projects">EC Project Support &amp; Funding</option>
                <option value="data-infra">Data Infrastructure &amp; FAIR</option>
                <option value="workshops">Workshop or Training Enquiry</option>
                <option value="general">General Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us about your project or enquiry" required></textarea>
            </div>

            <button type="submit" className="btn btn-outline">Submit Enquiry</button>
          </form>

          <div className="contact-info">
            <p><strong>Consulting:</strong> <a href="mailto:contact@guidemephd.com">contact@guidemephd.com</a></p>
            <p><strong>Alternatively:</strong> <a href="mailto:contact@gavinfarrellconsulting.co.uk">contact@gavinfarrellconsulting.co.uk</a></p>
            <p><strong>Location:</strong> Cambridge, UK</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
