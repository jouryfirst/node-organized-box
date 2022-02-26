/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: options操作
 */
const { createRoom,updateRoom, searchRoom, destroyRoom } = require('../db/service/roomDb')
const { createCategory,updateCategory, searchCategory, destroyCategory } = require('../db/service/categoryDb')
const { SuccessModel, ErrorModel } = require('./ResModel')
const { addRoomFail, repeatRoom, editRoomFail, deleteRoomFail, addCategoryFail, editCategoryFail, deleteCategoryFail } = require('./ErrorModel')

/**
 * 添加房间
 * @param {Object} param0 添加房间 { roomName }
 */
async function addRoom ({ roomName }) {
  try {
    const goods = await createRoom({
      roomName
    })
    if (goods === 'repeat') {
      return new ErrorModel(repeatRoom)
    }
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(addRoomFail)
  }
}

/**
 * 更新房间
 * @param {Object} param0 更新房间 { id, roomName }
 */
async function editRoom ({ id, roomName }) {
  try {
    const goods = await updateRoom({
      id,
      roomName
    })
    if (goods === 'repeat') {
      return new ErrorModel(repeatRoom)
    }
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(editRoomFail)
  }
}

/**
 * 获取房间列表
 * @param {Object} param0 房间列表 {  }
 */
async function getRoomsList () {
  try {
    const result = await searchRoom()
    return new SuccessModel(result)
  } catch (e) {
    console.log(e)
  }
}

/**
 * 删除房间
 * @param {Object} param0 删除房间 { id }
 */
async function deleteRoom ({ id }) {
  try {
    const goods = await destroyRoom({
      id
    })
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(deleteRoomFail)
  }
}

/**
 * 添加物品类别
 * @param {Object} param0 添加物品类别 { categoryName }
 */
async function addCategory ({ categoryName }) {
  try {
    const goods = await createCategory({
      categoryName
    })
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(addCategoryFail)
  }
}

/**
 * 更新物品类别
 * @param {Object} param0 更新物品类别 { id, categoryName }
 */
async function editCategory ({ id, categoryName }) {
  try {
    const goods = await updateCategory({
      id,
      categoryName
    })
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(editCategoryFail)
  }
}

/**
 * 获取物品类别列表
 * @param {Object} param0 物品类别列表 {  }
 */
async function getCategoriesList () {
  try {
    const result = await searchCategory()
    return new SuccessModel(result)
  } catch (e) {
    console.log(e)
  }
}

/**
 * 删除物品类别
 * @param {Object} param0 删除房物品类别 { id }
 */
async function deleteCategory ({ id }) {
  try {
    const goods = await destroyCategory({
      id
    })
    return new SuccessModel(goods)
  } catch (e) {
    console.log(e)
    return new ErrorModel(deleteCategoryFail)
  }
}

module.exports = {
  addRoom,
  editRoom,
  getRoomsList,
  deleteRoom,
  addCategory,
  editCategory,
  getCategoriesList,
  deleteCategory
}
