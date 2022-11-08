module.exports = {

    configDb: {
        username: process.env.USER_DB || 'root',
        password: process.env.PASS_DB || '',
        database: process.env.NAME_DB || 'bsale_test',
        host: process.env.HOST_DB || 'localhost',
        base_name: process.env.BASE_NAME || ''
    }

}