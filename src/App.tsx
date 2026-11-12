/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ClinicProvider } from './context/ClinicConfigContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Skin Consultation');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTreatments = () => {
    const el = document.getElementById('treatments');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromList = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToAppointment();
  };

  return (
    <ClinicProvider>
      <div className="min-h-screen bg-[#F8F7F0] text-[#303B32] font-sans flex flex-col selection:bg-[#A8B9A0]/40 selection:text-[#303B32]">
        {/* Navigation Header */}
        <Header onBookClick={scrollToAppointment} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            onExploreClick={scrollToTreatments}
            onBookClick={scrollToAppointment}
          />

          {/* About the Clinic Section */}
          <AboutSection />

          {/* Proposed Services Section */}
          <ServicesSection onSelectService={handleSelectServiceFromList} />

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Clinic Atmosphere & Gallery Section */}
          <GallerySection />

          {/* Google 4.7★ Reviews Section */}
          <ReviewsSection />

          {/* Appointment Booking & WhatsApp Section */}
          <AppointmentSection initialService={selectedService} />

          {/* Location & Contact Section with Google Maps */}
          <LocationContactSection />
        </main>

        {/* Global Footer */}
        <Footer onBookClick={scrollToAppointment} />

        {/* Floating Quick Action Bar for Mobile Screens */}
        <MobileQuickBar onBookClick={scrollToAppointment} />
      </div>
    </ClinicProvider>
  );
}
