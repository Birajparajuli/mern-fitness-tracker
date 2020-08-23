const router = require("express").Router();
let Exersice = require("../models/exersice.model");

router.route("/").get((req, res) => {
  Exersice.find()
    .then((exersices) => res.json(exersices))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('./add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExersice = new Exersice({
    username,
    description,
    duration,
    date,
  });
  newExersice.save()
    .then(()=>res.json('Exersice Added!'))
    .catch(err => res.status(400).json('Error: '+ err));

});

module.exports = router;
