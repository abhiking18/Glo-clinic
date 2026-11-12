import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-6 h-6 text-[#788C70]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#788C70]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#788C70]" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#788C70]" />,
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F0F0E6] relative overflow-hidden">
      {/* Decorative subtle organic shapes */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#A8B9A0]/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#F8F7F0] rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
            OUR CORE VALUES
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#303B32]">
            Why Choose
            <br />
            <span className="italic font-serif text-[#788C70]">GLO Skin & Hair Clinic</span>
          </h2>

          <p className="text-[#5F6D61] text-base leading-relaxed">
            Founded on honest guidance, clinical hygiene, and an uncompromising dedication to patient comfort in Rangia.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#F8F7F0] rounded-3xl p-7 border border-[#A8B9A0]/35 hover:border-[#788C70]/70 transition-all duration-300 shadow-xs hover:shadow-[0_12px_28px_rgba(48,59,50,0.05)] flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6ECE4] border border-[#A8B9A0]/40 flex items-center justify-center group-hover:bg-[#A8B9A0]/35 transition-colors">
                  {iconMap[item.iconName]}
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#303B32]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#788C70] uppercase tracking-wide mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-[#5F6D61] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#A8B9A0]/20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#788C70]"></span>
                <span className="text-[11px] font-medium text-[#788C70]">Patient First Standards</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
