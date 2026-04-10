# 💰 Gastos App

Aplicación web full stack para la gestión inteligente de gastos personales.
Permite registrar, visualizar y controlar tus finanzas en tiempo real de forma segura y moderna.

---

## 🚀 Demo

👉 Próximamente (deploy en Vercel)

---

## 📌 Características

* 🔐 Autenticación con JWT
* 👤 Registro e inicio de sesión seguro
* 💵 CRUD de gastos (crear, editar, eliminar)
* 📊 Dashboard con resumen total
* 📅 Control de fechas
* 📱 PWA (instalable como app)
* ⚡ Interfaz moderna y responsive

---

## 🛠️ Tecnologías

### Frontend

* React.js
* React Router DOM
* Bootstrap
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* bcrypt

---

## 📂 Estructura del proyecto

gastos-app/
├── backend/
└── frontend/

---

## ⚙️ Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/gastos-app.git
cd gastos-app
```

---

### 2. Backend

```bash
cd backend
npm install
```

Crear archivo `.env`:

```env
MONGO_URI=TU_URI
JWT_SECRET=TU_SECRET
```

Ejecutar:

```bash
node server.js
```

---

### 3. Frontend

```bash
cd frontend
npm install
npm start
```

---

## 📦 Build (PWA)

```bash
npm run build
npx serve -s build
```

---

## 🔐 Autenticación

El sistema utiliza JWT para proteger rutas.
Cada usuario solo puede acceder a sus propios gastos.

---

## 📱 PWA

* Instalación en dispositivos
* Cache con Service Worker
* Funciona parcialmente offline

---

## 📈 Mejoras futuras

* Gráficas (charts)
* Categorías de gastos
* Exportación a Excel
* Notificaciones

---

## 👨‍💻 Autor

Sebastián Madrigal
