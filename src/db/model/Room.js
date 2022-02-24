/**
 * @description 房间数据模型
 * @author joury
 */
const Sequelize = require('sequelize')
const seq = require('../seq')

const Room = seq.define('rooms', {
  roomName: {
    type: Sequelize.STRING,
    allowNULL: false,
    comment: '房间名称'
  }
})

module.exports = Room
