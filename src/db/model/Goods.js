/**
 * @description 物品数据模型
 * @author joury
 */
const Sequelize = require('sequelize')
const seq = require('../seq')

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
  roomCode: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    comment: '房间Code'
  },
  categoryCode: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    comment: '物品类型Code'
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
