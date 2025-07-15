import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { EarlySignupSection } from '@/components/EarlySignupSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Page Sections */}
      <HeroSection />
      <HowItWorksSection />
      <EarlySignupSection />
      <Footer />

      {/* 🔐 Netlify form detection fallback (must be outside React logic) */}
            <form name="notify-signup" data-netlify="true" hidden={true}>
        <input type="email" name="email" />
      </form>

    </div>
  );
};

export default Index;
