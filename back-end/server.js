import express from "express";
//import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/cetegoryRoutes.js";
import ProductsRoutes from "./routes/ProductsRoutes.js";
import cors from "cors";
// config env

dotenv.config();

// rest object
const app = express();

// database config
connectDB();

//midddelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", ProductsRoutes);

const PORT = process.env.PORT || 8000;

//rest api

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce App </h1>");
});

//port

app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.DEV_MODE} port ${PORT}`);
});
