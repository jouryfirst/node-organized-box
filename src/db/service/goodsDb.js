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
const { formateGroup } = require('./formateFn')

/**
 * 添加物品
 * @param {Object} param0 添加物品 { goodsId,goodsName,goodsCount,roomCode,categoryCode,goodsTag,remark }
 */
async function addGoods({ goodsId, goodsName, goodsCount, roomCode, categoryCode, position, goodsTag= '', importantTag = 1, remark= '' }) {
  const result = await GoodsBox.create({
    goodsId,
    goodsName,
    goodsCount,
    roomCode,
    categoryCode,
    position,
    goodsTag,
    importantTag,
    remark
  })
  return result.dataValues
}

/**
 * 查询物品
 * @param {Object} param0 查询物品 { goodsId,goodsName,goodsCount,roomCode,category,goodsTag,remark }
 */
async function getGoods({ pageNo = 1, pageSize = 50, goodsName, roomCode, categoryCode }) {
  // 拼接查询条件
  const whereData = {}
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
async function getGroupBySortType({ pageNo = 1, pageSize = 50, sortType }) {
  const groupData = sortType === 1 ? 'position' : 'categoryCode'
  let result = await GoodsBox.findAll({
    limit: pageSize, // 每页多少条
    offset: pageSize * (pageNo - 1), // 跳过多少条
    attributes: [groupData, [Sequelize.fn("COUNT", Sequelize.col(groupData)), "count"]],
    group: groupData
  })
  result = formateGroup(result)
  return result
}

module.exports = {
  addGoods,
  getGoods,
  getGroupBySortType
}
