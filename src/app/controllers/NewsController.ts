import News from '../models/News'
const { mongooseToObject } = require('../../util/mongoose')
import Swal from 'sweetalert2'
import { response } from 'express'
import flash from 'connect-flash'
import session from 'express-session'



class NewsController {

    // [GET] /news/create
    create(req, res, next) {
        res.render('news/create')
    }

    // [POST] /news/store
    store(req, res, next) {

        // Request message to redirect 
        req.flash('messageCreate', ['Create']);
        const formData = req.body
        console.log(formData);
        const news = new News(formData)
        news.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    }

    // [GET] /news/:slug
    show(req, res, next) {
        News.findOne({ slug: req.params.slug })
            .then(news => {
                res.render('news/show', { news: mongooseToObject(news) })
            })
            .catch(next)
    }

    // [GET] /news/:id/edit
    edit(req, res, next) {
        News.findById(req.params.id)
            .then(news => res.render('news/edit',
                {
                    news: mongooseToObject(news)
                }))
            .catch(next)
    }

    // [PUT] /news/:id
    update(req, res, next) {

        // Request message to redirect 
        req.flash('messageEdit', ['Edit']);
        News.updateOne({
            _id: req.params.id
        }, req.body)
            .then(() => res.redirect('/'))
            .catch(next)
    }

    // [DELETE] /news/:id
    delete(req, res, next) {

        // Request message to redirect 
        req.flash('messageDelete', ['Delete']);
        News.deleteOne({
            _id: req.params.id
        }).then(() => res.redirect('/')).catch(next)
    }
}

export default new NewsController()
