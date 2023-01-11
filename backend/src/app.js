import express from "express";
import morgan from "morgan";
import cors from "cors";
import seedRouter from "./routes/seedRoutes.js";
import CategoryRouter from "./routes/categoryRoutes.js";
import ProductRouter from "./routes/productRoutes.js";
import UserRouter from "./routes/userRoutes.js";
import OrderRouter from "./routes/orderRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000; // server hosting will set the port

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server
app.listen(PORT, () => {
    console.log(`Server at: http://localhost:${PORT}`);
  });

//routers
app.use("/api/seed/", seedRouter);
app.use("/api/category/", CategoryRouter);
app.use("/api/products/", ProductRouter);
app.use("/api/users/", UserRouter);
app.use("/api/orders/", OrderRouter);

export default app;
