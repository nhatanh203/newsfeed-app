"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const mongoose_slug_generator_1 = __importDefault(require("mongoose-slug-generator"));
//Get slug and add to schema
mongoose_1.default.plugin(mongoose_slug_generator_1.default);
const News = new mongoose_2.Schema({
    name: { type: String, default: 'Newsfeed Default' },
    description: { type: String, default: 'Description Default' },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    //Unique -> Slug + ID => Không trùng lặp slug -> show
    slug: { type: String, slug: 'name', unique: true }
});
exports.default = mongoose_1.default.model('News', News);
