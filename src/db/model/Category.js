/**
 * @description 分类数据模型
 * @author joury
 */
const Sequelize = require('sequelize')
const seq = require('../seq')

const Category = seq.define('categories', {
  categoryName: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '物品类别'
  }
})

module.exports = Category
