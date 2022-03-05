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

// 添加物品类别
router.get('/addCategory', enumRouter.addCategory)

// 编辑物品类别
router.get('/editCategory', enumRouter.editCategory)

// 查询物品类别
router.get('/getCategoriesList', enumRouter.getCategoriesList)

// 删除物品类别
router.get('/deleteCategory', enumRouter.deleteCategory)


module.exports = router
