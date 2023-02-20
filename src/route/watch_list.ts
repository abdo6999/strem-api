import * as express from "express";
import {getMovies,showMovies, createMovies, updateMovies, deleteMovies } from "../handler/movies";
import { authenticateToken } from "../helpers/middleware";
const watch_list = (app: express.Application)=>{
  app.get("/watch-list", getMovies);
  app.get("/watch-list/:id",showMovies );
  app.post("/watch-list",authenticateToken,createMovies  );
  app.patch("/watch-list/:id",authenticateToken, updateMovies);
  app.delete("/watch-list/:id", authenticateToken,deleteMovies );
}
export default watch_list