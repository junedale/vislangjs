export class ReturnValue extends Error {
    value;

    constructor(value) {
        super();
        this.value = value;
    }
}

import antlr4 from 'antlr4';
export class ErrorListener extends antlr4.error.ErrorListener {

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        throw new Error(`[${line} : ${column}] - Syntax Error: ${msg}`);
    }

}