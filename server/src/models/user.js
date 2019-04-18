const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function HashPassword(user, options){
    const SALT = 8;
    if (!user.changed('pword')){
        return;
    }
    return bcrypt
        .genSaltAsync(SALT)
        .then(salt => bcrypt.hashAsync(user.pword, salt, null))
        .then(hash => {
            user.setDataValue('pword', hash)
        });
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        pword: DataTypes.STRING,
             
    },{
        hooks:{
            beforeCreate: HashPassword,
            beforeUpdate: HashPassword
        }
    });
    User.prototype.comparePassword = function(pword){
       return bcrypt.compareAsync(pword, this.pword);
    }

    return User;
}
