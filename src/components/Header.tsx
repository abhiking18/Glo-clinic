import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Menu, X, Calendar } from 'lucide-react';
import { useClinic } from '../context/ClinicConfigContext';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const { clinicInfo } = useClinic();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews (4.7★)', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHref = `https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hello GLO Skin & Hair Clinic, I would like to inquire about a consultation.'
  )}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Info Bar */}
        <div className="bg-[#F0F0E6] border-b border-[#A8B9A0]/20 py-1.5 px-4 text-xs text-[#5F6D61] hidden sm:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 font-medium text-[#303B32]">
                <MapPin className="w-3.5 h-3.5 text-[#788C70]" />
                Highway Society Chowk, Rangia, Assam
              </span>
              <span className="text-[#A8B9A0]">|</span>
              <span className="inline-flex items-center gap-1 text-[#303B32]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#788C70]"></span>
                4.7★ (34 Google Reviews)
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${clinicInfo.phoneNumber.replace(/[^0-9+]/g, '')}`}
                className="hover:text-[#303B32] transition-colors flex items-center gap-1 text-[#303B32] font-medium"
              >
                <Phone className="w-3 h-3 text-[#788C70]" />
                <span>{clinicInfo.phoneNumber}</span>
              </a>
              <span className="text-[#A8B9A0]">|</span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#303B32] transition-colors flex items-center gap-1 text-[#596B52] font-medium"
              >
                <MessageCircle className="w-3 h-3 text-[#788C70]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#F8F7F0]/95 backdrop-blur-md shadow-sm border-b border-[#A8B9A0]/30 py-2.5 sm:py-3'
              : 'bg-[#F8F7F0]/90 backdrop-blur-sm py-3 sm:py-4 border-b border-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Brand Logo with Uploaded Official Emblem */}
            <a href="#" className="group flex items-center gap-3">
              <img
                src={clinicInfo.logoUrl}
                alt="GLO Skin & Hair Clinic Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-[#788C70]/40 shadow-xs group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#303B32] leading-none">
                  GLO
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#788C70] mt-0.5">
                  Skin & Hair Clinic
                </span>
                <span className="text-[9px] text-[#5F6D61] hidden sm:block font-medium">
                  Skin • Hair • Laser
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-[#303B32]/85 hover:text-[#788C70] transition-colors relative py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#303B32] bg-[#F0F0E6] hover:bg-[#E6ECE4] border border-[#A8B9A0]/40 transition-all duration-200"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#788C70]" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold text-[#303B32] bg-[#A8B9A0] hover:bg-[#97A98E] active:scale-[0.98] shadow-sm transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#303B32]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#303B32] bg-[#A8B9A0]"
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#303B32] hover:bg-[#F0F0E6] transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#303B32]/30 backdrop-blur-sm lg:hidden pt-24 px-4 pb-6 flex flex-col justify-between">
          <div className="bg-[#F8F7F0] rounded-2xl p-6 shadow-xl border border-[#A8B9A0]/40 space-y-4">
            <div className="flex items-center gap-3 border-b border-[#A8B9A0]/20 pb-3">
              <img
                src={clinicInfo.logoUrl}
                alt="GLO Logo"
                className="w-10 h-10 rounded-full object-cover border border-[#788C70]/30"
              />
              <div>
                <p className="font-serif text-lg font-bold text-[#303B32]">GLO SKIN & HAIR CLINIC</p>
                <p className="text-xs text-[#788C70]">Skin • Hair • Laser • Rangia</p>
              </div>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-[#303B32] hover:text-[#788C70] py-1.5 border-b border-[#A8B9A0]/10 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#303B32] bg-[#F0F0E6] border border-[#A8B9A0]/40"
              >
                <MessageCircle className="w-4 h-4 text-[#788C70]" />
                WhatsApp Consultation
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-[#303B32] bg-[#A8B9A0] shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
