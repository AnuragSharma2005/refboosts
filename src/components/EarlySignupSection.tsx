import { Badge, Gift, Zap, Star, Crown } from 'lucide-react';

const benefits = [
  {
    icon: Crown,
    title: "VIP Access",
    description: "Be among the first to use ReferralBoost when we launch"
  },
  {
    icon: Gift,
    title: "Launch Day Bonus",
    description: "Get exclusive credits and premium features for free"
  },
  {
    icon: Zap,
    title: "Early Bird Discounts",
    description: "Special pricing and offers available only to early supporters"
  },
  {
    icon: Star,
    title: "Priority Support",
    description: "Direct access to our team and priority customer support"
  }
];

export const EarlySignupSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6 border border-accent/20">
            <Badge className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm">EARLY BIRD SPECIAL</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
            Why Sign Up <span className="text-gradient">Early?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get exclusive access, discounts, and launch day bonuses when you join our early supporter community!
          </p>

          {/* Main CTA Badge */}
          <div className="inline-block">
            <div className="bg-gradient-to-r from-accent to-secondary rounded-2xl p-1 shadow-primary animate-pulse-glow">
              <div className="bg-background rounded-xl px-6 py-3">
                <div className="flex items-center gap-3">
                  <Crown className="w-6 h-6 text-accent" />
                  <span className="text-lg font-bold text-gradient">Early Signup = Best Offer</span>
                  <Crown className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group bg-card rounded-xl p-6 shadow-card card-hover text-center border border-border/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -inset-2 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-poppins font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl px-8 py-4 border border-success/20">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full border-2 border-background"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-success rounded-full border-2 border-background"></div>
            </div>
            <div className="text-left">
              <p className="text-foreground font-semibold">1000+ early supporters already joined!</p>
              <p className="text-muted-foreground text-sm">Limited time offer - don't miss out</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};