const Person = require('../models/presonModel')

exports.getRejectedLeads = (req, res) => {
  Person.find({ type: "rejected" })
    .then(data => res.json(data))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    });
}

exports.postRejectedLeads = (req, res) => {
  const id = req.body['_id'];
  Person.findByIdAndUpdate(id, { type: 'rejected' })
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating data' });
    });
}

