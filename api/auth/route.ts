
import { NextResponse } from 'next/server';
import { aiSuggest } from '@/lib/ai';
export async function POST(req: Request){
  const body = await req.json().catch(()=>({}));
  if('auth'==='ai') return NextResponse.json(await aiSuggest(body));
  return NextResponse.json({ ok: true, route: 'auth', body });
}
export async function GET(){ return NextResponse.json({ ok:true, route:'auth' }) }
