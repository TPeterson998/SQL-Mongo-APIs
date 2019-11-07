const express = require(express);
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    })
});

router.post('/', function (req, res, next) {
    console.log(request.body);
    Response.end();
});

module.exports = router;