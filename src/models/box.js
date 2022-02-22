/*
 * @Author: joury
 * @Date: 2022-02-17 19:12:35
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:25:12
 * @Description: sql模型及数据库逻辑
 */
const GoodsBox = require('./model')

/**
 * 添加物品
 * @param {Object} param0 添加物品 { goodsId,goodsName,goodsCount,room,category,goodsTag,remark }
 */
async function addGoods({ goodsId, goodsName, goodsCount, room, category = '', goodsTag= '', remark= '' }) {
  const result = await GoodsBox.create({
    goodsId,
    goodsName,
    goodsCount,
    room,
    category,
    goodsTag,
    remark
  })
  return result.dataValues
}

module.exports = {
  addGoods
}
