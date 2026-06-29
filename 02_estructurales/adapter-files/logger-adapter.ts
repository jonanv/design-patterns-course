import { Logger } from "@deno-library/logger";

interface ILoggerAdapter {
    file: string;

    writeLog(msg: string): void;
    writeError(msg: string): void;
    writeWarning(msg: string): void;
}

export class DenoLoggerAdpater implements ILoggerAdapter{
    public file: string;
    private logger = new Logger();

    constructor(file: string) {
        this.file = file;
    }

    writeLog(msg: string): void {
        this.logger.info(`[${ this.file } Log] ${ msg }`);
    }

    writeError(msg: string): void {
        this.logger.warn(`[${ this.file } Error] ${ msg }`);
    }

    writeWarning(msg: string): void {
        this.logger.error(`[${ this.file } Warning ] ${ msg }`);
    }
}

// const logger = new Logger();

// logger.info('');
// logger.warn('');
// logger.error('');
