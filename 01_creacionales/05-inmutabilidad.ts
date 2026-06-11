/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
*
*  * Es útil para mantener un historial de estados en aplicaciones interactivas.
*
*/
import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
    readonly content: string;
    readonly cursorPointer: number;
    readonly unsavedChanges: boolean;

    constructor(content: string, cursorPointer: number, unsavedChanges: boolean) {
        this.content = content;
        this.cursorPointer = cursorPointer;
        this.unsavedChanges = unsavedChanges;
    }

    public displayState() {
        console.log('%cEstado del editor: ', COLORS.green);
        console.log(`
            Contenido: ${ this.content }
            Cursor pos: ${ this.cursorPointer }
            Unsaved changes: ${ this.unsavedChanges }
        `);
    }
}