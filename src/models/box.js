/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: boxModel
 */

const { addGoods, updateGoods, getGoods, getGroupBySortType, checkGoods } = require('../db/service/goodsDb')
const { SuccessModel, ErrorModel } = require('./ResModel')
const { addGoodsFail } = require('./ErrorModel')

/**
 * 添加物品
 * @param {Object} param0 添加物品 { goodsId,goodsName,goodsCount,roomCode,categoryCode,goodsTag,remark }
 */
async function add({ goodsId, goodsName, goodsCount, roomCode, roomName, categoryCode, categoryName, position, importantTag = 1, goodsTag= '', remark= '' }) {
  try {
    const goods = await addGoods({
      goodsId,
      goodsName,
      goodsCount,
      roomCode,
      roomName,
      categoryCode,
      categoryName,
      position,
      importantTag,
      goodsTag,
      remark
    })
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(addGoodsFail)
  }
}

/**
 * 更新物品
 * @param {Object} param0 更新物品 { goodsId,goodsName,goodsCount,roomCode,categoryCode,goodsTag,remark }
 */
async function update({ id, goodsId, goodsCount, roomCode, roomName, categoryCode, categoryName, position, importantTag, goodsTag, remark }) {
  try {
    const goods = await updateGoods({
      id,
      goodsId,
      goodsCount,
      roomCode,
      roomName,
      categoryCode,
      categoryName,
      position,
      importantTag,
      goodsTag,
      remark
    })
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(addGoodsFail)
  }
}
/**
 * 获取物品列表
 * @param {Object} param0 物品列表 { pageNo, pageSize, roomCode, goodsTag }
 */
async function getGoodsList ({pageNo = 1, pageSize = 50, goodsName, roomCode, categoryCode, sortType = 0 }) {
  try {
    let result
    if (sortType === 0) {
      result = await getGoods({pageNo, pageSize, goodsName, roomCode, categoryCode})
    } else {
      result = await getGroupBySortType({pageNo, pageSize, goodsName, roomCode, categoryCode, sortType})
    }
    return new SuccessModel(result)
  } catch (e) {
    console.log(e)
    return new ErrorModel({
      code: '-1',
      message: '获取物品列表失败'
    })
  }
}

async function getGoodsDetail ({id}) {
  try {
    const result = await checkGoods({id})
    return new SuccessModel(result)
  } catch (e) {
    console.log(e)
    return new ErrorModel({
      code: '-1',
      message: '获取详情失败'
    })
  }
}

module.exports = {
  add,
  update,
  getGoodsList,
  getGoodsDetail
}
