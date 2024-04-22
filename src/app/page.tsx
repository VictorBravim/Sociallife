// Page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero';
import Three from '@/components/Three';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Three />
      <Footer />
    </main>
  );
}
