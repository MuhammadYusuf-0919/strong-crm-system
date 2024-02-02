import React from 'react';
import useToken from '@/hooks/useToken';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  [key: string]: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { token } = useToken();
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!token) {
  //     navigate('/sign-in');
  //   }
  // }, [token, navigate]);

  // return token ? <Component {...rest} /> : <Navigate to="/" replace />;
  return <Component {...rest} />;
};

export default ProtectedRoute;
