import express from "express";
import {
  getListLikeByRestaurant,
  getListRateByRestaurant,
} from "../controllers/restaurantController.js";

const restaurantRoutes = express.Router();

restaurantRoutes.get(
  "/get-list-like-by-restaurant/:restaurantId",
  getListLikeByRestaurant
);
restaurantRoutes.get(
  "/get-list-rate-by-restaurant/:restaurantId",
  getListRateByRestaurant
);

export default restaurantRoutes;
