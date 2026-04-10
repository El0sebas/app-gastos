import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <Link className="navbar-brand fw-bold" to="/">
        💰 GastosApp
      </Link>

      <div className="ms-auto">
        {!token ? (
          <>
            <Link className="btn btn-outline-light me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-success" to="/register">
              Registro
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/dashboard">
              Dashboard
            </Link>
            <button className="btn btn-danger" onClick={logout}>
              Salir
            </button>
          </>
        )}
      </div>
    </nav>
  );
}