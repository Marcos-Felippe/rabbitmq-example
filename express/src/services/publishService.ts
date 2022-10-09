import RabbitmqServer from '../rabbitmq-server';

export class PublishService {
    async sendMessage(message, exchange, routingKey){
        const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
        await server.start();
        //await server.publishInQueue('nest', JSON.stringify(message));
        await server.publishInExchange(exchange, routingKey, message);
    }
}