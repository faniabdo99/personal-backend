const { DataTypes } = require('sequelize');
const {sequelize} = require('../connection')
const ContactRequest = sequelize.define('ContactRequest',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        notEmpty: {args: true, msg: 'The name must be provided'},
        len: { args:[5,30], msg: 'The name must be 5-30 chrachters' }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notEmpty: {args: true, msg: 'The email must be provided'},
        isEmail: {args: true, msg: 'This is not a valid email'}
    }
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [5,5000],
        notEmpty: {args: true, msg: 'The message must be provided'},
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'ContactRequest',
  tableName: 'contact_requests'
});

module.exports = ContactRequest
