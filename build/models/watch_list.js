"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watch_list = void 0;
const database_1 = __importDefault(require("../database"));
class Watch_list {
    async get() {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM watch_list";
            const resualt = await conn.query(sql);
            conn.release();
            return resualt.rows;
        }
        catch (error) {
            throw new Error(`cannot connect with watch_list ${error}`);
        }
    }
    async show(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM watch_list WHERE id =($1)";
            const resualt = await conn.query(sql, [id]);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with watch_list ${error}`);
        }
    }
    async showByUserId(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM watch_list WHERE user_id =($1)";
            const resualt = await conn.query(sql, [id]);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with watch_list ${error}`);
        }
    }
    async create(watch_list) {
        try {
            const conn = await database_1.default.connect();
            const data = Object.values(watch_list);
            const sql = createWatchList(watch_list);
            const resualt = await conn.query(sql, data);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with watch_list ${error}`);
        }
    }
    // need checking
    async update(watch_list, id) {
        try {
            const conn = await database_1.default.connect();
            const data = Object.values(watch_list);
            const sql = updateWatchListByID(watch_list, id);
            const resualt = await conn.query(sql, data);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with watch_list ${error}`);
        }
    }
    async delete(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "DELETE FROM  watch_list WHERE id =($1) RETURNING *";
            const resualt = await conn.query(sql, [id]);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with watch_list ${error}`);
        }
    }
}
exports.Watch_list = Watch_list;
function updateWatchListByID(cols, id) {
    const query = ["UPDATE watch_list"];
    query.push("SET");
    const set = [];
    Object.keys(cols).forEach(function (key, i) {
        set.push(key + " = ($" + (i + 1) + ")");
    });
    query.push(set.join(", "));
    const reg = /^([\w]+)/;
    const updatValus = set.map((a) => a.match(reg)[0]);
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
function createWatchList(cols) {
    const len = Object.keys(cols).length;
    const query = ["INSERT INTO watch_list("];
    const set = [];
    Object.keys(cols).forEach(function (key, i) {
        if (i < len - 1) {
            set.push(key + ",");
        }
        else {
            set.push(key);
        }
    });
    set.push(") VALUES(");
    Object.keys(cols).forEach(function (key, i) {
        if (i < len - 1) {
            set.push(`$${i + 1},`);
        }
        else {
            set.push(`$${i + 1}`);
        }
    });
    set.push(") RETURNING *;");
    query.push(set.join(" "));
    return query.join(" ");
}
