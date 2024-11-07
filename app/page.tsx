// pages/index.tsx
import type { NextPage } from 'next';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import FeaturesSection from '../components/Features';
import Footer from '../components/Footer';

const Home: NextPage = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <HeroSection />
      <FeaturesSection />
    </main>
    <Footer />
  </div>
);

export default Home;
