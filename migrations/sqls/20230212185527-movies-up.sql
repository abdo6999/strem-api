/* Replace with your SQL commands */
CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year VARCHAR(255) NOT NULL,
  rated VARCHAR(30) NOT NULL,
  released VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  plot TEXT NOT NULL,
  language VARCHAR(255) NOT NULL,
  metascore VARCHAR(255),
  imdbrating VARCHAR(255),
  imdbvotes VARCHAR(255),
  imdbid VARCHAR(255),
  poster VARCHAR(2048) NOT NULL,
  images VARCHAR(2048)[] NOT NULL
);