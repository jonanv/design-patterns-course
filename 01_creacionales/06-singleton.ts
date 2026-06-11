/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */


class DragonBalls {
    private static instance: DragonBalls;

    private constructor() {
        
    }

    static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            console.log('No existe y se crea');
            DragonBalls.instance = new DragonBalls();
        }
        console.log('Ya existe');
        return DragonBalls.instance;
    }
}

function main() {
    const dragonBall1 = DragonBalls.getInstance();
    console.log(dragonBall1);

    const dragonBall2 = DragonBalls.getInstance();
    console.log(dragonBall2);
}

main();

