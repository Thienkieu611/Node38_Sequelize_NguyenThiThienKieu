import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);
const createLikeRestaurant = async (req, res) => {
  try {
    let { user_id, res_id, date_like } = req.body;

    // kiểm tra người dùng đó đã like nhà hàng chưa, nếu like rồi mà like nữa sẽ thành không like
    let exist_like = await conn.like_res.findOne({
      where: { user_id, res_id },
    });

    if (exist_like) {
      await exist_like.destroy();
      return res.send("You have clicked like twice => Unlike");
    }

    // Kiểm tra nhà hàng có tồn tại không
    let restaurant = await conn.restaurant.findByPk(res_id);

    if (!restaurant) {
      return res.send("Restaurant is not exist !");
    }

    // Nếu thoả điều kiện thì cho phép người dùng like
    let newLike = { user_id, res_id, date_like };
    await conn.like_res.create(newLike);
    res.send("Like success !!!");
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
const unLikeRestaurant = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;
    let exist_like = await conn.like_res.findOne({
      where: { user_id, res_id },
    });

    if (!exist_like) {
      return res.send("This like is not exist !");
    }
    await exist_like.destroy();
    return res.send("Unlike success !");
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
const getListLikeByUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let listLike = await conn.like_res.findAll({
      where: { user_id: userId },
    });
    res.send(listLike);
    // let data = await conn.like_res.findAll;
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
const createRateRestaurant = async (req, res) => {
  try {
    let { user_id, res_id, amount, date_rate } = req.body;
    // Kiểm tra người dùng đó đã đánh giá chưa, nếu rồi thì cập nhật đánh giá còn chưa thì thêm đánh giá
    let existRate = await conn.rate_res.findOne({
      where: { user_id, res_id },
    });
    if (existRate) {
      existRate = await existRate.update({ amount, date_rate });
      return res.send(
        "You have successfully updated your restaurant review !!!"
      );
    } else {
      existRate = await conn.rate_res.create({
        user_id,
        res_id,
        amount,
        date_rate,
      });
      res.send("You have successfully rated the restaurant !!!");
    }
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
const getListRateByUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let listRate = await conn.rate_res.findAll({
      where: { user_id: userId },
    });
    res.send(listRate);
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
const createOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code_order, arr_sub_id } = req.body;

    // Kiểm tra món ăn đó có tồn tại không
    let checkFood = await conn.food.findByPk(food_id);
    if (!checkFood) {
      return res.send("This Food is not exist !!!");
    }

    let newOrder = { user_id, food_id, amount, code_order, arr_sub_id };
    await conn.order_food.create(newOrder);
    res.send("User order food successfull !!!");
  } catch (error) {
    res.send(`Error: ${error}`);
  }
};
export {
  createLikeRestaurant,
  unLikeRestaurant,
  getListLikeByUser,
  createRateRestaurant,
  getListRateByUser,
  createOrder,
};
