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
