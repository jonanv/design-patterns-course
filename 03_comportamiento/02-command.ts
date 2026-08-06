/**
 * ! Patrón Command
 * Este patrón encapsula una solicitud como un objeto,
 * lo que le permite parametrizar otros objetos con diferentes solicitudes,
 * encolar solicitudes, o registrar solicitudes, y soporta operaciones que pueden deshacerse.
 *
 * Me gustó mucho la explicación de Refactoring Guru
 * https://refactoring.guru/es/design-patterns/command
 *
 * * Es útil cuando se necesita desacoplar el objeto que invoca
 * * la operación del objeto que sabe cómo realizarla.
 *
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Command {
    excecute(): void;
}

class Light {
    turnOn(): void {
        console.log('%cLa luz esta encendida', COLORS.yellow);
    }

    turnOff(): void {
        console.log('%cLa luz esta apagada', COLORS.yellow);
    }
}

class Fan {
    on(): void {
        console.log('%cEl ventilador esta encendido', COLORS.green);
    }

    off(): void {
        console.log('%cEl ventilador esta apagado', COLORS.green);
    }
}

class LightOnCommand implements Command {
    constructor(private light: Light) {}
    
    excecute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    constructor(private light: Light) {}

    excecute(): void {
        this.light.turnOff();
    }
}

class FanOnCommand implements Command {
    constructor(private fan: Fan) {}
    
    excecute(): void {
        this.fan.on();
    }
}

class FanOffCommand implements Command {
    constructor(private fan: Fan) {}

    excecute(): void {
        this.fan.off();
    }
}