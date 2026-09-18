const expres = require('express');
const controller = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', controller)

