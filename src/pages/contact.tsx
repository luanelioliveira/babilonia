import { useRouter } from 'next/router';

export default function ContactPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Description contact page</p>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
