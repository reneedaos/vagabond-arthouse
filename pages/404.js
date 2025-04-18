import Head from 'next/head';
import Nav from '../components/nav';

function ErrorPage() {
  return (
    <div>
      <Head>
        <title>404 Error</title>
      </Head>
      <Nav />
      <h1>404 Error</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default ErrorPage;