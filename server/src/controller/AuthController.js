const db = require('../models/index');
const User = require('../models/user')(db.sequelize, db.Sequelize);
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtRegUser(user){
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try{
            const user = await User.create(req.body);
            const userJson = user.toJSON();            
            res.send({
                user: userJson,
                token: jwtRegUser(userJson) 
            });
        }catch(err){
            res.status(400).send({
                error: `This email account is already in use  ${err}`
            });
        }
    },
    async login(req,res){
        try {
            
            const {email, pword} = req.body;
            const user = await User.findOne({
                where:{
                    email: email
                }
            });
            if (!user){
                res.status(403).send({
                    error: 'No User - Invalid Login Credentials'
                });
            }
            const isValidPassword = await user.comparePassword(pword);
            if (!isValidPassword){
                res.status(403).send({
                    error: 'Invalid Login Credentials'
                });
            }
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtRegUser(userJson)
            });
        } catch (err) {
            res.status(500).send({
                error: 'Internal Server Error ' + err
            })
        }
    }
}