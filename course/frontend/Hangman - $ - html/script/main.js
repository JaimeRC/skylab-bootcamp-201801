
function Hangman(word, attempts) {
   // this.attempts = attempts;
    var arrWord = word.toUpperCase().split("");
    var arr_Word = new Array(word.length);
    arr_Word.fill('_');
    this.try = function (charOrWord) {
        var message = "";
        var status = "";
        if (attempts > 0 && arr_Word.indexOf("_") >= 0) {
            try {   //Try-catch, nos devuelve un mensaje cuando encuentra un error, en este caso, al pasarle un numérico, nos dará este error.
                if (charOrWord.match(/\W/) === null || charOrWord === "") {
                    if (charOrWord.length > 1) {
                        (word.toUpperCase() === charOrWord.toUpperCase())
                            ? status = 'win' : status = 'lose';
                        //attempts = 0;
                    } else {
                        var exist = false;
                        for (var i = 0; i < arrWord.length; i++) {
                            if (charOrWord.toUpperCase() === arrWord[i]) {
                                arr_Word[i] = arrWord[i];
                                exist = true;
                            }
                        }
                        (exist === true) ? attempts : --attempts;
                        message = arr_Word.join(' ');
                        if (arr_Word.indexOf('_') < 0) 
                            status = 'win';
                    }
                } else {
                    message = 'Please, enter a valid character or word!';
                    --attempts;
                }
            } catch (error) {
                console.log('Error: ' + error.message)
                message = 'Please, enter a valid character or word!';
            }
        } else {
            status = "lose";
        }
        return {
            message: message,
            attempts: attempts,
            status: status
        }
    }
}


