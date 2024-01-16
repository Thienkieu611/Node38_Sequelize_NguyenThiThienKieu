import express from "express";
import {
  createLikeRestaurant,
  createOrder,
  createRateRestaurant,
  getListLikeByUser,
  getListRateByUser,
  unLikeRestaurant,
} from "../controllers/userControllers.js";

const userRoutes = express.Router();
userRoutes.post("/like", createLikeRestaurant);
userRoutes.delete("/unlike", unLikeRestaurant);
userRoutes.get("/get-list-like-by-user/:userId", getListLikeByUser);
userRoutes.post("/create-rate", createRateRestaurant);
userRoutes.get("/get-list-rate-by-user/:userId", getListRateByUser);
userRoutes.post("/create-order", createOrder);
export default userRoutes;
