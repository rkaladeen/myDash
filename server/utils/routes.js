const Lists = require('../controllers/controller.task');

module.exports = app => {
  app.get("/reminder", Lists.getAll);
  app.get("/reminder/:_id", Lists.getOne);
  app.post("/reminder", Lists.create);
  app.put("/reminder/:_id", Lists.update);
  app.delete("/reminder/:_id", Lists.remove);
  //Task Routes
  app.put("/reminder/:_id/add", Lists.addTask);
  app.put("/reminder/:_id/remove", Lists.removeTask);
  app.put("/reminder/:_id/check", Lists.checkTask);

}