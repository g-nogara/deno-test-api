import { Router } from 'https://deno.land/x/oak/mod.ts';
import Anime from './controllers/animeConroller.ts';

const animeConroller = new Anime();
const router = new Router();
router.get('/anime', animeConroller.getByName);

export default router;