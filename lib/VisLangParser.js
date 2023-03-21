// Generated from ./grammar/VisLang.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import VisLangVisitor from './VisLangVisitor.js';

const serializedATN = [4,1,45,254,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,4,1,49,8,1,11,1,12,1,50,1,2,1,2,1,3,1,3,1,
3,1,3,3,3,59,8,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,69,8,4,10,4,12,4,72,
9,4,1,4,1,4,1,4,5,4,77,8,4,10,4,12,4,80,9,4,3,4,82,8,4,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,3,5,94,8,5,1,6,1,6,5,6,98,8,6,10,6,12,6,101,9,6,1,
6,3,6,104,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
3,12,151,8,12,1,12,1,12,1,12,3,12,156,8,12,1,12,1,12,1,12,1,12,1,12,1,13,
1,13,3,13,165,8,13,1,14,1,14,1,14,3,14,170,8,14,1,14,1,14,1,14,1,14,3,14,
176,8,14,1,14,3,14,179,8,14,1,15,1,15,1,15,3,15,184,8,15,1,15,1,15,1,16,
1,16,1,16,1,16,5,16,192,8,16,10,16,12,16,195,9,16,1,16,3,16,198,8,16,1,17,
1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,3,18,220,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,
18,243,8,18,10,18,12,18,246,9,18,1,19,1,19,1,19,1,19,3,19,252,8,19,1,19,
3,70,78,99,1,36,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
0,5,1,0,9,11,1,0,12,13,1,0,14,17,1,0,18,19,1,0,21,25,275,0,40,1,0,0,0,2,
48,1,0,0,0,4,52,1,0,0,0,6,54,1,0,0,0,8,81,1,0,0,0,10,93,1,0,0,0,12,95,1,
0,0,0,14,105,1,0,0,0,16,113,1,0,0,0,18,122,1,0,0,0,20,127,1,0,0,0,22,137,
1,0,0,0,24,145,1,0,0,0,26,164,1,0,0,0,28,178,1,0,0,0,30,180,1,0,0,0,32,193,
1,0,0,0,34,199,1,0,0,0,36,219,1,0,0,0,38,247,1,0,0,0,40,41,3,2,1,0,41,42,
5,0,0,1,42,1,1,0,0,0,43,49,3,10,5,0,44,49,3,4,2,0,45,46,3,36,18,0,46,47,
5,7,0,0,47,49,1,0,0,0,48,43,1,0,0,0,48,44,1,0,0,0,48,45,1,0,0,0,49,50,1,
0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,3,1,0,0,0,52,53,3,6,3,0,53,5,1,0,0,
0,54,55,5,26,0,0,55,56,5,44,0,0,56,58,5,1,0,0,57,59,3,8,4,0,58,57,1,0,0,
0,58,59,1,0,0,0,59,60,1,0,0,0,60,61,5,2,0,0,61,62,5,3,0,0,62,63,3,32,16,
0,63,64,5,4,0,0,64,7,1,0,0,0,65,70,5,44,0,0,66,67,5,5,0,0,67,69,5,44,0,0,
68,66,1,0,0,0,69,72,1,0,0,0,70,71,1,0,0,0,70,68,1,0,0,0,71,82,1,0,0,0,72,
70,1,0,0,0,73,78,3,36,18,0,74,75,5,5,0,0,75,77,3,36,18,0,76,74,1,0,0,0,77,
80,1,0,0,0,78,79,1,0,0,0,78,76,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,81,65,
1,0,0,0,81,73,1,0,0,0,82,9,1,0,0,0,83,84,3,38,19,0,84,85,5,7,0,0,85,94,1,
0,0,0,86,94,3,12,6,0,87,94,3,20,10,0,88,94,3,22,11,0,89,94,3,24,12,0,90,
91,3,26,13,0,91,92,5,7,0,0,92,94,1,0,0,0,93,83,1,0,0,0,93,86,1,0,0,0,93,
87,1,0,0,0,93,88,1,0,0,0,93,89,1,0,0,0,93,90,1,0,0,0,94,11,1,0,0,0,95,99,
3,14,7,0,96,98,3,16,8,0,97,96,1,0,0,0,98,101,1,0,0,0,99,100,1,0,0,0,99,97,
1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,102,104,3,18,9,0,103,102,1,0,0,0,
103,104,1,0,0,0,104,13,1,0,0,0,105,106,5,27,0,0,106,107,5,1,0,0,107,108,
3,36,18,0,108,109,5,2,0,0,109,110,5,3,0,0,110,111,3,32,16,0,111,112,5,4,
0,0,112,15,1,0,0,0,113,114,5,28,0,0,114,115,5,27,0,0,115,116,5,1,0,0,116,
117,3,36,18,0,117,118,5,2,0,0,118,119,5,3,0,0,119,120,3,32,16,0,120,121,
5,4,0,0,121,17,1,0,0,0,122,123,5,28,0,0,123,124,5,3,0,0,124,125,3,32,16,
0,125,126,5,4,0,0,126,19,1,0,0,0,127,128,5,30,0,0,128,129,5,3,0,0,129,130,
3,32,16,0,130,131,5,4,0,0,131,132,5,31,0,0,132,133,5,1,0,0,133,134,3,36,
18,0,134,135,5,2,0,0,135,136,5,7,0,0,136,21,1,0,0,0,137,138,5,31,0,0,138,
139,5,1,0,0,139,140,3,36,18,0,140,141,5,2,0,0,141,142,5,3,0,0,142,143,3,
32,16,0,143,144,5,4,0,0,144,23,1,0,0,0,145,146,5,29,0,0,146,150,5,1,0,0,
147,151,3,38,19,0,148,151,5,44,0,0,149,151,5,41,0,0,150,147,1,0,0,0,150,
148,1,0,0,0,150,149,1,0,0,0,151,152,1,0,0,0,152,155,5,35,0,0,153,156,5,44,
0,0,154,156,5,41,0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,157,1,0,0,0,157,
158,5,2,0,0,158,159,5,3,0,0,159,160,3,32,16,0,160,161,5,4,0,0,161,25,1,0,
0,0,162,165,3,28,14,0,163,165,3,30,15,0,164,162,1,0,0,0,164,163,1,0,0,0,
165,27,1,0,0,0,166,167,5,32,0,0,167,169,5,1,0,0,168,170,3,36,18,0,169,168,
1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,179,5,2,0,0,172,173,5,33,0,0,
173,175,5,1,0,0,174,176,3,36,18,0,175,174,1,0,0,0,175,176,1,0,0,0,176,177,
1,0,0,0,177,179,5,2,0,0,178,166,1,0,0,0,178,172,1,0,0,0,179,29,1,0,0,0,180,
181,5,44,0,0,181,183,5,1,0,0,182,184,3,8,4,0,183,182,1,0,0,0,183,184,1,0,
0,0,184,185,1,0,0,0,185,186,5,2,0,0,186,31,1,0,0,0,187,188,3,36,18,0,188,
189,5,7,0,0,189,192,1,0,0,0,190,192,3,10,5,0,191,187,1,0,0,0,191,190,1,0,
0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,197,1,0,0,0,195,
193,1,0,0,0,196,198,3,34,17,0,197,196,1,0,0,0,197,198,1,0,0,0,198,33,1,0,
0,0,199,200,5,34,0,0,200,201,3,36,18,0,201,202,5,7,0,0,202,35,1,0,0,0,203,
204,6,18,-1,0,204,205,5,8,0,0,205,220,3,36,18,17,206,207,5,13,0,0,207,220,
3,36,18,16,208,220,5,41,0,0,209,220,5,42,0,0,210,220,5,40,0,0,211,220,5,
39,0,0,212,220,5,44,0,0,213,220,5,38,0,0,214,215,5,1,0,0,215,216,3,36,18,
0,216,217,5,2,0,0,217,220,1,0,0,0,218,220,3,30,15,0,219,203,1,0,0,0,219,
206,1,0,0,0,219,208,1,0,0,0,219,209,1,0,0,0,219,210,1,0,0,0,219,211,1,0,
0,0,219,212,1,0,0,0,219,213,1,0,0,0,219,214,1,0,0,0,219,218,1,0,0,0,220,
244,1,0,0,0,221,222,10,15,0,0,222,223,7,0,0,0,223,243,3,36,18,16,224,225,
10,14,0,0,225,226,7,1,0,0,226,243,3,36,18,15,227,228,10,13,0,0,228,229,7,
2,0,0,229,243,3,36,18,14,230,231,10,12,0,0,231,232,7,3,0,0,232,243,3,36,
18,13,233,234,10,11,0,0,234,235,7,4,0,0,235,243,3,36,18,12,236,237,10,10,
0,0,237,238,5,36,0,0,238,243,3,36,18,11,239,240,10,9,0,0,240,241,5,37,0,
0,241,243,3,36,18,10,242,221,1,0,0,0,242,224,1,0,0,0,242,227,1,0,0,0,242,
230,1,0,0,0,242,233,1,0,0,0,242,236,1,0,0,0,242,239,1,0,0,0,243,246,1,0,
0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,37,1,0,0,0,246,244,1,0,0,0,247,248,
5,44,0,0,248,251,5,20,0,0,249,252,3,36,18,0,250,252,3,30,15,0,251,249,1,
0,0,0,251,250,1,0,0,0,252,39,1,0,0,0,23,48,50,58,70,78,81,93,99,103,150,
155,164,169,175,178,183,191,193,197,219,242,244,251];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class VisLangParser extends antlr4.Parser {

    static grammarFileName = "VisLang.g4";
    static literalNames = [ null, "'('", "')'", "'{'", "'}'", "','", "':'", 
                            "';'", "'!'", "'*'", "'/'", "'%'", "'+'", "'-'", 
                            "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", 
                            "'='", "'+='", "'-='", "'*='", "'/='", "'%='", 
                            "'fun'", "'if'", "'else'", "'for'", "'do'", 
                            "'while'", "'print'", "'println'", "'return'", 
                            "'in'", "'and'", "'or'", "'null'" ];
    static symbolicNames = [ null, "Lparen", "Rparen", "Lbrace", "Rbrace", 
                             "Comma", "Colon", "Semicolon", "Not", "Mul", 
                             "Div", "Mod", "Add", "Sub", "Langle", "Rangle", 
                             "Leq", "Req", "Eqeq", "Neq", "Assign", "Add_Assign", 
                             "Sub_Assign", "Mul_Assign", "Div_Assign", "Mod_Assign", 
                             "Fun", "If", "Else", "For", "Do", "While", 
                             "Print", "Println", "Return", "In", "And", 
                             "Or", "Null", "Boolean", "String", "Integer", 
                             "Double", "Comment", "Identifier", "Whitespace" ];
    static ruleNames = [ "program", "body", "declaration", "funDecl", "params", 
                         "statement", "ifStatement", "ifStat", "elifStat", 
                         "elseStat", "doWhileStat", "whileStat", "forStat", 
                         "callStat", "printCall", "funCall", "block", "returnStatement", 
                         "expr", "assignment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VisLangParser.ruleNames;
        this.literalNames = VisLangParser.literalNames;
        this.symbolicNames = VisLangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 18:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 15);
    		case 1:
    			return this.precpred(this._ctx, 14);
    		case 2:
    			return this.precpred(this._ctx, 13);
    		case 3:
    			return this.precpred(this._ctx, 12);
    		case 4:
    			return this.precpred(this._ctx, 11);
    		case 5:
    			return this.precpred(this._ctx, 10);
    		case 6:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VisLangParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.body();
	        this.state = 41;
	        this.match(VisLangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VisLangParser.RULE_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 48;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 43;
	                this.statement();
	                break;

	            case 2:
	                this.state = 44;
	                this.declaration();
	                break;

	            case 3:
	                this.state = 45;
	                this.expr(0);
	                this.state = 46;
	                this.match(VisLangParser.Semicolon);
	                break;

	            }
	            this.state = 50; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3959431426) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6083) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, VisLangParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.funDecl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funDecl() {
	    let localctx = new FunDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, VisLangParser.RULE_funDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(VisLangParser.Fun);
	        this.state = 55;
	        this.match(VisLangParser.Identifier);
	        this.state = 56;
	        this.match(VisLangParser.Lparen);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8450) !== 0) || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 95) !== 0)) {
	            this.state = 57;
	            this.params();
	        }

	        this.state = 60;
	        this.match(VisLangParser.Rparen);
	        this.state = 61;
	        this.match(VisLangParser.Lbrace);
	        this.state = 62;
	        this.block();
	        this.state = 63;
	        this.match(VisLangParser.Rbrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, VisLangParser.RULE_params);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(VisLangParser.Identifier);
	            this.state = 70;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 66;
	                    this.match(VisLangParser.Comma);
	                    this.state = 67;
	                    this.match(VisLangParser.Identifier); 
	                }
	                this.state = 72;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.expr(0);
	            this.state = 78;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 74;
	                    this.match(VisLangParser.Comma);
	                    this.state = 75;
	                    this.expr(0); 
	                }
	                this.state = 80;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, VisLangParser.RULE_statement);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.assignment();
	            this.state = 84;
	            this.match(VisLangParser.Semicolon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.ifStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 87;
	            this.doWhileStat();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 88;
	            this.whileStat();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 89;
	            this.forStat();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 90;
	            this.callStat();
	            this.state = 91;
	            this.match(VisLangParser.Semicolon);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, VisLangParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.ifStat();
	        this.state = 99;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 96;
	                this.elifStat(); 
	            }
	            this.state = 101;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 102;
	            this.elseStat();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStat() {
	    let localctx = new IfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, VisLangParser.RULE_ifStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(VisLangParser.If);
	        this.state = 106;
	        this.match(VisLangParser.Lparen);
	        this.state = 107;
	        this.expr(0);
	        this.state = 108;
	        this.match(VisLangParser.Rparen);
	        this.state = 109;
	        this.match(VisLangParser.Lbrace);
	        this.state = 110;
	        this.block();
	        this.state = 111;
	        this.match(VisLangParser.Rbrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elifStat() {
	    let localctx = new ElifStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, VisLangParser.RULE_elifStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(VisLangParser.Else);
	        this.state = 114;
	        this.match(VisLangParser.If);
	        this.state = 115;
	        this.match(VisLangParser.Lparen);
	        this.state = 116;
	        this.expr(0);
	        this.state = 117;
	        this.match(VisLangParser.Rparen);
	        this.state = 118;
	        this.match(VisLangParser.Lbrace);
	        this.state = 119;
	        this.block();
	        this.state = 120;
	        this.match(VisLangParser.Rbrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStat() {
	    let localctx = new ElseStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, VisLangParser.RULE_elseStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(VisLangParser.Else);
	        this.state = 123;
	        this.match(VisLangParser.Lbrace);
	        this.state = 124;
	        this.block();
	        this.state = 125;
	        this.match(VisLangParser.Rbrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doWhileStat() {
	    let localctx = new DoWhileStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, VisLangParser.RULE_doWhileStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(VisLangParser.Do);
	        this.state = 128;
	        this.match(VisLangParser.Lbrace);
	        this.state = 129;
	        this.block();
	        this.state = 130;
	        this.match(VisLangParser.Rbrace);
	        this.state = 131;
	        this.match(VisLangParser.While);
	        this.state = 132;
	        this.match(VisLangParser.Lparen);
	        this.state = 133;
	        this.expr(0);
	        this.state = 134;
	        this.match(VisLangParser.Rparen);
	        this.state = 135;
	        this.match(VisLangParser.Semicolon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStat() {
	    let localctx = new WhileStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, VisLangParser.RULE_whileStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(VisLangParser.While);
	        this.state = 138;
	        this.match(VisLangParser.Lparen);
	        this.state = 139;
	        this.expr(0);
	        this.state = 140;
	        this.match(VisLangParser.Rparen);
	        this.state = 141;
	        this.match(VisLangParser.Lbrace);
	        this.state = 142;
	        this.block();
	        this.state = 143;
	        this.match(VisLangParser.Rbrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStat() {
	    let localctx = new ForStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, VisLangParser.RULE_forStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(VisLangParser.For);
	        this.state = 146;
	        this.match(VisLangParser.Lparen);
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 147;
	            localctx.leftass = this.assignment();
	            break;

	        case 2:
	            this.state = 148;
	            localctx.leftident = this.match(VisLangParser.Identifier);
	            break;

	        case 3:
	            this.state = 149;
	            localctx.leftint = this.match(VisLangParser.Integer);
	            break;

	        }
	        this.state = 152;
	        this.match(VisLangParser.In);
	        this.state = 155;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.state = 153;
	            localctx.rightident = this.match(VisLangParser.Identifier);
	            break;
	        case 41:
	            this.state = 154;
	            localctx.rightint = this.match(VisLangParser.Integer);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 157;
	        this.match(VisLangParser.Rparen);
	        this.state = 158;
	        this.match(VisLangParser.Lbrace);
	        this.state = 159;
	        this.block();
	        this.state = 160;
	        this.match(VisLangParser.Rbrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callStat() {
	    let localctx = new CallStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, VisLangParser.RULE_callStat);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.printCall();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.funCall();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printCall() {
	    let localctx = new PrintCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, VisLangParser.RULE_printCall);
	    var _la = 0;
	    try {
	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            localctx = new PrintContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.match(VisLangParser.Print);
	            this.state = 167;
	            this.match(VisLangParser.Lparen);
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8450) !== 0) || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 95) !== 0)) {
	                this.state = 168;
	                this.expr(0);
	            }

	            this.state = 171;
	            this.match(VisLangParser.Rparen);
	            break;
	        case 33:
	            localctx = new PrintlnContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 172;
	            this.match(VisLangParser.Println);
	            this.state = 173;
	            this.match(VisLangParser.Lparen);
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8450) !== 0) || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 95) !== 0)) {
	                this.state = 174;
	                this.expr(0);
	            }

	            this.state = 177;
	            this.match(VisLangParser.Rparen);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funCall() {
	    let localctx = new FunCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, VisLangParser.RULE_funCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(VisLangParser.Identifier);
	        this.state = 181;
	        this.match(VisLangParser.Lparen);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 8450) !== 0) || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 95) !== 0)) {
	            this.state = 182;
	            this.params();
	        }

	        this.state = 185;
	        this.match(VisLangParser.Rparen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, VisLangParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3892322562) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6083) !== 0)) {
	            this.state = 191;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 187;
	                this.expr(0);
	                this.state = 188;
	                this.match(VisLangParser.Semicolon);
	                break;

	            case 2:
	                this.state = 190;
	                this.statement();
	                break;

	            }
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 196;
	            this.returnStatement();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, VisLangParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(VisLangParser.Return);
	        this.state = 200;
	        this.expr(0);
	        this.state = 201;
	        this.match(VisLangParser.Semicolon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, VisLangParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnaryNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 204;
	            this.match(VisLangParser.Not);
	            this.state = 205;
	            this.expr(17);
	            break;

	        case 2:
	            localctx = new UnaryMinContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 206;
	            this.match(VisLangParser.Sub);
	            this.state = 207;
	            this.expr(16);
	            break;

	        case 3:
	            localctx = new IntLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 208;
	            this.match(VisLangParser.Integer);
	            break;

	        case 4:
	            localctx = new DoubleLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 209;
	            this.match(VisLangParser.Double);
	            break;

	        case 5:
	            localctx = new StringLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 210;
	            this.match(VisLangParser.String);
	            break;

	        case 6:
	            localctx = new BooleanLiteralContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 211;
	            this.match(VisLangParser.Boolean);
	            break;

	        case 7:
	            localctx = new IdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 212;
	            this.match(VisLangParser.Identifier);
	            break;

	        case 8:
	            localctx = new NullContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 213;
	            this.match(VisLangParser.Null);
	            break;

	        case 9:
	            localctx = new GroupingsContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 214;
	            this.match(VisLangParser.Lparen);
	            this.state = 215;
	            this.expr(0);
	            this.state = 216;
	            this.match(VisLangParser.Rparen);
	            break;

	        case 10:
	            localctx = new FunCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 218;
	            this.funCall();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 242;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BinaryMulContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, VisLangParser.RULE_expr);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 222;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 223;
	                    this.expr(16);
	                    break;

	                case 2:
	                    localctx = new BinaryAddContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, VisLangParser.RULE_expr);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 225;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===13)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 226;
	                    this.expr(15);
	                    break;

	                case 3:
	                    localctx = new ComparisonContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, VisLangParser.RULE_expr);
	                    this.state = 227;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 228;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 245760) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 229;
	                    this.expr(14);
	                    break;

	                case 4:
	                    localctx = new EqualityContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, VisLangParser.RULE_expr);
	                    this.state = 230;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 231;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 232;
	                    this.expr(13);
	                    break;

	                case 5:
	                    localctx = new AssignActionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, VisLangParser.RULE_expr);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 234;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 65011712) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 235;
	                    this.expr(12);
	                    break;

	                case 6:
	                    localctx = new LogicalAndContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, VisLangParser.RULE_expr);
	                    this.state = 236;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 237;
	                    this.match(VisLangParser.And);
	                    this.state = 238;
	                    this.expr(11);
	                    break;

	                case 7:
	                    localctx = new LogicalOrContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, VisLangParser.RULE_expr);
	                    this.state = 239;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 240;
	                    this.match(VisLangParser.Or);
	                    this.state = 241;
	                    this.expr(10);
	                    break;

	                } 
	            }
	            this.state = 246;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, VisLangParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(VisLangParser.Identifier);
	        this.state = 248;
	        this.match(VisLangParser.Assign);
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 249;
	            this.expr(0);
	            break;

	        case 2:
	            this.state = 250;
	            this.funCall();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

