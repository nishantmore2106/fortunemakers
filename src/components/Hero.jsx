import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Compass, Sparkles } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        backgroundColor: 'var(--color-warm-offwhite)'
      }}
    >
      <div className="container" style={{ maxWidth: '1440px' }}>
        
        {/* Two-Panel Cinematic Composition Container */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 24px 70px rgba(16, 28, 53, 0.12)',
            minHeight: '740px',
            border: '1px solid rgba(23, 25, 30, 0.06)'
          }}
        >

          {/* LEFT PANEL: Cinematic Commerce Photography */}
          <div
            className="hero-left-panel"
            style={{
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
              minHeight: '460px'
            }}
          >
            {/* Background Photographic Image */}
            <img
              src="/assets/hero-commerce.jpg"
              alt="Cinematic commerce still life under expansive blue sky with curated packages and products"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: 1,
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="hero-bg-img"
            />

            {/* Subtle Gradient Overlays for Readability and Depth */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(9, 10, 14, 0.28) 0%, rgba(9, 10, 14, 0.02) 40%, rgba(9, 10, 14, 0.45) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
              }}
            />

            {/* Top Left: Editorial Tag & Reference Index */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.45rem 0.95rem',
                  background: 'rgba(255, 255, 255, 0.82)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  color: 'var(--color-primary-text)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-ocean-blue)'
                  }}
                />
                Curated Commerce Vol. 04
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#FFFFFF',
                  fontSize: '0.74rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  opacity: 0.9
                }}
              >
                <span>INDEX 01 / 03</span>
              </div>
            </div>

            {/* Bottom Content Over Photographic Canvas */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              {/* Editorial Statement */}
              <h2
                className="serif-italic"
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)',
                  lineHeight: 1.08,
                  fontWeight: 400,
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                  maxWidth: '460px',
                  letterSpacing: '-0.01em'
                }}
              >
                Make Room for What's Next.
              </h2>

              {/* Translucent Interface Detail Overlay */}
              <div
                className="glass-overlay-card"
                style={{
                  padding: '0.9rem 1.25rem',
                  maxWidth: '380px',
                  background: 'rgba(248, 247, 245, 0.88)',
                  border: '1px solid rgba(255, 255, 255, 0.7)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-secondary-text)' }}>
                    Fulfillment & Discovery
                  </span>
                  <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--color-ocean-blue)' }}>
                    ARCHIVE SPEC
                  </span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-primary-text)', marginTop: '0.35rem', lineHeight: 1.4, fontWeight: 500 }}>
                  Tactile unbranded packaging, calibrated sourcing, and structured inventory orchestration.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Dark Editorial Hero Panel */}
          <div
            className="hero-right-panel"
            style={{
              backgroundColor: 'var(--color-deep-black)',
              background: 'radial-gradient(circle at 80% 90%, rgba(22, 125, 181, 0.28) 0%, rgba(16, 28, 53, 0.95) 45%, #090A0E 100%)',
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Subtle atmospheric ambient glow */}
            <div
              style={{
                position: 'absolute',
                bottom: '-80px',
                right: '-80px',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(119, 199, 234, 0.18) 0%, rgba(16, 28, 53, 0) 70%)',
                pointerEvents: 'none',
                filter: 'blur(40px)'
              }}
            />

            {/* Top Brand Statement */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--color-sky-blue)',
                  marginBottom: '1.75rem'
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
                01 // E-COMMERCE ADVISORY & OPERATIONS
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  color: 'var(--color-pure-white)',
                  fontSize: 'clamp(2.4rem, 4.2vw, 4.2rem)',
                  lineHeight: 1.08,
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  maxWidth: '560px',
                  marginBottom: '1.75rem'
                }}
              >
                Your Next Chapter in E-commerce Starts Here.
              </h1>

              {/* Supporting Copy */}
              <p
                style={{
                  color: 'rgba(220, 239, 248, 0.85)',
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  lineHeight: 1.65,
                  maxWidth: '490px',
                  fontWeight: 400,
                  marginBottom: '2.5rem'
                }}
              >
                Marketplace management, product sourcing, and seller education — thoughtfully connected to support your business journey.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  onClick={() => onOpenConsultation('consultation')}
                  className="btn btn-primary-dark"
                  style={{
                    fontSize: '0.92rem',
                    padding: '0.9rem 1.8rem'
                  }}
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight size={16} />
                </button>

                <a
                  href="#services"
                  className="btn btn-secondary-dark"
                  style={{
                    fontSize: '0.92rem',
                    padding: '0.9rem 1.6rem'
                  }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Bottom Status Panel */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1.5rem'
              }}
            >
              <div>
                <div style={{ color: 'var(--color-sky-blue)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Three Focus Areas
                </div>
                <div style={{ color: 'var(--color-pure-white)', fontSize: '0.88rem', marginTop: '0.3rem', fontWeight: 500 }}>
                  Operations · Sourcing · Academy
                </div>
              </div>

              <div>
                <div style={{ color: 'var(--color-sky-blue)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Engagement Model
                </div>
                <div style={{ color: 'var(--color-pure-white)', fontSize: '0.88rem', marginTop: '0.3rem', fontWeight: 500 }}>
                  Tailored Advisory & Execution
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 50% 50% !important;
          }
        }
        @media (max-width: 991px) {
          .hero-left-panel {
            min-height: 480px;
          }
        }
        .hero-left-panel:hover .hero-bg-img {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
