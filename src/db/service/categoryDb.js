/*
 * @Author: joury
 * @Date: 2022-02-17 19:12:35
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:25:12
 * @Description: sql模型及数据库逻辑
 */
const Category  = require('../model/Category')

/**
 * 添加物品类别
 * @param {Object} param0 添加物品类别 { CategoryName }
 */
async function createCategory({ categoryName }) {
  const result = await Category.create({
    categoryName
  })
  return result.dataValues
}

/**
 * 更新物品类别
 * @param {Object} param0 更新物品类别 { id, categoryName }
 */
async function updateCategory({ id, categoryName }) {
  const result = await Category.update({
    categoryName
  }, {
    where: {
      id
    }
  })
  return result
}

/**
 * 查询物品类别
 * @param {Object} param0 查询物品类别 {  }
 */
async function searchCategory() {
  const result = await Category.findAndCountAll({
    // order: [
    //   ['id', 'desc']
    // ]
  })
  let CategoryList = result.rows.map(row => row.dataValues)

  return {
    count: result.count,
    CategoryList
  }
}

/**
 * 删除物品类别
 * @param {Object} param0 删除物品类别 { id }
 */
async function destroyCategory({ id }) {
  const result = await Category.destroy({
    where: {
      id
    }
  })
  return result
}

module.exports = {
  createCategory,
  updateCategory,
  searchCategory,
  destroyCategory
}
