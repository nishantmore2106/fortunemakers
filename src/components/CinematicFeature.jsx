import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function CinematicFeature({ onOpenConsultation }) {
  return (
    <section
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '5.5rem',
        backgroundColor: 'var(--color-warm-offwhite)'
      }}
    >
      <div className="container" style={{ maxWidth: '1400px' }}>
        
        {/* Full-width landscape container with rounded corners and outer margins */}
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            minHeight: '620px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            boxShadow: '0 24px 70px rgba(16, 28, 53, 0.1)',
            border: '1px solid rgba(23, 25, 30, 0.08)'
          }}
        >
          {/* Landscape Image */}
          <img
            src="/assets/cinematic-landscape.jpg"
            alt="Scenic coastal terrace with open product shipment and clear blue sky"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1
            }}
          />

          {/* Carefully localized subtle gradient overlay behind the text side only */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '100%',
              background: 'linear-gradient(90deg, rgba(9, 10, 14, 0.82) 0%, rgba(9, 10, 14, 0.6) 45%, rgba(9, 10, 14, 0.0) 80%)',
              zIndex: 2,
              pointerEvents: 'none'
            }}
            className="feature-gradient"
          />

          {/* Editorial Content Overlay */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              maxWidth: '620px',
              padding: 'clamp(2.5rem, 6vw, 5rem)'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-sky-blue)',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-sky-blue)'
                }}
              />
              02 // STRATEGIC HORIZONS
            </div>

            <h2
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                lineHeight: 1.1,
                fontWeight: 500,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem'
              }}
            >
              Everything You Need to <span className="serif-italic" style={{ fontWeight: 400 }}>Move Forward.</span>
            </h2>

            <p
              style={{
                color: 'rgba(240, 247, 252, 0.9)',
                fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                lineHeight: 1.65,
                fontWeight: 400,
                marginBottom: '2.5rem',
                maxWidth: '520px'
              }}
            >
              Discover the support, sourcing opportunities, and practical knowledge that help you approach your next business step with greater clarity.
            </p>

            {/* Value checklist */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2.5rem'
              }}
            >
              {[
                'Multi-channel inventory and catalog consistency',
                'Transparent wholesale procurement with verified quality',
                'Hands-on operational guidance tailored to your volume'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', fontSize: '0.88rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--color-sky-blue)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenConsultation('consultation')}
                className="btn btn-primary-dark"
                style={{
                  fontSize: '0.92rem',
                  padding: '0.9rem 1.8rem'
                }}
              >
                <span>Explore How We Help</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .feature-gradient {
            background: linear-gradient(180deg, rgba(9, 10, 14, 0.85) 0%, rgba(9, 10, 14, 0.8) 100%) !important;
          }
        }
      `}</style>
    </section>
  );
}
