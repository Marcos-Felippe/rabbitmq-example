import express from 'express';
const router = express.Router();

import { PublishService } from '../services/publishService';

router.post('/', async function(req, res, next) {

  const message = JSON.stringify(req.body);
  const exchange = 'amq.direct';
  const rKey = 'ne';
  
  const publishService = new PublishService();

  // Enviando a mensagem, exchange e a routingKey para o Service
  publishService.sendMessage(message, exchange, rKey);
  
  res.send(req.body);
});

export default router;