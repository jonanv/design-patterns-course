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

import { COLORS } from "../helpers/colors.ts";


class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log('%cLas esferas de Dragon han sido creadas', COLORS.green);
        }

        return DragonBalls.instance;
    }

    public collectBalls(): void {
        if (this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log(`Esfera recolectada. Total esferas: ${ this.ballsCollected }`);
            return;
        }

        console.log('Ya se han recolectado las 7 esferas del Dragón, invoca a Shen-long');
    }

    public summonShenLong(): void {
        if (this.ballsCollected === 7) {
            console.log('\n%cShen-long ha sido invocado, pide tu deseo!\n', COLORS.yellow);
            this.ballsCollected = 0;
            return;
        }

        console.log(`\nAún faltan ${ 7 - this.ballsCollected } esferas del Dragón\n`);
    }
}

// function main() {
//     const dragonBall1 = DragonBalls.getInstance();
//     console.log(dragonBall1);

//     const dragonBall2 = DragonBalls.getInstance();
//     console.log(dragonBall2);
// }

function main() {
    const gokuDragonBalls = DragonBalls.getInstance();

    gokuDragonBalls.collectBalls();
    gokuDragonBalls.collectBalls();
    gokuDragonBalls.collectBalls();
    
    gokuDragonBalls.summonShenLong();
    
    const vegetaDragonBalls = DragonBalls.getInstance();
    
    vegetaDragonBalls.collectBalls();
    vegetaDragonBalls.collectBalls();
    vegetaDragonBalls.collectBalls();
    vegetaDragonBalls.collectBalls();

    gokuDragonBalls.summonShenLong();
    vegetaDragonBalls.summonShenLong();
}

main();