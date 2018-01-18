var o = {
    name: 'name',
    map: function (arr) {
        var self = this;
        return arr.map(function (v) {

        });
    },
}

//******* 

function Box(secret, password) {

    this.getSecret = function (_password) {
        if (password === _password) {
            secret = _secret;
            return secret;
        }
    }
    this.setSecret = function (_secret, _password) {
        if (password === _password)
            secret = _secret;
    }
    this.changePassword = function (newPassword, oldPassword) {
        if (password === oldPassword)
            password = newPassword;
    }
}
var box = new Box('secret', 123);

console.log(box.getSecret(123));
console.log(box.setSecret('secreto2', 123))
console.log(box.getSecret(123));
console.log(box.changePassword(111, 123));
console.log(box.changePassword(111, ));

function Hangman(word, attempts) {
    var arr = word.toLowerCase().split("");
    var arr1 = new Array(word.length);
    arr1.fill = '_';
    this.attempts = attempts;

    this.try = function (letter) {
        var text = "";
        if (attempts > 0 && arr1.indexOf("_") >= 0) {
            if (letter.length > 1) {
                (word.toLowerCase() === letter.toLowerCase()) ? text = "Very Well,you Asserted" : text ="Too Bad... You lose";
                attempts = 0;
            } else {
                var pos = arr.indexOf(letter.toLowerCase());
                (pos >= 0) ? arr1[pos] = arr[pos] : --attempts;
                
                text = attempts + "  " + arr1.join(' ');
                
                (arr1.indexOf('_') < 0) ? text.concat(' - YOU WIN') : '';
            }
        } else {
            console.log("Game Over");
        }
        return text;
    }
}
var game = new Hangman('skylab', 10);