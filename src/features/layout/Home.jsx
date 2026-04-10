import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <div className="container text-center mt-5 flex-grow-1">

        <h1 className="fw-bold mb-3">
          Gestión Inteligente de Gastos
        </h1>

        <p className="text-muted mb-4">
          Controla tus finanzas personales de forma fácil, rápida y segura.
        </p>

       

        {/* SECCIÓN FEATURES */}
        <div className="row mt-5">

          <div className="col-md-4 mb-4">
            <i className="bi bi-shield-lock fs-1"></i>
            <h5>Seguridad</h5>
            <p>Autenticación con JWT</p>
          </div>

          <div className="col-md-4 mb-4">
            <i className="bi bi-graph-up fs-1"></i>
            <h5>Control</h5>
            <p>Visualiza tus gastos fácilmente</p>
          </div>

          <div className="col-md-4 mb-4">
            <i className="bi bi-phone fs-1"></i>
            <h5>Responsive</h5>
            <p>Funciona en cualquier dispositivo</p>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}