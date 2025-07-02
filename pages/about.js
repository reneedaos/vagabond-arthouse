import Head from 'next/head';
import Nav from '../components/nav';
import NetworkVisualization from '../components/NetworkVisualization';
import DataTerminal from '../components/DataTerminal';
import MatrixRain from '../components/MatrixRain';
import SystemStatus from '../components/SystemStatus';
import { useState } from 'react';

function AboutPage() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skills = [
    {
      name: "DAO Governance",
      tooltip: "Design and implementation of governance frameworks that enable effective collective decision-making in decentralized organizations. Expertise in voting mechanisms, proposal systems, and conflict resolution protocols."
    },
    {
      name: "Protocol Design", 
      tooltip: "Architectural design of blockchain protocols with focus on scalability, security, and interoperability. Specializing in consensus mechanisms, smart contract architecture, and protocol economics."
    },
    {
      name: "Tokenomics",
      tooltip: "Economic modeling and design of token systems including utility tokens, governance tokens, and incentive mechanisms. Expertise in token distribution, vesting schedules, and economic sustainability models."
    },
    {
      name: "Web3 Marketing",
      tooltip: "Strategic marketing for Web3 projects including community building, narrative development, and growth hacking. Focus on technical audiences and scientific communities in the DeSci space."
    },
    {
      name: "Product Management",
      tooltip: "End-to-end product development from ideation to launch. Specializing in Web3 products, DeFi protocols, and scientific research tools. Expertise in user research, MVP development, and iterative design."
    },
    {
      name: "Network Analysis",
      tooltip: "Mathematical analysis of complex networks including social networks, blockchain networks, and organizational structures. Expertise in graph theory, centrality measures, and network dynamics modeling."
    },
    {
      name: "Web3 Technology",
      tooltip: "Deep technical knowledge of blockchain technologies, smart contracts, DeFi protocols, and Web3 infrastructure. Hands-on experience with Ethereum, Layer 2 solutions, and emerging blockchain platforms."
    }
  ];

  return (
    <>
      <NetworkVisualization />
      <MatrixRain />
      <div className="container">
        <Head>
          <title>About Renee Davis - Vagabond Arthouse</title>
        </Head>
        <SystemStatus />
        <Nav />
        <header className="header">
          <h1 className="title">About Me</h1>
          <p className="subtitle">Science isn't strange enough</p>
        </header>
      <main className="main">
        <section className="section">
          <h2 className="section-title">Who I am</h2>
          <p className="section-text">
            Renee Davis stands at the confluence of human psychology and technological innovation, orchestrating a paradigm shift in how we understand and optimize collective intelligence. Holding a Master of Science in Organizational Psychology and having pursued doctoral studies before pivoting to entrepreneurship, she has emerged as a luminary in the decentralized science (DeSci) movement, pioneering methodologies that bridge the empirical rigor of academia with the transformative potential of Web3 technologies.
          </p>
          <p className="section-text">
            Her magnum opus, TalentDAO, represents the first scientifically validated framework for measuring organizational health within decentralized autonomous organizations—a breakthrough that has redefined how we conceptualize governance, collaboration, and collective decision-making in the digital age. This groundbreaking work synthesizes her extensive background in computational social science with cutting-edge blockchain applications.
          </p>
          <p className="section-text">
            With over fifteen years of strategic leadership spanning Fortune 500 consulting at Deloitte (where she architected and incubated thirteen revolutionary human capital products) to Web3 innovation, Renee made the bold decision to leave her doctoral program to build companies and shape the DAO ecosystem. This pivotal choice has enabled her to cultivate a unique interdisciplinary expertise that positions her as a sought-after advisor to visionary organizations worldwide. Her thought leadership has graced international stages, where she articulates a compelling vision for the future of work—one where technology amplifies human potential rather than replacing it.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">What I do</h2>
          <p className="section-text">
            Through Vagabond Arthouse, I architect the foundational infrastructure for next-generation decentralized organizations, with a particular focus on scientific communities poised to revolutionize research and innovation. My consultancy serves as the invisible hand behind many of the most transformative projects in the Web3 ecosystem—the consultancy you've never heard of, yet one that has catalyzed the launch of initiatives you undoubtedly recognize.
          </p>
          <p className="section-text">
            Since 2020, I have specialized in guiding visionary projects through their most critical phase: the journey from conceptual brilliance to operational reality. My methodology combines rigorous organizational psychology principles with cutting-edge governance design, ensuring that each project not only launches successfully but scales sustainably while maintaining its core mission and values.
          </p>
          <p className="section-text">
            My work spans protocol design, tokenomics architecture, community building, and the development of governance frameworks that empower collective intelligence while maintaining scientific integrity. Each engagement is a bespoke collaboration, tailored to the unique challenges and opportunities that define the intersection of science, technology, and decentralized governance.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">My skills</h2>
          <ul className="skills-list">
            <li className="skill" title="Design and implementation of governance frameworks that enable effective collective decision-making in decentralized organizations. Expertise in voting mechanisms, proposal systems, and conflict resolution protocols.">DAO Governance</li>
            <li className="skill" title="Architectural design of blockchain protocols with focus on scalability, security, and interoperability. Specializing in consensus mechanisms, smart contract architecture, and protocol economics.">Protocol Design</li>
            <li className="skill" title="Economic modeling and design of token systems including utility tokens, governance tokens, and incentive mechanisms. Expertise in token distribution, vesting schedules, and economic sustainability models.">Tokenomics</li>
            <li className="skill" title="Strategic marketing for Web3 projects including community building, narrative development, and growth hacking. Focus on technical audiences and scientific communities in the DeSci space.">Web3 Marketing</li>
            <li className="skill" title="End-to-end product development from ideation to launch. Specializing in Web3 products, DeFi protocols, and scientific research tools. Expertise in user research, MVP development, and iterative design.">Product Management</li>
            <li className="skill" title="Mathematical analysis of complex networks including social networks, blockchain networks, and organizational structures. Expertise in graph theory, centrality measures, and network dynamics modeling.">Network Analysis</li>
            <li className="skill" title="Deep technical knowledge of blockchain technologies, smart contracts, DeFi protocols, and Web3 infrastructure. Hands-on experience with Ethereum, Layer 2 solutions, and emerging blockchain platforms.">Web3 Technology</li>
          </ul>
        </section>
      </main>
      <DataTerminal />
    </div>
    </>
  );
}

export default AboutPage;