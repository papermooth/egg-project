"use strict";
const { Controller } = require("egg");

class UserController extends Controller {
  async getUserList() {
    const { ctx } = this;
    const query = ctx.query;
    const result = await ctx.service.user.getUserListByTitle(query.title);
    // 设置响应体的内容
    ctx.body = {
      success: true,
      data: result,
    };
  }

  async getUserById() {
    const { ctx } = this;
    const result = await ctx.service.user.findById(ctx.params.id);
    ctx.body = {
      success: true,
      data: result,
    };
  }

  addUser() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = {
      success: true,
      data: ctx.request.body,
    };
  }

  async createUser() {
    const { ctx } = this;
    const body = ctx.request.body;
    const isSuccess = await ctx.service.user.create(body);

    ctx.body = {
      success: isSuccess,
      message: isSuccess ? "用户创建成功" : "用户创建失败",
    };
  }

  async updateUser() {
    const { ctx } = this;
    const body = ctx.request.body;
    await ctx.service.user.update(body);
    ctx.body = {
      success: true,
      message: "用户更新成功",
    };
  }

  async delUser() {
    const { ctx } = this;
    await ctx.service.user.del();
    ctx.body = {
      success: true,
      message: "用户删除成功",
    };
  }
}

module.exports = UserController;
