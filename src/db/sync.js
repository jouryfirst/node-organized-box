const seq = require('./seq')

require('./model/index')

seq.authenticate().then(() => {
  console.log('authenticate ok')
}).catch((e) => {
  console.log('authenticate err', e)
})

// 执行同步
seq.sync({force: true}).then(() => {
  console.log('同步成功')
  process.exit()
})
