import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#F0F0E6] overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A8B9A0]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Authentic Clinic Photograph with Organic Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-white shadow-[0_16px_36px_rgba(48,59,50,0.06)] bg-white aspect-[4/3] sm:aspect-[4/3.2]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Sanitized and welcoming clinic consultation suite at GLO Skin & Hair Clinic"
                className="w-full h-full object-cover object-center filter saturate-[0.95]"
                loading="lazy"
              />
            </div>

            {/* Subtle decorative curved background frame */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#A8B9A0]/25 organic-shape-3 -z-10" />

            <div className="mt-4 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#A8B9A0]/30 flex items-center justify-between text-xs text-[#5F6D61]">
              <span className="font-medium text-[#303B32]">Clinical Focus:</span>
              <span className="font-semibold text-[#596B52]">Skin • Hair • Laser</span>
            </div>
          </motion.div>

          {/* Minimal Text Content (No invented names, awards, or medical claims) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
              ABOUT THE CLINIC
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#303B32] leading-tight">
              A Dedicated Space for
              <br />
              <span className="italic font-serif text-[#788C70]">Skin, Hair & Laser Care</span>
            </h2>

            <p className="text-[#5F6D61] text-base sm:text-lg leading-relaxed">
              Located at Highway Society Chowk in Rangia, Assam, GLO SKIN & HAIR CLINIC is designed to offer a calm, clean, and patient-first clinical environment.
            </p>

            <p className="text-[#5F6D61] text-sm sm:text-base leading-relaxed">
              We focus squarely on the individual needs of each patient. Rather than relying on generic treatments, our consultations center on understanding your skin type, daily lifestyle, and scalp concerns to propose mindful, personalized care pathways.
            </p>

            {/* Respectful focus highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#A8B9A0]/30 text-[#596B52] mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#788C70]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#303B32]">Careful Diagnosis Before Care</h4>
                  <p className="text-xs text-[#5F6D61]">Detailed assessments help identify underlying causes before starting any regimen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#A8B9A0]/30 text-[#596B52] mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#788C70]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#303B32]">Hygienic & Respectful Space</h4>
                  <p className="text-xs text-[#5F6D61]">Spotless consultation and procedural setups following strict sterilization protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#A8B9A0]/30 text-[#596B52] mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#788C70]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#303B32]">Transparent Consultations</h4>
                  <p className="text-xs text-[#5F6D61]">Clear explanations of care options, realistic timelines, and everyday maintenance advice.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transition to Warm Ivory */}
      <div className="w-full overflow-hidden leading-none mt-16 md:mt-24">
        <svg
          className="relative block w-full h-10 md:h-14 text-[#F8F7F0]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 600,10 900,80 C1050,110 1150,50 1200,30 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
