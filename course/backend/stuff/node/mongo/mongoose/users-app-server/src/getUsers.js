
function getUsers(Users, req, res) {
        //Filtramos los campos que queremos mostrar (0 no mostrar / 1 mostrar)
       return Users.find({}, { _id: 0, password: 0 })
        
}

module.exports = getUsers