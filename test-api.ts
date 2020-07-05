import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './router.ts';

const testConn = await fetch('http://google.com').then(res => res.status);
if (testConn != 200) {
    console.error('It seems you are offline');
    Deno.exit(1);
}

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', server => {
    console.log(`listening on port ${server.port}`);
});
app.listen({ port: 8080 });