
class Lexer {

    private src_code: string;
    private offset: number = 0;
    private current_char: string = ''; 

    constructor(src_code: string) {

        this.src_code= src_code;
        this.advance();

    }

    private advance() {

        this.offset++
        this.current_char= this.src_code[this.offset];

    }

    public tokenize(): Token[] {

        const tokens: Token[] = [];

        while (this.current_char === '' || this.current_char === "\t" || this.current_char === "\n" || this.current_char === "\r") {

            

        }

        return tokens
    }

}