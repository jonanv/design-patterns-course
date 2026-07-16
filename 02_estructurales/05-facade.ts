/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

class Proyector {
    turnOn(): void {
        console.log('Encendiendo proyector');
    }

    turnOff(): void {
        console.log('Apagando proyector');
    }
}

class SoundSystem {
    on(): void {
        console.log('Sistema de sonido encendido');
    }

    off(): void {
        console.log('Sistema de sonido apagado');
    }
}

class VideoPlayer {
    on(): void {
        console.log('Video player encendido');
    }

    play(movie: string): void {
        console.log(`Reproduciendo movie: ${ movie }`);
    }

    stop(): void {
        console.log(`Deteniendo película`);
    }

    off(): void {
        console.log(`Video player apagado`);
    }
}

class PopcornMaker {
    popingPopcorn(): void {
        console.log('Haciendo palomitas');
    }

    turnOffPopingPorncork(): void {
        console.log(`Deteniendo palomitas`);
    }
}