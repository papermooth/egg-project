"use strict";

const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = {
      id: "11",
      username: "zs",
      age: 18,
    };
  }
}

module.exports = NewsController;
