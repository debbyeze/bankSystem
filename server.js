const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const accountRoutes = require("./src/routes/accountRoutes.js");
const transactionRoutes = require("./src/routes/transactionRoutes");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


// Routes
app.use("/account", accountRoutes);
app.use("/transaction", transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Banking API running on port ${PORT}`));