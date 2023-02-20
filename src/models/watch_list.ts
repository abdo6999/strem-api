import Client from "../database";
import { watch_lists } from "../helpers/models";
export class Watch_list {
  async get(): Promise<watch_lists[]> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM watch_list";
      const resualt = await conn.query(sql);
      conn.release()
      return resualt.rows;
    } catch (error) {
      throw new Error(`cannot connect with watch_list ${error}`);
    }
  }
  async show(id: number): Promise<watch_lists> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM watch_list WHERE id =($1)";
      const resualt = await conn.query(sql, [id]);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with watch_list ${error}`);
    }
  }
  async showByUserId(id: number): Promise<watch_lists> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM watch_list WHERE user_id =($1)";
      const resualt = await conn.query(sql, [id]);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with watch_list ${error}`);
    }
  }
  async create(watch_list: watch_lists): Promise<watch_lists> {
    try {
      const conn = await Client.connect();
      const data = Object.values(watch_list);
      const sql = createWatchList(watch_list);
      const resualt = await conn.query(sql, data);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with watch_list ${error}`);
    }
  }
  // need checking
  async update(
    watch_list: watch_lists,
    id: number
  ): Promise<Partial<watch_lists>> {
    try {
      const conn = await Client.connect();
      const data = Object.values(watch_list);
      const sql = updateWatchListByID(watch_list, id);
      const resualt = await conn.query(sql, data);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with watch_list ${error}`);
    }
  }
  async delete(id: number): Promise<watch_lists> {
    try {
      const conn = await Client.connect();
      const sql = "DELETE FROM  watch_list WHERE id =($1) RETURNING *";
      const resualt = await conn.query(sql, [id]);
      conn.release()
      return resualt.rows[0];
    } catch (error) {
      throw new Error(`cannot connect with watch_list ${error}`);
    }
  }
}

function updateWatchListByID(cols: Partial<watch_lists>, id: number) {
  const query = ["UPDATE watch_list"];
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

function createWatchList(cols: watch_lists) {
  const len = Object.keys(cols).length;
  const query = ["INSERT INTO watch_list("];
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
