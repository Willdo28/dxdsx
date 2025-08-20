export async function GET(){ return new Response('<urlset></urlset>', { headers:{'content-type':'application/xml'} }) }
