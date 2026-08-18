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

        // for (const user of this.users) {
        //     if (user !== sender) {
        //         user.receiveMessage(sender, message);
        //     }
        // }
    }
}

class User {
    private username: string;
    private chatRoom: ChatRoom;

    constructor(username: string) {
        this.username = username;
    }

    receiveMessage(user: User, message: string): void {

    }
}