/* Replace with your SQL commands */
CREATE TABLE watch_list  (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  movie_id INT NOT NULL ,
    CONSTRAINT fk_users
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE,
  CONSTRAINT fk_movie
        FOREIGN KEY (movie_id)
            REFERENCES movies(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
);