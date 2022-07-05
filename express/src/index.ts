import express from 'express';

import indexRouter from './routes';
import rabbitmqTestRouter from './routes/rabbitmq-test';
import RabbitmqServer from './rabbitmq-server';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/', indexRouter);
app.use('/', rabbitmqTestRouter);

// chamando os metodos necessarios para criar um consumer do rabbitmq
const consumer = async () => {
  const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
  await server.start();
  await server.consume('express', (message) => console.log(message.content.toString()));
}

consumer();

app.listen(3001);