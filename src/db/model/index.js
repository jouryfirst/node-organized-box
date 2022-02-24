/**
 * @description 数据模型入口
 * @author joury
 */

const GoodsBox = require('./Goods')
const Room = require('./Room')
const Category = require('./Category')

// 外键，查询物品带出房间
// GoodsBox.belongsTo(Room, {
//   foreignKey: 'roomCode'
// })

module.exports = {
  GoodsBox,
  Room,
  Category
}
