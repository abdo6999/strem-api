"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovies = exports.updateMovies = exports.createMovies = exports.showWatchLists = exports.getMovies = void 0;
const watch_list_1 = require("./../models/watch_list");
const watch_list = new watch_list_1.Watch_list();
const getMovies = async (req, res) => {
    try {
        const watch_lists = await watch_list.get();
        res.status(200).json(watch_lists);
    }
    catch (error) {
        res.status(400).send(`cannot get watch_list ${error}`);
    }
};
exports.getMovies = getMovies;
const showWatchLists = async (req, res) => {
    try {
        const watch_lists = await watch_list.show(parseInt(req.params.id));
        if (watch_lists === undefined) {
            res.status(404).send('unvalid prams');
        }
        res.status(200).json(watch_lists);
    }
    catch (error) {
        res.status(400).send(`cannot get orders ${error}`);
    }
};
exports.showWatchLists = showWatchLists;
const createMovies = async (req, res) => {
    const data = req.body;
    try {
        const watch_lists = await watch_list.create(data);
        res.status(200).json(watch_lists);
    }
    catch (error) {
        res.status(400).send(`cannot get watch_list ${error}`);
    }
};
exports.createMovies = createMovies;
const updateMovies = async (req, res) => {
    const data = req.body;
    try {
        const watch_lists = await watch_list.update(data, parseInt(req.params.id));
        res.status(200).json(watch_lists);
    }
    catch (error) {
        res.status(400).send(`cannot get watch_list ${error}`);
    }
};
exports.updateMovies = updateMovies;
const deleteMovies = async (req, res) => {
    try {
        const watch_lists = await watch_list.delete(parseInt(req.params.id));
        res.status(200).json(watch_lists);
    }
    catch (error) {
        res.status(400).send(`cannot get watch_list ${error}`);
    }
};
exports.deleteMovies = deleteMovies;
