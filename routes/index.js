const combineRouters = require('koa-combine-routers');

const index = require('./index/index.js');
const ticket = require('./ticket/ticket.js');

const router = combineRouters(
  index,
  ticket,
);

module.exports = router;