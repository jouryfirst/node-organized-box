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
  roomName: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '房间名称'
  },
  categoryCode: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    comment: '物品类型Code'
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '物品类型名称'
  },
  position: {
    type: Sequelize.STRING,
    allowNULL: true,
    comment: '物品位置'
  },
  goodsTag: {
    type: Sequelize.STRING,
    allowNULL: true,
    comment: '物品品牌'
  },
  importantTag: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    comment: '重要程度'
  },
  remark: {
    type: Sequelize.STRING,
    allowNULL: true,
    comment: '备注'
  },
  // deleteCode, 0-可查询，1-回收站，2-彻底删除
  deleteCode: {
    type: Sequelize.INTEGER,
    allowNULL: false,
    comment: '删除标识'
  }
})

module.exports = GoodsBox
