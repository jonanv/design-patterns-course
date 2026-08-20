/**
 * ! Patrón mediator
 * Es un patrón de diseño de comportamiento que ayuda a reducir
 * las dependencias desordenadas entre objetos.
 * Este patrón limita la comunicación directa entre ellos,
 * haciendo que solo interactúen a través de un objeto mediador.
 *
 * * Es útil reducir la complejidad de las relaciones entre objetos
 *
 * https://refactoring.guru/es/design-patterns/mediator
 */

import { COLORS } from "../helpers/colors.ts";

class ChatRoom {
    private users: User[] = [];
    public title: string;

    constructor(title: string) {
        this.title = title;
    }

    addUser(user: User): void {
        this.users.push(user)
    }

    sendMensage(sender: User, message: string): void {
        const usersToSend = this.users.filter((user) => user !== sender);

        for (const user of usersToSend) {
            user.receiveMessage(sender, message)
            // if (user !== sender) {
            //     user.receiveMessage(sender, message);
            // }
        }
    }
}

class User {
    private username: string;
    private chatRoom: ChatRoom;

    constructor(username: string, chatRoom: ChatRoom) {
        this.username = username;
        this.chatRoom = chatRoom;

        this.chatRoom.addUser(this);
    }

    sendMessage(message: string): void {
        console.log(`\n\n\n%c${ this.username } envía: %c${ message }`, 
            COLORS.blue, 
            COLORS.white
        );
        this.chatRoom.sendMensage(this, message);
    }

    receiveMessage(sender: User, message: string): void {
        console.log(`%c${ this.username } recibe de ${ sender.username }: %c${ message }`, 
            COLORS.blue, 
            COLORS.white
        );
    }
}

function main(): void {
    const chatRoom = new ChatRoom('Grupo de trabajo');

    const user1 = new User('Fernando', chatRoom);
    const user2 = new User('Gastón', chatRoom);
    const user3 = new User('Mariangel', chatRoom);

    user1.sendMessage('Hola a todos!');
    user2.sendMessage('Hola Fernando ¿como estas?');
    user3.sendMessage('Hola Fernando, Gastón ¿como estan?');

    console.log('\n\n');
}

main();