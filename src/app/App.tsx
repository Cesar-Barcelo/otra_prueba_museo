import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExhibitionsSection } from './components/ExhibitionsSection';
import { AboutSection } from './components/AboutSection';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExhibitionsSection />
        <AboutSection />
        <VisitSection />
      </main>
      <Footer />
    </div>
  );
}
