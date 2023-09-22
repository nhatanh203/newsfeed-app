"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const news_1 = __importDefault(require("./news"));
const site_1 = __importDefault(require("./site"));
function route(app) {
    app.use('/news', news_1.default);
    app.use('/', site_1.default);
}
exports.default = route;
