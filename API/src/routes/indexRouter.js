const { Router } = require('express');
const mailerHandler = require('../handlers/mailerHandler');


const indexRouter = Router();

indexRouter.post('/mailer', mailerHandler);


module.exports = indexRouter;