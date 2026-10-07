import React, { useState } from 'react';
import { MessageCircle, Sparkles, Ruler, Clock, TreePine, ChevronRight } from 'lucide-react';
import { furnitureItems, woodTypes, FurnitureItem } from '../data/furnitureData';
import { BusinessInfo, getCleanWhatsApp } from '../businessConfig';

interface FurnitureCatalogProps {
  info: BusinessInfo;
  onRequestItemQuote: (item: FurnitureItem) => void;
}

export const FurnitureCatalog: React.FC<FurnitureCatalogProps> = ({
  info,
  onRequestItemQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Dining', 'Living Room', 'Bedroom', 'Office & Commercial'];

  const filteredItems =
    activeCategory === 'All'
      ? furnitureItems
      : furnitureItems.filter((i) => i.category === activeCategory);

  const cleanWa = getCleanWhatsApp(info.whatsapp);

  return (
    <section id="catalog" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handcrafted In Nairobi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
              Signature Bespoke Furniture Collection
            </h2>
            <p className="text-stone-400 text-base">
              Every piece is custom built to order using traditional joinery and seasoned hardwoods. Click to request pricing or customize dimensions.
            </p>
          </div>

          {/* Category Tabs (Segmented Button Control per design guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-900 border border-stone-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-stone-950 font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const itemWaUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
              `Hello ${info.businessName}, I would like to request a quotation for: "${item.name}". Please advise on pricing, dimensions, and delivery timeline in Nairobi.`
            )}`;

            return (
              <div
                key={item.id}
                className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-500/50 transition-all duration-300 shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-stone-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Category & Timber Kicker (clean unboxed text per zero-pill discipline) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-300">
                    <span className="font-medium text-amber-400">{item.category}</span>
                    <span className="text-stone-400">{item.hardwood}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Metadata Specs (clean inline typography with dots) */}
                  <div className="pt-2 border-t border-stone-800 text-xs text-stone-400 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>Production Lead Time: <strong className="text-stone-300">{item.leadTime}</strong></span>
                    </div>
                    {item.startingPrice && (
                      <div className="flex items-center gap-2">
                        <Ruler className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Starting Base: <strong className="text-amber-400 font-mono">{item.startingPrice}</strong> (Custom sizing available)</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      href={itemWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shadow-sm"
                      title="Request pricing for this specific piece on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Quote</span>
                    </a>

                    <button
                      onClick={() => onRequestItemQuote(item)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Custom Sizing</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hardwood Guide Section */}
        <div id="woods" className="mt-20 pt-16 border-t border-stone-800">
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <TreePine className="w-3.5 h-3.5" />
              <span>Seasoned African Hardwoods</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
              Authentic Kenyan Timbers We Work With
            </h3>
            <p className="text-stone-400 text-sm">
              All timber used at {info.businessName} is sustainably sourced, properly kiln-dried to less than 12% moisture content to prevent warping, cracking, or termite infestation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {woodTypes.map((wood) => (
              <div
                key={wood.name}
                className="p-5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-colors space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                  {wood.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-100 text-base font-serif-luxury">{wood.name}</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                    {wood.characteristics}
                  </p>
                </div>
                <div className="pt-2 border-t border-stone-800 text-[11px] text-amber-300/80">
                  <span className="font-semibold text-stone-300">Recommended for: </span>
                  {wood.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
