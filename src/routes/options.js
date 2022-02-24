/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: 路由
 */
const router = require('koa-router')()
const enumRouter = require('../controller/options')

router.prefix('/api/options')

// 添加房间
router.get('/addRoom', enumRouter.addRoom)

// 编辑房间
router.get('/editRoom', enumRouter.editRoom)

// 查询房间
router.get('/getRoomsList', enumRouter.getRoomsList)

// 删除房间
router.get('/deleteRoom', enumRouter.deleteRoom)

module.exports = router
