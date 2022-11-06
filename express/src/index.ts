import express from 'express';

import rabbitmqPublishRoute from './routes/rabbitmq-publish';
import { ConsumeService } from './services/consumeService';

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/express', rabbitmqPublishRoute);

const queue = 'express';

// chamando o service para criar um consumer do rabbitmq
const consumer = new ConsumeService();
consumer.consumeMessages(queue);

app.listen(3001);