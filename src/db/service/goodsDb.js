/*
 * @Author: joury
 * @Date: 2022-02-17 19:12:35
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:25:12
 * @Description: sql模型及数据库逻辑
 */
const { GoodsBox } = require('../model')
const Sequelize = require('sequelize')
const { Op } = require("sequelize")
const { formateGroup, formateGroupByDate } = require('./formateFn')

/**
 * 添加物品
 * @param {Object} param0 添加物品 { goodsId,goodsName,goodsCount,roomCode,categoryCode,goodsTag,remark }
 */
async function addGoods({ goodsId, goodsName, goodsCount, roomCode, roomName, categoryCode, categoryName, position, goodsTag= '', importantTag = 1, remark= '' }) {
  const result = await GoodsBox.create({
    goodsId,
    goodsName,
    goodsCount,
    roomCode,
    roomName,
    categoryCode,
    categoryName,
    position,
    goodsTag,
    importantTag,
    remark,
    deleteCode: 0
  })
  return result.dataValues
}

/**
 * 更新物品
 * @param {Object} param0 更新物品 { id, goodsId,goodsCount,roomCode,categoryCode,goodsTag,remark }
 */
async function updateGoods({ id, goodsId, goodsCount, roomCode, roomName, categoryCode, categoryName, position, goodsTag, importantTag, remark }) {
  const result = await GoodsBox.update({
    goodsId,
    goodsCount,
    roomCode,
    roomName,
    categoryCode,
    categoryName,
    position,
    goodsTag,
    importantTag,
    remark,
    deleteCode: 0
  }, {
    where: {
      id
    }
  })
  return result
}

/**
 * 查询物品
 * @param {Object} param0 查询物品 { goodsId,goodsName,goodsCount,roomCode,category,goodsTag,remark }
 */
async function getGoods({ pageNo = 1, pageSize = 50, goodsName, roomCode, categoryCode, position }) {
  // 拼接查询条件
  const whereData = {
    deleteCode: 0
  }
  if (goodsName) {
    whereData.goodsName = {
      [Op.like]: `%${goodsName}%`
    }
  }
  if (roomCode) {
    whereData.roomCode = roomCode
  }
  if (categoryCode) {
    whereData.categoryCode = categoryCode
  }
  if (position) {
    whereData.position = position
  }
  const result = await GoodsBox.findAndCountAll({
    limit: pageSize, // 每页多少条
    offset: pageSize * (pageNo - 1), // 跳过多少条
    order: [
      ['id', 'desc']
    ],
    where: whereData
  })
  let goodsList = result.rows.map(row => row.dataValues)
  return {
    count: result.count,
    goodsList
  }
}

/**
 * 查询物品架分类及个数
 * @param {Object} param0 查询物品架分类及个数 { pageNo,pageSize,sortType }
 */
async function getGroupBySortType({ pageNo = 1, pageSize = 50, goodsName, roomCode, categoryCode, sortType }) {
  const groupData = sortType === 1 ? 'position' : 'categoryName'
  // 拼接查询条件
  const whereData = {
    deleteCode: 0
  }
  if (goodsName) {
    whereData.goodsName = {
      [Op.like]: `%${goodsName}%`
    }
  }
  if (roomCode) {
    whereData.roomCode = roomCode
  }
  if (categoryCode) {
    whereData.categoryCode = categoryCode
  }
  let result = await GoodsBox.findAll({
    limit: pageSize, // 每页多少条
    offset: pageSize * (pageNo - 1), // 跳过多少条
    attributes: [groupData, [Sequelize.fn("COUNT", Sequelize.col(groupData)), "count"]],
    group: groupData,
    where: whereData
  })
  result = formateGroup(result)
  return result
}
/**
 * 查询物品详情
 * @param {Object} param0 查询物品详情{ id }
 */
async function checkGoods ({id}) {
  const result = await GoodsBox.findOne({where: {id}})
  return result
}


/**
 * 删除物品入回收站
 * @param {Object} param0 入回收站 { id }
 */
async function softDestroyGoods({ id }) {
  const result = await GoodsBox.update(
    {
      deleteCode: 1
    },{
    where: {
      id
    }
  })
  return result
}

module.exports = {
  addGoods,
  getGoods,
  getGroupBySortType,
  checkGoods,
  updateGoods,
  softDestroyGoods
}
