const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection successsful');
    })
    .catch(err=>{
        console.log('Database connection was unsuccesssful!', err);
    });

db['User'] = sequelize.import('./user.js');
db['Song'] = sequelize.import('./song.js');

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

