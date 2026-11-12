import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail, Navigation, ExternalLink } from 'lucide-react';
import { useClinic } from '../context/ClinicConfigContext';

export const LocationContactSection: React.FC = () => {
  const { clinicInfo } = useClinic();

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'GLO SKIN & HAIR CLINIC Highway Society Chowk Rangia Society Chowk Murara Rangia Assam 781354'
  )}`;

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Highway Society Chowk, Rangia Society Chowk, Murara, Rangia, Assam 781354'
  )}`;

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Highway Society Chowk, Rangia Society Chowk, Murara, Rangia, Assam 781354'
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F0F0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#788C70]" />
            FIND OUR CLINIC
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#303B32]">
            Location &
            <br />
            <span className="italic font-serif text-[#788C70]">Contact Information</span>
          </h2>

          <p className="text-[#5F6D61] text-base leading-relaxed">
            Conveniently situated at Highway Society Chowk in Rangia, Assam. Visit us for dedicated skin, hair, and laser care.
          </p>
        </div>

        {/* Main Grid: Info Cards (Left) & Google Maps (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Clinic Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#F8F7F0] p-6 sm:p-8 rounded-3xl border border-[#A8B9A0]/40 shadow-xs space-y-6">
              <div className="flex items-center gap-3.5">
                <img
                  src={clinicInfo.logoUrl}
                  alt="GLO Clinic Logo"
                  className="w-12 h-12 rounded-full object-cover border border-[#788C70]/30 shadow-xs shrink-0"
                />
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#303B32]">
                    GLO SKIN & HAIR CLINIC
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#788C70] font-semibold mt-0.5">
                    Skin • Hair • Laser
                  </p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#A8B9A0]/20">
                <div className="w-9 h-9 rounded-xl bg-[#E6ECE4] flex items-center justify-center text-[#788C70] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#788C70]">
                    Clinic Address
                  </span>
                  <p className="text-sm font-medium text-[#303B32] leading-snug">
                    Highway Society Chowk, Rangia Society Chowk, Murara, Rangia, Assam 781354
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#A8B9A0]/20">
                <div className="w-9 h-9 rounded-xl bg-[#E6ECE4] flex items-center justify-center text-[#788C70] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#788C70]">
                    Consultation Hours
                  </span>
                  <p className="text-xs sm:text-sm text-[#303B32]">
                    {clinicInfo.openingHours.weekdays}
                  </p>
                  <p className="text-xs text-[#5F6D61]">
                    {clinicInfo.openingHours.sunday}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#A8B9A0]/20">
                <div className="w-9 h-9 rounded-xl bg-[#E6ECE4] flex items-center justify-center text-[#788C70] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#788C70]">
                    Phone & WhatsApp
                  </span>
                  <p className="text-sm font-medium text-[#303B32]">
                    {clinicInfo.phoneNumber}
                  </p>
                  <p className="text-xs text-[#5F6D61]">
                    WhatsApp: {clinicInfo.displayWhatsapp}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-[#A8B9A0]/20">
                <div className="w-9 h-9 rounded-xl bg-[#E6ECE4] flex items-center justify-center text-[#788C70] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#788C70]">
                    Email Contact
                  </span>
                  <p className="text-xs sm:text-sm text-[#303B32]">
                    {clinicInfo.email}
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={`tel:${clinicInfo.phoneNumber.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#FFFFFF] hover:bg-[#E6ECE4] text-[#303B32] border border-[#A8B9A0]/40 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#788C70]" />
                  Call Clinic
                </a>

                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                    'Hello GLO Skin & Hair Clinic, I would like to inquire about consultation timings.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#A8B9A0] hover:bg-[#97A98E] text-[#303B32] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#303B32]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Integration */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#FFFFFF] p-3 sm:p-4 rounded-3xl border border-[#A8B9A0]/40 shadow-xs flex-1 flex flex-col justify-between">
              {/* Map View Frame */}
              <div className="w-full h-[320px] sm:h-[400px] lg:h-full min-h-[320px] rounded-2xl overflow-hidden relative border border-[#A8B9A0]/20 bg-[#F8F7F0]">
                <iframe
                  title="GLO SKIN & HAIR CLINIC Location Map"
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
                />

                {/* Floating pill over map */}
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#A8B9A0]/40 shadow-sm text-xs flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
                  <span className="font-semibold text-[#303B32]">Rangia, Assam 781354</span>
                </div>
              </div>

              {/* Map Footer Bar with Direct Directions Button */}
              <div className="pt-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-[#5F6D61] text-center sm:text-left">
                  <strong className="text-[#303B32]">Landmark:</strong> Highway Society Chowk, Murara, Rangia
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#303B32] bg-[#A8B9A0] hover:bg-[#97A98E] transition-all cursor-pointer shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#303B32]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-full text-[#303B32] bg-[#F0F0E6] hover:bg-[#E6ECE4] border border-[#A8B9A0]/40 transition-colors"
                    title="Open in Google Maps App"
                  >
                    <ExternalLink className="w-4 h-4 text-[#788C70]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
