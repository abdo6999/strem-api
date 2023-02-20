import Client from "../database";
import { Users } from "../helpers/models";
import hashpass from "../helpers/hashpassword";
import jwtToken from "../helpers/jwt";
export class User {
  async get(): Promise<Users[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";
      const resualt = await conn.query(sql);
      conn.release()
      return resualt.rows;
    } catch (error) {
      throw new Error(`cannot connect with users ${error}`);
    }
  }
  async show(id: number): Promise<Users> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE id =($1)";
      const resualt = await conn.query(sql, [id]);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with users ${error}`);
    }
  }
  async create(user: Users): Promise<object> {
    try {
      const conn = await Client.connect();
      user.password = hashpass.hash(user.password);
      const data = Object.values(user);
      const sql = createMovie(user);
      await conn.query(sql, data);
      const userToken = jwtToken.sign({ username: user.username });
      const userRefreshToken = jwtToken.signRefresh({
        username: user.username,
      });
      conn.release();
      return { accessToken: userToken, refreshToken: userRefreshToken };
    } catch (error) {
      throw new Error(`cannot connect with users ${error}`);
    }
  }
  async update(user: Partial<Users>, id: number): Promise<Partial<Users>> {
    try {
      const conn = await Client.connect();
      if(user.password){
        user.password = hashpass.hash(user.password);
      }
      const data = Object.values(user);
      const sql = updateUserByID(user, id);
      const resualt = await conn.query(sql, data);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with users ${error}`);
    }
  }
  async delete(id: number): Promise<Users> {
    try {
      const conn = await Client.connect();
      const sql = "DELETE FROM  users WHERE id =($1) RETURNING *";
      const resualt = await conn.query(sql, [id]);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with users ${error}`);
    }
  }
  async authenticate(
    username: string,
    password: string
  ): Promise<object | null> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE username=($1)";
      const resualt = await conn.query(sql, [username]);
      if (resualt.rows.length) {
        const user = resualt.rows[0];
        if (hashpass.compare(password, user.password)) {
          conn.release()
          return {
            accessToken: jwtToken.sign({ username: user.username }),
            refreshToken: jwtToken.signRefresh({ username: user.username }),
          };
        }
      }
      conn.release()
      return null;
    } catch (error) {
      throw new Error(`cannot connect with users ${error}`);
    }
  }
}

function updateUserByID(cols: Partial<Users>, id: number) {
  const query = ["UPDATE users"];
  query.push("SET");
  const set: string[] = [];
  Object.keys(cols).forEach(function (key, i) {
    set.push(key + " = ($" + (i + 1) + ")");
  });
  query.push(set.join(", "));
  const reg = /^([\w]+)/;
  const updatValus: string[] = set.map((a) => a.match(reg)![0]);
  let element = "";
  for (let i = 0; i < updatValus.length; i++) {
    element += updatValus[i];
    if (i < updatValus.length - 1) {
      element += ",";
    }
  }
  query.push("WHERE id = " + id + " RETURNING " + element + ";");
  return query.join(" ");
}

function createMovie(cols: Users) {
  const len = Object.keys(cols).length;
  const query = ["INSERT INTO users("];
  const set = [];
  Object.keys(cols).forEach(function (key, i) {
    if (i < len - 1) {
      set.push(key + ",");
    } else {
      set.push(key);
    }
  });
  set.push(") VALUES(");
  Object.keys(cols).forEach(function (key, i) {
    if (i < len - 1) {
      set.push(`$${i + 1},`);
    } else {
      set.push(`$${i + 1}`);
    }
  });
  set.push(") RETURNING *;");
  query.push(set.join(" "));
  return query.join(" ");
}
