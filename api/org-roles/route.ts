
import { NextResponse } from 'next/server';
import { aiSuggest } from '@/lib/ai';
export async function POST(req: Request){
  const body = await req.json().catch(()=>({}));
  if('org-roles'==='ai') return NextResponse.json(await aiSuggest(body));
  return NextResponse.json({ ok: true, route: 'org-roles', body });
}
export async function GET(){ return NextResponse.json({ ok:true, route:'org-roles' }) }
