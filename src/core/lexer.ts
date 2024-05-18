
const KEYWORDS= ["let"];
const VARIABLE_TYPES= ["Int"];

enum TokenType {

    IDENTIFIER,
    KEYWORD,
    VARIABLE_TYPE,
    EQUALS,
    WHITESPACE,
    LITERAL

}

class Token {

    type: TokenType;
    value: string;

    constructor(type: TokenType, value: string) {

        this.type= type;
        this.value= value;

    }

}

class Lexer {

    private src_code: string;
    private current: number = 0;

    constructor(src_code: string) {

        this.src_code= src_code;

    }

    private advance() {

        this.current++;

    }

}