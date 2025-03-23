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
        <p className="subtitle">Get to know me better</p>
      </header>
      <main className="main">
        <section className="section">
          <h2 className="section-title">Who I am</h2>
          <p className="section-text">
            I'm a developer and designer with a passion for building fast, scalable, and user-friendly websites. I've been working in the industry for several years and have a strong background in front-end development, back-end development, and design.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">What I do</h2>
          <p className="section-text">
            I specialize in building custom websites, web applications, and mobile applications. I also provide services such as website maintenance, updates, and optimization.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">My skills</h2>
          <ul className="skills-list">
            <li className="skill">HTML/CSS</li>
            <li className="skill">JavaScript</li>
            <li className="skill">React</li>
            <li className="skill">Next.js</li>
            <li className="skill">Node.js</li>
            <li className="skill">Express.js</li>
            <li className="skill">MongoDB</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;