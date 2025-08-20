
'use client';
import React, { useState } from 'react';
import { supabase } from '@/lib/db';
import { Button } from '@/components/ui/Button';
export default function Page(){
  const [email,setEmail] = useState('');
  async function onSubmit(){
    if('reset'==='sign-up') await supabase.auth.signUp({ email });
    if('reset'==='sign-in') await supabase.auth.signInWithOtp({ email });
  }
  return <main className="p-8">
    <div className="glass max-w-md mx-auto p-6 rounded-2xl">
      <h1 className="text-2xl capitalize">reset</h1>
      <input aria-label="email" className="mt-4 w-full p-3 bg-transparent border border-[var(--glass-border)] rounded" value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" />
      <Button className="mt-4 w-full" onClick={onSubmit}>Continue</Button>
    </div>
  </main>;
}
