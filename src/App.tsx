/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { businessInfo as defaultInfo, BusinessInfo } from './businessConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlaceholderNoticeCard } from './components/PlaceholderNoticeCard';
import { AboutSection } from './components/AboutSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { FurnitureCatalog } from './components/FurnitureCatalog';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { OwnerConfigModal } from './components/OwnerConfigModal';
import { CustomQuoteModal } from './components/CustomQuoteModal';
import { FurnitureItem } from './data/furnitureData';

const STORAGE_KEY = 'brian_furniture_business_info_v2';

export default function App() {
  const [info, setInfo] = useState<BusinessInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // If saved state was an old placeholder, prefer defaultInfo
        if (parsed.phone && !parsed.phone.includes('XXX')) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return defaultInfo;
  });

  const [isOwnerConfigOpen, setIsOwnerConfigOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedFurniture, setSelectedFurniture] = useState<FurnitureItem | null>(null);

  // Sync document title with business name & tagline
  useEffect(() => {
    document.title = `${info.businessName} - ${info.tagline}`;
  }, [info.businessName, info.tagline]);

  const handleSaveInfo = (newInfo: BusinessInfo) => {
    setInfo(newInfo);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newInfo));
    } catch {
      // Ignore
    }
  };

  const handleResetInfo = () => {
    setInfo(defaultInfo);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const handleOpenItemQuote = (item: FurnitureItem) => {
    setSelectedFurniture(item);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-800 selection:text-white">
      {/* Sticky Header with Navigation, Clickable Call, and WhatsApp Buttons */}
      <Header
        info={info}
        onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Dynamic Business Name, Tagline, Phone, WhatsApp & Workshop details */}
        <Hero
          info={info}
          onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
          onOpenQuoteModal={() => {
            setSelectedFurniture(null);
            setIsQuoteModalOpen(true);
          }}
        />

        {/* Clear Contact Placeholder Checklist Card (per prompt specification) */}
        <PlaceholderNoticeCard
          info={info}
          onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
        />

        {/* Workshop Craftsmanship & Philosophy */}
        <AboutSection
          info={info}
          onOpenQuoteModal={() => {
            setSelectedFurniture(null);
            setIsQuoteModalOpen(true);
          }}
        />

        {/* Masonry Portfolio Gallery: Completed Workshop Commissions */}
        <PortfolioGallery
          info={info}
          onOpenCustomQuote={() => {
            setSelectedFurniture(null);
            setIsQuoteModalOpen(true);
          }}
        />

        {/* Signature Furniture Catalog & Kenyan Timber Guide */}
        <FurnitureCatalog
          info={info}
          onRequestItemQuote={handleOpenItemQuote}
        />

        {/* Contact Section: "Visit Our Workshop" + Get Directions + Call/WhatsApp/Email + Hours */}
        <ContactSection
          info={info}
          onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
        />
      </main>

      {/* Footer with Business Directory, Operating Hours, Social Media, and Back-to-Top */}
      <Footer
        info={info}
        onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
      />

      {/* Floating Action Bar for Mobile & Desktop (Call Brian Furniture, WhatsApp) */}
      <FloatingActionBar
        info={info}
        onOpenOwnerConfig={() => setIsOwnerConfigOpen(true)}
      />

      {/* Owner Quick Configuration Modal / Code Generator */}
      <OwnerConfigModal
        isOpen={isOwnerConfigOpen}
        onClose={() => setIsOwnerConfigOpen(false)}
        info={info}
        onSave={handleSaveInfo}
        onReset={handleResetInfo}
      />

      {/* Custom Furniture Quotation Builder */}
      <CustomQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        info={info}
        selectedItem={selectedFurniture}
      />
    </div>
  );
}
