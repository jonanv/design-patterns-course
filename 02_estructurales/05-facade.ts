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

import { COLORS } from "../helpers/colors.ts";

class Projector {
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

interface HomeTheaterFacadeOptions {
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopcornMaker;

    constructor({projector, soundSystem, videoPlayer, popcornMaker}: HomeTheaterFacadeOptions) {
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.videoPlayer = videoPlayer;
        this.popcornMaker = popcornMaker;
    }

    watchMovie(movie: string): void {
        console.log('%cPreparando para la película', COLORS.blue);
        this.projector.turnOn();
        this.soundSystem.on();
        this.popcornMaker.popingPopcorn();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);

        console.log('%cDisfrute la película', COLORS.blue);
    }

    endWatchMovie(): void {
        console.log('%cDeteniendo la película', COLORS.yellow);
        this.videoPlayer.stop();
        this.videoPlayer.off();
        this.popcornMaker.turnOffPopingPorncork();
        this.soundSystem.off();
        this.projector.turnOff();

        console.log('%cPelícula detenida', COLORS.yellow);
    }
}

function main(): void {

}

main();