import Home from 'pages/Home';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const validUser = 'daniel';

const Admin = () => {
  const params = useParams();
  const user = params.user || '';

  if (user !== validUser) return <Navigate to="/" />;
  return (
    <div>Área restrita!</div>
  );
};

export default Admin;