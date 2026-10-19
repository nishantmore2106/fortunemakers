import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, BookCheck, Compass, Lightbulb, Sparkles } from 'lucide-react';

export default function Academy({ onOpenConsultation }) {
  const [activeCurriculum, setActiveCurriculum] = useState('fundamentals');

  const learningModules = [
    {
      id: 'fundamentals',
      title: 'Marketplace Fundamentals',
      subtitle: 'Core operational models & channel foundations',
      points: [
        'Navigating seller portals and policy landscapes without compliance frictions',
        'Understanding merchant-fulfilled vs. regional marketplace fulfillment models',
        'Managing fee structures, returns handling, and basic reconciliation workflows'
      ]
    },
    {
      id: 'research',
      title: 'Product Research & Listings',
      subtitle: 'Catalog positioning & product-market alignment',
      points: [
        'Systematic evaluation of market demand indicators and search query volume',
        'Crafting clear, accurate product specifications that lower customer return rates',
        'Photography guidelines, listing hierarchy, and indexing optimization'
      ]
    },
    {
      id: 'advertising',
      title: 'Advertising Education',
      subtitle: 'Principles of paid discovery & sustainable ROI',
      points: [
        'Foundations of search-based paid placements and match type governance',
        'Budget allocation methodologies to avoid runaway operational ad spend',
        'Analyzing search term reports to identify genuine organic keyword demand'
      ]
    },
    {
      id: 'operations',
      title: 'E-commerce Operations & Longevity',
      subtitle: 'Day-to-day execution & risk management',
      points: [
        'Inventory threshold forecasting and stockout mitigation strategies',
        'Standard operating procedures for proactive customer communication',
        'Protecting account health metrics through disciplined fulfillment cadences'
      ]
    }
  ];

  return (
    <section
      id="academy"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#F3F7FA',
        background: 'linear-gradient(180deg, #F8F7F5 0%, #DCEFF8 35%, #F0EDF8 100%)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1360px' }}>
        
        {/* Section Eyebrow */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="eyebrow-tag">
            <span className="bullet" />
            05 // PRACTICAL EDUCATION
          </div>
        </div>

        {/* Asymmetrical Grid: Visual Left (50%), Content Right (50%) */}
        <div
          className="academy-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >

          {/* Left Column: Art-directed Learning Scene Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(16, 28, 53, 0.08)',
                border: '1px solid rgba(23, 25, 30, 0.06)',
                backgroundColor: '#FFFFFF',
                position: 'relative'
              }}
            >
              <img
                src="/assets/academy-learning.jpg"
                alt="Editorial desk with laptop showing design and commerce module, notebook sketches, and material samples"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Translucent overlay label */}
              <div
                className="glass-overlay-card"
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ocean-blue)' }}>
                    Curriculum Scope
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-primary-text)', marginTop: '0.15rem' }}>
                    Fundamental & Applied Seller Playbooks
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-midnight-navy)', fontSize: '0.78rem', fontWeight: 600 }}>
                  <BookOpen size={15} />
                  <span>Verified Modules</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative frame */}
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

          {/* Right Column: Narrative & Interactive Modules */}
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
              Build Your Knowledge. <span className="serif-italic" style={{ fontWeight: 400 }}>Build Your Business.</span>
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-secondary-text)',
                lineHeight: 1.65,
                marginBottom: '2rem'
              }}
            >
              Develop practical knowledge of marketplace selling, product research, listings, and e-commerce operations.
            </p>

            {/* Module Selector Tabs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2.5rem'
              }}
            >
              {learningModules.map((mod) => {
                const isActive = activeCurriculum === mod.id;
                return (
                  <div
                    key={mod.id}
                    onClick={() => setActiveCurriculum(mod.id)}
                    style={{
                      padding: '1.15rem 1.35rem',
                      borderRadius: '12px',
                      backgroundColor: isActive ? 'var(--color-pure-white)' : 'rgba(255, 255, 255, 0.45)',
                      border: isActive ? '1px solid rgba(22, 125, 181, 0.3)' : '1px solid rgba(23, 25, 30, 0.05)',
                      boxShadow: isActive ? '0 10px 25px rgba(16, 28, 53, 0.05)' : 'none',
                      cursor: 'pointer',
                      transition: 'var(--transition-standard)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--color-primary-text)' }}>
                          {mod.title}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-secondary-text)', marginTop: '0.15rem' }}>
                          {mod.subtitle}
                        </div>
                      </div>
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? 'var(--color-ocean-blue)' : 'rgba(23, 25, 30, 0.15)',
                          transition: 'background-color 0.2s ease'
                        }}
                      />
                    </div>

                    {isActive && (
                      <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(23, 25, 30, 0.06)' }}>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0, margin: 0 }}>
                          {mod.points.map((pt, pIdx) => (
                            <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.84rem', color: 'var(--color-secondary-text)', lineHeight: 1.5 }}>
                              <span style={{ color: 'var(--color-ocean-blue)', marginTop: '0.1rem', fontWeight: 700 }}>—</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => onOpenConsultation('consultation', 'FortuneMakers Academy')}
                className="btn btn-primary-light"
                style={{
                  padding: '0.88rem 1.8rem',
                  fontSize: '0.9rem'
                }}
              >
                <span>Explore Learning Resources</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .academy-grid {
            grid-template-columns: 50% 50% !important;
          }
        }
      `}</style>
    </section>
  );
}
