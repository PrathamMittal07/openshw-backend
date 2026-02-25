const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  level: { type: Number, default: 1 },
  xp: { type: Number, default: 0 },
  unlockedComponents: [{ type: String }],
  badges: [{ type: String }]
});

module.exports = mongoose.model("Progress", progressSchema);
