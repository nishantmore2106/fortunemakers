import React, { useState } from 'react';
import { ArrowUpRight, Check, CheckCircle2, ChevronRight, Sliders, ShieldCheck, Search, Megaphone, Activity, Truck, HeadphonesIcon } from 'lucide-react';

export default function MarketplaceManagement({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'onboarding',
      icon: ShieldCheck,
      title: 'Seller Account Setup & Onboarding',
      desc: 'Clean configuration of registry, tax profiles, brand verification, and multi-region fulfillment setup without procedural delays.'
    },
    {
      id: 'catalog',
      icon: Sliders,
      title: 'Product Listing & Catalog Architecture',
      desc: 'Hierarchical taxonomy, rich product imagery standards, keyword-indexed copy, and structured variation models that preserve buy-box integrity.'
    },
    {
      id: 'research',
      icon: Search,
      title: 'In-Depth Product Research',
      desc: 'Category whitespace identification, demand cadence modeling, price elasticity analysis, and review-sentiment audits.'
    },
    {
      id: 'advertising',
      icon: Megaphone,
      title: 'Advertising Strategy & Placement',
      desc: 'Sponsored product, brand video, and display placement management anchored to strict ACOS/ROAS economics and keyword harvesting.'
    },
    {
      id: 'health',
      icon: Activity,
      title: 'Account Health & Compliance Oversight',
      desc: 'Proactive policy audits, defect rate mitigation, IP compliance documentation, and rapid escalation support to safeguard seller standings.'
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics & Operational Coordination',
      desc: 'Inbound consignment tracking, multi-channel fulfillment workflow synchronization, and supplier-to-warehouse reconciliation.'
    },
    {
      id: 'service',
      icon: HeadphonesIcon,
      title: 'Customer Service Operations',
      desc: 'Systematic customer messaging response flows, return diagnosis, feedback loops, and customer satisfaction preservation.'
    }
  ];

  return (
    <section
      id="marketplace"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#F6F4FA',
        background: 'linear-gradient(180deg, #F8F7F5 0%, #F0EDF8 40%, #F5F3FA 100%)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1360px' }}>
        
        {/* Section Eyebrow */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="eyebrow-tag">
            <span className="bullet" />
            03 // CORE SERVICE AREA
          </div>
        </div>

        {/* Asymmetrical Grid: Visual Left (54%), Editorial Text Right (46%) */}
        <div
          className="asymmetric-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >

          {/* Large Editorial Visual */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(16, 28, 53, 0.08)',
                border: '1px solid rgba(23, 25, 30, 0.06)',
                position: 'relative',
                backgroundColor: '#FFFFFF'
              }}
            >
              <img
                src="/assets/marketplace-ops.jpg"
                alt="Workspace with laptop displaying clean marketplace catalog interface and natural packaging"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Translucent Floating Badge */}
              <div
                className="glass-overlay-card"
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  padding: '1.1rem 1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.88)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ocean-blue)' }}>
                    Operations Standard
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-primary-text)', marginTop: '0.15rem' }}>
                    Zero-Defect Catalog Architecture
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#167DB5', fontSize: '0.78rem', fontWeight: 600 }}>
                  <ShieldCheck size={16} />
                  <span>Verified Framework</span>
                </div>
              </div>
            </div>

            {/* Soft decorative background shadow */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                right: '15px',
                bottom: '15px',
                border: '1px solid rgba(22, 125, 181, 0.15)',
                borderRadius: '24px',
                zIndex: -1,
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Right Column: Editorial Copy & Interactive Accordion */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(2.3rem, 3.8vw, 3.4rem)',
                lineHeight: 1.12,
                fontWeight: 500,
                color: 'var(--color-primary-text)',
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem'
              }}
            >
              Make Marketplace Operations Feel <span className="serif-italic" style={{ fontWeight: 400 }}>More Manageable.</span>
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-secondary-text)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Get support across listings, catalog organization, advertising, and the operational details behind selling online.
            </p>

            {/* Interactive Capability List */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                marginBottom: '2.5rem'
              }}
            >
              {capabilities.map((cap, idx) => {
                const isSelected = activeTab === idx;
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.id}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: '12px',
                      backgroundColor: isSelected ? 'var(--color-pure-white)' : 'rgba(255, 255, 255, 0.45)',
                      border: isSelected ? '1px solid rgba(22, 125, 181, 0.3)' : '1px solid rgba(23, 25, 30, 0.05)',
                      boxShadow: isSelected ? '0 8px 24px rgba(16, 28, 53, 0.06)' : 'none',
                      cursor: 'pointer',
                      transition: 'var(--transition-standard)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '8px',
                            backgroundColor: isSelected ? 'var(--color-ocean-blue)' : 'rgba(23, 25, 30, 0.05)',
                            color: isSelected ? '#FFFFFF' : 'var(--color-primary-text)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'var(--transition-standard)'
                          }}
                        >
                          <Icon size={15} />
                        </div>
                        <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--color-primary-text)' }}>
                          {cap.title}
                        </span>
                      </div>
                      <ChevronRight
                        size={16}
                        style={{
                          color: isSelected ? 'var(--color-ocean-blue)' : 'var(--color-secondary-text)',
                          transform: isSelected ? 'rotate(90deg)' : 'none',
                          transition: 'transform 0.25s ease'
                        }}
                      />
                    </div>

                    {isSelected && (
                      <p
                        style={{
                          fontSize: '0.86rem',
                          color: 'var(--color-secondary-text)',
                          lineHeight: 1.55,
                          marginTop: '0.75rem',
                          paddingLeft: '2.6rem'
                        }}
                      >
                        {cap.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => onOpenConsultation('consultation', 'Marketplace Management')}
                className="btn btn-primary-light"
                style={{
                  padding: '0.88rem 1.8rem',
                  fontSize: '0.9rem'
                }}
              >
                <span>Explore Marketplace Services</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .asymmetric-grid {
            grid-template-columns: 52% 48% !important;
          }
        }
      `}</style>
    </section>
  );
}
