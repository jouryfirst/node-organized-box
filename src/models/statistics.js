const { getNumInfo, getGroupByDate } = require('../db/service/statistcsDb')
const { SuccessModel, ErrorModel } = require('./ResModel')

/**
 * 统计基本信息-物品数量，房间数量，分类数量
 *
 */
async function getBaseInfo () {
  try {
    const result = await getNumInfo()
    return new SuccessModel(result)
  } catch (e) {
    console.log(e)
    return new ErrorModel({
      code: '-1',
      message: '查询出错了'
    })
  }
}
/**
 * 按时间查询物品
 * @param {Object} param0 按时间查询物品{  }
 */
async function getGoodsByDate () {
  try {
    const result = await getGroupByDate()
    return new SuccessModel(result)
  } catch (e) {
    console.log(e)
    return new ErrorModel({
      code: '-1',
      message: '获取详情失败'
    })
  }
}

module.exports = {
  getBaseInfo,
  getGoodsByDate
}
