
import { NextResponse } from 'next/server';
import { aiSuggest } from '@/lib/ai';
export async function POST(req: Request){
  const body = await req.json().catch(()=>({}));
  if('lint'==='ai') return NextResponse.json(await aiSuggest(body));
  return NextResponse.json({ ok: true, route: 'lint', body });
}
export async function GET(){ return NextResponse.json({ ok:true, route:'lint' }) }
