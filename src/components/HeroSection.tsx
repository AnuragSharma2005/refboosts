import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Rocket, Mail, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
export const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you as soon as ReferralBoost launches!"
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-accent rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{
      animationDelay: '2s'
    }}>
        <div className="w-6 h-6 bg-primary-glow rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-16 animate-float" style={{
      animationDelay: '4s'
    }}>
        <div className="w-5 h-5 bg-secondary rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Rocket Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <Rocket className="w-16 h-16 text-accent animate-bounce-in" />
              <div className="absolute -inset-4 bg-accent/20 rounded-full animate-pulse-glow"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight animate-bounce-in">
            <span className="block">ReferralBoost is</span>
            <span className="block text-gradient bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-[#e0f0ff]">
              Launching Soon 🚀
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-inter font-light opacity-90 max-w-3xl mx-auto animate-bounce-in" style={{
          animationDelay: '0.2s'
        }}>
            Be the first to know and get exclusive early bird offers!
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-bounce-in form-glow p-1 rounded-2xl bg-white/10 backdrop-blur-sm" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex flex-col sm:flex-row gap-3 p-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 input-glow rounded-xl h-12" required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="btn-notify h-12 whitespace-nowrap">
                {isSubmitting ? <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" /> : <>
                    Notify Me
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>}
              </Button>
            </div>
          </form>

          {/* Trust Badge */}
          <div className="animate-bounce-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Join 1000+ early supporters</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};