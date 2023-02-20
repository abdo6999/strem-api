"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const watch_list_1 = require("./../models/watch_list");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
let watch_list = new watch_list_1.Watch_list();
describe("Test Watch-list values", () => {
    it("get (watch-list) retarn value", async () => {
        const response = await watch_list.get();
        expect(response[0]).toEqual({
            id: 1,
            user_id: 4,
            movie_id: 7
        });
    });
    it("get (Watch-list/:id)  retarn value", async () => {
        const response = await watch_list.show(4);
        expect(response).toEqual({
            id: 4,
            user_id: 7,
            movie_id: 8
        });
    });
    it("post (Watch-list)  retarn value", async () => {
        const response = await watch_list.create({
            user_id: 1,
            movie_id: 9
        });
        expect(response).toEqual({
            id: 14,
            user_id: 1,
            movie_id: 9
        });
    });
    it("patch (Watch-list/:id)  value", async () => {
        const response = await watch_list.update({
            user_id: 4,
            movie_id: 15
        }, 8);
        expect(response).toEqual({
            user_id: 4,
            movie_id: 15
        });
    });
});
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
describe("Test watch-list responses", () => {
    it("get (watch-list) endpoint to be 200", async () => {
        const response = await request.get("/watch-list");
        expect(response.status).toBe(200);
    });
    it("get (watch-list/:id) with invalid prmas or not exist endpoint to be 404", async () => {
        const response = await request.get("/watch-list/555");
        expect(response.status).toBe(404);
    });
    it("get (watch-list/:id) with valid prmas endpoint to be 200", async () => {
        const response = await request.get("/watch-list/5");
        expect(response.status).toBe(200);
    });
    it("post (watch-list) with Unauthorized and valid body endpoint to be 401", async () => {
        const response = await request.post("/watch-list").send({
            user_id: 1,
            movie_id: 9
        });
        expect(response.status).toBe(401);
    });
    it("patch (watch-list/:id) with Unauthorized  and  valid body endpoint to be 401", async () => {
        const response = await request.patch("/watch-list/4").send({
            user_id: 1,
            movie_id: 9
        });
        expect(response.status).toBe(401);
    });
    it("post (watch-list) with authorized and unvalid body endpoint to be 400", async () => {
        const response = await request
            .post("/watch-list")
            .send({
            title: "Game of Thdddes",
            rated: "TV-MAeeeedd33"
        })
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(400);
    });
    it("post (watch-list) with authorized and unvalid body  endpoint to be 400", async () => {
        const response = await request
            .post("/watch-list")
            .send({
            products_id: [8, 15],
            user_id: 5
        })
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(400);
    });
    it("patch (watch-list/:id) with authorized and unvalid body endpoint to be 400", async () => {
        const response = await request
            .patch("/watch-list/4")
            .send({
            products_id: [8, 15]
        })
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(400);
    });
    it("delete (watch-list/:id) with authorized and  valid body endpoint to be 200", async () => {
        const response = await request
            .delete("/watch-list/4")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(200);
    });
});
