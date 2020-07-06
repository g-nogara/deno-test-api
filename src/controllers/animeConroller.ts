import { Context } from 'https://deno.land/x/oak/mod.ts'
class Anime {
    async getByName(context: Context) {
        const name = context.request.url.searchParams.get('name');
        if (!name) {
            throw 'Failed to provide a name to search for';
        }
        const res = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${name}`).then(data => data.json());
        context.response.body = res;
    }
}
export default Anime;