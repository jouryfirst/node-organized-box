/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: controller
 */

const { addGoods } = require('../models/box')
const { SuccessModel, ErrorModel } = require('../models/ResModel')
const { addGoodsFail } = require('../models/ErrorModel')

/**
 * 添加物品
 * @param {Object} param0 添加物品 { goodsId,goodsName,goodsCount,room,category,goodsTag,remark }
 */
async function add({ goodsId, goodsName, goodsCount, room, category = '', goodsTag= '', remark= '' }) {
  try {
    const goods = await addGoods({
      goodsId,
      goodsName,
      goodsCount,
      room,
      category,
      goodsTag,
      remark
    })
    console.log('goods', goods)
    // return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(addGoodsFail)
  }
}

module.exports = {
  add
}
