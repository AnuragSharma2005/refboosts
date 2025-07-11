import { Heart, MapPin, Twitter, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-primary text-white py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold mb-2">
              ReferralBoost
            </h3>
            <p className="text-white/80 text-lg">
              Connecting talent with opportunities
            </p>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-xl font-semibold">Launching soon in India 🇮🇳</span>
            </div>
            
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              We're building the future of job referrals, where fresh talent meets experienced professionals 
              for mutual success and growth.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="mb-8">
            <p className="text-white/80 mb-4 font-medium">Follow our journey</p>
            <div className="flex justify-center gap-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Mail, href: "mailto:hello@referralboost.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-white/60">
                <Heart className="w-4 h-4 text-accent" />
                <span>Made with love for the Indian job market</span>
              </div>
              
              <div className="text-white/60">
                <span>© 2024 ReferralBoost. All rights reserved.</span>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-white/50 text-sm">
                Have questions? Reach out to us at{" "}
                <a 
                  href="mailto:hello@referralboost.com" 
                  className="text-accent hover:text-accent/80 transition-colors duration-300 underline"
                >
                  hello@referralboost.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-accent/20 to-transparent blur-3xl"></div>
    </footer>
  );
};