import antlr4 from 'antlr4';
import { ErrorListener } from './exceptions.js';
import VisLangLexer from "./lib/VisLangLexer.js";
import VisLangParser from "./lib/VisLangParser.js";
import { Resolver } from './scope.js';
import { Visitor } from './visitor.js';


export default class Interpreter {

    static interpret(input) {
        const chars = new antlr4.InputStream(input);
        const lexer = new VisLangLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new VisLangParser(tokens);
        const listener = new ErrorListener();
        parser.removeErrorListeners()
        parser.addErrorListener(listener);
        parser.buildParseTrees = true;

        try {
            const tree = parser.program();
            const visitor = new Visitor(new Resolver(null, false), new Map());
            visitor.visit(tree);
        } catch(e) {
            console.log(e.message)
        }
    }

}

Interpreter.interpret(`

a = 5;

if(a > 5) {
    print("a is greater than 5");
} else if(a < 5) {
    print("a is less than 5");
} else {
    print("Hello World!")
}

`);


/**
 * integer
 * double
 * boolean
 * string
 * array - wala pa
 * 
 * num = 0;
 * num2 = 1.0;
 * bool = true;
 * str = "Hello World!";
 * array = [1, 2, 3];
 * add = add(1, 2);
 * 
 * print(expr);
 * print(1 + 1);
 * print(a > b)
 * print("Hello World!");
 * 
 * control structures
 * if else
 * do while
 * while
 * for
 * 
 * if (a > b) {
 *     print("Hello World!");
 * } else {
 *    print("Hello World!");
 * }
 * 
 * if (a > b) {
 *    print("Hello World!");
 * else if (a < b) {
 *   print("Hello World!");
 * } else {
 *  print("Hello World!");
 * }
 * 
 * do {
 *  print("Hello World!");
 * } while (a > b);
 * 
 * while (a > b) {
 * print("Hello World!");
 * }
 * 
 * 
 * for (0 in 10) {
 * print("Hello World!");
 *  }
 * 
 * i = 0;
 * j = 10
 * for(i in j) {
 * print("Hello World!");
 * }
 * 
 * for (i = 0 in 10) {
 * print("Hello World!");
 * }
 * 
 * 
 * fun add(a, b) {
 *  return a + b;
 * }
 * 
 * fun add(a, b) {
 *  print(a + b);
 * }
 * 
 * add(a, b);
 * add(1, 2);
 * 
 */