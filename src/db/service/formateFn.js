function formateGroup(list) {
  if (!list) return list
  return list.map(item => {
    return {
      label: item.position || item.categoryCode,
      count: item.count || 0
    }
  })
}

module.exports = {
  formateGroup
}
