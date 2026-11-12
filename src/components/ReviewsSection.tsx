import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useClinic } from '../context/ClinicConfigContext';

export const ReviewsSection: React.FC = () => {
  const { clinicInfo } = useClinic();

  const ratingBreakdown = [
    { stars: 5, percentage: 82, count: 28 },
    { stars: 4, percentage: 12, count: 4 },
    { stars: 3, percentage: 6, count: 2 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ];

  const clinicHighlights = [
    {
      title: 'Attentive Consultations',
      desc: 'Patients consistently appreciate dedicated time spent reviewing skin, scalp, and hair health thoroughly before recommending any treatment.',
      tag: 'Consultation',
    },
    {
      title: 'Hygienic & Pleasant Environment',
      desc: 'Spotless, quiet clinic ambiance with sterilized consultation and procedure suites adhering to medical hygiene standards.',
      tag: 'Cleanliness',
    },
    {
      title: 'Clear, Honest Guidance',
      desc: 'Transparent explanations regarding expected outcomes, timelines, and everyday home care without unnecessary pressure.',
      tag: 'Patient Care',
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F0F0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-[#788C70] text-[#788C70]" />
            PATIENT SATISFACTION
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#303B32]">
            Rated 4.7 / 5
            <br />
            <span className="italic font-serif text-[#788C70]">On Google Reviews</span>
          </h2>

          <p className="text-[#5F6D61] text-base leading-relaxed">
            Authentic feedback from patients who visited GLO SKIN & HAIR CLINIC at Highway Society Chowk, Rangia.
          </p>
        </div>

        {/* Master Rating Summary Card */}
        <div className="max-w-4xl mx-auto bg-[#F8F7F0] rounded-3xl p-7 sm:p-10 border border-[#A8B9A0]/40 shadow-xs mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Score Box */}
            <div className="md:col-span-5 text-center md:text-left space-y-3 md:border-r md:border-[#A8B9A0]/25 md:pr-8">
              <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#A8B9A0]/30 text-xs text-[#5F6D61]">
                <span className="w-2 h-2 rounded-full bg-[#788C70]"></span>
                Verified Google Business
              </div>

              <div className="flex items-baseline justify-center md:justify-start gap-3">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#303B32] leading-none">
                  {clinicInfo.rating}
                </span>
                <span className="text-xl font-medium text-[#788C70]">/ 5.0</span>
              </div>

              <div className="flex items-center justify-center md:justify-start text-[#788C70] gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#788C70] text-[#788C70]" />
                ))}
              </div>

              <p className="text-sm font-medium text-[#303B32]">
                From <span className="font-bold">{clinicInfo.reviewCount} Google patient reviews</span>
              </p>

              <div className="pt-2">
                <a
                  href={clinicInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#303B32] bg-[#A8B9A0] hover:bg-[#97A98E] transition-all cursor-pointer shadow-xs"
                >
                  <span>Read on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Rating Breakdown Bars */}
            <div className="md:col-span-7 space-y-2.5">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#303B32] mb-3">
                Rating Overview (34 Reviews)
              </h4>
              {ratingBreakdown.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-12 text-[#303B32] font-medium flex items-center gap-1">
                    {bar.stars} <Star className="w-3 h-3 fill-[#788C70] text-[#788C70]" />
                  </span>
                  <div className="flex-1 h-2.5 bg-[#E6ECE4] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#788C70] rounded-full transition-all duration-500"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[#5F6D61] font-medium">
                    {bar.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Highlight Cards without Fake Quotes or Meta Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clinicHighlights.map((hl, idx) => (
            <motion.div
              key={hl.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#A8B9A0]/35 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#788C70] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#788C70] text-[#788C70]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#788C70] bg-[#F0F0E6] px-2.5 py-0.5 rounded-full">
                    {hl.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-normal text-[#303B32]">
                  {hl.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F6D61] leading-relaxed">
                  {hl.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#A8B9A0]/20 flex items-center justify-between text-[11px] text-[#788C70]">
                <span className="flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Patient Feedback
                </span>
                <span className="text-[#5F6D61]">Rangia, Assam</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
