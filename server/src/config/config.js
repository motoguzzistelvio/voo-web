module.exports = {
    port: 3001,
    db:{
        database: process.env.DB_NAME||'playlist',
        user: process.env.DB_USER || 'playlist',
        password: process.env.DB_PASSWORD || 'playlist',
        options: {
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            operatorsAliasis: false,
            storage: './playlist.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}