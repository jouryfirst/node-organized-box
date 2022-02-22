/**
 * @description sequelize实例
 * @author joury
 */

const Sequelize = require('sequelize')
const { isProd } = require('../utils/env')
const { HOST } = require('../config/db')
const conf = {
  host: HOST,
  port: 3306,
  dialect: 'mysql'
}

// 线上环境，使用连接池
if (isProd) {
  conf.pool = {
    max: 7, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000  // 如果一个连接池 10 s 之内没有被使用，则释放
  }
}

const seq = new Sequelize('kod2_organized_box', 'root', 'wwwnode1013+', conf)

module.exports = seq
