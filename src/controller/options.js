/*
 * @Author: joury
 * @Date: 2022-02-15 19:59:25
 * @LastEditors: joury
 * @LastEditTime: 2022-02-17 19:22:35
 * @Description: controller-options
 */

const { addRoom, editRoom, getRoomsList, deleteRoom, addCategory, editCategory, getCategoriesList, deleteCategory } = require('../models/options')

const enumRouter = {
  addRoom: async (ctx, next) => {
    const {
      roomName
    } = ctx.query
    ctx.body = await addRoom({roomName})
  },
  editRoom: async (ctx, next) => {
    const {
      id,
      roomName
    } = ctx.query
    ctx.body = await editRoom({id, roomName})
  },
  getRoomsList: async (ctx, next) => {
    ctx.body = await getRoomsList()
  },
  deleteRoom: async (ctx, next) => {
    const {
      id
    } = ctx.query
    ctx.body = await deleteRoom({id})
  },
  addCategory: async (ctx, next) => {
    const {
      categoryName
    } = ctx.query
    ctx.body = await addCategory({categoryName})
  },
  editCategory: async (ctx, next) => {
    const {
      id,
      categoryName
    } = ctx.query
    ctx.body = await editCategory({id, categoryName})
  },
  getCategoriesList: async (ctx, next) => {
    ctx.body = await getCategoriesList()
  },
  deleteCategory: async (ctx, next) => {
    const {
      id
    } = ctx.query
    ctx.body = await deleteCategory({id})
  }
}

module.exports = enumRouter
