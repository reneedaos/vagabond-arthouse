import Head from 'next/head';
import Nav from '../components/nav';
import NetworkVisualization from '../components/NetworkVisualization';
import DataTerminal from '../components/DataTerminal';
import MatrixRain from '../components/MatrixRain';
import SystemStatus from '../components/SystemStatus';

function ContactPage() {
  return (
    <>
      <NetworkVisualization />
      <MatrixRain />
      <div className="container">
        <Head>
          <title>Contact - Vagabond Arthouse</title>
        </Head>
        <SystemStatus />
        <Nav />
        <header className="header">
          <h1 className="title">Contact</h1>
          <p className="subtitle">Initialize connection protocols</p>
        </header>
        <main className="main">
          <section className="section">
            <h2 className="section-title">Communication Channels</h2>
            <p className="section-text">
              Establish secure communication through the following channels
            </p>
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-info">
                  <div className="contact-label">NEURAL LINK</div>
                  <a href="mailto:renee.daoscience@gmail.com" className="contact-value">renee.daoscience@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🔗</div>
                <div className="contact-info">
                  <div className="contact-label">PROFESSIONAL NETWORK</div>
                  <a href="https://www.linkedin.com/in/research-wizard/" className="contact-value" target="_blank" rel="noopener noreferrer">LinkedIn Interface</a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <DataTerminal />
      </div>
      
      <style jsx>{`
        .contact-grid {
          display: grid;
          gap: 20px;
          margin-top: 20px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(255, 0, 255, 0.05) 100%);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          border-color: rgba(255, 0, 255, 0.5);
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(255, 0, 255, 0.1) 100%);
          transform: translateX(10px);
        }
        
        .contact-icon {
          font-size: 2rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 8px;
        }
        
        .contact-info {
          flex: 1;
        }
        
        .contact-label {
          font-family: 'Orbitron', monospace;
          font-size: 0.8rem;
          color: #ff00ff;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        
        .contact-value {
          color: #00ffff;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }
        
        .contact-value:hover {
          color: #ffffff;
          text-shadow: 0 0 10px #00ffff;
        }
      `}</style>
    </>
  );
}

export default ContactPage;