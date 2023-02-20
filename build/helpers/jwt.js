"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const env = __importStar(require("dotenv"));
env.config();
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;
const jwtToken = {
    sign(username) {
        if (ACCESS_TOKEN_SECRET) {
            return jwt.sign(username, ACCESS_TOKEN_SECRET, { expiresIn: "48h" });
        }
        else {
            throw new Error("ACCESS_TOKEN_SECRET is null");
        }
    },
    signRefresh(username) {
        if (REFRESH_TOKEN_SECRET) {
            return jwt.sign(username, REFRESH_TOKEN_SECRET, { expiresIn: "1y" });
        }
        else {
            throw new Error("REFRESH_TOKEN_SECRET is null");
        }
    },
    vreifyRefreshToken(refreshToken) {
        let username;
        if (REFRESH_TOKEN_SECRET) {
            jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, payload) => {
                if (err)
                    throw err;
                username = payload.username || undefined;
            });
        }
        else {
            throw new Error("REFRESH_TOKEN_SECRET is null");
        }
        return username;
    }
};
exports.default = jwtToken;
