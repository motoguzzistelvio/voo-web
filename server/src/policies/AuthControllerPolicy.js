const Joi = require('joi');

module.exports = {
    register(req, res, next){
        const schema = {
            email: Joi.string().email(),
            pword: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9_&#@]{8,32}$')
            )
        }
        const {error, value} = Joi.validate(req.body, schema);
        if (error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'Email address is invalid'
                    });
                    break;
                case 'pword':
                    res.status(400).send({
                        error: `Password must be tween 8 and 32 characters contain a Capital with one special char _,&,#,@`
                    });
                    break;
                default:
                    res.status(400).send({
                        error: 'The info provided is invalid'
                    });        
            }
        }else{
            next();
        }
    }
}