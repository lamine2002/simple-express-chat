var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    let text = req.body.text;
    let user = req.body.user;
    messages.push({text: text, user: user, added: new Date()});
});

module.exports = router;
