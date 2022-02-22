const Sequelize = require('sequelize')
const seq = require('../db/seq')

const GoodsBox = seq.define('goods', {
  goodsId: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    comment: '物品ID'
  },
  goodsName: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '物品名称'
  },
  goodsCount: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    comment: '物品数量'
  },
  room: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '房间名称'
  },
  category: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '物品类型'
  },
  goodsTag: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '标签'
  },
  remark: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '备注'
  }
})

module.exports = GoodsBox
