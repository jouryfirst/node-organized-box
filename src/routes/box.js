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

// 更新物品
router.post('/editGoods', goodsRouter.editGoods)

// 获取物品列表
router.post('/getGoodsList', goodsRouter.getGoodsList)

// 获取物品详情
router.get('/getGoodsDetail', goodsRouter.getGoodsDetail)

// 放入回收站
router.get('/deleteGoods', goodsRouter.deleteGoods)

// 获取物品添加情况
router.get('/getGoodsByDate', goodsRouter.getGoodsByDate)

module.exports = router
