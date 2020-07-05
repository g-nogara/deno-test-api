import { Router, Context } from 'https://deno.land/x/oak/mod.ts';

function testResponse(context: Context) {
    console.log(context);
    context.response.body = 'test response body';
}

const router = new Router();
router.get('/', testResponse);

export default router;