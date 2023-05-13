const express = require('express')
const router = express.Router()
// Node's Router
router.get('/', (req, res) => {
    res.send("Articels page bitches")
})
module.exports = router