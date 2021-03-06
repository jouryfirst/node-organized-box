/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: controller
 */

const {add, update, getGoodsList, getGoodsDetail, softDeleteGoods} = require('../models/box')

const goodsRouter = {
  addGoods: async (ctx, next) => {
    const {
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
    } = ctx.request.body
    ctx.body = await add({goodsId,
      goodsName,
      goodsCount,
      roomCode,
      roomName,
      categoryCode,
      categoryName,
      position,
      importantTag,
      goodsTag,
      remark})
  },
  editGoods: async (ctx, next) => {
    const {
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
    } = ctx.request.body
    ctx.body = await update({
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
      remark})
  },
  getGoodsList: async (ctx, next) => {
    /**
     * @param {Object} param0  { sortType分类方式,0-不分类，1-按位置，2-按物品类型 }
     */
    const {pageNo, pageSize, goodsName, roomCode, categoryCode, position, sortType} = ctx.request.body
    ctx.body = await getGoodsList({
      pageNo, pageSize, goodsName, roomCode, categoryCode, position, sortType
    })
  },
  getGoodsDetail: async (ctx, next) => {
    const { id } = ctx.query
    ctx.body = await getGoodsDetail({id})
  },
  deleteGoods: async (ctx, next) => {
    const {id} = ctx.request.query
    ctx.body = await softDeleteGoods({id})
  }
}

module.exports = goodsRouter
