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
      room,
      category,
      goodsTag,
      remark
    } = ctx.request.body
    ctx.body = await add({goodsId,
      goodsName,
      goodsCount,
      room,
      category,
      goodsTag,
      remark})
  },
  getGoodsList: async (ctx, next) => {
    const {pageNo, pageSize, room} = ctx.request.body
    ctx.body = await getGoodsList({
      pageNo, pageSize, room
    })
  }
}

module.exports = goodsRouter
