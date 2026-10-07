import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Compass,
  ArrowUp,
  Settings2,
  ExternalLink,
  ShieldCheck,
  TreePine
} from 'lucide-react';
import {
  BusinessInfo,
  getPhoneCallUrl,
  getWhatsAppQuotationUrl,
  getEmailMailtoUrl,
  getDirectionsUrl
} from '../businessConfig';

interface FooterProps {
  info: BusinessInfo;
  onOpenOwnerConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ info, onOpenOwnerConfig }) => {
  const phoneCallUrl = getPhoneCallUrl(info);
  const whatsappUrl = getWhatsAppQuotationUrl(info);
  const emailUrl = getEmailMailtoUrl(info);
  const directionsUrl = getDirectionsUrl(info);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 text-xs sm:text-sm">
      {/* Top Banner / Call to Action */}
      <div className="bg-gradient-to-r from-amber-950/60 via-stone-900 to-amber-950/60 border-b border-stone-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Ready to commission your custom piece?
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm">
              Talk directly with Brian Furniture's master artisans in Nairobi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Clickable Phone Button */}
            <a
              href={phoneCallUrl}
              data-phone-button
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-medium transition-colors border border-stone-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {info.businessName}</span>
            </a>

            {/* Clickable WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-whatsapp-button
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-stone-950 font-bold font-serif-luxury text-base">
                BF
              </div>
              <div>
                <span data-business-name className="font-serif-luxury text-lg font-bold text-white block">
                  {info.businessName}
                </span>
                <span data-business-tagline className="text-xs text-amber-400 block">
                  {info.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Custom heirloom furniture built by hand using seasoned Kenyan hardwoods. Engineered for resilience, balanced proportion, and lifetime generational value.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-stone-400">
              <TreePine className="w-4 h-4 text-amber-500" />
              <span>Sustainably Sourced East African Timber</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOwnerConfig}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-850 text-amber-400 hover:text-amber-300 text-xs font-medium border border-stone-800 transition-colors cursor-pointer"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Owner Config: Edit script.js details</span>
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <span className="block text-stone-500 text-[11px]">Phone Dialer</span>
                <a
                  href={phoneCallUrl}
                  data-phone-button
                  data-business-phone
                  className="text-stone-200 hover:text-amber-400 font-mono transition-colors"
                >
                  {info.phone}
                </a>
              </li>
              <li>
                <span className="block text-stone-500 text-[11px]">WhatsApp Support</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-whatsapp-button
                  data-business-whatsapp
                  className="text-emerald-400 hover:text-emerald-300 font-mono transition-colors"
                >
                  {info.whatsapp}
                </a>
              </li>
              <li>
                <span className="block text-stone-500 text-[11px]">Email Inquiries</span>
                <a
                  href={emailUrl}
                  data-email-link
                  data-business-email
                  className="text-stone-200 hover:text-amber-400 transition-colors truncate block"
                >
                  {info.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Workshop Location & Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Workshop Location
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span data-business-location className="text-stone-300 leading-snug">
                  {info.location}
                </span>
              </div>
              <div className="pt-1">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-directions-button
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-900 space-y-1 text-xs">
              <div className="text-stone-500 text-[11px] font-medium uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-500" />
                <span>Operating Hours</span>
              </div>
              <div className="text-stone-400">
                Mon-Fri: <span data-hours-mon-fri className="text-stone-300">{info.openingHours.mondayFriday}</span>
              </div>
              <div className="text-stone-400">
                Saturday: <span data-hours-sat className="text-stone-300">{info.openingHours.saturday}</span>
              </div>
              <div className="text-stone-400">
                Sunday: <span data-hours-sun className="text-stone-500">{info.openingHours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Social Media & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Social Media
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a
                  href={info.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-facebook
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a
                  href={info.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-instagram
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a
                  href={info.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-tiktok
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>TikTok</span>
                  <ExternalLink className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a
                  href={info.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social-youtube
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-stone-600" />
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} <span data-business-name>{info.businessName}</span>. All rights reserved. Handcrafted in Nairobi, Kenya.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Configured via <code className="text-amber-400/90 font-mono">script.js</code></span>
            <span>·</span>
            <span>Zero HTML edits required</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
