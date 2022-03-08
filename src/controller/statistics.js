

/*
 * @Author: joury
 * @Date: 2022-03-05 12:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-03-05 19:22:35
 * @Description: controller-statitics
 */

const { getBaseInfo, getGoodsByDate } = require('../models/statistics')


const statisticsRouter = {
  getBaseInfo: async (ctx, next) => {
    ctx.body = await getBaseInfo()
  },
  getGoodsByDate: async (ctx, next) => {
    ctx.body = await getGoodsByDate()
  }
}

module.exports = statisticsRouter
