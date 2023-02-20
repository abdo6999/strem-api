"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovies = exports.updateMovies = exports.createMovies = exports.showMovies = exports.getMovies = void 0;
const movie_1 = require("../models/movie");
const movie = new movie_1.Movie();
const getMovies = async (req, res) => {
    try {
        const movies = await movie.get();
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(400).send(`cannot get orders ${error}`);
    }
};
exports.getMovies = getMovies;
const showMovies = async (req, res) => {
    try {
        const movies = await movie.show(parseInt(req.params.id));
        if (movies === undefined) {
            res.status(404).send('unvalid prams');
        }
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(400).send(`cannot get orders ${error}`);
    }
};
exports.showMovies = showMovies;
const createMovies = async (req, res) => {
    try {
        const data = req.body;
        const movies = await movie.create(data);
        console.log(movies);
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(400).send(`cannot get orders ${error}`);
    }
};
exports.createMovies = createMovies;
const updateMovies = async (req, res) => {
    try {
        const data = req.body;
        const movies = await movie.update(data, parseInt(req.params.id));
        console.log(movies);
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(400).send(`cannot get orders ${error}`);
    }
};
exports.updateMovies = updateMovies;
const deleteMovies = async (req, res) => {
    try {
        const movies = await movie.delete(parseInt(req.params.id));
        res.status(200).json(movies);
    }
    catch (error) {
        res.status(400).send(`cannot get orders ${error}`);
    }
};
exports.deleteMovies = deleteMovies;
