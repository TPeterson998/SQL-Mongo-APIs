const express = require(express);
const router = express.Router();

router
  .get('/', function (req, res, next) {
    res.render('index', {
      title: 'Express'
    });
  })
  .post('/setdata', async (request, response) => {
    console.log("request: ", request)
    console.log("request body: ", request.body)
    console.log("response: ", response)
    console.log("response body: ", response.body)
    response.redirect('/')
    response.end();
  })

module.exports = router;