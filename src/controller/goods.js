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
      goodsTag,
      remark
    } = ctx.request.body
    ctx.body = await add({goodsId,
      goodsName,
      goodsCount,
      roomCode,
      categoryCode,
      goodsTag,
      remark})
  },
  getGoodsList: async (ctx, next) => {
    const {pageNo, pageSize, roomCode} = ctx.request.body
    ctx.body = await getGoodsList({
      pageNo, pageSize, roomCode
    })
  }
}

module.exports = goodsRouter
