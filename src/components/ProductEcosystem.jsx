import React from 'react';
import { ArrowRight, Layers, Box, GraduationCap, Sparkles } from 'lucide-react';

export default function ProductEcosystem({ onOpenConsultation }) {
  const pillars = [
    {
      num: '01',
      title: 'Marketplace Operations',
      desc: 'Catalog architecture, active listing health, advertising alignment, and order lifecycle management.',
      icon: Layers,
      href: '#marketplace'
    },
    {
      num: '02',
      title: 'Product Sourcing & Bulk Supply',
      desc: 'Disciplined wholesale discovery, supplier coordination, sample inspection, and bulk procurement.',
      icon: Box,
      href: '#sourcing'
    },
    {
      num: '03',
      title: 'FortuneMakers Academy',
      desc: 'Structured operator curriculum covering marketplace fundamentals, listing research, and operational economics.',
      icon: GraduationCap,
      href: '#academy'
    }
  ];

  return (
    <section
      id="services"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        backgroundColor: 'var(--color-warm-offwhite)',
        background: 'radial-gradient(circle at 50% 25%, rgba(240, 237, 248, 0.7) 0%, #F8F7F5 65%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1240px' }}>

        {/* 3D Floating Product Ecosystem Visual (Top-Center) */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1080px',
            margin: '0 auto 3.5rem auto',
            textAlign: 'center'
          }}
        >
          {/* Subtle decorative glow behind the arc image */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '70%',
              background: 'radial-gradient(ellipse at center, rgba(220, 239, 248, 0.6) 0%, rgba(240, 237, 248, 0.3) 50%, transparent 80%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(16, 28, 53, 0.05)',
              border: '1px solid rgba(23, 25, 30, 0.05)',
              backgroundColor: '#FAF9F8'
            }}
          >
            <img
              src="/assets/product-ecosystem.jpg"
              alt="Floating 3D physical commerce objects and translucent tiles arranged in a graceful horizontal arc"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '440px',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.8s ease'
              }}
            />
          </div>

          {/* Interactive Floating Micro-labels */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '1.5rem',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-secondary-text)', fontWeight: 600 }}>
              Physical Packaging
            </span>
            <span style={{ color: 'var(--color-secondary-text)', opacity: 0.4 }}>•</span>
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-secondary-text)', fontWeight: 600 }}>
              Catalog Architecture
            </span>
            <span style={{ color: 'var(--color-secondary-text)', opacity: 0.4 }}>•</span>
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-secondary-text)', fontWeight: 600 }}>
              Procurement Oversight
            </span>
          </div>
        </div>

        {/* Centered Headline & Narrative */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 4rem auto'
          }}
        >
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            <span className="bullet" />
            Coordinated E-commerce Architecture
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              color: 'var(--color-primary-text)',
              lineHeight: 1.12,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem'
            }}
          >
            A Simpler Way to Navigate <span className="serif-italic" style={{ fontWeight: 400 }}>E-commerce.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)',
              color: 'var(--color-secondary-text)',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 2.25rem auto'
            }}
          >
            From marketplace operations to product sourcing and seller education, bring the essential parts of your e-commerce journey into focus.
          </p>

          <div>
            <a
              href="#marketplace"
              className="btn btn-primary-light"
              style={{
                padding: '0.88rem 1.9rem',
                fontSize: '0.9rem'
              }}
            >
              <span>Discover Our Services</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Three Pillar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <a
                key={pillar.num}
                href={pillar.href}
                style={{
                  textDecoration: 'none',
                  backgroundColor: 'var(--color-pure-white)',
                  padding: '2.4rem 2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(23, 25, 30, 0.06)',
                  boxShadow: '0 8px 30px rgba(16, 28, 53, 0.03)',
                  transition: 'var(--transition-standard)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
                className="pillar-card"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: 'var(--color-ocean-blue)',
                        letterSpacing: '0.08em'
                      }}
                    >
                      {pillar.num}
                    </span>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-soft-lavender)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-midnight-navy)'
                      }}
                    >
                      <IconComponent size={18} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--color-primary-text)',
                      marginBottom: '0.75rem',
                      letterSpacing: '-0.015em'
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--color-secondary-text)',
                      lineHeight: 1.6
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--color-ocean-blue)'
                  }}
                >
                  <span>Explore Focus Area</span>
                  <ArrowRight size={14} className="pillar-arrow" style={{ transition: 'transform 0.25s ease' }} />
                </div>
              </a>
            );
          })}
        </div>

      </div>

      <style>{`
        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(16, 28, 53, 0.08);
          border-color: rgba(22, 125, 181, 0.25);
        }
        .pillar-card:hover .pillar-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}
