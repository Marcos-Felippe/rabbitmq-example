import express from 'express';

import rabbitmqPublishRoute from './routes/rabbitmq-publish';
import RabbitmqServer from './rabbitmq-server';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/express', rabbitmqPublishRoute);

// chamando os metodos necessarios para criar um consumer do rabbitmq
const consumer = async () => {
  const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
  await server.start();
  await server.consume('express', (message) => console.log(message.content.toString()));
}

consumer();

app.listen(3001);