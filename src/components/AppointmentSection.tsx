import React, { useState, useEffect } from 'react';
import { Calendar, Phone, User, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { useClinic } from '../context/ClinicConfigContext';
import { CLINIC_SERVICES } from '../data/clinicData';

interface AppointmentSectionProps {
  initialService?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialService }) => {
  const { clinicInfo } = useClinic();

  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    preferredService: initialService || 'Skin Consultation',
    preferredDate: '',
    preferredTime: 'Morning (10:30 AM – 1:30 PM)',
    message: '',
  });

  // Sync initialService if selected from ServicesSection
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, preferredService: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `*Appointment Request - GLO Skin & Hair Clinic*\n\n` +
      `👤 *Patient:* ${formData.patientName || 'Consultation Inquiry'}\n` +
      `📞 *Phone:* ${formData.phoneNumber || 'Not provided'}\n` +
      `✨ *Service:* ${formData.preferredService}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate || 'Earliest Available'}\n` +
      `⏰ *Time:* ${formData.preferredTime}\n` +
      (formData.message ? `📝 *Note:* ${formData.message}\n` : '') +
      `\n_Highway Society Chowk, Rangia_`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = `https://wa.me/${clinicInfo.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="appointment" className="py-20 md:py-28 bg-[#F8F7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F0E6] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5 text-[#788C70]" />
              APPOINTMENT BOOKING
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#303B32]">
              Book Your
              <br />
              <span className="italic font-serif text-[#788C70]">Consultation</span>
            </h2>

            <p className="text-[#5F6D61] text-base leading-relaxed max-w-xl mx-auto">
              Schedule your in-person consultation with GLO SKIN & HAIR CLINIC at Highway Society Chowk, Rangia.
            </p>
          </div>

          {/* Booking Card */}
          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#A8B9A0]/40 shadow-xs relative">
            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Patient Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#303B32] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#788C70]" />
                    Patient Name
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    required
                    value={formData.patientName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F0] border border-[#A8B9A0]/40 focus:border-[#788C70] focus:ring-1 focus:ring-[#788C70] text-sm text-[#303B32] outline-none transition-all placeholder:text-[#5F6D61]/50"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#303B32] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#788C70]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. +91 98640 12345"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F0] border border-[#A8B9A0]/40 focus:border-[#788C70] focus:ring-1 focus:ring-[#788C70] text-sm text-[#303B32] outline-none transition-all placeholder:text-[#5F6D61]/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                {/* Preferred Service */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#303B32] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#788C70]" />
                    Preferred Service
                  </label>
                  <select
                    name="preferredService"
                    value={formData.preferredService}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F0] border border-[#A8B9A0]/40 focus:border-[#788C70] focus:ring-1 focus:ring-[#788C70] text-sm text-[#303B32] outline-none transition-all cursor-pointer"
                  >
                    <optgroup label="Skin Treatments">
                      {CLINIC_SERVICES.filter((s) => s.category === 'skin').map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Hair Treatments">
                      {CLINIC_SERVICES.filter((s) => s.category === 'hair').map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Laser Care">
                      {CLINIC_SERVICES.filter((s) => s.category === 'laser').map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="General Care">
                      {CLINIC_SERVICES.filter((s) => s.category === 'additional').map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#303B32] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#788C70]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F0] border border-[#A8B9A0]/40 focus:border-[#788C70] focus:ring-1 focus:ring-[#788C70] text-sm text-[#303B32] outline-none transition-all"
                  />
                </div>

                {/* Preferred Time Window */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#303B32] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#788C70]" />
                    Time Slot
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F7F0] border border-[#A8B9A0]/40 focus:border-[#788C70] focus:ring-1 focus:ring-[#788C70] text-sm text-[#303B32] outline-none transition-all cursor-pointer"
                  >
                    <option value="Morning (10:30 AM – 1:30 PM)">Morning (10:30 AM – 1:30 PM)</option>
                    <option value="Afternoon (1:30 PM – 4:30 PM)">Afternoon (1:30 PM – 4:30 PM)</option>
                    <option value="Evening (4:30 PM – 7:30 PM)">Evening (4:30 PM – 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#303B32]">
                  Specific Concerns / Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your skin, hair or laser concerns..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F7F0] border border-[#A8B9A0]/40 focus:border-[#788C70] focus:ring-1 focus:ring-[#788C70] text-sm text-[#303B32] outline-none transition-all placeholder:text-[#5F6D61]/50"
                />
              </div>

              {/* One Clean, Direct WhatsApp Booking Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full text-sm font-semibold bg-[#A8B9A0] hover:bg-[#97A98E] active:scale-[0.98] text-[#303B32] transition-all flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(168,185,160,0.35)] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#303B32]" />
                  <span>Book Appointment on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#5F6D61]">
                Connects directly to GLO SKIN & HAIR CLINIC ({clinicInfo.displayWhatsapp})
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
