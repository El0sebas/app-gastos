import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';
import Header from '../layout/Header';

export default function Register() {
  const [form, setForm] = useState({ nombre:'', email:'', password:'' });
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validar = () => {
    if (form.nombre.length < 3) return "Nombre muy corto";
    if (!form.email.includes('@')) return "Email inválido";
    if (form.password.length < 6) return "Mínimo 6 caracteres";
    if (!/[A-Z]/.test(form.password)) return "Debe tener una mayúscula";
    return "";
  };

  const handleRegister = async () => {
    const err = validar();
    if (err) return setError(err);

    try {
      await API.post('/auth/register', form);
      navigate('/login');
    } catch {
      setError("El correo ya existe");
    }
  };

  return (
    <>
      <Header />

      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <h3 className="text-center mb-3">Registro</h3>

          <input className="form-control mb-2"
            placeholder="Nombre"
            onChange={e => setForm({...form, nombre:e.target.value})}
          />

          <input className="form-control mb-2"
            placeholder="Email"
            onChange={e => setForm({...form, email:e.target.value})}
          />

          <div className="input-group mb-2">
            <input
              type={show ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              onChange={e => setForm({...form, password:e.target.value})}
            />
            <button className="btn btn-outline-secondary" onClick={() => setShow(!show)}>
              👁
            </button>
          </div>

          {error && <small className="text-danger">{error}</small>}

          <button
            className="btn btn-success mt-3"
            onClick={handleRegister}
            disabled={!form.nombre || !form.email || !form.password}
          >
            Registrarse
          </button>
        </div>
      </div>
    </>
  );
}