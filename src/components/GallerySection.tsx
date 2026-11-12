import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types/clinic';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F8F7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0F0E6] border border-[#A8B9A0]/40 text-[#596B52] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#788C70]" />
            CLINICAL ATMOSPHERE
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#303B32]">
            A Serene, Hygienic Space
            <br />
            <span className="italic font-serif text-[#788C70]">Crafted for Comfort</span>
          </h2>

          <p className="text-[#5F6D61] text-base leading-relaxed">
            Experience an environment where clinical excellence meets serene, quiet aesthetic comfort.
          </p>
        </div>

        {/* Gallery Grid (2x2 or 4-col responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActivePhoto(item)}
              className="group cursor-pointer bg-white rounded-3xl p-3 sm:p-4 border border-[#A8B9A0]/35 hover:border-[#788C70]/70 transition-all duration-300 shadow-xs hover:shadow-[0_16px_36px_rgba(48,59,50,0.08)]"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#F0F0E6]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.95]"
                  loading="lazy"
                />

                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-[#303B32]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#303B32] shadow-sm transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-[#788C70]" />
                  </div>
                </div>

                {/* Category tag */}
                <span className="absolute top-3 left-3 bg-[#F8F7F0]/90 backdrop-blur-sm text-[11px] font-semibold text-[#303B32] px-3 py-1 rounded-full border border-[#A8B9A0]/30 shadow-xs">
                  {item.category}
                </span>
              </div>

              <div className="pt-3.5 px-2 pb-1.5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-normal text-[#303B32] group-hover:text-[#788C70] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5F6D61] mt-0.5 line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs text-[#788C70] font-medium hidden sm:inline">
                  View Space
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#303B32]/70 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F8F7F0] max-w-4xl w-full rounded-3xl overflow-hidden border border-[#A8B9A0]/50 shadow-2xl relative"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#303B32] shadow-sm transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-black/5">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-7 bg-[#F8F7F0] border-t border-[#A8B9A0]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#788C70] font-semibold">
                    {activePhoto.category}
                  </span>
                  <h4 className="font-serif text-2xl text-[#303B32] mt-0.5">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F6D61] mt-1 max-w-xl">
                    {activePhoto.description}
                  </p>
                </div>

                <div className="text-xs text-[#788C70] bg-[#F0F0E6] px-4 py-2 rounded-xl border border-[#A8B9A0]/30 shrink-0">
                  GLO Skin & Hair Clinic • Rangia
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
