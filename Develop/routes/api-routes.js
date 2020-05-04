const router = require("express").Router();
const db = require("../models");


router.post("/api/workouts", ({}, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find()
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", ({body, params}, res) => {  
      console.log(body);  
      db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  }); 


module.exports = router;