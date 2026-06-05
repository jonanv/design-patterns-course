/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */
import { COLORS } from "../helpers/colors.ts";

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    public displayConfiguration(): void {
        console.log(`
            Configuración de la computadora
            CPU: ${ this.cpu }
            RAM: ${ this.ram }
            STORAGE: ${ this.storage }
            GPU: ${ this.gpu ?? 'No tiene GPU' }
        `);
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer;
    }

    public setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    public setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    public setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    public setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    public build(): Computer {
        return this.computer;
    }
}

function main(): void {
    const computerBuilder = new ComputerBuilder()
                            .setCPU('Intel Core i5')
                            .setRAM('16GB')
                            .setStorage('500GB SSD')
                            .setGPU('NVIDIA GeForce RTX 5070 Ti / 5080')
                            .build();

    console.log('%cComputadora básica:', COLORS.blue);
    computerBuilder.displayConfiguration();

    const computerMacBook = new ComputerBuilder()
                            .setCPU('Apple M-series M1')
                            .setRAM('8GB')
                            .setRAM('24GB')
                            .setStorage('128GB SSD')
                            .setGPU('Apple Silicon M1')
                            .build();

    console.log('%cComputadora MacBook Pro:', COLORS.red);
    computerMacBook.displayConfiguration();
}

main();