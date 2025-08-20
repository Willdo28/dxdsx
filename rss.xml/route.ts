export async function GET(){ return new Response('<rss></rss>', { headers:{'content-type':'application/xml'} }) }
