import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Settings2, AlertTriangle, ArrowRight } from 'lucide-react';
import { BusinessInfo, getCleanPhone, getPhoneCallUrl, getWhatsAppQuotationUrl, isPlaceholder } from '../businessConfig';

interface HeaderProps {
  info: BusinessInfo;
  onOpenOwnerConfig: () => void;
}

export const Header: React.FC<HeaderProps> = ({ info, onOpenOwnerConfig }) => {
  const hasPlaceholders =
    isPlaceholder(info.phone) ||
    isPlaceholder(info.whatsapp) ||
    isPlaceholder(info.email) ||
    isPlaceholder(info.location) ||
    isPlaceholder(info.googleMaps);

  const phoneCallUrl = getPhoneCallUrl(info);
  const whatsappUrl = getWhatsAppQuotationUrl(info);

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      {/* Notice Banner if placeholder values are detected */}
      {hasPlaceholders && (
        <div className="bg-amber-500/15 border-b border-amber-500/30 px-4 py-2 text-xs md:text-sm text-amber-200">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong className="font-semibold text-amber-300">Owner Setup Mode:</strong> Contact placeholders are active (
                <span className="font-mono text-amber-200">{info.phone}</span> / <span className="font-mono text-amber-200">{info.whatsapp}</span>).
                Replace them in <code className="bg-stone-800 px-1.5 py-0.5 rounded text-amber-300">script.js</code> before launch.
              </span>
            </div>
            <button
              onClick={onOpenOwnerConfig}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium rounded-md transition-colors text-xs"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Edit Details Now</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* Top Utility Bar */}
      <div className="border-b border-stone-800/60 hidden md:block text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span data-business-location>{info.location}</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Mon-Fri: {info.openingHours.mondayFriday}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenOwnerConfig}
              className="flex items-center gap-1 text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
              title="Click to view or edit business configuration"
            >
              <Settings2 className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-medium">Business Config (script.js)</span>
            </button>
            <span className="text-stone-700">|</span>
            <span className="text-stone-400">Nairobi Bespoke Hardwood Carpentry</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-950/40 text-stone-950 font-bold font-serif-luxury text-xl border border-amber-500/40">
              BF
            </div>
            <div>
              <a href="#" className="block">
                <span
                  data-business-name
                  className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-stone-100 hover:text-amber-400 transition-colors"
                >
                  {info.businessName}
                </span>
                <span
                  data-business-tagline
                  className="block text-xs text-amber-400/90 tracking-wide font-normal"
                >
                  {info.tagline}
                </span>
              </a>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">Our Workshop</a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <span>Portfolio Gallery</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
            </a>
            <a href="#catalog" className="hover:text-amber-400 transition-colors">Furniture Pieces</a>
            <a href="#woods" className="hover:text-amber-400 transition-colors">Timber Types</a>
            <a href="#location" className="hover:text-amber-400 transition-colors">Workshop & Hours</a>
          </nav>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone Button: "Call Brian Furniture" */}
            <a
              href={phoneCallUrl}
              data-phone-button
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-100 text-xs sm:text-sm font-medium transition-all shadow-sm active:scale-95"
              title={`Call ${info.businessName} at ${info.phone}`}
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Call {info.businessName}</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* WhatsApp Button: Dynamic URL with prefilled quotation message */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-button
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-950/30 active:scale-95"
              title="Request quotation on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Settings button on mobile */}
            <button
              onClick={onOpenOwnerConfig}
              className="p-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 lg:hidden border border-stone-700"
              title="Owner Business Settings"
              aria-label="Owner Business Settings"
            >
              <Settings2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
