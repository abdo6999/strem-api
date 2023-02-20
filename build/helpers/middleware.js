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
exports.authenticateToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const env = __importStar(require("dotenv"));
env.config();
const { ACCESS_TOKEN_SECRET } = process.env;
const authenticateToken = (req, res, next) => {
    const autheHeader = req.get("authorization");
    const token = autheHeader?.split(" ")[1];
    if (token == null || token == undefined)
        return res.status(401).send("token rquiered");
    if (ACCESS_TOKEN_SECRET) {
        jwt.verify(token, ACCESS_TOKEN_SECRET, err => {
            if (err) {
                return res.status(401).send(`${err}`);
            }
            next();
        });
    }
    else {
        throw new Error("REFRESH_TOKEN_SECRET is null");
    }
};
exports.authenticateToken = authenticateToken;