VisLangParser.EOF = antlr4.Token.EOF;
VisLangParser.Lparen = 1;
VisLangParser.Rparen = 2;
VisLangParser.Lbrace = 3;
VisLangParser.Rbrace = 4;
VisLangParser.Comma = 5;
VisLangParser.Colon = 6;
VisLangParser.Semicolon = 7;
VisLangParser.Not = 8;
VisLangParser.Mul = 9;
VisLangParser.Div = 10;
VisLangParser.Mod = 11;
VisLangParser.Add = 12;
VisLangParser.Sub = 13;
VisLangParser.Langle = 14;
VisLangParser.Rangle = 15;
VisLangParser.Leq = 16;
VisLangParser.Req = 17;
VisLangParser.Eqeq = 18;
VisLangParser.Neq = 19;
VisLangParser.Assign = 20;
VisLangParser.Add_Assign = 21;
VisLangParser.Sub_Assign = 22;
VisLangParser.Mul_Assign = 23;
VisLangParser.Div_Assign = 24;
VisLangParser.Mod_Assign = 25;
VisLangParser.Fun = 26;
VisLangParser.If = 27;
VisLangParser.Else = 28;
VisLangParser.For = 29;
VisLangParser.Do = 30;
VisLangParser.While = 31;
VisLangParser.Print = 32;
VisLangParser.Println = 33;
VisLangParser.Return = 34;
VisLangParser.In = 35;
VisLangParser.And = 36;
VisLangParser.Or = 37;
VisLangParser.Null = 38;
VisLangParser.Boolean = 39;
VisLangParser.String = 40;
VisLangParser.Integer = 41;
VisLangParser.Double = 42;
VisLangParser.Comment = 43;
VisLangParser.Identifier = 44;
VisLangParser.Whitespace = 45;

