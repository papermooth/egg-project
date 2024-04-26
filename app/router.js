/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/news", controller.news.list);
  router.get("/user/list", controller.user.getUserList);

  router.post("/user/add", controller.user.addUser);
  router.post("/user/create", controller.user.createUser);
  router.get("/user/:id", controller.user.getUserById);

  router.patch("/user/update", controller.user.updateUser);
  router.delete("/user/del", controller.user.delUser);
};
