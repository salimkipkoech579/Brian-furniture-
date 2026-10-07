import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Compass,
  Share2,
  ExternalLink,
  Calendar,
  AlertCircle
} from 'lucide-react';
import {
  BusinessInfo,
  getPhoneCallUrl,
  getWhatsAppQuotationUrl,
  getEmailMailtoUrl,
  getDirectionsUrl,
  isPlaceholder
} from '../businessConfig';

interface ContactSectionProps {
  info: BusinessInfo;
  onOpenOwnerConfig: () => void;
  onSelectFurnitureForQuote?: (name: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  info,
  onOpenOwnerConfig,
}) => {
  const phoneCallUrl = getPhoneCallUrl(info);
  const whatsappUrl = getWhatsAppQuotationUrl(info);
  const emailUrl = getEmailMailtoUrl(
    info,
    `Custom Furniture Quotation Request - ${info.businessName}`,
    `Hello ${info.businessName} Team,\n\nI am writing to inquire about commissioning custom furniture. Please share pricing and timelines for custom hardwood pieces.\n\nThank you!`
  );
  const directionsUrl = getDirectionsUrl(info);

  const isPhonePlaceholder = isPlaceholder(info.phone);
  const isWaPlaceholder = isPlaceholder(info.whatsapp);
  const isEmailPlaceholder = isPlaceholder(info.email);
  const isLocationPlaceholder = isPlaceholder(info.location);
  const isMapsPlaceholder = isPlaceholder(info.googleMaps);

  return (
    <section id="location" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
            Visit Our Workshop & Connect
          </h2>
          <p className="text-stone-400 text-base sm:text-lg">
            Experience our timber grains in person, consult with master carpenters, or request a fast digital quotation via WhatsApp or phone call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Workshop Location & Hours Card */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
            
            {/* Location & Directions Highlight */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Workshop Physical Address
                </span>
                {isLocationPlaceholder && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Placeholder Location
                  </span>
                )}
              </div>

              {/* Requirement: Display "Visit Our Workshop" followed by editable location */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury mb-1">
                  Visit Our Workshop
                </h3>
                <p
                  data-business-location
                  className="text-stone-300 text-lg font-medium"
                >
                  {info.location}
                </p>
                {isLocationPlaceholder && (
                  <p className="text-xs text-amber-400/90 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    Replace with your Nairobi workshop address in script.js before launching.
                  </p>
                )}
              </div>

              {/* Requirement: The Get Directions button should use the editable "googleMaps" URL */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-directions-button
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-sm transition-all shadow-md active:scale-95"
                  title="Open Google Maps to get directions"
                >
                  <Compass className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={onOpenOwnerConfig}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  <span>Edit Map Link in script.js</span>
                </button>
              </div>

              {/* Map visual representation */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-800/80 bg-stone-900 h-48 sm:h-56 mt-4 flex items-center justify-center group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                  alt="Workshop Map Preview"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/60 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-3 shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="text-stone-100 font-semibold text-sm">
                    {info.businessName} Timber Workshop
                  </p>
                  <p className="text-stone-400 text-xs mt-1 max-w-sm">
                    {info.location}
                  </p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>Launch in Google Maps navigation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Section */}
            <div className="pt-6 border-t border-stone-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Workshop Operating Hours
                </span>
                <span className="text-xs text-stone-500">Walk-ins & Appointments Welcome</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <div className="text-xs text-stone-400 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Monday - Friday</span>
                  </div>
                  <div data-hours-mon-fri className="text-sm font-semibold text-stone-100">
                    {info.openingHours.mondayFriday}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <div className="text-xs text-stone-400 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Saturday</span>
                  </div>
                  <div data-hours-sat className="text-sm font-semibold text-stone-100">
                    {info.openingHours.saturday}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <div className="text-xs text-stone-400 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-500" />
                    <span>Sunday</span>
                  </div>
                  <div data-hours-sun className="text-sm font-semibold text-stone-400">
                    {info.openingHours.sunday}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Action: Direct Call & WhatsApp Buttons */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl">
              <h3 className="text-lg font-serif-luxury font-bold text-white flex items-center gap-2">
                <span>Immediate Assistance</span>
              </h3>

              <div className="space-y-3">
                {/* 1. Clickable Phone Button: Call Brian Furniture */}
                <div className="space-y-1.5">
                  <a
                    href={phoneCallUrl}
                    data-phone-button
                    className="w-full inline-flex items-center justify-between p-4 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-700/80 hover:border-amber-500/50 text-stone-100 transition-all group active:scale-[0.98]"
                    title={`Call ${info.businessName} at ${info.phone}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-stone-400 font-medium">Click to Call on Mobile</div>
                        <div className="text-sm font-bold text-stone-100">
                          Call {info.businessName}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div data-business-phone className="text-xs font-mono text-amber-400">
                        {info.phone}
                      </div>
                    </div>
                  </a>
                  {isPhonePlaceholder && (
                    <div className="text-[11px] text-amber-400/90 px-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>Placeholder: Phone dialer will open with {info.phone} until replaced.</span>
                    </div>
                  )}
                </div>

                {/* 2. Clickable WhatsApp Button */}
                <div className="space-y-1.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-whatsapp-button
                    className="w-full inline-flex items-center justify-between p-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-600/40 hover:border-emerald-500 text-stone-100 transition-all group active:scale-[0.98]"
                    title="Open WhatsApp chat with pre-filled message"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-950">
                        <MessageCircle className="w-5 h-5 fill-current" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-emerald-300 font-medium">Fastest Quotations</div>
                        <div className="text-sm font-bold text-white">
                          Chat on WhatsApp
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div data-business-whatsapp className="text-xs font-mono text-emerald-400 truncate max-w-[120px]">
                        {info.whatsapp}
                      </div>
                    </div>
                  </a>
                  <p className="text-[11px] text-stone-400 px-1">
                    Pre-filled message: <em className="text-stone-300">"Hello {info.businessName}, I would like to request a quotation for custom furniture."</em>
                  </p>
                </div>

                {/* 3. Clickable Email Link */}
                <div className="space-y-1.5">
                  <a
                    href={emailUrl}
                    data-email-link
                    className="w-full inline-flex items-center justify-between p-4 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 text-stone-100 transition-all group active:scale-[0.98]"
                    title={`Send email to ${info.email}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-stone-950 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-stone-400 font-medium">Direct Inquiries</div>
                        <div className="text-sm font-bold text-stone-100">
                          Send Email
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div data-business-email className="text-xs text-stone-300 truncate max-w-[140px]">
                        {info.email}
                      </div>
                    </div>
                  </a>
                  {isEmailPlaceholder && (
                    <div className="text-[11px] text-amber-400/90 px-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>Placeholder email: Update to owner's inbox before publishing.</span>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Social Media Channels */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-400 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-amber-400" />
                  Follow Our Workshop Builds
                </span>
                <span className="text-xs text-stone-500">Live Video Tours</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Facebook */}
                <a
                  href={info.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-facebook
                  className="p-3 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 flex items-center justify-between text-xs text-stone-200 transition-colors"
                >
                  <span className="font-medium">Facebook</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>

                {/* Instagram */}
                <a
                  href={info.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-instagram
                  className="p-3 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 flex items-center justify-between text-xs text-stone-200 transition-colors"
                >
                  <span className="font-medium">Instagram</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>

                {/* TikTok */}
                <a
                  href={info.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-tiktok
                  className="p-3 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 flex items-center justify-between text-xs text-stone-200 transition-colors"
                >
                  <span className="font-medium">TikTok</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>

                {/* YouTube */}
                <a
                  href={info.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-youtube
                  className="p-3 rounded-xl bg-stone-900 hover:bg-stone-850 border border-stone-800 hover:border-stone-700 flex items-center justify-between text-xs text-stone-200 transition-colors"
                >
                  <span className="font-medium">YouTube</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
