const dayjs = require('dayjs')

function formateGroup(list) {
  if (!list) return list
  return list.map(item => {
    return {
      label: item.dataValues.position || item.dataValues.categoryName,
      count: item.dataValues.count || 0
    }
  })
}

function formateGroupByDate(list) {
  if (!list) return list
  return list.map(item => {
    return {
      date: dayjs(item.dataValues.createdAt).format('YYYY-MM-DD'),
      count: item.dataValues.count || 0
    }
  })
}

module.exports = {
  formateGroup,
  formateGroupByDate
}
