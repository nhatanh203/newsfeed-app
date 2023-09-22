import newsRouter from './news'
import siteRouter from './site'
function route(app) {

  app.use('/news', newsRouter)
  app.use('/', siteRouter)
 
}
export default route
