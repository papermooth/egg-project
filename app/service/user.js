"use strict";

const { Service } = require("egg");

class UserService extends Service {
  async findById(id) {
    const user = await this.app.mysql.get("user", { id });
    return user;
  }

  async getUserListByTitle(title) {
    const users = await this.app.mysql.select("user", {
      where: { title },
      columns: ["username", "title"],
      limit: 5,
      offset: 0,
    });
    return users;
  }

  async create({ username, password, title }) {
    const result = await this.app.mysql.insert("user", {
      username,
      password,
      title,
    });
    const isSuccess = result.affectedRows === 1;
    return isSuccess;
  }

  async update(userInfo) {
    const result = await this.app.mysql.update("user", userInfo, {
      where: {
        id: 3,
      },
      columns: ["username"],
    });
    return result.affectedRows > 0;
  }

  async del() {
    const result = await this.app.mysql.delete("user", {
      username: "张三",
    });
    return result.affectedRows >= 0;
  }
}

module.exports = UserService;
