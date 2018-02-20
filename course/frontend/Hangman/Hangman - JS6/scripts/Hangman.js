class Game {
    constructor(word, attemps) {
        this.word = word;
        this.attemps = attemps;
    }

}

class Hangman extends Game {
    constructor(word, attemps) {
        super(word, attemps);
    }
    try(charOrWord) {
        const arrWord = this.word.toUpperCase().split("");
        let arr_Word = new Array(this.word.length);
        arr_Word.fill('_');
        let message = "";
        if (this.attemps > 0 && arr_Word.indexOf("_") >= 0) {
            try {
                if (charOrWord.match(/\W/) === null) {
                    if (charOrWord.length > 1) {
                        (this.word.toUpperCase() === charOrWord.toUpperCase())
                            ? message = 'You have guessed the word, well done!' : message = `Sorry, you have not guessed... the correct word is ${word.toUpperCase()}.`;
                        this.attemps = 0;
                    } else {
                        let exist = false;
                        for (let i = 0; i < arrWord.length; i++) {
                            if (charOrWord.toUpperCase() === arrWord[i]) {
                                arr_Word[i] = arrWord[i];
                                exist = true;
                            }
                        }
                        (exist === true) ? this.attemps : --this.attemps;
                        message = this.attemps + " " + arr_Word.join(' ');
                        if (arr_Word.indexOf('_') < 0) message = 'You have guessed the word, well done!';
                    }
                } else {
                    message = 'Please, enter a valid character or word!';
                    --this.attemps;
                }
            } catch (error) {
                console.error(`Error:  + ${error.message}`)
                message = 'Please, enter a valid character or word!';
            }
        } else {
            message = "GAME OVER.";
        }
        return message;
    }
}

