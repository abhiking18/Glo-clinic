import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useClinic } from '../context/ClinicConfigContext';

interface MobileQuickBarProps {
  onBookClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onBookClick }) => {
  const { clinicInfo } = useClinic();

  const whatsappHref = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hello GLO Skin & Hair Clinic, I would like to book an appointment.'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#F8F7F0]/95 backdrop-blur-md border-t border-[#A8B9A0]/40 px-3 py-2.5 sm:hidden shadow-[0_-4px_16px_rgba(48,59,50,0.06)]">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${clinicInfo.phoneNumber.replace(/[^0-9+]/g, '')}`}
          className="flex-1 py-2.5 px-3 rounded-2xl bg-[#FFFFFF] border border-[#A8B9A0]/40 text-[#303B32] text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-[#F0F0E6]"
        >
          <Phone className="w-3.5 h-3.5 text-[#788C70]" />
          <span>Call</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-2xl bg-[#F0F0E6] border border-[#A8B9A0]/40 text-[#303B32] text-xs font-semibold flex items-center justify-center gap-1.5 active:bg-[#E6ECE4]"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#788C70]" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex-[1.4] py-2.5 px-4 rounded-2xl bg-[#A8B9A0] text-[#303B32] text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
