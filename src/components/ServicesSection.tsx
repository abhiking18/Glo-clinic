import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle, ChevronRight, X, Calendar, MessageCircle } from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { ServiceItem, ServiceCategory } from '../types/clinic';
import { useClinic } from '../context/ClinicConfigContext';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { clinicInfo } = useClinic();
  const [activeTab, setActiveTab] = useState<'all' | ServiceCategory>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = activeTab === 'all'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter((s) => s.category === activeTab);

  const categories: { id: 'all' | ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Treatments', count: CLINIC_SERVICES.length },
    { id: 'skin', label: 'Skin Care', count: CLINIC_SERVICES.filter((s) => s.category === 'skin').length },
    { id: 'hair', label: 'Hair Care', count: CLINIC_SERVICES.filter((s) => s.category === 'hair').length },
    { id: 'laser', label: 'Laser Care', count: CLINIC_SERVICES.filter((s) => s.category === 'laser').length },
    { id: 'additional', label: 'Guidance', count: CLINIC_SERVICES.filter((s) => s.category === 'additional').length },
  ];

  const handleInquire = (service: ServiceItem) => {
    onSelectService(service.title);
    setSelectedService(null);
  };

  const handleWhatsAppQuick = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello GLO Skin & Hair Clinic, I would like to inquire about ${service.title}.`
    );
    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="treatments" className="py-20 md:py-28 bg-[#F8F7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F0E6] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#788C70]" />
            CLINICAL SPECIALTIES
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#303B32]">
            Evidence-Inspired
            <br />
            <span className="italic font-serif text-[#788C70]">Skin, Hair & Laser Services</span>
          </h2>

          <p className="text-[#5F6D61] text-base leading-relaxed">
            Carefully curated treatments designed to nurture, revitalize, and restore your natural confidence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-[#303B32] text-white shadow-sm'
                  : 'bg-[#F0F0E6] text-[#303B32] hover:bg-[#E6ECE4] border border-[#A8B9A0]/30'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeTab === cat.id ? 'bg-white/20 text-white' : 'bg-black/5 text-[#5F6D61]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group relative bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#A8B9A0]/35 hover:border-[#788C70]/70 shadow-xs hover:shadow-[0_12px_30px_rgba(48,59,50,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Top */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#788C70] bg-[#F0F0E6] px-3 py-1 rounded-full border border-[#A8B9A0]/20">
                      {service.categoryLabel}
                    </span>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs text-[#5F6D61] hover:text-[#303B32] flex items-center gap-1 font-medium cursor-pointer"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#303B32] group-hover:text-[#596B52] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#5F6D61] text-sm leading-relaxed line-clamp-3">
                    {service.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium text-[#5F6D61] bg-[#F8F7F0] px-2.5 py-1 rounded-md border border-[#A8B9A0]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-[#A8B9A0]/20 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleInquire(service)}
                    className="text-xs sm:text-sm font-semibold text-[#303B32] hover:text-[#788C70] inline-flex items-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppQuick(service)}
                    title="Inquire via WhatsApp"
                    className="p-2 rounded-full bg-[#F0F0E6] text-[#596B52] hover:bg-[#A8B9A0] hover:text-white transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#303B32]/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="bg-[#F8F7F0] w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#A8B9A0]/50 relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F0F0E6] text-[#303B32] hover:bg-[#A8B9A0]/40 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-[#788C70] font-semibold bg-[#F0F0E6] px-3 py-1 rounded-full border border-[#A8B9A0]/30">
                  {selectedService.categoryLabel}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#303B32]">
                  {selectedService.title}
                </h3>

                <p className="text-sm text-[#5F6D61] leading-relaxed">
                  {selectedService.details}
                </p>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#A8B9A0]/30 space-y-2">
                  <h4 className="text-xs font-semibold text-[#303B32] uppercase tracking-wider">
                    What to expect during consultation:
                  </h4>
                  <ul className="text-xs text-[#5F6D61] space-y-1.5">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#788C70]" />
                      Personalized examination in a clean, quiet clinic setting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#788C70]" />
                      Review of previous treatments, triggers, and daily products
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#788C70]" />
                      Transparent step-by-step guidance without pressure
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleInquire(selectedService)}
                    className="flex-1 py-3 px-5 rounded-full text-xs sm:text-sm font-semibold bg-[#A8B9A0] hover:bg-[#97A98E] text-[#303B32] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-4 h-4" />
                    Book for this Service
                  </button>
                  <button
                    onClick={() => handleWhatsAppQuick(selectedService)}
                    className="py-3 px-5 rounded-full text-xs sm:text-sm font-semibold bg-[#FFFFFF] hover:bg-[#F0F0E6] text-[#303B32] border border-[#A8B9A0]/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#788C70]" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
