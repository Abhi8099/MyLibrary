const exprees = require("express")
const router = exprees.Router()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router 