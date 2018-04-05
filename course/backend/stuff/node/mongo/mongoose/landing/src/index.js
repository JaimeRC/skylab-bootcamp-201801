//Arrancar Mongodb : ./bin/mongod --dbpath ./db
//Arrancar Mongodb Client: ./bin/mongo

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

/*
const Cat = mongoose.model('Cat', { name: String });


const kitty = new Cat({ name: 'Zildjian' });
kitty.save()
    .then(() => console.log('meow'));
    
const kitty = new Cat({ name: 'Sucio' });
kitty.save()
       .then(() => console.log('meow'));



Cat.find({ name: 'Sucio' }, (err, data) => {
    console.log(data)
})

Cat.findOneAndUpdate({ name: 'Sucio' }, { name: 'Dirty' })
    .then(console.log)
    .catch(console.err)


Cat.find({ name: 'Dirty' })
    .then(cats => {

        //devuelve un array de objetos
        const cat = cats[0]

        //modifico la propiedad que queremos modificar
        cat.name = 'Sucio'

        //Grabamos el cambio y retornamos la promise para que se imprima
        return cat.save()
    })
    .then(console.log)
    .catch(console.error)
    */

