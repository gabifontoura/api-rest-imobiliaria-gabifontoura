import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import userRoutes from "./routers/users.routers";
import loginRoutes from "./routers/login.routers";
import categoriesRoutes from "./routers/categories.routers";
import realEstateRoutes from "./routers/realEstate.routers";

const app: Application = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes)
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
// app.use("/schedules", scheduleRoutes);

app.use(handleErrors);

export default app;
