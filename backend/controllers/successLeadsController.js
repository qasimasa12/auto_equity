const Person = require('../models/presonModel')

exports.getSuccessLeads = (req, res) => {
  Person.find({ type: "success" })
    .then(data => res.json(data))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    });
}

exports.postSuccessLeads = (req, res) => {
  const id = req.body['_id'];
  Person.findByIdAndUpdate(id, { type: 'success' })
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating data' });
    });
}
