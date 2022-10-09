import { Injectable } from '@nestjs/common';
import RabbitmqServer from './rabbitmq-server';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async publish(message: string) {
    const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
    await server.start();
    //await server.publishInQueue('express', message);
    await server.publishInExchange('node1', 'ex', message);

    return { Return: 'Enviado' };
  }
}
