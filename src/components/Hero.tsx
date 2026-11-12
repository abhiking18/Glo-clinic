import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight, Calendar, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { useClinic } from '../context/ClinicConfigContext';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookClick }) => {
  const { clinicInfo } = useClinic();

  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#F8F7F0]">
      {/* Subtle organic decorative background curves */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F0F0E6] rounded-full blur-3xl opacity-70 -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#A8B9A0]/15 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Floating subtle botanical leaf SVG line accents */}
      <div className="absolute top-24 left-8 text-[#A8B9A0]/25 hidden lg:block pointer-events-none">
        <svg width="60" height="90" viewBox="0 0 60 90" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M10 80C25 60 40 40 50 10M10 80C30 75 48 55 50 10M10 80C15 50 35 30 50 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Conversion Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Small Label with botanical dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F0E6] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#788C70] animate-pulse"></span>
              SKIN • HAIR • LASER CARE
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] font-normal text-[#303B32] tracking-tight">
                Healthy Skin.
                <br />
                <span className="italic font-serif text-[#788C70]">Beautifully</span> You.
              </h1>
            </div>

            {/* Short Description */}
            <p className="text-[#5F6D61] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              Evidence-guided skin and hair consultations designed with care. Serving Rangia with personalized evaluations, gentle aesthetic protocols, and a calm, clinical approach.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#303B32] bg-[#A8B9A0] hover:bg-[#97A98E] active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(168,185,160,0.35)] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#303B32]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#303B32] bg-[#FFFFFF] hover:bg-[#F0F0E6] border border-[#A8B9A0]/50 transition-all cursor-pointer"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#788C70]" />
              </button>
            </div>

            {/* Google Rating Display Badge */}
            <div className="pt-4 border-t border-[#A8B9A0]/25 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-3 bg-[#FFFFFF] px-4 py-2.5 rounded-2xl border border-[#A8B9A0]/30 shadow-xs">
                {/* Google "G" icon style */}
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#F0F0E6] text-[#303B32] font-semibold text-xs">
                  G
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-[#303B32] font-sans">
                    {clinicInfo.rating}
                  </span>
                  <div className="flex items-center text-[#788C70]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#788C70] text-[#788C70]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#5F6D61] pl-1 font-medium">
                    | {clinicInfo.reviewCount} Reviews
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#5F6D61]">
                <MapPin className="w-4 h-4 text-[#788C70] shrink-0" />
                <span>Highway Society Chowk, Rangia</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Authentic Professional Photography with Organic Curves */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Curved organic background layer behind the image */}
            <div className="absolute inset-0 -inset-x-3 -inset-y-3 bg-[#E6ECE4] rounded-[2.5rem] organic-shape-1 transform rotate-2 opacity-80 -z-10" />
            <div className="absolute inset-0 bg-[#A8B9A0]/30 rounded-[3rem] organic-shape-2 transform -rotate-1 opacity-70 -z-10" />

            {/* Main authentic clinic photograph */}
            <div className="relative rounded-[2.25rem] overflow-hidden border-2 border-white shadow-[0_20px_40px_rgba(48,59,50,0.08)] bg-white aspect-[4/5] sm:aspect-[4/4.8]">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Professional skin and hair care consultation environment at GLO Clinic"
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="eager"
              />

              {/* Official clinic tag badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#A8B9A0]/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={clinicInfo.logoUrl}
                    alt="GLO Logo"
                    className="w-10 h-10 rounded-full object-cover border border-[#788C70]/30 shrink-0"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#303B32]">GLO SKIN & HAIR CLINIC</p>
                    <p className="text-[11px] text-[#5F6D61]">Skin • Hair • Laser • Rangia</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#F0F0E6] px-2.5 py-1 rounded-full text-xs font-semibold text-[#596B52]">
                  <Star className="w-3 h-3 fill-[#788C70] text-[#788C70]" />
                  <span>4.7</span>
                </div>
              </div>
            </div>

            {/* Small floating reassurance pill */}
            <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-[#FFFFFF] px-4 py-2.5 rounded-2xl border border-[#A8B9A0]/40 shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#788C70]" />
              <span className="text-xs font-medium text-[#303B32]">Hygienic & Clinical</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Soft wave-shaped section transition to next section */}
      <div className="w-full overflow-hidden leading-none mt-16 md:mt-24">
        <svg
          className="relative block w-full h-10 md:h-16 text-[#F0F0E6]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
