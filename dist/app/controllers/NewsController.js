"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const News_1 = __importDefault(require("../models/News"));
const { mongooseToObject } = require('../../util/mongoose');
class NewsController {
    // [GET] /news/create
    create(req, res, next) {
        res.render('news/create');
    }
    // [POST] /news/store
    store(req, res, next) {
        // Request message to redirect 
        req.flash('messageCreate', ['Create']);
        const formData = req.body;
        console.log(formData);
        const news = new News_1.default(formData);
        news.save()
            .then(() => res.redirect('/'))
            .catch(error => {
        });
    }
    // [GET] /news/:slug
    show(req, res, next) {
        News_1.default.findOne({ slug: req.params.slug })
            .then(news => {
            res.render('news/show', { news: mongooseToObject(news) });
        })
            .catch(next);
    }
    // [GET] /news/:id/edit
    edit(req, res, next) {
        News_1.default.findById(req.params.id)
            .then(news => res.render('news/edit', {
            news: mongooseToObject(news)
        }))
            .catch(next);
    }
    // [PUT] /news/:id
    update(req, res, next) {
        // Request message to redirect 
        req.flash('messageEdit', ['Edit']);
        News_1.default.updateOne({
            _id: req.params.id
        }, req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }
    // [DELETE] /news/:id
    delete(req, res, next) {
        // Request message to redirect 
        req.flash('messageDelete', ['Delete']);
        News_1.default.deleteOne({
            _id: req.params.id
        }).then(() => res.redirect('/')).catch(next);
    }
}
exports.default = new NewsController();
