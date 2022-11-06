import RabbitmqServer from '../rabbitmq-server';

export class ConsumeService {
    async consumeMessages(queue: string){
        const server = new RabbitmqServer('amqp://admin:admin@localhost:5672');
        await server.start();
        await server.consume(queue, (message) => console.log(message.content.toString()));
    }
}