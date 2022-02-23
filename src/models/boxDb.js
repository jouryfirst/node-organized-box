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

/**
 * 查询物品
 * @param {Object} param0 查询物品 { goodsId,goodsName,goodsCount,room,category,goodsTag,remark }
 */
async function getGoods({ pageNo = 1, pageSize = 50, room }) {
  const result = await GoodsBox.findAndCountAll({
    limit: pageSize, // 每页多少条
    offset: pageSize * (pageNo - 1), // 跳过多少条
    order: [
      ['id', 'desc']
    ],
    where: {
      room
    }
  })
  let goodsList = result.rows.map(row => row.dataValues)

  return {
    count: result.count,
    goodsList
  }
}

module.exports = {
  addGoods,
  getGoods
}
