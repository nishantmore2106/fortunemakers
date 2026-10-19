import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductEcosystem from './components/ProductEcosystem';
import CinematicFeature from './components/CinematicFeature';
import MarketplaceManagement from './components/MarketplaceManagement';
import ProductSourcing from './components/ProductSourcing';
import Academy from './components/Academy';
import ServiceProcess from './components/ServiceProcess';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: 'consultation',
    service: ''
  });

  const handleOpenConsultation = (type = 'consultation', service = '') => {
    setModalConfig({
      isOpen: true,
      type,
      service
    });
  };

  const handleCloseModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Slim Minimal Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Editorial Content */}
      <main style={{ flex: 1 }}>
        {/* 06: Hero Section — Two-Panel Cinematic Composition */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 07: Product Ecosystem — Floating 3D Commerce Objects & Centered Narrative */}
        <ProductEcosystem onOpenConsultation={handleOpenConsultation} />

        {/* 08: Full-Width Cinematic Feature — Expansive Landscape & Value Clarity */}
        <CinematicFeature onOpenConsultation={handleOpenConsultation} />

        {/* 10: Marketplace Management — Asymmetrical Editorial Operations */}
        <MarketplaceManagement onOpenConsultation={handleOpenConsultation} />

        {/* 11: Product Sourcing & Bulk Supply — Curated Still Life & Wholesale Scope */}
        <ProductSourcing onOpenConsultation={handleOpenConsultation} />

        {/* 12: FortuneMakers Academy — Practical Operator Education */}
        <Academy onOpenConsultation={handleOpenConsultation} />

        {/* 09 & 13: Trust Principles & 4-Stage Service Process */}
        <ServiceProcess onOpenConsultation={handleOpenConsultation} />

        {/* 14: Final Call to Action */}
        <FinalCTA onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 15: Sophisticated Dark Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation / Quote Modal */}
      <ConsultationModal
        isOpen={modalConfig.isOpen}
        onClose={handleCloseModal}
        initialType={modalConfig.type}
        defaultService={modalConfig.service}
      />
    </div>
  );
}
