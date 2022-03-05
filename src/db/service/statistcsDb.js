const { GoodsBox } = require('../model')
const Category  = require('../model/Category')
const Room  = require('../model/Room')

/**
 * 统计基本信息-物品数量，房间数量，分类数量
 *
 */
async function getNumInfo() {
  const goodsCount = await GoodsBox.count({
    where: {
      deleteCode: 0
    }
  })
  const roomCount = await Room.count()
  const categoryCount = await Category.count()
  const result = {
    goodsCount,
    roomCount,
    categoryCount
  }
  return result
}

module.exports = {
  getNumInfo
}
