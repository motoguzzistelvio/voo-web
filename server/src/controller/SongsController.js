const db = require('../models/index');
const Song = require('../models/song')(db.sequelize, db.Sequelize);

module.exports = {
    async post(req, res) {
        try{
            const song = await Song.create(req.body);
            console.log(`song is ${JSON.stringify(song)}`);
            res.send(song);
        }catch(err){
            res.status(500).send({
                error: `Internal server Error ${err}`
            });
        }
    },
    async get(req, res) {
        try {

            const songs = await Song.findAll({
                limit: 10
            });
            console.log(`songs in res ${JSON.stringify(songs)}`);            
            res.send(songs);

        } catch (error) {
            res.status(500).send({
                error: 'Internal Server Error' + Error
            });
        }
    }, 
    async show(req, res){
        try {
           const song = await Song.findByPk(req.params.songId);
           res.send(song);

        } catch (err) {
            res.status(500).send({
                error: 'Internal Server Error ' + err
            });
        }
    },
    async put(req, res){
        try {
            await Song.update (req.body, {
                where:{
                    id: req.params.songId 
                }
            });
            res.send(req.body);
        } catch (error) {
            res.status(500).send({
                error: 'Internal server Error'
            });
        }
    }   
}