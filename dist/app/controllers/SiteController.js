"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const News_1 = __importDefault(require("../models/News"));
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        News_1.default.find({})
            .then((_news) => {
            res.render('home', {
                news: multipleMongooseToObject(_news),
                messageEdit: req.flash('messageEdit'),
                messageDelete: req.flash('messageDelete'),
                messageCreate: req.flash('messageCreate')
            });
        })
            .catch(next);
    }
}
exports.default = new SiteController;
