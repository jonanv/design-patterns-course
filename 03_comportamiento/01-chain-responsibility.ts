/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 *
 * https://refactoring.guru/es/design-patterns/chain-of-responsibility
 */

import { COLORS } from "../helpers/colors.ts";

interface Handler {
    setNext(handler: Handler): Handler;
    handler(request: string): void; 
}

abstract class BaseHandler implements Handler {
    private nextHandler?: Handler;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
    
    handler(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handler(request);
        }
    }
}

// Soporte básico
class BasicSupport extends BaseHandler {

    override handler(request: string): void {
        if (request === 'basico') {
            console.log('%cSoporte básico: Resolviendo problema básico', COLORS.green);
            return;
        }
        
        console.log('%cSoporte básico: Pasando el problema a soporte avanzado', COLORS.yellow);
        super.handler(request);
    }
}

// Soporte técnico
class TechnicSupport extends BaseHandler {

    override handler(request: string): void {
        if (request === 'tecnico') {
            console.log('%cSoporte técnico: Resolviendo problema técnico', COLORS.green);
            return;
        }
        
        console.log('%cSoporte técnico: Pasando el problema a soporte avanzado', COLORS.yellow);
        super.handler(request);
    }
}

// Soporte avanzado
class AdvancedSupport extends BaseHandler {

    override handler(request: string): void {
        if (request === 'avanzado') {
            console.log('%cSoporte técnico: Resolviendo problema avanzado', COLORS.green);
            return;
        }
        
        console.log('%cSoporte avanzado: No hay nada que hacer ... bye bye', COLORS.red);
        super.handler(request);
    }
}
