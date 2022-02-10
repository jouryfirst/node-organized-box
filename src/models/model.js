const Sequelize = require('sequelize')
const seq = require('../db/seq')

const GoodsBox = seq.define('goods', {
  goodsName: {
    type: Sequelize.STRING,
    allowNULL: false
  },
  goodsCount: {
    type: Sequelize.INTEGER,
    allowNULL: false
  },
  room: {
    type: Sequelize.STRING,
    allowNULL: false
  },
  category: {
    type: Sequelize.STRING,
    allowNULL: false
  },
  goodsTag: {
    type: Sequelize.STRING,
    allowNULL: false
  },
  remark: {
    type: Sequelize.STRING,
    allowNULL: false
  }
})

module.exports = {
  GoodsBox
}
