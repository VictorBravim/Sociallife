// Page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Projeto from '@/components/Projeto';
import Recursos from '@/components/Recursos';
import Servico from '@/components/Servico';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Sobre />
      <Projeto />
      <Recursos />
      <Servico />
      <Footer />
    </main>
  );
}
