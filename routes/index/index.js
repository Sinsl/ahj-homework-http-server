const Router = require('koa-router');

const router = new Router({ prefix: '/ticket'});

router.get('/index', async (ctx) => {
  ctx.response.body = {status: 'ok'}; 
});

module.exports = router;