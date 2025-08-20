
import { NextResponse } from 'next/server';
import { aiSuggest } from '@/lib/ai';
export async function POST(req: Request){
  const body = await req.json().catch(()=>({}));
  if('index'==='ai') return NextResponse.json(await aiSuggest(body));
  return NextResponse.json({ ok: true, route: 'index', body });
}
export async function GET(){ return NextResponse.json({ ok:true, route:'index' }) }
