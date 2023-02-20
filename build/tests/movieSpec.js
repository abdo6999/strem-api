"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = require("../models/movie");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
let movie = new movie_1.Movie();
describe("Test movie values", () => {
    it("get (movies) retarn value", async () => {
        const response = await movie.get();
        expect(response[0]).toEqual({
            id: 1,
            title: "I Am Legend",
            year: "2007",
            rated: "PG-13",
            released: "14 Dec 2007",
            genre: "Drama, Horror, Sci-Fi",
            plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
            language: "English",
            poster: "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
            metascore: "65",
            imdbrating: "7.2",
            imdbvotes: "533,874",
            imdbid: "tt0480249",
            images: [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
            ]
        });
    });
    it("get (movies/:id)  retarn value", async () => {
        const response = await movie.show(5);
        expect(response).toEqual({
            id: 5,
            title: "Interstellar",
            year: "2014",
            rated: "PG-13",
            released: "07 Nov 2014",
            genre: "Adventure, Drama, Sci-Fi",
            plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            language: "English",
            metascore: "74",
            imdbrating: "8.6",
            imdbvotes: "937,412",
            imdbid: "tt0816692",
            poster: "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            images: [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
            ]
        });
    });
    it("post (movie)  retarn value", async () => {
        const response = await movie.create({
            title: "Avatar",
            year: "2009",
            rated: "PG-13",
            released: "18 Dec 2009",
            genre: "Action, Adventure, Fantasy",
            plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            language: "English, Spanish",
            poster: "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            metascore: "83",
            imdbrating: "7.9",
            imdbvotes: "890,617",
            imdbid: "tt0499549",
            images: [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
            ]
        });
        expect(response).toEqual({
            id: 16,
            title: "Avatar",
            year: "2009",
            rated: "PG-13",
            released: "18 Dec 2009",
            genre: "Action, Adventure, Fantasy",
            plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            language: "English, Spanish",
            poster: "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            metascore: "83",
            imdbrating: "7.9",
            imdbvotes: "890,617",
            imdbid: "tt0499549",
            images: [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
            ]
        });
    });
    it("patch (movie/:id)  value", async () => {
        const response = await movie.update({ title: "Avatar", year: "2009" }, 8);
        expect(response).toEqual({ title: "Avatar", year: "2009" });
    });
});
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
describe("Test movie responses", () => {
    it("get (movies) endpoint to be 200", async () => {
        const response = await request.get("/movies");
        expect(response.status).toBe(200);
    });
    it("get (movie/:id) with invalid prmas or not exist endpoint to be 404", async () => {
        const response = await request.get("/movies/555");
        expect(response.status).toBe(404);
    });
    it("get (movie/:id) with valid prmas endpoint to be 200", async () => {
        const response = await request.get("/movies/5");
        expect(response.status).toBe(200);
    });
    it("post (movie) with Unauthorized and valid body endpoint to be 401", async () => {
        const response = await request.post("/movie").send({
            title: "I Am Legend",
            year: "2007",
            rated: "PG-13",
            released: "14 Dec 2007",
            genre: "Drama, Horror, Sci-Fi",
            plot: "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
            language: "English",
            poster: "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
            metascore: "65",
            imdbrating: "7.2",
            imdbvotes: "533,874",
            imdbid: "tt0480249",
            images: [
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg",
                "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
            ]
        });
        expect(response.status).toBe(401);
    });
    it("patch (movie/:id) with Unauthorized  and  valid body endpoint to be 401", async () => {
        const response = await request.patch("/movie/4").send({
            rated: "PG-166"
        });
        expect(response.status).toBe(401);
    });
    it("post (movie) with authorized and unvalid body endpoint to be 400", async () => {
        const response = await request
            .post("/movie")
            .send({
            title: "Game of Thdddes",
            rated: "TV-MAeeeedd33"
        })
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(400);
    });
    it("post (movie) with authorized and unvalid body  endpoint to be 400", async () => {
        const response = await request
            .post("/movie")
            .send({
            products_id: [8, 15],
            user_id: 5
        })
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(400);
    });
    it("patch (movie/:id) with authorized and unvalid body endpoint to be 400", async () => {
        const response = await request
            .patch("/movie/4")
            .send({
            user_id: 3
        })
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(400);
    });
    it("delete (movie/:id) with authorized and  valid body endpoint to be 200", async () => {
        const response = await request
            .delete("/movie/4")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlyYWlnZGQ0YXR0MyIsImlhdCI6MTY3Njg4MTY3NywiZXhwIjoxNjc3MDU0NDc3fQ.b4DfXeibAZkn7Ewo-8VKf1fqaEGnYRLPI_T7XvmqaVU");
        expect(response.status).toBe(200);
    });
});
