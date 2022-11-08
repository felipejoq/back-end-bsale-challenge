const { Sequelize } = require('sequelize');
const { configDb } = require('./config_db');

const sequelize = new Sequelize(
    configDb.database,
    configDb.username,
    configDb.password, {
        host: configDb.host,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 5000
        }
    }
);

module.exports = sequelize;