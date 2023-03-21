import VisLangVisitor from "./lib/VisLangVisitor.js";
import VisLangLexer from "./lib/VisLangLexer.js";
import { Resolver } from "./scope.js";
import { ReturnValue } from "./exceptions.js";

export class Visitor extends VisLangVisitor {

    resolver
    funList
    // console

    constructor(resolver, funList) {
        super();
        this.resolver = resolver;
        this.funList = funList;
        // this.console = document.querySelector("#console");
    }

    visitIntLiteral(ctx) {
        return parseInt(ctx.Integer().getText());
    }

    visitStringLiteral(ctx) {
        let text = ctx.String().getText();
        return ctx.String().getText().substring(1, text.length - 1);
    }

    visitDoubleLiteral(ctx) {
        return parseFloat(ctx.Double().getText());
    }

    visitBooleanLiteral(ctx) {
        return ctx.Boolean().getText() === "true";
    }

    visitNull(ctx) {
        return null;
    }

    visitIdentifier(ctx) {
        return this.resolver.resolve(ctx.Identifier().getText());
    }

    visitAssignment(ctx) {
        let identifier = ctx.Identifier().getText();
        let value = this.visit(ctx.expr());

        if (ctx.expr() !== null) {
            this.resolver.assign(identifier, value);
        }

        return void 0;
    }

    visitAssignAction(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.op.type === VisLangLexer.Add_Assign) {
            return left += right;
        } else if (ctx.op.type === VisLangLexer.Sub_Assign) {
            return left -= right;
        } else if (ctx.op.type === VisLangLexer.Mul_Assign) {
            return left *= right;
        } else if (ctx.op.type === VisLangLexer.Div_Assign) {
            return left /= right;
        } else if (ctx.op.type === VisLangLexer.Mod_Assign) {
            return left %= right;
        }
    }

    visitGroupings(ctx) {
        return this.visit(ctx.expr());
    }

    visitBinaryAdd(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.op.type === VisLangLexer.Add) {
            return left + right;
        } else if (ctx.op.type === VisLangLexer.Sub) {
            return left - right;
        }
    }

    visitBinaryMul(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.op.type === VisLangLexer.Mul) {
            return left * right;
        } else if (ctx.op.type === VisLangLexer.Div) {
            return left / right;
        } else if (ctx.op.type === VisLangLexer.Mod) {
            return left % right;
        }
    }

    visitComparison(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.op.type === VisLangLexer.Langle) {
            return left < right;
        } else if (ctx.op.type === VisLangLexer.Leq) {
            return left <= right;
        } else if (ctx.op.type === VisLangLexer.Rangle) {
            return left > right;
        } else if (ctx.op.type === VisLangLexer.Req) {
            return left >= right;
        }
    }

    visitLogicalAnd(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));
        return left && right;
    }

    visitLogicalOr(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));
        return left || right;
    }

    visitEquality(ctx) {
        let left = this.visit(ctx.expr(0));
        let right = this.visit(ctx.expr(1));

        if (ctx.op.type === VisLangLexer.Eq) {
            return left === right;
        } else if (ctx.op.type === VisLangLexer.Neq) {
            return left !== right;
        }
    }

    visitPrint(ctx) {
        let value = this.visit(ctx.expr());
        console.log(value);
        // this.console.innerText = value;
    }

    visitBlock(ctx) {
        this.resolver = new Resolver(this.resolver, true);
        this.visitChildren(ctx);
        this.resolver = this.resolver.ancestor;
        return void 0;
    }

    visitReturnStatement(ctx) {
        let value = this.visit(ctx.expr());
        throw new ReturnValue(value);
    }

    visitIfStatement(ctx) {
        if (this.visit(ctx.ifStat().expr())) {
            return this.visit(ctx.ifStat().block());
        }

        ctx.elifStat().forEach(elifStat => {
            if (this.visit(elifStat.expr())) {
                return this.visit(elifStat.block());
            }
        });

        if (ctx.elseStat() !== null) {
            return this.visit(ctx.elseStat().block());
        }
        return void 0;
    }

    visitWhileStat(ctx) {
        while (this.visit(ctx.expr())) {
            this.visit(ctx.block());
        }
        return void 0;
    }

    visitDoWhileStat(ctx) {
        do {
            this.visit(ctx.block());
        } while (this.visit(ctx.expr()));
        return void 0;
    }

    visitForStat(ctx) {
        let start = null;
        let end = null;
        let resolver = null;
        let leftIsAssignment = ctx.leftass !== null;
        if (leftIsAssignment) {
            resolver = new Resolver(this.resolver, false);
            this.visit(ctx.assignment());
            start = this.resolver.resolve(ctx.leftass.Identifier().getText());
            resolver = resolver.ancestor;
        } else if (ctx.leftident !== null) {
            start = this.resolver.resolve(ctx.leftident.text);
        } else if (ctx.leftint !== null) {
            start = parseInt(ctx.leftint.text);
        }

        if (ctx.rightident !== null) {
            end = this.resolver.resolve(ctx.rightident.text);
        } else if (ctx.rightint !== null) {
            end = parseInt(ctx.rightint.text);
        }

        if (leftIsAssignment) {
            for (let i = start; i < end; i++) {
                resolver.reassign(ctx.leftass.Identifier().getText(), i);
                this.visit(ctx.block());
            }
        } else {
            for (let i = start; i < end; i++) {
                this.visit(ctx.block());
            }
        }


    }

    visitFunDecl(ctx) {
        let params = ctx.params() ? ctx.params().Identifier().map(param => param.getText()) : [];
        let name = ctx.Identifier().getText() + params.length;
        let body = ctx.block();
        this.funList.set(name, { params, body });
        return void 0;
    }

    visitFunCall(ctx) {
        let fun = null;
        let args = [];

        if (ctx.params() !== null) {
            let nameIdent = ctx.Identifier().getText() + ctx.params().Identifier().length;
            let nameExpr = ctx.Identifier().getText() + ctx.params().expr().length;
            args = ctx.params().expr().map(arg => this.visit(arg)).concat(ctx.params().Identifier().map(arg => this.visit(arg)));
            fun = this.funList.get(nameIdent) || this.funList.get(nameExpr);
        } else {
            fun = this.funList.get(ctx.Identifier().getText() + 0);
        }

        let funResolver = new Resolver(this.resolver, false);
        let visitor = new Visitor(funResolver, this.funList);

        for (let i = 0; i < args.length; i++) {
            funResolver.assignParam(fun.params[i], args[i]);
        }

        let value = void 0;

        try {
            value = visitor.visit(fun.body);
        } catch (e) {
            value = e.value;
        }

        return value;
    }

    visitFunCallExpr(ctx) {
        return this.visit(ctx.funCall())
    }
}