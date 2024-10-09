const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// // Database connection
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
const agentRoutes = require("./routes/agent");
const productRoutes = require("./routes/product");
const leadRoutes = require("./routes/lead");
const saleRoutes = require("./routes/sale");

app.use("/api/agents", agentRoutes);
app.use("/api/products", productRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/sales", saleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;

mongoose
  .connect("mongodb://localhost:27017/survey")
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("database not connected");
  });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
