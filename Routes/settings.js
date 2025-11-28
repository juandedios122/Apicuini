const express = require("express");
const Settings = require("../Models/Settings");

const router = express.Router();

// GET settings
router.get("/:uid", async (req, res) => {
  let config = await Settings.findOne({ uid: req.params.uid });

  if (!config)
    config = await Settings.create({ uid: req.params.uid });

  res.json(config);
});

// UPDATE settings
router.put("/:uid", async (req, res) => {
  const updated = await Settings.findOneAndUpdate(
    { uid: req.params.uid },
    req.body,
    { new: true }
  );

  res.json(updated);
});

module.exports = router;
