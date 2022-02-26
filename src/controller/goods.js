/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: controller
 */

const {add, getGoodsList} = require('../models/box')

const goodsRouter = {
  addGoods: async (ctx, next) => {
    const {
      goodsId,
      goodsName,
      goodsCount,
      roomCode,
      categoryCode,
      position,
      goodsTag,
      remark
    } = ctx.request.body
    ctx.body = await add({goodsId,
      goodsName,
      goodsCount,
      roomCode,
      categoryCode,
      position,
      goodsTag,
      remark})
  },
  getGoodsList: async (ctx, next) => {
    /**
     * @param {Object} param0  { sortType分类方式,0-不分类，1-按位置，2-按物品类型 }
     */
    const {pageNo, pageSize, goodsName, roomCode, categoryCode, sortType} = ctx.request.body
    ctx.body = await getGoodsList({
      pageNo, pageSize, goodsName, roomCode, categoryCode, sortType
    })
  }
}

module.exports = goodsRouter
