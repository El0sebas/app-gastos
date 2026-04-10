import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api/api';
import Header from '../layout/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validar = () => {
    if (!email.includes('@')) return "Email inválido";
    if (password.length < 6) return "Mínimo 6 caracteres";
    return "";
  };

  const handleLogin = async () => {
    const err = validar();
    if (err) return setError(err);

    try {
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <>
      <Header />

      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <h3 className="text-center mb-3">Iniciar sesión</h3>

          <input
            className="form-control mb-2"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />

          <div className="input-group mb-2">
            <input
              type={show ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <button className="btn btn-outline-secondary" onClick={() => setShow(!show)}>
              👁
            </button>
          </div>

          {error && <small className="text-danger">{error}</small>}

          <button
            className="btn btn-primary mt-3"
            onClick={handleLogin}
            disabled={!email || !password}
          >
            Entrar
          </button>

          <p className="mt-3 text-center">
            ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
}