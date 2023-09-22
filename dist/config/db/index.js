"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function connect() {
    try {
        await mongoose_1.default.connect('mongodb://localhost:27017/node_training_dev');
        console.log('Connect successfully !!!');
    }
    catch (error) {
        console.log('Connect false !!!');
    }
}
exports.default = { connect };
