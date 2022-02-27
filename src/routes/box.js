/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: 路由
 */
const router = require('koa-router')()
const goodsRouter = require('../controller/goods')

router.prefix('/api/goods')

// 添加物品
router.post('/addGoods', goodsRouter.addGoods)

// 获取物品列表
router.post('/getGoodsList', goodsRouter.getGoodsList)

// 获取物品详情
router.get('/getGoodsDetail', goodsRouter.getGoodsDetail)

module.exports = router
