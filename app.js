const express = require("express");
const cors = require("cors");
const { mockData } = require("./mockData");
const Sequelize = require("sequelize");
const { QueryTypes } = require("sequelize");

const app = express();
const port = process.env.port || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Works!");
});

app.get("/social", (req, res) => {
  res.send(mockData);
});

app.get("/social/:id", (req, res) => {
  var id = req.params.id;
  res.send(mockData[id]);
});

app.get('/rotatestedb', async (req, res) => {
  const sequelize = new Sequelize(
    'shop',
    'postgres',
    'pg2022#OffStore!',
    {
      host: 'offstore.cpnztdd8ok7k.sa-east-1.rds.amazonaws.com',
      dialect: 'postgres',

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
  );

  const response = await sequelize.query(
    `
    SELECT * FROM users where id = 1
  `,
    {
      type: QueryTypes.SELECT,
    }
  );

  return res.json(response);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
