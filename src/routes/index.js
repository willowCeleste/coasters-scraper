const express = require('express');
const router = express.Router();

const coastersController = require('../controllers/coastersController');

router.get('/', (req, res) => {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic');
    res.sendStatus(401);
  }
  const auth = req.headers.authorization;

  if (!auth) {
    return reject();
  }

  const [username, password] = Buffer.from(auth.replace('Basic ', ''), 'base64').toString().split(':');

  if(! (username === 'ace' && password === 'coasters')) {
    return reject()
  }

  res.render('index', {});
});

router.get('/coasters', coastersController.getCoastersCSV);

module.exports = router;