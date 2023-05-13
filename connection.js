const { Sequelize } = require('sequelize');
// Connect to database
const sequelize = new Sequelize('personal_website', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = { sequelize }