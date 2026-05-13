import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import AgentFeature from './components/AgentFeature.jsx';
import Listings from './components/Listings.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Testimonials from './components/Testimonials.jsx';
import CtaBand from './components/CtaBand.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-brand-soft">
      <Header />
      <main>
        <Hero />
        <AgentFeature />
        <Listings />
        <WhyChoose />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
