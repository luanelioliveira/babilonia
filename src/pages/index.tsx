import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <h1>Home Page</h1>

      <p>Description Home page</p>

      <button onClick={() => router.push('/partners')}>Partners</button>
    </div>
  );
}
