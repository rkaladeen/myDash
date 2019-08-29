const TaskList = require('mongoose').model('TaskList');

class TaskListController {
  getAll(req, res) {
    TaskList.find({})
      .then(tasks => res.json(tasks))
      .catch(err => res.json(err));
  }
  getOne(req, res) {
    TaskList.findOne({ _id: req.params._id })
      .then(task => res.json(task))
      .catch(err => res.json(err));
  }
  create(req, res) {
    let m = new TaskList(req.body);
    m.save()
      .then(() => res.json({ status: "ok" }))
      .catch(err => res.json(err));
  }
  update(req, res) {
    TaskList.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
      .then(() => res.json({ status: "update successful" }))
      .catch(err => res.json(err));
  }
  remove(req, res) {
    TaskList.findOneAndDelete({ _id: req.params._id })
      .then(() => res.json({ status: "ok" }))
      .catch(err => res.json(err));
  }
}

module.exports = new TaskListController();