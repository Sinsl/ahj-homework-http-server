const Router = require('koa-router');

const router = new Router({ prefix: '/ticket'});

router.get('/index', async (ctx) => {
  console.log('request status')
  ctx.response.body = {status: 'ok'}; 
});

module.exports = router;