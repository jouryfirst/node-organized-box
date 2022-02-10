/**
 * @description sequelize实例
 * @author joury
 */

const Sequelize = require('sequelize')

const conf = {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
}

const seq = new Sequelize('kod2_organized_box', 'root', 'wwwnode1013+', conf)

seq.authenticate().then(() => {
  console.log('ok')
}).catch((e) => {
  console.log('err', e)
})

module.exports = seq
