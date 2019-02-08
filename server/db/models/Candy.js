const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candies', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'http://icons.iconarchive.com/icons/pelfusion/christmas-shadow-2/128/Candy-icon.png',
    validate: {
      isUrl: true
    }
  }
});


module.exports = Candy;
