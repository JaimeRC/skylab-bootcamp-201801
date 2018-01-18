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
    sound: function(){return 'Guau'}
}
var gato = {
    name: 'Charlie',
    sound: function(){
        console.log('Mi gato ' + this.name + ' hace Miay');
    }
}

var prueba = gato.sound;
prueba.call(gato);
