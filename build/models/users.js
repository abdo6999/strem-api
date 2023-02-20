"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = __importDefault(require("../database"));
const hashpassword_1 = __importDefault(require("../helpers/hashpassword"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
class User {
    async get() {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM users";
            const resualt = await conn.query(sql);
            conn.release();
            return resualt.rows;
        }
        catch (error) {
            throw new Error(`cannot connect with users ${error}`);
        }
    }
    async show(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM users WHERE id =($1)";
            const resualt = await conn.query(sql, [id]);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with users ${error}`);
        }
    }
    async create(user) {
        try {
            const conn = await database_1.default.connect();
            user.password = hashpassword_1.default.hash(user.password);
            const data = Object.values(user);
            const sql = createMovie(user);
            await conn.query(sql, data);
            const userToken = jwt_1.default.sign({ username: user.username });
            const userRefreshToken = jwt_1.default.signRefresh({
                username: user.username,
            });
            conn.release();
            return { accessToken: userToken, refreshToken: userRefreshToken };
        }
        catch (error) {
            throw new Error(`cannot connect with users ${error}`);
        }
    }
    async update(user, id) {
        try {
            const conn = await database_1.default.connect();
            if (user.password) {
                user.password = hashpassword_1.default.hash(user.password);
            }
            const data = Object.values(user);
            const sql = updateUserByID(user, id);
            const resualt = await conn.query(sql, data);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with users ${error}`);
        }
    }
    async delete(id) {
        try {
            const conn = await database_1.default.connect();
            const sql = "DELETE FROM  users WHERE id =($1) RETURNING *";
            const resualt = await conn.query(sql, [id]);
            conn.release();
            return resualt.rows[0];
        }
        catch (error) {
            throw new Error(`cannot connect with users ${error}`);
        }
    }
    async authenticate(username, password) {
        try {
            const conn = await database_1.default.connect();
            const sql = "SELECT * FROM users WHERE username=($1)";
            const resualt = await conn.query(sql, [username]);
            if (resualt.rows.length) {
                const user = resualt.rows[0];
                if (hashpassword_1.default.compare(password, user.password)) {
                    conn.release();
                    return {
                        accessToken: jwt_1.default.sign({ username: user.username }),
                        refreshToken: jwt_1.default.signRefresh({ username: user.username }),
                    };
                }
            }
            conn.release();
            return null;
        }
        catch (error) {
            throw new Error(`cannot connect with users ${error}`);
        }
    }
}
exports.User = User;
function updateUserByID(cols, id) {
    const query = ["UPDATE users"];
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
function createMovie(cols) {
    const len = Object.keys(cols).length;
    const query = ["INSERT INTO users("];
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
