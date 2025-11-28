const express = require("express");
const Tree = require("../Models/Tree");

const router = express.Router();

// GET tree progress
router.get("/:uid", async (req, res) => {
  const progress = await Tree.findOne({ uid: req.params.uid });

  if (!progress)
    return res.json({
      msg: "Sin progreso, creando...",
      data: await Tree.create({ uid: req.params.uid })
    });

  res.json(progress);
});

// Update Water
router.post("/water", async (req, res) => {
  const { uid } = req.body;
  const update = await Tree.findOneAndUpdate(
    { uid },
    { last_water: Date.now(), $inc: { growth_points: 1 } },
    { new: true }
  );
  res.json(update);
});

// Update Feed
router.post("/feed", async (req, res) => {
  const { uid } = req.body;
  const update = await Tree.findOneAndUpdate(
    { uid },
    { last_feed: Date.now(), $inc: { growth_points: 1 } },
    { new: true }
  );
  res.json(update);
});

// Update Play
router.post("/play", async (req, res) => {
  const { uid } = req.body;
  const update = await Tree.findOneAndUpdate(
    { uid },
    { last_play: Date.now(), $inc: { growth_points: 1 } },
    { new: true }
  );
  res.json(update);
});

module.exports = router;
