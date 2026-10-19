import React from 'react';
import { ArrowUpRight, CheckCircle2, PackageCheck, FileText, Globe2, Sparkles } from 'lucide-react';

export default function ProductSourcing({ onOpenConsultation }) {
  const sourcingFeatures = [
    {
      title: 'Targeted Product Sourcing Inquiries',
      desc: 'Structured intake matching your technical specifications, material preferences, and brand standards against verified manufacturing channels.'
    },
    {
      title: 'Wholesale Supply Opportunities',
      desc: 'Access established supply lines with consistent manufacturing standards and verifiable batch testing protocols.'
    },
    {
      title: 'Bulk Purchasing & Procurement Coordination',
      desc: 'Negotiation, sample dispatch validation, purchase order supervision, and consolidated freight scheduling.'
    },
    {
      title: 'Packaging & Specification Alignment',
      desc: 'Coordination of custom unbranded packaging, labeling compliance, barcodes, and master carton shipping requirements.'
    }
  ];

  return (
    <section
      id="sourcing"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-warm-offwhite)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1360px' }}>
        
        {/* Section Eyebrow */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="eyebrow-tag">
            <span className="bullet" />
            04 // SOURCING & PROCUREMENT
          </div>
        </div>

        {/* Asymmetrical Grid: Text Left (48%), Visual Right (52%) */}
        <div
          className="sourcing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >

          {/* Left Column: Text & Features */}
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
              Find the Products That <span className="serif-italic" style={{ fontWeight: 400 }}>Fit Your Business.</span>
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-secondary-text)',
                lineHeight: 1.65,
                marginBottom: '2.5rem'
              }}
            >
              Explore product sourcing and bulk purchasing opportunities aligned with your business requirements.
            </p>

            {/* Feature Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2.5rem'
              }}
            >
              {sourcingFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-pure-white)',
                    padding: '1.5rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(23, 25, 30, 0.06)',
                    boxShadow: '0 6px 20px rgba(16, 28, 53, 0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <div
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-ocean-blue)'
                      }}
                    />
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--color-primary-text)' }}>
                      {feat.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-secondary-text)', lineHeight: 1.55 }}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenConsultation('quote', 'Product Sourcing & Bulk Supply')}
                className="btn btn-primary-light"
                style={{
                  padding: '0.88rem 1.8rem',
                  fontSize: '0.9rem'
                }}
              >
                <span>Request a Quote</span>
                <ArrowUpRight size={15} />
              </button>

              <button
                onClick={() => onOpenConsultation('consultation', 'Procurement Strategy')}
                className="btn btn-outline-light"
                style={{
                  padding: '0.88rem 1.6rem',
                  fontSize: '0.9rem'
                }}
              >
                <span>Discuss Sourcing Scope</span>
              </button>
            </div>

          </div>

          {/* Right Column: Original Editorial Still Life */}
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
                src="/assets/product-sourcing.jpg"
                alt="Tactile still life of procurement goods, raw materials, sample vials, and sustainable packaging"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* Editorial Caption Tag */}
              <div
                className="glass-overlay-card"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  padding: '0.65rem 1rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary-text)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <PackageCheck size={14} style={{ color: 'var(--color-ocean-blue)' }} />
                <span>Verified Supply Protocol</span>
              </div>
            </div>

            {/* Subtle offset border frame */}
            <div
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                right: '-15px',
                bottom: '-15px',
                border: '1px solid rgba(23, 25, 30, 0.08)',
                borderRadius: '24px',
                zIndex: -1,
                pointerEvents: 'none'
              }}
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .sourcing-grid {
            grid-template-columns: 48% 52% !important;
          }
        }
      `}</style>
    </section>
  );
}
