const { getNumInfo } = require('../db/service/statistcsDb')
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

module.exports = {
  getBaseInfo
}
