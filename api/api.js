import expres from 'express';

const api = expres();

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

export default api;
