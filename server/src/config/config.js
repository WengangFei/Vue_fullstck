module.exports = {
    port: process.env.PORT || 8080,
    db:{
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASSWORD || 'tabtracker',
        options:{
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }

    },
    authentication:{
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}