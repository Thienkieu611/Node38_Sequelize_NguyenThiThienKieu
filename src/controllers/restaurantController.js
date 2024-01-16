import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getListLikeByRestaurant = async (req, res) => {
  try {
    let { restaurantId } = req.params;
    let listLike = await conn.like_res.findAll({
      where: { res_id: restaurantId },
    });
    res.send(listLike);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
const getListRateByRestaurant = async (req, res) => {
  try {
    let { restaurantId } = req.params;
    let listRate = await conn.rate_res.findAll({
      where: {
        res_id: restaurantId,
      },
    });
    res.send(listRate);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};

export { getListLikeByRestaurant, getListRateByRestaurant };
