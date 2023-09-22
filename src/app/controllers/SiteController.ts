import News from '../models/News'
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    // [GET] /
    index(req, res, next) {
        News.find({})
            .then((_news: any) => {
                res.render('home', {
                    news: multipleMongooseToObject(_news),
                    messageEdit: req.flash('messageEdit'),
                    messageDelete: req.flash('messageDelete'),
                    messageCreate: req.flash('messageCreate')
                })
            })
            .catch(next)
    }
}

export default new SiteController
