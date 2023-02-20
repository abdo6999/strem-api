import { Watch_list } from './../models/watch_list';
import { Request, Response } from "express";
import { watch_lists } from "../helpers/models";

const watch_list = new Watch_list();

const getMovies = async (req: Request, res: Response) => {
  try {
    const watch_lists = await watch_list.get();
    res.status(200).json(watch_lists);
  } catch (error) {
    res.status(400).send(`cannot get watch_list ${error}`);
  }
};
const showWatchLists = async (req: Request, res: Response) => {
  try {
    const watch_lists = await watch_list.show(parseInt(req.params.id));
    if(watch_lists  === undefined){
      res.status(404).send('unvalid prams');
    }
    res.status(200).json(watch_lists);
  } catch (error) {
    res.status(400).send(`cannot get orders ${error}`);
  }
};

const createMovies = async (req: Request, res: Response) => {
  const data: watch_lists = req.body;
  try {
    const watch_lists = await watch_list.create(data);
    res.status(200).json(watch_lists);
  } catch (error) {
    res.status(400).send(`cannot get watch_list ${error}`);
  }
};

const updateMovies = async (req: Request, res: Response) => {
  const data: watch_lists = req.body;
  try {
    const watch_lists = await watch_list.update(data, parseInt(req.params.id));
    res.status(200).json(watch_lists);
  } catch (error) {
    res.status(400).send(`cannot get watch_list ${error}`);
  }
};

const deleteMovies = async (req: Request, res: Response) => {
  try {
    const watch_lists = await watch_list.delete(parseInt(req.params.id));
    res.status(200).json(watch_lists);
  } catch (error) {
    res.status(400).send(`cannot get watch_list ${error}`);
  }
};

export { getMovies,showWatchLists, createMovies, updateMovies, deleteMovies };
