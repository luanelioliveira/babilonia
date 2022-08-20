import { useRouter } from 'next/router';

import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
  const router = useRouter();
  const { authenticated, login } = useAuth();

  function handleLogin() {
    login();
    router.push('/dashboard');
  }

  // eslint-disable-next-line no-console
  console.log(`public env message: ${process.env.NEXT_PUBLIC_ENV_MESSAGE}`);

  return (
    <div>
      <h1>Home Page</h1>

      <p>Description Home page</p>

      <button onClick={() => router.push('/contact')}>Contact</button>

      <p>User is logged: {authenticated ? 'Logged' : 'Not Logged'}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export const getStaticProps = async () => {
  // eslint-disable-next-line no-console
  console.log(`private env message: ${process.env.PRIVATE_ENV_MESSAGE}`);

  return {
    props: {},
  };
};
