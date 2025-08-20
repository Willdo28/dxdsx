
import Hero from '@/components/Hero';
export default function Page(){
  return <main className="p-8 space-y-8">
    <Hero />
    <section className="glass rounded-2xl p-6"><h1 className="text-3xl">Script Gallery</h1><p>Content coming from CMS or MDX.</p></section>
  </main>;
}
