"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.authenticateUser = exports.deleteUser = exports.updateUser = exports.showUser = exports.createUser = exports.getUsers = void 0;
const users_1 = require("../models/users");
const jwt_1 = __importDefault(require("../helpers/jwt"));
const user = new users_1.User();
const getUsers = async (req, res) => {
    try {
        const users = await user.get();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).send(`cannot get users ${error}`);
    }
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    // if(req.body instanceof Users){
    //   res.status(401).send(`bad request create `);
    // }
    try {
        const data = req.body;
        const users = await user.create(data);
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).send(`bad request create user ${error}`);
    }
};
exports.createUser = createUser;
const showUser = async (req, res) => {
    try {
        const users = await user.show(parseInt(req.params.id));
        if (users == undefined) {
            res.status(404).send(`the id not exist in user `);
        }
        res.json(users);
    }
    catch (error) {
        res.status(400).send(`bad request  ${error}`);
    }
};
exports.showUser = showUser;
const updateUser = async (req, res) => {
    try {
        const data = { ...req.body };
        const users = await user.update(data, parseInt(req.params.id));
        res.json(users);
    }
    catch (error) {
        res.status(400).send(`cannot update user ${error}`);
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const users = await user.delete(req.body.id);
        res.json(users);
    }
    catch (error) {
        res.status(404).send(`the id not exist in user ${error}`);
    }
};
exports.deleteUser = deleteUser;
const authenticateUser = async (req, res) => {
    try {
        const data = {
            username: req.body.username,
            password: req.body.password,
        };
        const users = await user.authenticate(data.username, data.password);
        res.json(users);
    }
    catch (error) {
        res.status(401).send(`username or password not correct ${error}`);
    }
};
exports.authenticateUser = authenticateUser;
const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;
        const users = jwt_1.default.vreifyRefreshToken(refreshToken);
        const userToken = jwt_1.default.sign({ username: users });
        const userRefreshToken = jwt_1.default.signRefresh({ username: users });
        res
            .status(200)
            .json({ accessToken: userToken, refreshToken: userRefreshToken });
    }
    catch (error) {
        res.status(401).send(`token is not correct ${error}`);
    }
};
exports.refreshToken = refreshToken;
