const { Router } = require('express');
const mailerHandler = require('../handlers/mailerHandler');


const indexRouter = Router();

indexRouter.get('/mailer', mailerHandler);


module.exports = indexRouter;