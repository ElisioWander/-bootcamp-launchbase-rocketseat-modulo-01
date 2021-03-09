const { formatPrice } = require('../../lib/utils')

const Category = require('../models/Category')
const Product = require('../models/Product')
const File = require('../models/File')

module.exports = {
    create(req, res) {
        Category.all()
        .then(function(results) {
            const categories = results.rows

            return res.render("products/create.html", { categories })
        }).catch(function(err) {
            throw new Error(err)
        })
    },
    async post(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        if(req.files.length == 0) {
            return res.send("Please, send at least one image")
        }

        let results = await Product.create(req.body)
        const productId = results.rows[0].id

        const filesPromise = req.files.map(file => File.create({ ...file, product_id: productId }))
        await Promise.all(filesPromise)

        results = await Category.all()
        const categories = results.rows

        return res.render("products/create.html", { productId, categories })
    },
    async edit(req, res) {
        let results = await Product.find(req.params.id)
        const product = results.rows[0]

        if(!product) {
            return res.send("product not found!")
        }

        product.old_price = formatPrice(product.old_price)
        product.price = formatPrice(product.price)

        //get category
        results = await Category.all()
        const categories = results.rows

        //get iamges
        results = await Product.files(product.id)

        return res.render("products/edit.html", { product, categories })
    },
    async put(req, res) {
        const keys = Object.keys(req.body)

        for(key of keys) {
            if(req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        }

        req.body.price = req.body.price.replace(/\D/g, "")
        
        if(req.body.old_price != req.body.price) {
            const oldProduct = await Product.find(req.body.id)
            req.body.old_price = oldProduct.rows[0].price
        }

        let results = await Product.update(req.body)
        const product = results.rows[0]
        

        return res.redirect(`/products/${req.body.id}/edit`)
    },
    async delete(req, res) {
        let results = await Product.delete(req.body.id)

        return res.redirect("/products/create")
    }
}