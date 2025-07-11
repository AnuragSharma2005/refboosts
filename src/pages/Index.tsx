import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { EarlySignupSection } from '@/components/EarlySignupSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <EarlySignupSection />
      <Footer />
    </div>
  );
};

export default Index;
