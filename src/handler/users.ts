import { User } from "../models/users";
import { Request, Response } from "express";
import {  Users } from "../helpers/models";
import jwtToken from "../helpers/jwt";

const user = new User();
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await user.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(`cannot get users ${error}`);
  }
};
const createUser = async (req: Request, res: Response) => {
  // if(req.body instanceof Users){
  //   res.status(401).send(`bad request create `);
  // }
  try {
    const data: Users = req.body;
    const users = await user.create(data);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(`bad request create user ${error}`);
  }
};
const showUser = async (req: Request, res: Response) => {
  try {
    const users = await user.show(parseInt(req.params.id));
    if (users == undefined) {
      res.status(404).send(`the id not exist in user `);
    }
    res.json(users);
  } catch (error) {
    res.status(400).send(`bad request  ${error}`);
  }
};
const updateUser = async (req: Request, res: Response) => {
  try {
    const data: Partial<Users> = { ...req.body };
    const users = await user.update(data, parseInt(req.params.id));
    res.json(users);
  } catch (error) {
    res.status(400).send(`cannot update user ${error}`);
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const users = await user.delete(req.body.id);
    res.json(users);
  } catch (error) {
    res.status(404).send(`the id not exist in user ${error}`);
  }
};
const authenticateUser = async (req: Request, res: Response) => {
  try {
    const data = {
      username: req.body.username,
      password: req.body.password,
    };
    const users = await user.authenticate(data.username, data.password);
    res.json(users);
  } catch (error) {
    res.status(401).send(`username or password not correct ${error}`);
  }
};
const refreshToken = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;
    const users = jwtToken.vreifyRefreshToken(refreshToken);
    const userToken = jwtToken.sign({ username: users });
    const userRefreshToken = jwtToken.signRefresh({ username: users });
    res
      .status(200)
      .json({ accessToken: userToken, refreshToken: userRefreshToken });
  } catch (error) {
    res.status(401).send(`token is not correct ${error}`);
  }
};

export {
  getUsers,
  createUser,
  showUser,
  updateUser,
  deleteUser,
  authenticateUser,
  refreshToken,
};
