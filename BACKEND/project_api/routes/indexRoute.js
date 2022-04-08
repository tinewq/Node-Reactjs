// "use strict";
// import express from "express";
// import { Router } from "express";
// import cors from "cors";
// // const mongodb = require('mongoose');
// import mongodb from "mongoose";
// import * as pg from "pg";
// const { Pool } = pg.default;
// const router = express.Router();
// // const DB_MONGO = require('./app/config/db.config')
// import("dotenv/config");

// import { ObjectId } from "mongodb";

// // connect mongodb

// await mongodb.connect("mongodb://localhost:27017/local", {});

// /* GET home page. */
// // router.get('/getdata', function(req, res, next) {
// //   pool.query('SELECT * FROM product_info', (err, response) => {
// //     res.send(response.rows)
// //   })

// // });

// router.get("/getdatamongodb", async (req, res) => {
//   const data = await productModel.find({
//     trangthai: "con",
//   });

//   res.send(data);

//   //console.log(session.cart);
// });

// router.get("/deleteProduct/:id", async (req, res) => {
//   let idObject = new ObjectId(req.params.id);
//   const data = await productModel.findByIdAndDelete({
//     _id: idObject,
//   });

//   res.send(data);
//   console.log("DaTA :", data);
// });

// router.get("/searchProduct", async (req, res) => {
//   var key = req.query.searchKey || "";

//   console.log("key la ", key);
//   var querysearchbar = `"\" + ${key} + \""`;
//   // filter = {
//   //   $text: { $search: querysearchbar, $caseSensitive: false },
//   //   sl: { $regex: /[^0]/, $options: "m" },

//   const data = await productModel.find({ tensp: { $regex: key } });

//   res.send(data);
// });

// export { router as indexRoute };

import indexController from "../controller/indexController.js";

const indexRoute = (app) => {
  app.route("/allProduct").get(indexController.getAllProduct);
  app.route("/product/:id").get(indexController.getDetailProduct);
  app.route("/search").get(indexController.searchProduct);
  app.route("/filler").get(indexController.fillerProduct);
  // .post(indexController.addProduct)
  // .put(indexController.updateProduct)
  // .delete(indexController.deleteProduct);
};

console.log("KIEU LA", typeof indexController.getAllProduct);

export { indexRoute };
