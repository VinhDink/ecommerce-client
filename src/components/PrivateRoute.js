import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return <Outlet />;
}

export default PrivateRoute;
