import { User } from "./../models/users";
import { Movie } from "./../models/movie";
import { Watch_list } from "./../models/watch_list";
import hashpass from "./hashpassword";
import { Movies, Users, watch_lists } from "./models";
const user = new User();
const movie = new Movie();
const watch_list = new Watch_list();
createUser(dataUser()).then(()=>{
  createMovies(dataMovies()).then(()=>{
    createWatchList(dataWatchList())
  })
})
async function createUser(u: Users[]) {
  try {
    for (let i = 0; i < u.length; i++) {
      const pIndex = u[i];
      pIndex.password = hashpass.hash(pIndex.password);
      await user.create(pIndex);
    }
  } catch (err) {
    throw new Error(`Could not add new Products .  ${err}`);
  }
}
async function createMovies(u: Movies[]) {
  try {
    for (let i = 0; i < u.length; i++) {
      const pIndex = u[i];
      await movie.create(pIndex);
    }
  } catch (err) {
    throw new Error(`Could not add new user .  ${err}`);
  }
}
async function createWatchList(u: watch_lists[]) {
  try {
    for (let i = 0; i < u.length; i++) {
      const pIndex = u[i];
      await watch_list.create(pIndex);
    }
  } catch (err) {
    throw new Error(`Could not add new Products .  ${err}`);
  }
}

