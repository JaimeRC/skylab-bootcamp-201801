var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}

animals[0].print();

function Animals(species, name) {
    this.species = name;
    this.name = name;
}
var perro = {
    name: 'Boby',
    sound: function () { return 'Guau' }
}
var gato = {
    name: 'Charlie',
    sound: function () {
        console.log('Mi gato ' + this.name + ' hace Miay');
    }
}

var prueba = gato.sound;
prueba.call(gato);



var string = "helloWord",

function lll(text) {
    var pos = text.indexOf(([A - Z]));
    console.log(text.charAt(pos));
}

var string = '0';
var num = 0;
num = num.parseInt(string);
console.log(typeof num)

var a = "hello";
var boo = a.indexOf('\D')
console.log(boo);

var str = 'Hello world.';
var n = str.match(/\D/);
console.log(n)


function isSymbol(text) {
    if (text.match(/[^\d\wñç]/ig) != null)
        return true;
}
isSymbol('hello%');