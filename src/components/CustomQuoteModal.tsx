import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Mail, Phone, Sparkles, CheckCircle2, Ruler } from 'lucide-react';
import { BusinessInfo, getCleanWhatsApp, getCleanPhone, getEmailMailtoUrl } from '../businessConfig';
import { FurnitureItem } from '../data/furnitureData';

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: BusinessInfo;
  selectedItem?: FurnitureItem | null;
}

export const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({
  isOpen,
  onClose,
  info,
  selectedItem,
}) => {
  const [furnitureType, setFurnitureType] = useState('Dining Table Set');
  const [timber, setTimber] = useState('East African Mvule (Iroko)');
  const [dimensions, setDimensions] = useState('8-Seater (approx 2.4m x 1.1m)');
  const [clientLocation, setClientLocation] = useState('Nairobi (Kilimani / Westlands / Karen)');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setFurnitureType(selectedItem.name);
      setTimber(selectedItem.hardwood);
    }
  }, [selectedItem]);

  if (!isOpen) return null;

  const quoteSummary = `Hello ${info.businessName}, I would like to request a quotation for custom furniture:
- Piece: ${furnitureType}
- Timber Preference: ${timber}
- Dimensions/Capacity: ${dimensions || 'Standard'}
- Delivery Area: ${clientLocation || 'Nairobi'}
${notes ? `- Custom Notes: ${notes}` : ''}`;

  const cleanWa = getCleanWhatsApp(info.whatsapp);
  const whatsappUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(quoteSummary)}`;

  const emailUrl = getEmailMailtoUrl(
    info,
    `Custom Furniture Quotation: ${furnitureType} - ${info.businessName}`,
    quoteSummary
  );

  const phoneUrl = `tel:${getCleanPhone(info.phone)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 text-stone-100 shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Workshop Pricing</span>
          </div>
          <h3 className="text-2xl font-serif-luxury font-bold text-white">
            Request Custom Quotation
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm">
            Configure your dream piece. When you submit, your request will open directly in {info.businessName}'s WhatsApp or Email.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block text-stone-300 font-medium mb-1.5">
              Furniture Piece / Design
            </label>
            <input
              type="text"
              value={furnitureType}
              onChange={(e) => setFurnitureType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none transition-colors"
              placeholder="e.g. 8-Seater Dining Set, Chesterfield Sofa, TV Console"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-300 font-medium mb-1.5">
                Timber Selection
              </label>
              <select
                value={timber}
                onChange={(e) => setTimber(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none transition-colors"
              >
                <option value="East African Mvule (Iroko)">East African Mvule (Iroko)</option>
                <option value="Solid African Mahogany">Solid African Mahogany</option>
                <option value="Kenyan Cypress Frame">Kenyan Cypress & Cedar</option>
                <option value="Salvaged Wild Acacia">Wild Acacia Live-Edge</option>
                <option value="Other / Open to Carpenter Recommendation">Open to Recommendation</option>
              </select>
            </div>

            <div>
              <label className="block text-stone-300 font-medium mb-1.5 flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-amber-500" />
                <span>Dimensions or Seats</span>
              </label>
              <input
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none transition-colors"
                placeholder="e.g. 6-seater, 2.2m x 1m, King Size"
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1.5">
              Delivery Location (Within Kenya)
            </label>
            <input
              type="text"
              value={clientLocation}
              onChange={(e) => setClientLocation(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none transition-colors"
              placeholder="e.g. Kilimani, Karen, Runda, Mombasa, Nakuru"
            />
          </div>

          <div>
            <label className="block text-stone-300 font-medium mb-1.5">
              Special Requests / Fabric / Finish
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none transition-colors resize-none"
              placeholder="e.g. Dark walnut stain, brass feet, genuine tan leather cushions..."
            />
          </div>
        </div>

        {/* Action Buttons to send through the editable business channels */}
        <div className="pt-2 space-y-3">
          <div className="text-xs text-stone-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Choose how you'd like to dispatch this request to {info.businessName}:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* WhatsApp Send Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Send via WhatsApp</span>
            </a>

            {/* Email Send Button */}
            <a
              href={emailUrl}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-100 font-medium text-xs sm:text-sm transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Send via Email</span>
            </a>
          </div>

          {/* Direct Phone Call Alternative */}
          <div className="text-center pt-2">
            <a
              href={phoneUrl}
              className="text-xs text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Prefer speaking directly? Call {info.businessName} ({info.phone})</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
