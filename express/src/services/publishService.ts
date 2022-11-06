import RabbitmqServer from '../rabbitmq-server';

export class PublishService {
    async sendMessage(message: string, exchange: string, routingKey: string){
        const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
        await server.start();
        //await server.publishInQueue('nest', JSON.stringify(message));
        await server.publishInExchange(exchange, routingKey, message);
    }
}