import express from "express";
import morgan from "morgan";
import seedRouter from "./routes/seedRoutes.js";
import CategoryRouter from "./routes/categoryRoutes.js";
import ProductRouter from "./routes/productRoutes.js";
import UserRouter from "./routes/userRoutes.js";
import OrderRouter from "./routes/orderRoutes.js";

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/api/seed/", seedRouter);
app.use("/api/category/", CategoryRouter);
app.use("/api/products/", ProductRouter);
app.use("/api/users/", UserRouter);
app.use("/api/orders/", OrderRouter);

export default app;