VisLangParser.RULE_program = 0;
VisLangParser.RULE_body = 1;
VisLangParser.RULE_declaration = 2;
VisLangParser.RULE_funDecl = 3;
VisLangParser.RULE_params = 4;
VisLangParser.RULE_statement = 5;
VisLangParser.RULE_ifStatement = 6;
VisLangParser.RULE_ifStat = 7;
VisLangParser.RULE_elifStat = 8;
VisLangParser.RULE_elseStat = 9;
VisLangParser.RULE_doWhileStat = 10;
VisLangParser.RULE_whileStat = 11;
VisLangParser.RULE_forStat = 12;
VisLangParser.RULE_callStat = 13;
VisLangParser.RULE_printCall = 14;
VisLangParser.RULE_funCall = 15;
VisLangParser.RULE_block = 16;
VisLangParser.RULE_returnStatement = 17;
VisLangParser.RULE_expr = 18;
VisLangParser.RULE_assignment = 19;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_program;
    }

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	EOF() {
	    return this.getToken(VisLangParser.EOF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_body;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Semicolon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VisLangParser.Semicolon);
	    } else {
	        return this.getToken(VisLangParser.Semicolon, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_declaration;
    }

	funDecl() {
	    return this.getTypedRuleContext(FunDeclContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_funDecl;
    }

	Fun() {
	    return this.getToken(VisLangParser.Fun, 0);
	};

	Identifier() {
	    return this.getToken(VisLangParser.Identifier, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	Lbrace() {
	    return this.getToken(VisLangParser.Lbrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	Rbrace() {
	    return this.getToken(VisLangParser.Rbrace, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitFunDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_params;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VisLangParser.Identifier);
	    } else {
	        return this.getToken(VisLangParser.Identifier, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VisLangParser.Comma);
	    } else {
	        return this.getToken(VisLangParser.Comma, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	Semicolon() {
	    return this.getToken(VisLangParser.Semicolon, 0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	doWhileStat() {
	    return this.getTypedRuleContext(DoWhileStatContext,0);
	};

	whileStat() {
	    return this.getTypedRuleContext(WhileStatContext,0);
	};

	forStat() {
	    return this.getTypedRuleContext(ForStatContext,0);
	};

	callStat() {
	    return this.getTypedRuleContext(CallStatContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_ifStatement;
    }

	ifStat() {
	    return this.getTypedRuleContext(IfStatContext,0);
	};

	elifStat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElifStatContext);
	    } else {
	        return this.getTypedRuleContext(ElifStatContext,i);
	    }
	};

	elseStat() {
	    return this.getTypedRuleContext(ElseStatContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_ifStat;
    }

	If() {
	    return this.getToken(VisLangParser.If, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	Lbrace() {
	    return this.getToken(VisLangParser.Lbrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	Rbrace() {
	    return this.getToken(VisLangParser.Rbrace, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElifStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_elifStat;
    }

	Else() {
	    return this.getToken(VisLangParser.Else, 0);
	};

	If() {
	    return this.getToken(VisLangParser.If, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	Lbrace() {
	    return this.getToken(VisLangParser.Lbrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	Rbrace() {
	    return this.getToken(VisLangParser.Rbrace, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitElifStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_elseStat;
    }

	Else() {
	    return this.getToken(VisLangParser.Else, 0);
	};

	Lbrace() {
	    return this.getToken(VisLangParser.Lbrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	Rbrace() {
	    return this.getToken(VisLangParser.Rbrace, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitElseStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_doWhileStat;
    }

	Do() {
	    return this.getToken(VisLangParser.Do, 0);
	};

	Lbrace() {
	    return this.getToken(VisLangParser.Lbrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	Rbrace() {
	    return this.getToken(VisLangParser.Rbrace, 0);
	};

	While() {
	    return this.getToken(VisLangParser.While, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	Semicolon() {
	    return this.getToken(VisLangParser.Semicolon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitDoWhileStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_whileStat;
    }

	While() {
	    return this.getToken(VisLangParser.While, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	Lbrace() {
	    return this.getToken(VisLangParser.Lbrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	Rbrace() {
	    return this.getToken(VisLangParser.Rbrace, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitWhileStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_forStat;
        this.leftass = null;
        this.leftident = null;
        this.leftint = null;
        this.rightident = null;
        this.rightint = null;
    }

	For() {
	    return this.getToken(VisLangParser.For, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	In() {
	    return this.getToken(VisLangParser.In, 0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	Lbrace() {
	    return this.getToken(VisLangParser.Lbrace, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	Rbrace() {
	    return this.getToken(VisLangParser.Rbrace, 0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VisLangParser.Identifier);
	    } else {
	        return this.getToken(VisLangParser.Identifier, i);
	    }
	};


	Integer = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VisLangParser.Integer);
	    } else {
	        return this.getToken(VisLangParser.Integer, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitForStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_callStat;
    }

	printCall() {
	    return this.getTypedRuleContext(PrintCallContext,0);
	};

	funCall() {
	    return this.getTypedRuleContext(FunCallContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitCallStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_printCall;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintContext extends PrintCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Print() {
	    return this.getToken(VisLangParser.Print, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitPrint(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.PrintContext = PrintContext;

class PrintlnContext extends PrintCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Println() {
	    return this.getToken(VisLangParser.Println, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitPrintln(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.PrintlnContext = PrintlnContext;

class FunCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_funCall;
    }

	Identifier() {
	    return this.getToken(VisLangParser.Identifier, 0);
	};

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitFunCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_block;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Semicolon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VisLangParser.Semicolon);
	    } else {
	        return this.getToken(VisLangParser.Semicolon, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_returnStatement;
    }

	Return() {
	    return this.getToken(VisLangParser.Return, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Semicolon() {
	    return this.getToken(VisLangParser.Semicolon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IdentifierContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(VisLangParser.Identifier, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.IdentifierContext = IdentifierContext;

class BinaryMulContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Mul() {
	    return this.getToken(VisLangParser.Mul, 0);
	};

	Div() {
	    return this.getToken(VisLangParser.Div, 0);
	};

	Mod() {
	    return this.getToken(VisLangParser.Mod, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitBinaryMul(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.BinaryMulContext = BinaryMulContext;

class ComparisonContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Langle() {
	    return this.getToken(VisLangParser.Langle, 0);
	};

	Rangle() {
	    return this.getToken(VisLangParser.Rangle, 0);
	};

	Leq() {
	    return this.getToken(VisLangParser.Leq, 0);
	};

	Req() {
	    return this.getToken(VisLangParser.Req, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitComparison(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.ComparisonContext = ComparisonContext;

class IntLiteralContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Integer() {
	    return this.getToken(VisLangParser.Integer, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitIntLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.IntLiteralContext = IntLiteralContext;

class LogicalAndContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	And() {
	    return this.getToken(VisLangParser.And, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitLogicalAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.LogicalAndContext = LogicalAndContext;

class FunCallExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	funCall() {
	    return this.getTypedRuleContext(FunCallContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitFunCallExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.FunCallExprContext = FunCallExprContext;

class AssignActionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Add_Assign() {
	    return this.getToken(VisLangParser.Add_Assign, 0);
	};

	Sub_Assign() {
	    return this.getToken(VisLangParser.Sub_Assign, 0);
	};

	Mul_Assign() {
	    return this.getToken(VisLangParser.Mul_Assign, 0);
	};

	Div_Assign() {
	    return this.getToken(VisLangParser.Div_Assign, 0);
	};

	Mod_Assign() {
	    return this.getToken(VisLangParser.Mod_Assign, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitAssignAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.AssignActionContext = AssignActionContext;

class NullContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Null() {
	    return this.getToken(VisLangParser.Null, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitNull(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.NullContext = NullContext;

class StringLiteralContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	String() {
	    return this.getToken(VisLangParser.String, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitStringLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.StringLiteralContext = StringLiteralContext;

class GroupingsContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Lparen() {
	    return this.getToken(VisLangParser.Lparen, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Rparen() {
	    return this.getToken(VisLangParser.Rparen, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitGroupings(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.GroupingsContext = GroupingsContext;

class UnaryMinContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Sub() {
	    return this.getToken(VisLangParser.Sub, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitUnaryMin(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.UnaryMinContext = UnaryMinContext;

class DoubleLiteralContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Double() {
	    return this.getToken(VisLangParser.Double, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitDoubleLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.DoubleLiteralContext = DoubleLiteralContext;

class LogicalOrContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Or() {
	    return this.getToken(VisLangParser.Or, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitLogicalOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.LogicalOrContext = LogicalOrContext;

class BooleanLiteralContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Boolean() {
	    return this.getToken(VisLangParser.Boolean, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitBooleanLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.BooleanLiteralContext = BooleanLiteralContext;

class EqualityContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Eqeq() {
	    return this.getToken(VisLangParser.Eqeq, 0);
	};

	Neq() {
	    return this.getToken(VisLangParser.Neq, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitEquality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.EqualityContext = EqualityContext;

class UnaryNotContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Not() {
	    return this.getToken(VisLangParser.Not, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitUnaryNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.UnaryNotContext = UnaryNotContext;

class BinaryAddContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Add() {
	    return this.getToken(VisLangParser.Add, 0);
	};

	Sub() {
	    return this.getToken(VisLangParser.Sub, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitBinaryAdd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

VisLangParser.BinaryAddContext = BinaryAddContext;

class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VisLangParser.RULE_assignment;
    }

	Identifier() {
	    return this.getToken(VisLangParser.Identifier, 0);
	};

	Assign() {
	    return this.getToken(VisLangParser.Assign, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	funCall() {
	    return this.getTypedRuleContext(FunCallContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof VisLangVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




VisLangParser.ProgramContext = ProgramContext; 
VisLangParser.BodyContext = BodyContext; 
VisLangParser.DeclarationContext = DeclarationContext; 
VisLangParser.FunDeclContext = FunDeclContext; 
VisLangParser.ParamsContext = ParamsContext; 
VisLangParser.StatementContext = StatementContext; 
VisLangParser.IfStatementContext = IfStatementContext; 
VisLangParser.IfStatContext = IfStatContext; 
VisLangParser.ElifStatContext = ElifStatContext; 
VisLangParser.ElseStatContext = ElseStatContext; 
VisLangParser.DoWhileStatContext = DoWhileStatContext; 
VisLangParser.WhileStatContext = WhileStatContext; 
VisLangParser.ForStatContext = ForStatContext; 
VisLangParser.CallStatContext = CallStatContext; 
VisLangParser.PrintCallContext = PrintCallContext; 
VisLangParser.FunCallContext = FunCallContext; 
VisLangParser.BlockContext = BlockContext; 
VisLangParser.ReturnStatementContext = ReturnStatementContext; 
VisLangParser.ExprContext = ExprContext; 
VisLangParser.AssignmentContext = AssignmentContext; 
