/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
*/

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando hamburgeusa de %cPollo', COLORS.yellow);
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparando hamburgeusa de %Res', COLORS.red);
    }
}

class Water implements Drink {
    pour(): void {
        console.log('Sirviendo bebida %cAgua', COLORS.blue);
    }
}

class Soda implements Drink {
    pour(): void {
        console.log('Sirviendo bebida %cGaseosa', COLORS.pink);
    }
}

abstract class RestaurantFactory {
    protected abstract createHamburger(): Hamburger;
    protected abstract createDrink(): Drink;
}

class FastFootRestaurantFactory extends RestaurantFactory {
    protected override createHamburger(): Hamburger {
        return new BeefHamburger();
    }

    protected override createDrink(): Drink {
        return new Soda();
    }
}

class HealthyRestaurantFactory extends RestaurantFactory {
    protected override createHamburger(): Hamburger {
        return new ChickenHamburger();
    }

    protected override createDrink(): Drink {
        return new Water();
    }
}

function main() {

}

main();