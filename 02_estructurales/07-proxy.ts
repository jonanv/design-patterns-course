/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

import { COLORS } from "../helpers/colors.ts";

class Player {
    public name: string;
    public level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }
}
interface Room {
    enter(player: Player): void;
}

class SecretRoom implements Room {
    enter(player: Player): void {
        console.log(`Bienvenido a la sala secreta ${ player.name }`, COLORS.green);
        console.log('Un gran enemigo te espera');
    }
}

// 3. Clase Proxy - Magic Portal
class MagicPortal implements Room {
    private secrectRoom: SecretRoom;
    private minimunLevel: number = 10;

    constructor(room: Room) {
        this.secrectRoom = room;
    }

    enter(player: Player): void {
        if (player.level >= this.minimunLevel) {
            this.secrectRoom.enter(player);
            return;
        }

        console.log(`%cLo sinto mucho ${ player.name } tu nivel ${ player.level } no es suficiente para ingresar, mínimo nivel ${ this.minimunLevel }`, COLORS.red);
    }

}