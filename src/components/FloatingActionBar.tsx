import React from 'react';
import { Phone, MessageCircle, Settings2 } from 'lucide-react';
import { BusinessInfo, getPhoneCallUrl, getWhatsAppQuotationUrl } from '../businessConfig';

interface FloatingActionBarProps {
  info: BusinessInfo;
  onOpenOwnerConfig: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  info,
  onOpenOwnerConfig,
}) => {
  const phoneCallUrl = getPhoneCallUrl(info);
  const whatsappUrl = getWhatsAppQuotationUrl(info);

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
      {/* Small Owner Config trigger */}
      <button
        onClick={onOpenOwnerConfig}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900/95 hover:bg-stone-850 text-amber-400 border border-amber-500/30 shadow-lg text-xs font-medium backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        title="Edit contact information (script.js)"
      >
        <Settings2 className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Owner Config</span>
      </button>

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2 bg-stone-900/90 p-1.5 rounded-2xl border border-stone-800 shadow-2xl backdrop-blur-md">
        {/* Clickable Phone button: Call Brian Furniture */}
        <a
          href={phoneCallUrl}
          data-phone-button
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
          title={`Call ${info.businessName} on mobile dialer`}
        >
          <Phone className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">Call {info.businessName}</span>
          <span className="sm:hidden">Call</span>
        </a>

        {/* Clickable WhatsApp button with prefilled message */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-whatsapp-button
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-950/40 active:scale-95"
          title="Chat with Brian Furniture on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
