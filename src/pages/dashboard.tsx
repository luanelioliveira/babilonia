import { useRouter } from 'next/router';

import { useAuth } from '../contexts/AuthContext';

export default function DashboardPage() {
  const { authenticated, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push('/');
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Description contact page</p>
      <p>User is logged: {authenticated ? 'Logged' : 'Not Logged'}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
