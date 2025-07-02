import Head from 'next/head';
import Nav from '../components/nav';
import NetworkVisualization from '../components/NetworkVisualization';
import DataTerminal from '../components/DataTerminal';
import MatrixRain from '../components/MatrixRain';
import SystemStatus from '../components/SystemStatus';

function HomePage() {
  return (
    <>
      <NetworkVisualization />
      <MatrixRain />
      <div className="container">
        <Head>
          <title>Vagabond Arthouse - Strategic Consulting for Web3 & DeSci</title>
        </Head>
        <SystemStatus />
        <Nav />
        <header className="header">
          <h1 className="title">Vagabond Arthouse LLC</h1>
          <p className="subtitle">The consultancy of Renee Davis</p>
        </header>
        <main className="main">
          <section className="section">
            <h2 className="section-title">About me</h2>
            <p className="section-text">
              The consultancy you've never heard of, orchestrating the launch of projects you undoubtedly recognize. 
              At the intersection of rigorous science and transformative technology, we architect the future of 
              decentralized organizations—one breakthrough at a time.
            </p>
          </section>
          <section className="section">
            <h2 className="section-title">My Services</h2>
            <ul className="skills-list">
              <li className="skill">Organizational Psychology & Behavioral Analytics</li>
              <li className="skill">Strategic Product Development</li>
              <li className="skill">DAO Governance Architecture</li>
              <li className="skill">Web3 Protocol Design</li>
              <li className="skill">Tokenomics & Economic Modeling</li>
              <li className="skill">Scientific Community Building</li>
            </ul>
          </section>
        </main>
        <DataTerminal />
      </div>
    </>
  );
}

export default HomePage;