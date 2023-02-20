"use strict";
// import * as supertest from "supertest";
// import app from "../server";
// import { ProductTable } from "../models/products";
// const request = supertest(app);
// let product = new ProductTable();
// describe("Test product values", () => {
//   it("check get-products  retarn value", async () => {
//     const response = await product.index();
//     expect(response[0]).toEqual({
//       id: 1,
//       title: "iPhone 9",
//       description: "An apple mobile which is nothing like apple",
//       price: 549,
//       rating: 4.69,
//       stock: 94,
//       brand: "Apple",
//       category: "smartphones",
//       thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//       images: [
//         "https://i.dummyjson.com/data/products/1/1.jpg",
//         "https://i.dummyjson.com/data/products/1/2.jpg",
//         "https://i.dummyjson.com/data/products/1/3.jpg",
//         "https://i.dummyjson.com/data/products/1/4.jpg",
//         "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//       ]
//     });
//   });
//   it("check show-product  retarn value", async () => {
//     const response = await product.show(5);
//     expect(response).toEqual({
//       id: 5,
//       title: "Huawei P30",
//       description:
//         "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//       price: 499,
//       rating: 4.09,
//       stock: 32,
//       brand: "Huawei",
//       category: "smartphones",
//       thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
//       images: [
//         "https://i.dummyjson.com/data/products/5/1.jpg",
//         "https://i.dummyjson.com/data/products/5/2.jpg",
//         "https://i.dummyjson.com/data/products/5/3.jpg"
//       ]
//     });
//   });
//   it("check create-product endpoint retarn value", async () => {
//     const response = await product.add({
//       title: "MacBook Pro",
//       description:
//         "MacBook Pro 2021 with mini-LED display may launch between September, November",
//       price: 1749,
//       rating: 4.57,
//       stock: 83,
//       brand: "Apple",
//       category: "laptops",
//       thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
//       images: [
//         "https://i.dummyjson.com/data/products/6/1.png",
//         "https://i.dummyjson.com/data/products/6/2.jpg",
//         "https://i.dummyjson.com/data/products/6/3.png",
//         "https://i.dummyjson.com/data/products/6/4.jpg"
//       ]
//     });
//     expect(response).toEqual({
//       id: 22,
//       title: "MacBook Pro",
//       description:
//         "MacBook Pro 2021 with mini-LED display may launch between September, November",
//       price: 1749,
//       rating: 4.57,
//       stock: 83,
//       brand: "Apple",
//       category: "laptops",
//       thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
//       images: [
//         "https://i.dummyjson.com/data/products/6/1.png",
//         "https://i.dummyjson.com/data/products/6/2.jpg",
//         "https://i.dummyjson.com/data/products/6/3.png",
//         "https://i.dummyjson.com/data/products/6/4.jpg"
//       ]
//     });
//   });
//   it("check update-product  endpoint retarn value", async () => {
//     const response = await product.update({
//         rating: 4.54,
//         stock: 852
//       },8)
//     expect(response).toEqual({
//       rating: 4.54,
//       stock: 852
//     });
//   });
// });
// describe("Test product responses", () => {
//   it("get get-products endpoint to be 200", async () => {
//     const response = await request.get("/get-products");
//     expect(response.status).toBe(200);
//   });
//   it("get show-product with invalid query endpoint to be 404", async () => {
//     const response = await request.get("/show-product/555");
//     expect(response.status).toBe(404);
//   });
//   it("get show-product with valid query endpoint to be 200", async () => {
//     const response = await request.get("/show-product/5");
//     expect(response.status).toBe(200);
//   });
//   it("post create-product with Unauthorized and valid body endpoint to be 401", async () => {
//     const response = await request.post("/create-product").send({
//       title: "- Daal Masoor 500 grams",
//       description: "Fine quality Branded Product Keep in a cool and dry place",
//       price: 20,
//       rating: 4.44,
//       stock: 133,
//       brand: "Saaf & Khaas",
//       category: "groceries",
//       thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
//       images: [
//         "https://i.dummyjson.com/data/products/21/1.png",
//         "https://i.dummyjson.com/data/products/21/2.jpg",
//         "https://i.dummyjson.com/data/products/21/3.jpg"
//       ]
//     });
//     expect(response.status).toBe(401);
//   });
//   it("post create-product with authorized and  valid body  endpoint to be 200", async () => {
//     const response = await request
//       .post("/create-product")
//       .send({
//         title: "- Daal Masoor 500 grams",
//         description:
//           "Fine quality Branded Product Keep in a cool and dry place",
//         price: 20,
//         rating: 4.44,
//         stock: 133,
//         brand: "Saaf & Khaas",
//         category: "groceries",
//         thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
//         images: [
//           "https://i.dummyjson.com/data/products/21/1.png",
//           "https://i.dummyjson.com/data/products/21/2.jpg",
//           "https://i.dummyjson.com/data/products/21/3.jpg"
//         ]
//       })
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzaGF3ZTIiLCJpYXQiOjE2NzY4MTczNDYsImV4cCI6MTY3Njk5MDE0Nn0.S-o0HDruYndaBzgYENIr_vULBjC1SARzAm91neA7P3M"
//       );
//     expect(response.status).toBe(200);
//   });
//   it("post create-product with authorized and unvalid body  endpoint to be 400", async () => {
//     const response = await request
//       .post("/create-product")
//       .send({
//         price: 20,
//         rating: 4.44,
//         stock: 133,
//         brand: "Saaf & Khaas",
//         category: "groceries",
//         thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
//         images: [
//           "https://i.dummyjson.com/data/products/21/1.png",
//           "https://i.dummyjson.com/data/products/21/2.jpg",
//           "https://i.dummyjson.com/data/products/21/3.jpg"
//         ]
//       })
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzaGF3ZTIiLCJpYXQiOjE2NzY4MTczNDYsImV4cCI6MTY3Njk5MDE0Nn0.S-o0HDruYndaBzgYENIr_vULBjC1SARzAm91neA7P3M"
//       );
//     expect(response.status).toBe(400);
//   });
//   it("patch update-product with Unauthorized  and  valid body endpoint to be 401", async () => {
//     const response = await request.patch("/update-product/4").send({
//       brand: "Saaf & Khaas",
//       category: "groceries",
//       thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
//       images: [
//         "https://i.dummyjson.com/data/products/21/1.png",
//         "https://i.dummyjson.com/data/products/21/2.jpg",
//         "https://i.dummyjson.com/data/products/21/3.jpg"
//       ]
//     });
//     expect(response.status).toBe(401);
//   });
//   it("patch update-product with authorized and  valid body endpoint to be 200", async () => {
//     const response = await request
//       .patch("/update-product/4")
//       .send({
//         brand: "Saaf & Khaas",
//         category: "groceries",
//         thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
//         images: [
//           "https://i.dummyjson.com/data/products/21/1.png",
//           "https://i.dummyjson.com/data/products/21/2.jpg",
//           "https://i.dummyjson.com/data/products/21/3.jpg"
//         ]
//       })
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzaGF3ZTIiLCJpYXQiOjE2NzY4MTczNDYsImV4cCI6MTY3Njk5MDE0Nn0.S-o0HDruYndaBzgYENIr_vULBjC1SARzAm91neA7P3M"
//       );
//     expect(response.status).toBe(200);
//   });
//   it("delete delete-product with authorized and  valid body endpoint to be 200", async () => {
//     const response = await request
//       .delete("/delete-product/8")
//       .set(
//         "Authorization",
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzaGF3ZTIiLCJpYXQiOjE2NzY4MTczNDYsImV4cCI6MTY3Njk5MDE0Nn0.S-o0HDruYndaBzgYENIr_vULBjC1SARzAm91neA7P3M"
//       );
//     expect(response.status).toBe(200);
//   });
// });
