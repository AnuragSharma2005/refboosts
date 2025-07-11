import { Users, Search, Handshake } from 'lucide-react';
import step1Image from '@/assets/step-1.jpg';
import step2Image from '@/assets/step-2.jpg';
import step3Image from '@/assets/step-3.jpg';

const steps = [
  {
    id: 1,
    title: "Freshers Sign Up",
    description: "Fresh graduates and job seekers sign up and post their job interests, skills, and dream companies.",
    image: step1Image,
    icon: Users,
    gradient: "from-primary to-primary-glow"
  },
  {
    id: 2,
    title: "Referrers Browse",
    description: "Experienced professionals browse referral requests and offer to refer candidates to their networks.",
    image: step2Image,
    icon: Search,
    gradient: "from-secondary to-accent"
  },
  {
    id: 3,
    title: "Everyone Wins",
    description: "Freshers get interviews at their dream companies, referrers earn ₹ rewards for successful placements.",
    image: step3Image,
    icon: Handshake,
    gradient: "from-success to-accent"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, effective, and rewarding for everyone in the referral ecosystem
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card */}
              <div className="bg-card rounded-2xl shadow-card p-8 text-center card-hover group-hover:shadow-hover transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {step.id}
                  </div>
                  <div className="absolute -inset-2 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Icon */}
                <div className="relative mb-4">
                  <step.icon className={`w-12 h-12 mx-auto text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Connecting Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 border-r-2 border-b-2 border-white transform rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 border border-primary/20">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-foreground font-medium">Ready to transform job referrals?</span>
          </div>
        </div>
      </div>
    </section>
  );
};