/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: options操作
 */
const { createRoom,updateRoom, searchRoom, destroyRoom } = require('../db/service/roomDb')
const { SuccessModel, ErrorModel } = require('./ResModel')
const { addRoomFail, editRoomFail, deleteRoomFail } = require('./ErrorModel')

/**
 * 添加房间
 * @param {Object} param0 添加房间 { roomName }
 */
async function addRoom ({ roomName }) {
  try {
    const goods = await createRoom({
      roomName
    })
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
module.exports = {
  addRoom,
  editRoom,
  getRoomsList,
  deleteRoom
}
