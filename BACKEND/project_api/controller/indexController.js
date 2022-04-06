import express from "express";
import { Router } from "express";
import cors from "cors";
// const mongodb = require('mongoose');
import mongodb from "mongoose";
import mongoosedb from "../config/db.config.js";
const router = express.Router();
import("dotenv/config");

import { ObjectId } from "mongodb";

import { productModel } from "../model/product.model.js";
import { cartModel } from "../model/cart.model.js";

const getAllProduct = async (req, res) => {
  const data = await productModel.find({
    trangthai: "con",
  });

  console.log("DATA LA", data);

  res.send(data);
};

const getDetailProduct = async (req, res) => {
  let idObject = new ObjectId(req.params.id);
  const data = await productModel.find({
    _id: idObject,
  });

  res.send(data);
};
// const index_controller = {
//   getAllProduct: async (req, res) => {
//     const data = await productModel.find({
//       trangthai: "con",
//     });

//     res.send(data);
//   },
// getDetailProduct: (req, res) => {
//   let sql = "SELECT * FROM products WHERE id = ?";
//   db.query(sql, [req.params.productId], (err, response) => {
//     if (err) throw err;
//     res.json(response[0]);
//   });
// },
// updateProduct: (req, res) => {
//   let data = req.body;
//   let productId = req.params.productId;
//   let sql = "UPDATE products SET ? WHERE id = ?";
//   db.query(sql, [data, productId], (err, response) => {
//     if (err) throw err;
//     res.json({ message: "Update success!" });
//   });
// },
// addProduct: (req, res) => {
//   let data = req.body;
//   let sql = "INSERT INTO products SET ?";
//   db.query(sql, [data], (err, response) => {
//     if (err) throw err;
//     res.json({ message: "Insert success!" });
//   });
// },
// deleteProduct: (req, res) => {
//   let sql = "DELETE FROM products WHERE id = ?";
//   db.query(sql, [req.params.productId], (err, response) => {
//     if (err) throw err;
//     res.json({ message: "Delete success!" });
//   });
// },
// };

// export default { index_controller };
export default { getAllProduct, getDetailProduct };