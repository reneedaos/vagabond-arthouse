import Head from 'next/head';
import Nav from '../components/nav';

function ContactPage() {
  return (
    <div className="container">
      <Head>
        <title>Contact Me</title>
      </Head>
      <Nav />
      <header className="header">
        <h1 className="title">Contact Me</h1>
        <p className="subtitle">Get in touch with me</p>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section-title">Contact Information</h2>
          <p className="section-text">
            You can reach me through the following channels:
          </p>
          <ul className="contact-list">
            <li className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:your-email@example.com">your-email@example.com</a>
            </li>
            <li className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:your-phone-number">your-phone-number</a>
            </li>
            <li className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/your-linkedin-profile/">your-linkedin-profile</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;