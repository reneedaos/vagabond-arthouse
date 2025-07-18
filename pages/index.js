import Head from 'next/head';
import Nav from '../components/nav';
import NetworkVisualization from '../components/NetworkVisualization';
import DataTerminal from '../components/DataTerminal';
import MatrixRain from '../components/MatrixRain';
import SystemStatus from '../components/SystemStatus';
import { useState, useEffect } from 'react';

function HomePage() {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [tooltipBounds, setTooltipBounds] = useState({ top: 0, left: 0, width: 0, height: 0 });

  const services = [
    {
      title: "Organizational Psychology & Behavioral Analytics",
      description: "Applied research in human behavior within decentralized organizations. Data-driven insights into team dynamics, decision-making patterns, and collective intelligence optimization using advanced statistical methods and network analysis."
    },
    {
      title: "Strategic Product Development",
      description: "End-to-end product strategy from concept to market launch. Specializing in Web3 products, DeFi protocols, and scientific research tools. Expertise in user research, technical specifications, go-to-market strategy, and iterative development methodologies."
    },
    {
      title: "DAO Governance Architecture",
      description: "Design and implementation of governance systems for decentralized autonomous organizations. Focus on voting mechanisms, proposal frameworks, dispute resolution, treasury management, and sustainable decision-making processes that scale with community growth."
    },
    {
      title: "Web3 Protocol Design",
      description: "Technical architecture and design of blockchain protocols with emphasis on scalability, security, and interoperability. Specializing in consensus mechanisms, smart contract systems, protocol economics, and integration with existing Web3 infrastructure."
    },
    {
      title: "Tokenomics & Economic Modeling",
      description: "Mathematical modeling and economic design of token systems including utility tokens, governance tokens, and complex incentive mechanisms. Expertise in distribution models, vesting schedules, inflation/deflation mechanics, and long-term economic sustainability analysis."
    },
    {
      title: "Scientific Community Building",
      description: "Building and nurturing scientific research communities in the DeSci space. Focus on researcher onboarding, collaboration frameworks, peer review systems, open science practices, and creating sustainable funding mechanisms for decentralized research initiatives."
    }
  ];

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
              {services.map((service, index) => (
                <li 
                  key={index}
                  className="skill"
                  onMouseEnter={() => setActiveTooltip(index)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  {service.title}
                  {activeTooltip === index && (
                    <div className="tooltip show">
                      <div className="tooltip-content">
                        {service.description}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </main>
        <DataTerminal />
      </div>
      
    </>
  );
}

export default HomePage;