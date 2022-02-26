/*
 * @Author: joury
 * @Date: 2022-02-17 19:12:35
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:25:12
 * @Description: sql模型及数据库逻辑
 */
const Room  = require('../model/Room')

/**
 * 添加房间
 * @param {Object} param0 添加房间 { roomName }
 */
async function createRoom({ roomName }) {
  const isRepeat = await Room.findOne({where: {roomName}})
  if (isRepeat) {
    return 'repeat'
  }
  const result = await Room.create({
    roomName
  })
  return result.dataValues
}

/**
 * 更新房间
 * @param {Object} param0 更新房间 { id, roomName }
 */
async function updateRoom({ id, roomName }) {
  const isRepeat = await Room.findOne({where: {roomName}})
  if (isRepeat) {
    return 'repeat'
  }
  const result = await Room.update({
    roomName
  }, {
    where: {
      id
    }
  })
  return result
}

/**
 * 查询房间
 * @param {Object} param0 查询房间 {  }
 */
async function searchRoom() {
  const result = await Room.findAndCountAll({
    // order: [
    //   ['id', 'desc']
    // ]
  })
  let roomList = result.rows.map(row => row.dataValues)
  roomList.forEach(item => {
    item.code = item.id
  })
  return roomList
}

/**
 * 删除房间
 * @param {Object} param0 删除房间 { id }
 */
async function destroyRoom({ id }) {
  const result = await Room.destroy({
    where: {
      id
    }
  })
  return result
}

module.exports = {
  createRoom,
  updateRoom,
  searchRoom,
  destroyRoom
}
