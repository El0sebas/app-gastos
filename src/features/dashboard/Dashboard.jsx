import { useState, useEffect } from 'react';
import API from '../api/api';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Dashboard() {
  const [gastos, setGastos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [monto, setMonto] = useState('');
  const [error, setError] = useState('');

  const fetchGastos = async () => {
    try {
      const res = await API.get('/gastos');
      setGastos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGastos();
  }, []);

  const crearGasto = async () => {
    if (!titulo || !monto) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      await API.post('/gastos', { titulo, monto });
      setTitulo('');
      setMonto('');
      setError('');
      fetchGastos();
    } catch (err) {
      setError("Error al guardar");
    }
  };

  const total = gastos.reduce((acc, g) => acc + Number(g.monto), 0);

  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <div className="container mt-4 flex-grow-1">

        <h2 className="mb-4">Dashboard</h2>

        {/* TOTAL */}
        <div className="card text-center p-3 mb-4 shadow">
          <h5>Total Gastado</h5>
          <h3 className="text-success">
            ${total.toLocaleString('es-CO')}
          </h3>
        </div>

        {/* FORM */}
        <div className="card p-4 mb-4 shadow">
          <h5>Agregar Gasto</h5>

          {error && <p className="text-danger">{error}</p>}

          <div className="row">
            <div className="col-md-6">
              <input
                className="form-control mb-2"
                placeholder="Ej: Mercado"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Monto"
                value={monto}
                onChange={e => setMonto(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-primary w-100"
                onClick={crearGasto}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>

        {/* LISTA */}
        <h5>Historial</h5>

        {gastos.length === 0 ? (
          <p>No hay gastos aún</p>
        ) : (
          gastos.map(g => (
            <div key={g._id} className="card p-3 mb-2 shadow-sm d-flex justify-content-between">
              <span>{g.titulo}</span>
              <strong>${Number(g.monto).toLocaleString('es-CO')}</strong>
            </div>
          ))
        )}

      </div>

      <Footer />
    </div>
  );
}