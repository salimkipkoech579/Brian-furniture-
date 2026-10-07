import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Eye,
  X,
  Sparkles,
  Maximize2,
  TreePine,
  CheckCircle2,
  Camera
} from 'lucide-react';
import { portfolioProjects, PortfolioProject } from '../data/portfolioData';
import { BusinessInfo, getCleanWhatsApp, getCleanPhone } from '../businessConfig';

interface PortfolioGalleryProps {
  info: BusinessInfo;
  onOpenCustomQuote: () => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  info,
  onOpenCustomQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'Beds & Bedroom',
    'Living Room & TV Consoles',
    'Tables & Accent Pieces',
    'Wardrobes & Storage'
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const cleanWa = getCleanWhatsApp(info.whatsapp);
  const cleanPhone = getCleanPhone(info.phone);

  const getWhatsAppProjectUrl = (proj: PortfolioProject) => {
    const msg = `Hello ${info.businessName}, I saw your workshop build "${proj.title}" (${proj.filename}) in your portfolio gallery. I would like to request a quotation for this piece.`;
    return `https://wa.me/${cleanWa}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="portfolio" className="py-24 bg-stone-900/90 text-stone-100 border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Workshop Proof of Work · {portfolioProjects.length} Real Project Builds</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white tracking-tight">
              Masonry Portfolio & Completed Works
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Real workshop pieces handcrafted by Brian Furniture in Nairobi. Explore tufted bedframes, lockable media consoles, flared coffee tables, fitted wardrobes, and utility prep islands.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-950 border border-stone-800 rounded-2xl self-start md:self-auto">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? portfolioProjects.length
                  : portfolioProjects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-amber-600 text-stone-950 font-semibold shadow-md'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      activeCategory === cat
                        ? 'bg-stone-950/20 text-stone-950 font-bold'
                        : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((proj) => {
            const projectWaUrl = getWhatsAppProjectUrl(proj);

            const aspectClass =
              proj.aspect === 'tall'
                ? 'aspect-[3/4]'
                : proj.aspect === 'wide'
                ? 'aspect-[4/3]'
                : 'aspect-square';

            return (
              <div
                key={proj.id}
                className="break-inside-avoid group bg-stone-950 border border-stone-800 hover:border-amber-500/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Masonry Hover Card */}
                <div
                  onClick={() => setSelectedProject(proj)}
                  className={`relative w-full ${aspectClass} overflow-hidden cursor-pointer bg-stone-900`}
                >
                  <img
                    src={proj.image}
                    alt={`${proj.title} - ${proj.filename}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to high-res asset if path needs reload
                      const target = e.currentTarget;
                      if (!target.src.includes('tufted_king_bed')) {
                        target.src = '/src/assets/images/tufted_king_bed_1791372585382.jpg';
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Top-Left Filename Pill */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-stone-800">
                    {proj.filename}
                  </div>

                  {/* Top-Right Quick Expand Icon */}
                  <div className="absolute top-3 right-3 p-2 rounded-xl bg-stone-900/80 backdrop-blur-md text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-amber-400 border border-stone-700">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Kicker */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-300 pointer-events-none">
                    <span className="font-semibold text-amber-400 font-serif-luxury tracking-wide">
                      {proj.category}
                    </span>
                    <span className="text-[11px] text-stone-300 bg-stone-900/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-stone-800">
                      {proj.dimensions}
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Bar */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3
                      onClick={() => setSelectedProject(proj)}
                      className="font-serif-luxury text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors cursor-pointer leading-snug"
                    >
                      {proj.title}
                    </h3>
                    <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Timber & Finish details (Unboxed metadata with subtle dots) */}
                  <div className="pt-2 border-t border-stone-800/80 text-[11px] text-stone-400 space-y-1">
                    <div className="flex items-center gap-1.5 text-stone-300">
                      <TreePine className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{proj.timber}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-stone-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">Delivered in {proj.completionTime} · {proj.clientArea}</span>
                    </div>
                  </div>

                  {/* Quick Inquiry Buttons */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <a
                      href={projectWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shadow-sm"
                      title="Order or inquire about this piece on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Quote</span>
                    </a>

                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Callout */}
        <div className="rounded-2xl border border-stone-800 bg-stone-950 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-xl font-serif-luxury font-bold text-white">
              Have a custom sketch, photo, or room measurement?
            </h4>
            <p className="text-stone-400 text-xs sm:text-sm">
              Send us a photo of the design you want via WhatsApp, and Brian's workshop carpenters will provide timber options and an exact quotation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${cleanWa}?text=${encodeURIComponent(
                `Hello ${info.businessName}, I have a custom furniture photo/sketch I would like you to build. Please check my inquiry!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Send Your Photo on WhatsApp</span>
            </a>

            <button
              onClick={onOpenCustomQuote}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-850 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              <span>Custom Order Form</span>
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox / High-Res Project Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/90 backdrop-blur-md overflow-y-auto">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-6 text-stone-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-950/80 hover:bg-stone-950 text-stone-300 hover:text-white transition-colors border border-stone-800"
              aria-label="Close project preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Display */}
            <div className="relative h-72 sm:h-96 w-full bg-stone-950">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} - ${selectedProject.filename}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-600 text-stone-950 font-bold uppercase tracking-wider text-[11px]">
                    {selectedProject.category}
                  </span>
                  <span className="font-mono bg-stone-950/90 px-2.5 py-1 rounded-full border border-stone-800 text-amber-300 text-xs">
                    {selectedProject.filename}
                  </span>
                </div>
                <span className="font-mono bg-stone-950/80 px-2.5 py-1 rounded-full border border-stone-800 text-stone-300">
                  {selectedProject.dimensions}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Highlights */}
              {selectedProject.workshopHighlights && selectedProject.workshopHighlights.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {selectedProject.workshopHighlights.map((hl, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-950 border border-stone-800 text-xs text-amber-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{hl}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-stone-800 text-xs">
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="text-stone-500 font-medium">Timber & Species</div>
                  <div className="font-semibold text-amber-400">{selectedProject.timber}</div>
                </div>

                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="text-stone-500 font-medium">Protective Finish</div>
                  <div className="font-semibold text-stone-200">{selectedProject.finish}</div>
                </div>

                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="text-stone-500 font-medium">Lead Time & Area</div>
                  <div className="font-semibold text-stone-200">
                    {selectedProject.completionTime} · {selectedProject.clientArea}
                  </div>
                </div>
              </div>

              {/* Direct Actions with Editable Business Info */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={getWhatsAppProjectUrl(selectedProject)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order {selectedProject.filename} on WhatsApp</span>
                </a>

                <a
                  href={`tel:${cleanPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700 text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Workshop ({info.phone})</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
