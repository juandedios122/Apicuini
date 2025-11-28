const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
  uid: String,
  sound_enabled: { type: Boolean, default: true },
  notifications_enabled: { type: Boolean, default: true },
  theme: { type: String, default: "light" }
});

module.exports = mongoose.model("Settings", SettingsSchema);
