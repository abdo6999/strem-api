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
const bcrypt = __importStar(require("bcrypt"));
const env = __importStar(require("dotenv"));
env.config();
const { PEPPER, SALT_ROUNDS } = process.env;
const hashpass = {
    hash(password) {
        if (SALT_ROUNDS && PEPPER) {
            return bcrypt.hashSync(password + PEPPER, parseInt(SALT_ROUNDS));
        }
        else {
            throw new Error("PEPPER or SALT_ROUNDS is null");
        }
    },
    compare(password, inputpassword) {
        if (PEPPER) {
            password = password + PEPPER;
            return bcrypt.compareSync(password, inputpassword);
        }
        else {
            throw new Error("PEPPER or SALT_ROUNDS is null");
        }
    }
};
exports.default = hashpass;
