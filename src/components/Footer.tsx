import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { useClinic } from '../context/ClinicConfigContext';

interface FooterProps {
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  const { clinicInfo } = useClinic();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Treatments & Services', href: '#treatments' },
    { label: 'About the Clinic', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Clinic Atmosphere', href: '#gallery' },
    { label: 'Google Reviews (4.7★)', href: '#reviews' },
    { label: 'Location & Contact', href: '#contact' },
    { label: 'Book Appointment', href: '#appointment' },
  ];

  return (
    <footer className="bg-[#EAEADF] text-[#303B32] border-t border-[#A8B9A0]/30 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#A8B9A0]/25">
          {/* Col 1: Brand Logo & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={clinicInfo.logoUrl}
                alt="GLO Clinic Logo"
                className="w-12 h-12 rounded-full object-cover border border-[#788C70]/30 shadow-xs shrink-0"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#303B32] leading-none">
                  GLO
                </span>
                <span className="block text-[9px] tracking-[0.22em] uppercase font-semibold text-[#788C70] mt-0.5">
                  Skin & Hair Clinic
                </span>
                <span className="text-[10px] text-[#5F6D61] font-medium">
                  Skin • Hair • Laser
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5F6D61] leading-relaxed max-w-sm">
              Dedicated to restorative skin, scalp, and laser care in Rangia, Assam. We blend clinical hygiene, individualized attention, and realistic aesthetic wellness.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[#F8F7F0] px-3.5 py-1.5 rounded-xl border border-[#A8B9A0]/40 text-xs font-medium text-[#303B32]">
                <span>Google Rating:</span>
                <span className="font-bold text-[#788C70]">{clinicInfo.rating} ★</span>
                <span className="text-[#5F6D61]">({clinicInfo.reviewCount} Reviews)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#788C70]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#5F6D61] hover:text-[#303B32] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Address & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#788C70]">
              Clinic Location & Hours
            </h4>

            <div className="space-y-2.5 text-xs text-[#5F6D61]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#788C70] shrink-0 mt-0.5" />
                <span>Highway Society Chowk, Rangia Society Chowk, Murara, Rangia, Assam 781354</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#788C70] shrink-0" />
                <span>{clinicInfo.phoneNumber}</span>
              </p>

              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#788C70] shrink-0" />
                <span>WhatsApp: {clinicInfo.displayWhatsapp}</span>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#788C70] shrink-0" />
                <span>{clinicInfo.email}</span>
              </p>

              <div className="pt-2 text-[11px] text-[#5F6D61] border-t border-[#A8B9A0]/20">
                <p className="font-medium text-[#303B32]">Opening Hours:</p>
                <p>{clinicInfo.openingHours.weekdays}</p>
                <p>{clinicInfo.openingHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5F6D61]">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} GLO SKIN & HAIR CLINIC. All rights reserved.</p>
            <p className="text-[11px] text-[#5F6D61]/80">
              Highway Society Chowk, Rangia Society Chowk, Murara, Rangia, Assam 781354.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#F8F7F0] hover:bg-[#FFFFFF] border border-[#A8B9A0]/40 text-[#303B32] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#788C70]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