function dataWatchList(): watch_lists[] {
  return [
    {
    user_id:4,
    movie_id:7
    },
    {
    user_id:6,
    movie_id:14
    },
    {
    user_id:2,
    movie_id:5
    },
    {
    user_id:7,
    movie_id:8
    },
    {
    user_id:1,
    movie_id:9
    },
    {
    user_id:9,
    movie_id:13
    },
    {
    user_id:6,
    movie_id:15
    },
    {
    user_id:9,
    movie_id:12
    },
    {
    user_id:7,
    movie_id:8
    },
    {
    user_id:1,
    movie_id:9
    },
    {
    user_id:7,
    movie_id:15
    },
    {
    user_id:9,
    movie_id:8
    },
    {
    user_id:2,
    movie_id:7
    },
  ]
}
function dataMovies(): Movies[] {
  return [
    {
      title: "I Am Legend",
      year: "2007",
      rated: "PG-13",
      released: "14 Dec 2007",
      genre: "Drama, Horror, Sci-Fi",
      plot:
        "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg",
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
    },
    {
      title: "300",
      year: "2006",
      rated: "R",
      released: "09 Mar 2007",
      genre: "Action, Drama, Fantasy",
      plot:
        "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg",
      metascore: "52",
      imdbrating: "7.7",
      imdbvotes: "611,046",
      imdbid: "tt0416449",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
      ]
    },
    {
      title: "The Avengers",
      year: "2012",
      rated: "PG-13",
      released: "04 May 2012",
      genre: "Action, Sci-Fi, Thriller",
      plot:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      language: "English, Russian",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
      metascore: "69",
      imdbrating: "8.1",
      imdbvotes: "1,003,301",
      imdbid: "tt0848228",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
      ]
    },
    {
      title: "The Wolf of Wall Street",
      year: "2013",
      rated: "R",
      released: "25 Dec 2013",
      genre: "Biography, Comedy, Crime",
      plot:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      language: "English, French",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      metascore: "75",
      imdbrating: "8.2",
      imdbvotes: "786,985",
      imdbid: "tt0993846",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
      ]
    },
    {
      title: "Interstellar",
      year: "2014",
      rated: "PG-13",
      released: "07 Nov 2014",
      genre: "Adventure, Drama, Sci-Fi",
      plot:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      metascore: "74",
      imdbrating: "8.6",
      imdbvotes: "937,412",
      imdbid: "tt0816692",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      title: "Game of Thrones",
      year: "2011–",
      rated: "TV-MA",
      released: "17 Apr 2011",
      genre: "Adventure, Drama, Fantasy",
      plot:
        "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "9.5",
      imdbvotes: "1,046,830",
      imdbid: "tt0944947",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
      ]
    },
    {
      title: "Vikings",
      year: "2013–",
      rated: "TV-14",
      released: "03 Mar 2013",
      genre: "Action, Drama, History",
      plot:
        "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
      language: "English, Old English, Norse, Old, Latin",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "8.6",
      imdbvotes: "198,041",
      imdbid: "tt2306299",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
      ]
    },
    {
      title: "Gotham",
      year: "2014–",
      rated: "TV-14",
      released: "01 Aug 2014",
      genre: "Action, Crime, Drama",
      plot:
        "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "8.0",
      imdbvotes: "133,375",
      imdbid: "tt3749900",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
      ]
    },
    {
      title: "Power",
      year: "2014–",
      rated: "TV-MA",
      released: "N/A",
      genre: "Crime, Drama",
      plot:
        'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "8.0",
      imdbvotes: "14,770",
      imdbid: "tt3281796",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg"
      ]
    },
    {
      title: "Narcos",
      year: "2015–",
      rated: "TV-MA",
      released: "28 Aug 2015",
      genre: "Biography, Crime, Drama",
      plot:
        "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
      language: "English, Spanish",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "8.9",
      imdbvotes: "118,680",
      imdbid: "tt2707408",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      title: "Breaking Bad",
      year: "2008–2013",
      rated: "TV-14",
      released: "20 Jan 2008",
      genre: "Crime, Drama, Thriller",
      plot:
        "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
      language: "English, Spanish",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "9.5",
      imdbvotes: "889,883",
      imdbid: "tt0903747",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      title: "Doctor Strange",
      year: "2016",
      rated: "N/A",
      released: "04 Nov 2016",
      genre: "Action, Adventure, Fantasy",
      plot:
        "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "N/A",
      imdbvotes: "N/A",
      imdbid: "tt1211837",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
      ]
    },
    {
      title: "rogue one: A Star Wars Story",
      year: "2016",
      rated: "N/A",
      released: "16 Dec 2016",
      genre: "Action, Adventure, Sci-Fi",
      plot:
        "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
      language: "English",
      poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQyMzI2OTA3OF5BMl5BanBnXkFtZTgwNDg5NjQ0OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      metascore: "N/A",
      imdbrating: "N/A",
      imdbvotes: "N/A",
      imdbid: "tt3748528",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
      ]
    },
    {
      title: "Assassin's Creed",
      year: "2016",
      rated: "N/A",
      released: "21 Dec 2016",
      genre: "Action, Adventure, Fantasy",
      plot:
        "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTU2MTQwMjU1OF5BMl5BanBnXkFtZTgwMDA5NjU5ODE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "N/A",
      imdbvotes: "N/A",
      imdbid: "tt2094766",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
      ]
    },
    {
      title: "Luke Cage",
      year: "2016–",
      rated: "TV-MA",
      released: "30 Sep 2016",
      genre: "Action, Crime, Drama",
      plot:
        "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
      language: "English",
      poster:
        "http://ia.media-imdb.com/images/M/MV5BMTcyMzc1MjI5MF5BMl5BanBnXkFtZTgwMzE4ODY2OTE@._V1_SX300.jpg",
      metascore: "N/A",
      imdbrating: "N/A",
      imdbvotes: "N/A",
      imdbid: "tt3322314",
      images: [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg"
      ]
    }
  ];
}
function dataUser(): Users[] {
  return [
    {
      firstname: "Terry",
      lastname: "Medhurst",
      gender: "male",
      email: "atuny0@sohu.com",
      username: "atuny0",
      password: "23423fgsdgsd"
    },
    {
      firstname: "Sheldon",
      lastname: "Quigley",
      gender: "male",
      email: "hbingley1@plala.or.jp",
      username: "hbingley1",
      password: "2342fgds"
    },
    {
      firstname: "Terrill",
      lastname: "Hills",
      gender: "male",
      email: "rshawe2@51.la",
      username: "rshawe2",
      password: "235234534fg"
    },
    {
      firstname: "Miles",
      lastname: "Cummerata",
      gender: "male",
      email: "yraigatt3@nature.com",
      username: "yraigatt3",
      password: "dfhfghf"
    },
    {
      firstname: "Mavis",
      lastname: "Schultz",
      gender: "male",
      email: "kmeus4@upenn.edu",
      username: "kmeus4",
      password: "fghfdhdfgh"
    },
    {
      firstname: "Alison",
      lastname: "Reichert",
      gender: "female",
      email: "jtreleven5@nhs.uk",
      username: "jtreleven5",
      password: "fghghfdh"
    },
    {
      firstname: "Oleta",
      lastname: "Abbott",
      gender: "female",
      email: "dpettegre6@columbia.edu",
      username: "dpettegre6",
      password: "dfasfsdfs"
    },
    {
      firstname: "Ewell",
      lastname: "Mueller",
      gender: "male",
      email: "ggude7@chron.com",
      username: "ggude7",
      password: "ffffff"
    },
    {
      firstname: "Demetrius",
      lastname: "Corkery",
      gender: "male",
      email: "nloiterton8@aol.com",
      username: "nloiterton8",
      password: "dddddd"
    },
    {
      firstname: "Eleanora",
      lastname: "Price",
      gender: "female",
      email: "umcgourty9@jalbum.net",
      username: "umcgourty9",
      password: "i0xzpX"
    }
  ];
}
