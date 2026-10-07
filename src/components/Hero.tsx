import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Compass, ShieldCheck, Hammer, Sparkles, CheckCircle2 } from 'lucide-react';
import {
  BusinessInfo,
  getPhoneCallUrl,
  getWhatsAppQuotationUrl,
  getEmailMailtoUrl,
  getDirectionsUrl,
  isPlaceholder
} from '../businessConfig';

interface HeroProps {
  info: BusinessInfo;
  onOpenOwnerConfig: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ info, onOpenOwnerConfig, onOpenQuoteModal }) => {
  const phoneCallUrl = getPhoneCallUrl(info);
  const whatsappUrl = getWhatsAppQuotationUrl(info);
  const emailUrl = getEmailMailtoUrl(info, 'Custom Furniture Inquiry - ' + info.businessName);
  const directionsUrl = getDirectionsUrl(info);

  const isPhonePlaceholder = isPlaceholder(info.phone);
  const isWaPlaceholder = isPlaceholder(info.whatsapp);
  const isEmailPlaceholder = isPlaceholder(info.email);
  const isLocationPlaceholder = isPlaceholder(info.location);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-stone-100 pt-12 pb-20 border-b border-stone-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-600 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-800 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Workshop Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
              <Hammer className="w-3.5 h-3.5 text-amber-400" />
              <span>Nairobi's Artisan Carpentry & Hardwood Workshop</span>
            </div>

            {/* Dynamic Business Title & Tagline */}
            <div className="space-y-3">
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                <span data-business-name>{info.businessName}</span>
              </h1>
              <p
                data-business-tagline
                className="text-xl sm:text-2xl text-amber-400 font-medium tracking-wide"
              >
                {info.tagline}
              </p>
            </div>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              We specialize in custom solid timber furniture, bespoke dining sets, executive office desks,
              and luxury living room suites. Every cut, joint, and hand-rubbed finish is crafted for generational endurance right here in Nairobi.
            </p>

            {/* Primary Interactive Contact CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Clickable Phone Button: "Call Brian Furniture" (opens phone dialer) */}
              <a
                href={phoneCallUrl}
                data-phone-button
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-sm sm:text-base transition-all shadow-lg shadow-amber-900/30 hover:shadow-amber-600/30 active:scale-95"
                title={`Call ${info.businessName} directly on phone`}
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call {info.businessName}</span>
              </a>

              {/* Clickable WhatsApp Button: Dynamic URL with prefilled message */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp-button
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-emerald-950/40 hover:shadow-emerald-600/30 active:scale-95"
                title="Request a quotation on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Quote</span>
              </a>

              {/* Custom Quote Inquirer */}
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 font-medium text-sm transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Custom Order Form</span>
              </button>
            </div>

            {/* Workshop Location Quick Banner with Get Directions */}
            <div className="pt-4 border-t border-stone-800/80">
              <div className="bg-stone-800/40 border border-stone-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Visit Our Workshop</span>
                  </div>
                  <div
                    data-business-location
                    className="text-sm font-medium text-stone-200"
                  >
                    {info.location}
                  </div>
                </div>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-directions-button
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-100 text-xs font-medium transition-colors shrink-0"
                  title="Open Google Maps Directions"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Trust pillars */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-stone-400 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Solid Hardwood</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mortise & Tenon Joints</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom Dimensions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Business Information Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Featured Workshop Image with craftsman overlay */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-700/80 shadow-2xl group bg-stone-950">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1200&q=80"
                alt="Brian Furniture Handcrafted Woodworking Workshop"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-700/60 text-stone-100">
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                  <span>Artisan Standard</span>
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="text-sm font-medium text-stone-200">
                  Precision timber squaring, seasoned kiln-dried lumber, and hand-finished beeswax or polyurethane coats.
                </div>
              </div>
            </div>

            {/* Contact Placeholders Status & Fast Access Box */}
            <div className="bg-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                  Business Contact Directory
                </h3>
                <button
                  onClick={onOpenOwnerConfig}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 cursor-pointer"
                >
                  <span>Edit in script.js</span>
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-stone-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-stone-500" />
                  <span>Phone:</span>
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={phoneCallUrl}
                    data-phone-button
                    data-business-phone
                    className="font-mono text-stone-200 hover:text-amber-400 transition-colors font-medium"
                  >
                    {info.phone}
                  </a>
                  {isPhonePlaceholder && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Placeholder
                    </span>
                  )}
                </div>
              </div>

              {/* WhatsApp item */}
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-stone-400 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp:</span>
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-whatsapp-button
                    data-business-whatsapp
                    className="font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    {info.whatsapp}
                  </a>
                  {isWaPlaceholder && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Placeholder
                    </span>
                  )}
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-stone-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-stone-500" />
                  <span>Email:</span>
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={emailUrl}
                    data-email-link
                    data-business-email
                    className="text-stone-200 hover:text-amber-400 transition-colors font-medium truncate max-w-[180px] sm:max-w-none"
                  >
                    {info.email}
                  </a>
                  {isEmailPlaceholder && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Placeholder
                    </span>
                  )}
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start justify-between text-xs sm:text-sm pt-1">
                <span className="text-stone-400 flex items-center gap-1.5 shrink-0 pt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-500" />
                  <span>Location:</span>
                </span>
                <div className="flex flex-col items-end gap-1 text-right">
                  <span
                    data-business-location
                    className="text-stone-300 font-medium text-xs sm:text-sm max-w-[220px]"
                  >
                    {info.location}
                  </span>
                  {isLocationPlaceholder && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Placeholder
                    </span>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
