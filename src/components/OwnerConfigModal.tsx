import React, { useState } from 'react';
import { X, Copy, Check, RotateCcw, Sparkles, AlertTriangle, Code, CheckCircle2 } from 'lucide-react';
import { BusinessInfo, isPlaceholder } from '../businessConfig';

interface OwnerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  info: BusinessInfo;
  onSave: (newInfo: BusinessInfo) => void;
  onReset: () => void;
}

export const OwnerConfigModal: React.FC<OwnerConfigModalProps> = ({
  isOpen,
  onClose,
  info,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<BusinessInfo>(info);
  const [copied, setCopied] = useState(false);

  // Keep in sync when prop changes
  React.useEffect(() => {
    setFormData(info);
  }, [info]);

  if (!isOpen) return null;

  const handleChange = (field: keyof BusinessInfo, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleHoursChange = (
    field: keyof BusinessInfo['openingHours'],
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [field]: value,
      },
    }));
  };

  const handleSocialChange = (
    field: keyof BusinessInfo['socialMedia'],
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [field]: value,
      },
    }));
  };

  // Generate the exact script.js content requested by the prompt
  const generatedScriptContent = `/*
========================================
BRIAN FURNITURE BUSINESS INFORMATION
Edit the details below before launching
the website.
========================================
*/

const businessInfo = {
    businessName: "${formData.businessName}",
    tagline: "${formData.tagline}",

    phone: "${formData.phone}",
    whatsapp: "${formData.whatsapp}",
    email: "${formData.email}",

    location: "${formData.location}",

    openingHours: {
        mondayFriday: "${formData.openingHours.mondayFriday}",
        saturday: "${formData.openingHours.saturday}",
        sunday: "${formData.openingHours.sunday}"
    },

    socialMedia: {
        facebook: "${formData.socialMedia.facebook}",
        instagram: "${formData.socialMedia.instagram}",
        tiktok: "${formData.socialMedia.tiktok}",
        youtube: "${formData.socialMedia.youtube}"
    },

    googleMaps: "${formData.googleMaps}"
};`;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedScriptContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleFillDemoRealData = () => {
    setFormData({
      businessName: "Brian Furniture",
      tagline: "Crafted with Skill. Built to Last.",
      phone: "+254 712 987 654",
      whatsapp: "254712987654",
      email: "brian@brianfurniture.co.ke",
      location: "Workshop Bay 4, Ngong Road Artisan Enclave, Nairobi, Kenya",
      openingHours: {
        mondayFriday: "8:00 AM - 6:00 PM",
        saturday: "8:30 AM - 4:30 PM",
        sunday: "By Appointment Only"
      },
      socialMedia: {
        facebook: "https://facebook.com/brianfurnitureke",
        instagram: "https://instagram.com/brianfurnitureke",
        tiktok: "https://tiktok.com/@brianfurnitureke",
        youtube: "https://youtube.com/@brianfurniturekenya"
      },
      googleMaps: "https://maps.google.com/?q=-1.300585,36.782061"
    });
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 text-stone-100 shadow-2xl relative my-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Admin Configuration
              </span>
              <span className="text-xs text-stone-400">script.js Settings</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
              Edit Business Contact Information
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              Changes made here instantly update every call button, WhatsApp link, email, location tag, and social channel across the entire website.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Demo Pre-fill tool */}
        <div className="bg-stone-950/80 border border-stone-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-stone-300">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Owner Test Tool:</strong> Want to see how the website looks with verified live Kenyan contact details?
            </span>
          </div>
          <button
            type="button"
            onClick={handleFillDemoRealData}
            className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-medium transition-colors border border-stone-700 shrink-0 cursor-pointer"
          >
            Fill Sample Active Details
          </button>
        </div>

        <form onSubmit={handleApply} className="space-y-6">
          
          {/* Group 1: Identity */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              1. Brand Identity
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-stone-300 font-medium mb-1">Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => handleChange('businessName', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-stone-300 font-medium mb-1">Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => handleChange('tagline', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Group 2: Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                2. Contact & Communications
              </h4>
              <span className="text-[11px] text-stone-500">Clickable phone & WhatsApp links update dynamically</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-stone-300 font-medium mb-1 flex items-center justify-between">
                  <span>Phone Number</span>
                  {isPlaceholder(formData.phone) && (
                    <span className="text-[10px] text-amber-400">Placeholder</span>
                  )}
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 font-mono outline-none"
                  placeholder="+254 7XX XXX XXX"
                />
                <span className="text-[10px] text-stone-500 mt-1 block">Used in: tel: dialer</span>
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1 flex items-center justify-between">
                  <span>WhatsApp Number</span>
                  {isPlaceholder(formData.whatsapp) && (
                    <span className="text-[10px] text-amber-400">Placeholder</span>
                  )}
                </label>
                <input
                  type="text"
                  value={formData.whatsapp}
                  onChange={(e) => handleChange('whatsapp', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 font-mono outline-none"
                  placeholder="2547XXXXXXXX"
                />
                <span className="text-[10px] text-stone-500 mt-1 block">Digits only (country code + number)</span>
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1 flex items-center justify-between">
                  <span>Email</span>
                  {isPlaceholder(formData.email) && (
                    <span className="text-[10px] text-amber-400">Placeholder</span>
                  )}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                  placeholder="info@brianfurniture.com"
                />
                <span className="text-[10px] text-stone-500 mt-1 block">Used in: mailto: links</span>
              </div>
            </div>
          </div>

          {/* Group 3: Location & Google Maps */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              3. Workshop Location & Google Maps
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-stone-300 font-medium mb-1">
                  Workshop Location Text
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                  placeholder="Your Workshop Location, Nairobi, Kenya"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">
                  Google Maps URL (Get Directions Button)
                </label>
                <input
                  type="text"
                  value={formData.googleMaps}
                  onChange={(e) => handleChange('googleMaps', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                  placeholder="https://maps.google.com/?q=..."
                />
              </div>
            </div>
          </div>

          {/* Group 4: Opening Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              4. Workshop Opening Hours
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-stone-300 font-medium mb-1">Monday - Friday</label>
                <input
                  type="text"
                  value={formData.openingHours.mondayFriday}
                  onChange={(e) => handleHoursChange('mondayFriday', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Saturday</label>
                <input
                  type="text"
                  value={formData.openingHours.saturday}
                  onChange={(e) => handleHoursChange('saturday', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Sunday</label>
                <input
                  type="text"
                  value={formData.openingHours.sunday}
                  onChange={(e) => handleHoursChange('sunday', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Group 5: Social Media */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              5. Social Media Channels
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-stone-300 font-medium mb-1">Facebook URL</label>
                <input
                  type="text"
                  value={formData.socialMedia.facebook}
                  onChange={(e) => handleSocialChange('facebook', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">Instagram URL</label>
                <input
                  type="text"
                  value={formData.socialMedia.instagram}
                  onChange={(e) => handleSocialChange('instagram', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">TikTok URL</label>
                <input
                  type="text"
                  value={formData.socialMedia.tiktok}
                  onChange={(e) => handleSocialChange('tiktok', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-stone-300 font-medium mb-1">YouTube URL</label>
                <input
                  type="text"
                  value={formData.socialMedia.youtube}
                  onChange={(e) => handleSocialChange('youtube', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-950 border border-stone-800 focus:border-amber-500 text-stone-100 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Code Export Preview */}
          <div className="bg-stone-950 rounded-2xl p-4 border border-stone-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-medium text-amber-400 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5" />
                <span>Generated script.js Code (Copy & Paste Ready)</span>
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="text-[11px] font-mono text-stone-300 bg-stone-900/90 p-3 rounded-xl overflow-x-auto max-h-36 border border-stone-800">
              {generatedScriptContent}
            </pre>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-800">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Apply to Website Now</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
