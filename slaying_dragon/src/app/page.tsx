import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import Cta from '@/app/components/Cta';
import Footer from '@/app/components/Footer';
import Pricing from '@/app/components/Pricing';
import Faq from '@/app/components/Faq';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Pricing />
      <Faq />
      <Features />
       <Cta />
      <Footer />
    </main>
  );
}
