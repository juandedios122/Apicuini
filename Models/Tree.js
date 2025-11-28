const mongoose = require("mongoose");

const TreeSchema = new mongoose.Schema({
  uid: String,
  level: { type: Number, default: 1 },
  last_water: { type: Number, default: 0 },
  last_feed: { type: Number, default: 0 },
  last_play: { type: Number, default: 0 },
  mood: { type: String, default: "neutral" },
  growth_points: { type: Number, default: 0 }
});

module.exports = mongoose.model("Tree", TreeSchema);
