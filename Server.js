const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./Routes/auth");
const treeRoutes = require("./Routes/tree");
const settingsRoutes = require("./Routes/settings");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error(err));

app.use("/auth", authRoutes);
app.use("/tree", treeRoutes);
app.use("/settings", settingsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API running on port", PORT));
