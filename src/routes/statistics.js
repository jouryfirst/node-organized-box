/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: 路由
 */
const router = require('koa-router')()
const statisticsRouter = require('../controller/statistics')

router.prefix('/api/statistics')

// 统计信息-物品数量，房间数量，物品种类
router.get('/getBaseInfo', statisticsRouter.getBaseInfo)



module.exports = router
