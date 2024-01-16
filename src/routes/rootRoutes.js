import express from "express";
import userRoutes from "./userRoutes.js";
import restaurantRoutes from "./restaurantRotes.js";
const rootRoutes = express.Router();

rootRoutes.use("/user", userRoutes);
rootRoutes.use("/restaurant", restaurantRoutes);
export default rootRoutes;
