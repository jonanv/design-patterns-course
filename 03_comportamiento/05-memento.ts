import { COLORS } from "../helpers/colors.ts";

/**
 * !Patrón Memento
 * Permite capturar y externalizar un estado interno de un objeto,
 * de manera que el objeto pueda ser restaurado a ese estado más tarde.
 *
 * * Es útil cuando se necesita guardar el estado de un objeto para poder
 * * volver a él en un futuro.
 *
 * https://refactoring.guru/es/design-patterns/memento
 */
class GameMemento {
    private level: number;
    private health: number;
    private position: string;

    constructor(level: number, health: number, position: string) {
        this.level = level;
        this.health = health;
        this.position = position;
    }

    getLevel(): number {
        return this.level;
    }

    getHealth(): number {
        return this.health;
    }

    getPosition(): string {
        return this.position;
    }
}

class Game {
    private level: number;
    private health: number;
    private position: string;

    constructor(level: number, health: number, position: string) {
        this.level = level;
        this.health = health;
        this.position = position;

        console.log(`
            Jugando en el nivel: ${ this.level }
            salud: ${ this.health }
            posición: ${ this.position }
        `);
    }

    save(): GameMemento {
        return new GameMemento(this.level, this.health, this.position);
    }

    play(level: number, health: number, position: string): void {
        this.level = level;
        this.health = health;
        this.position = position;

        console.log(`
            Jugando en el nivel: ${ this.level }
            salud: ${ this.health }
            posición: ${ this.position }
        `);
    }

    restore(memento: GameMemento): void {
        this.level = memento.getLevel();
        this.health = memento.getHealth();
        this.position = memento.getPosition();

        console.log(`
            \n%cProgreso restaurado
            %cRestauración en el nivel: %c${ this.level }
            salud: ${ this.health }
            posición: ${ this.position }
        `, COLORS.yellow, COLORS.blue, COLORS.white);
    }
}

class GameHistory {
    private mementos: GameMemento[] = [];

    push(memento: GameMemento): void {
        this.mementos.push(memento);
    }

    pop(): GameMemento | null {
        return this.mementos.pop() ?? null;
    }
}