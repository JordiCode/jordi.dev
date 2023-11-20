const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'jordig',
    password: '9547',
    port: 5432
})

pool.connect((err, client, release) => {
    if(err) {
        console.log('Error al conectarse a la BBDD')
        return
    }
})


module.exports = pool