const { GoodsBox } = require('../models/model')

!(async function () {
  const desk = await GoodsBox.create({
    goodsName: '桌子',
    goodsCount: 4,
    room: '客厅',
    category: '家具',
    goodsTag: '',
    remark: '这是一张桌子'
  })
})()
