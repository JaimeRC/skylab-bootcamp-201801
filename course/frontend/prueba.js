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
        return ladrar();
    }
}

function ladrar() {
    return 'Miau';
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

//************************************** */

function auto(brand, model, price) {
    this.brand = brand;
    this.modelo = model;
    this.price = price;
}
auto.prototype = {
    get name() {
        return this.brand + " " + this.model + " = " + this.pvp + " impuestos incluidos";
    },
    get pvp() {
        return (this.price * 1.21);
    },
    set pvp(newPrice) {
        this.price = newPrice;
    }
};
var audi = new auto("Audi", "A5", 45000);
console.log(audi.name);
audi.price = 35000;
console.log(audi.name);

// Otro metodo 

function auto(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}
auto.prototype = {
    get name() {
        return this.brand + " " + this.model + " = " + this.pvp + " imp. incl.";
    }
};
var audi = new auto("Audi", "A5", 45000);
Object.defineProperty(audi, 'pvp', {
    get: function () {
        return (this.price * 1.21);
    },
    set: function (newPrice) {
        this.price = newPrice;
    }
});
/**
 * Object.defineProperty(auto, 'pvp', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});
 */


console.log(audi.name);
audi.price = 35000;
console.log(audi.name);

/***********************/

var names = ['lol', 'lol', ['lol']];

var countedNames = names.reduce(function (allNames, name) {
    if (name.toString() === allNames.toString()) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, 0);
console.log(countedNames);

var names = ['lol', 'lol', ['lol', 'lol']];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, 0);
console.log(countedNames);

/******************************/

function text(texto) {
    x = {
        value: texto,
        wrap: function (icon) {
            return console.log(this.value); console.log(icon)
        },
        wrap: function (icon, icon1) {
            return console.log(this.value);
        },
        return: function () {
            return value;
        }
    }
}

var text = {
    wrap: function (icon) {
        this.texto.concat(icon);
    },
    wrap: function (icon1, icon2) {
        this.texto.concat(icon1 + icon2);
    }
};


function text(sourcer) {
    function wrap(arg1, arg2) {
        if (arg2 === undefined) {
            arg2 = arg1;
        }
        source = arg1 + source + arg2;
        return this;
    }
    function toString() {
        return source;
    }
    return {
        wrap: wrap,
        toString: toString
    };
}


function wrap(text, before, after) {
    return (before || '') + text + (after || before || '');
}

function text(_text) {
    return {
        wrap: function (before, after) {
            return text(wrap(_text, before, after));
        },
        toString: function () {
            return text;
        }
    }
}









