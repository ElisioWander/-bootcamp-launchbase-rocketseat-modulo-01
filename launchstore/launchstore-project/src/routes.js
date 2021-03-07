const express = require('express')
const routes = express.Router()
const multer = require('./app/middlewares/multer')
const ProductsController = require('./app/controllers/ProductsController')

/*GET ROUTES*/
routes.get('/', (req, res) => {
    return res.render("layout.html")
})
routes.get('/products/create', ProductsController.create)
routes.get('/products/:id/edit', ProductsController.edit)
routes.post('/products', multer.array("photo", 6), ProductsController.post)
routes.put('/products', multer.array("photo", 6), ProductsController.put)
routes.delete('/products', ProductsController.delete)


routes.get('/ads/create', function(req, res) {
    return res.redirect("/products/create")
})

module.exports = routes