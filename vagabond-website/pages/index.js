import Head from 'next/head';
import Nav from '../components/nav';

function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>My Website</title>
      </Head>
      <Nav />
      <header className="header">
        <h1 className="title">Vagabond Arthouse LLC</h1>
        <p className="subtitle">The consultancy of Renee Davis</p>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section-title">About me</h2>
          <p className="section-text">Unique description that sounds cool</p>
        </section>
        <section className="section">
          <h2 className="section-title">My Services</h2>
          <ul className="skills-list">
            <li className="skill">Data Science</li>
            <li className="skill">Product Management</li>
            <li className="skill">DAO Governance</li>
            <li className="skill">Web3 Technology</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default HomePage;