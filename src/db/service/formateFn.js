function formateGroup(list) {
  if (!list) return list
  return list.map(item => {
    return {
      label: item.dataValues.position || item.dataValues.categoryName,
      count: item.dataValues.count || 0
    }
  })
}

module.exports = {
  formateGroup
}
