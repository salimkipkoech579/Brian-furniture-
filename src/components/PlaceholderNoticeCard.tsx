import React from 'react';
import { AlertCircle, CheckCircle, Edit3, ArrowRight, Phone, MessageCircle, Mail, MapPin, Code } from 'lucide-react';
import { BusinessInfo, isPlaceholder } from '../businessConfig';

interface PlaceholderNoticeCardProps {
  info: BusinessInfo;
  onOpenOwnerConfig: () => void;
}

export const PlaceholderNoticeCard: React.FC<PlaceholderNoticeCardProps> = ({
  info,
  onOpenOwnerConfig,
}) => {
  const isPhonePlaceholder = isPlaceholder(info.phone);
  const isWaPlaceholder = isPlaceholder(info.whatsapp);
  const isEmailPlaceholder = isPlaceholder(info.email);
  const isLocationPlaceholder = isPlaceholder(info.location);
  const isMapsPlaceholder = isPlaceholder(info.googleMaps);

  const placeholderCount = [
    isPhonePlaceholder,
    isWaPlaceholder,
    isEmailPlaceholder,
    isLocationPlaceholder,
    isMapsPlaceholder,
  ].filter(Boolean).length;

  return (
    <section className="bg-stone-900 border-b border-stone-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-dashed border-amber-600/40 bg-stone-950/70 p-6 sm:p-8 backdrop-blur-sm">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Owner Setup & Placeholder Status
                </span>
                {placeholderCount > 0 ? (
                  <span className="text-xs text-amber-400 font-medium">
                    ({placeholderCount} placeholder{placeholderCount > 1 ? 's' : ''} require replacement before launch)
                  </span>
                ) : (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> All contact details configured!
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-stone-100">
                Business Contact Placeholders Checklist
              </h2>
              <p className="text-stone-400 text-sm mt-1 max-w-2xl">
                The items below are currently rendered throughout this website. The business owner must replace these placeholder values inside <code className="text-amber-300 font-mono bg-stone-900 px-1 py-0.5 rounded">script.js</code> before taking the website live.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={onOpenOwnerConfig}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
                <span>Open Quick Setup Editor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Grid of the 4 explicitly requested placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            
            {/* 1. Phone Placeholder Card */}
            <div className={`p-4 rounded-xl border transition-all ${
              isPhonePlaceholder 
                ? 'bg-amber-950/20 border-amber-600/40 text-stone-200' 
                : 'bg-emerald-950/20 border-emerald-600/30 text-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Phone
                </span>
                {isPhonePlaceholder ? (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                    Needs Update
                  </span>
                ) : (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Configured
                  </span>
                )}
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-stone-100">
                {info.phone}
              </div>
              <p className="text-[11px] text-stone-400 mt-2">
                {isPhonePlaceholder 
                  ? "Placeholder: Update to your workshop telephone so mobile users can tap to call." 
                  : "Active: Click-to-call dialer enabled for this number."}
              </p>
            </div>

            {/* 2. WhatsApp Placeholder Card */}
            <div className={`p-4 rounded-xl border transition-all ${
              isWaPlaceholder 
                ? 'bg-amber-950/20 border-amber-600/40 text-stone-200' 
                : 'bg-emerald-950/20 border-emerald-600/30 text-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp
                </span>
                {isWaPlaceholder ? (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                    Needs Update
                  </span>
                ) : (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Configured
                  </span>
                )}
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-stone-100 truncate">
                {info.whatsapp}
              </div>
              <p className="text-[11px] text-stone-400 mt-2">
                {isWaPlaceholder 
                  ? "Placeholder: Replace with WhatsApp number (e.g., 254712345678) for quote chats." 
                  : "Active: Automated quotation requests will open in WhatsApp chat."}
              </p>
            </div>

            {/* 3. Email Placeholder Card */}
            <div className={`p-4 rounded-xl border transition-all ${
              isEmailPlaceholder 
                ? 'bg-amber-950/20 border-amber-600/40 text-stone-200' 
                : 'bg-emerald-950/20 border-emerald-600/30 text-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  Email
                </span>
                {isEmailPlaceholder ? (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    Placeholder
                  </span>
                ) : (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Configured
                  </span>
                )}
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-stone-100 truncate">
                {info.email}
              </div>
              <p className="text-[11px] text-stone-400 mt-2">
                {isEmailPlaceholder 
                  ? "Placeholder: Update to your business email (e.g. sales@brianfurniture.com)." 
                  : "Active: Direct mailto click opens mail client."}
              </p>
            </div>

            {/* 4. Location Placeholder Card */}
            <div className={`p-4 rounded-xl border transition-all ${
              isLocationPlaceholder 
                ? 'bg-amber-950/20 border-amber-600/40 text-stone-200' 
                : 'bg-emerald-950/20 border-emerald-600/30 text-stone-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Location
                </span>
                {isLocationPlaceholder ? (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                    Needs Update
                  </span>
                ) : (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Configured
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-100 truncate">
                {info.location}
              </div>
              <p className="text-[11px] text-stone-400 mt-2">
                {isLocationPlaceholder 
                  ? "Placeholder: Replace with your actual workshop address in Nairobi." 
                  : "Active: Displayed across header, footer & directions."}
              </p>
            </div>

          </div>

          {/* Quick Admin Code snippet notice */}
          <div className="mt-6 pt-4 border-t border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Admin Friendly:</strong> Edit only the <code className="text-amber-300 font-mono">businessInfo</code> object in <code className="text-amber-300 font-mono">script.js</code>. Zero HTML or coding knowledge needed.
              </span>
            </div>
            <button
              onClick={onOpenOwnerConfig}
              className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2 cursor-pointer self-start sm:self-auto"
            >
              Test live configuration in browser →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
