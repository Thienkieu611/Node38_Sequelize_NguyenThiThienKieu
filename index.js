import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";
const app = express();

const port = 8080;

app.use(express.json());
app.use(rootRoutes);
app.get("/", (req, res) => {
  res.send("hello sequelize");
});
app.listen(port, () => {
  console.log(`BE starting with port ${port}`);
});
