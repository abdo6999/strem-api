interface Users {
  id?: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  gender: string;
  username: string;
}

interface Movies {
  id ?: number,
  title: string,
  year: string,
  rated: string,
  released: string,
  genre: string,
  plot: string,
  language: string,
  metascore: string,
  imdbrating: string,
  imdbvotes: string,
  imdbid: string,
  poster: string,
  images: string[],
}
interface watch_lists {
  id? : number,
  user_id: number,
  movie_id: number
}

export {watch_lists,Users,Movies}