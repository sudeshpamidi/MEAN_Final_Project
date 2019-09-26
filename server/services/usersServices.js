const users = require('../models').USERS;

var usersService = {};

usersService.createUser = (oUser) => {
    return users
        .create(oUser)
        .then(user => { return user; })
        .catch(error => { throw error; });
};

usersService.getUsers = () => {
    return users
        .findAll()
        .then(users => {
            return users;
        })
        .catch(error => { throw error; });
};
usersService.authenticateUser = (oUser) => {
    return users
        .findOne({
            where: oUser
        })
        .then(user => {
            return user;
        })
        .catch(error => { throw error; });
};

module.exports = usersService;