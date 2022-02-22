/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: 路由
 */
const router = require('koa-router')()
const {add} = require('../controller/box')

router.prefix('/api/goods')

router.post('/addGoods', async (ctx, next) => {
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
})


module.exports = router
