// Importaciones
import express from 'express';
import cors from 'cors';

// Importación de rutas
import authRoutes from './routes/authRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js'
// Inicialización
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());


// Ruta de prueba
app.get('/', (req, res) => {
res.send('Server on');
});

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/clientes',clienteRoutes)

// Exportar app
export default app;