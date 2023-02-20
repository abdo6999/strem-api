import { Movie } from "../models/movie";
import { Request, Response } from "express";
import { Movies } from "../helpers/models";

const movie = new Movie();


const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await movie.get();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).send(`cannot get orders ${error}`);
  }
};

const showMovies = async (req: Request, res: Response) => {
  try {
    const movies = await movie.show(parseInt(req.params.id));
    if(movies  === undefined){
      res.status(404).send('unvalid prams');
    }
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).send(`cannot get orders ${error}`);
  }
};
const createMovies = async (req: Request, res: Response) => {
  try {
    const data: Movies = req.body;
    const movies = await movie.create(data);
    console.log(movies)
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).send(`cannot get orders ${error}`);
  }
};

const updateMovies = async (req: Request, res: Response) => {
  try {
    const data: Partial<Movies> = req.body;
    const movies = await movie.update(data, parseInt(req.params.id));
    console.log(movies)
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).send(`cannot get orders ${error}`);
  }
};

const deleteMovies = async (req: Request, res: Response) => {
  try {
    const movies = await movie.delete(parseInt(req.params.id));
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).send(`cannot get orders ${error}`);
  }
};

export { getMovies,showMovies, createMovies, updateMovies, deleteMovies };
