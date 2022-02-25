/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: boxModel
 */

const { addGoods, getGoods, getGroupBySortType } = require('../db/service/goodsDb')
const { SuccessModel, ErrorModel } = require('./ResModel')
const { addGoodsFail } = require('./ErrorModel')

/**
 * 添加物品
 * @param {Object} param0 添加物品 { goodsId,goodsName,goodsCount,roomCode,categoryCode,goodsTag,remark }
 */
async function add({ goodsId, goodsName, goodsCount, roomCode, categoryCode, position, goodsTag= '', remark= '' }) {
  try {
    const goods = await addGoods({
      goodsId,
      goodsName,
      goodsCount,
      roomCode,
      categoryCode,
      position,
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
async function getGoodsList ({pageNo = 1, pageSize = 50, goodName, roomCode, categoryCode, sortType }) {
  try {
    let result
    if (sortType === 0) {
      result = await getGoods({pageNo, pageSize, goodName, roomCode, categoryCode})
    } else {
      result = await getGroupBySortType({pageNo, pageSize, goodName, roomCode, categoryCode, sortType})
    }

    return new SuccessModel(result)
  } catch (e) {
    console.log(e)
  }
}
module.exports = {
  add,
  getGoodsList
}
