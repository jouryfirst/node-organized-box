const { GoodsBox } = require('../model')
const Category  = require('../model/Category')
const Room  = require('../model/Room')
const Sequelize = require('sequelize')
const { formateGroupByDate } = require('./formateFn')
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

/**
 * 按时间查询物品
 * @param {Object} param0 按时间查询物品 { pageNo,pageSize,sortType }
 */
async function getGroupByDate() {
  const groupData = [ Sequelize.fn('DATE_FORMAT',Sequelize.col('createdAt'), '%Y-%m-%d') ]
  let result = await GoodsBox.findAll({
    attributes: ['createdAt', [Sequelize.fn("COUNT", Sequelize.col('createdAt')), "count"]],
    group: groupData
  })
  result = formateGroupByDate(result)
  console.log(result)
  return result
}

module.exports = {
  getNumInfo,
  getGroupByDate
}
