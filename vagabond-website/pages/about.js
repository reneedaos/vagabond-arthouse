import Head from 'next/head';
import Nav from '../components/nav';

function AboutPage() {
  return (
    <div className="container">
      <Head>
        <title>About Me</title>
      </Head>
      <Nav />
      <header className="header">
        <h1 className="title">About Me</h1>
        <p className="subtitle">Science isn't strange enough</p>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section-title">Who I am</h2>
          <p className="section-text">
          Renee Davis, a visionary Organizational Psychologist and Data Scientist, is a pioneering leader in the DeSci movement and founder of TalentDAO, the first project to develop a scientifically validated tool for measuring DAO Health. With 15+ years spanning Deloitte Consulting (where she incubated 13 human capital products) and Web3, she bridges academia, tech, and decentralized systems as a sought-after advisor and innovator. A globally recognized speaker, her work merges computational social science with blockchain to redefine collaboration, governance, and the future of work.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">What I do</h2>
          <p className="section-text">
             I specialize in building decentralized organizations for scientific communities. Helping projects go from 0 to 1 since 2020.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">My skills</h2>
          <ul className="skills-list">
            <li className="skill">DAO Governance</li>
            <li className="skill">Protocol Design</li>
            <li className="skill">Tokenomics</li>
            <li className="skill">Web3 Marketing</li>
            <li className="skill">Prouct Management</li>
            <li className="skill">Network Analysis</li>
            <li className="skill">Web3 Technology</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;