import expres from 'express';
import { restaurantRoutes } from './routes/index.js';

const api = expres();

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(restaurantRoutes);

export default api;
