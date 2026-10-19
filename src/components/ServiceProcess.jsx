import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Lightbulb, Activity } from 'lucide-react';

export default function ServiceProcess({ onOpenConsultation }) {
  const steps = [
    {
      step: '01',
      name: 'Discover',
      tagline: 'Understand the business requirements',
      desc: 'We review your current marketplace presence, product ambitions, fulfillment constraints, and commercial goals through an initial deep-dive audit.'
    },
    {
      step: '02',
      name: 'Assess',
      tagline: 'Identify suitable services or sourcing opportunities',
      desc: 'We map operational gaps, evaluate category viability, inspect prospective supply batches, and evaluate whether advisory or full execution is optimal.'
    },
    {
      step: '03',
      name: 'Plan',
      tagline: 'Define the scope and next steps',
      desc: 'Clear deliverables, account health milestones, procurement specs, and timeline benchmarks are articulated into a practical operational roadmap.'
    },
    {
      step: '04',
      name: 'Execute',
      tagline: 'Proceed with the agreed work',
      desc: 'Hands-on rollout across catalog configuration, advertising structure, supplier coordination, and weekly reporting routines.'
    }
  ];

  const operationalPillars = [
    {
      title: 'Verified Information First',
      desc: 'Every catalog recommendation and sourcing pipeline is anchored to verified market data and verifiable supplier capabilities.'
    },
    {
      title: 'Protect Account Integrity',
      desc: 'Marketplace policy compliance and sustainable listing health take precedence over risky short-term hacks.'
    },
    {
      title: 'Collaborative Governance',
      desc: 'You maintain 100% ownership of your store, accounts, brand assets, and customer communication records.'
    }
  ];

  return (
    <section
      id="process"
      style={{
        paddingTop: '6.5rem',
        paddingBottom: '6.5rem',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        
        {/* Editorial Trust Statement (Section 09) */}
        <div
          id="about"
          style={{
            maxWidth: '920px',
            margin: '0 auto 6rem auto',
            textAlign: 'center'
          }}
        >
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            <span className="bullet" />
            Advisory Philosophy & Trust
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: 'var(--color-primary-text)',
              lineHeight: 1.15,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem'
            }}
          >
            Built on Clarity, Discipline, and <span className="serif-italic" style={{ fontWeight: 400 }}>Operational Candor.</span>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-secondary-text)',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 3rem auto'
            }}
          >
            FortuneMakers Services functions as a dedicated partner for brands and sellers seeking grounded marketplace operations, transparent wholesale supply, and practical merchant education without exaggerated claims.
          </p>

          {/* Three Trust Pillars */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
              textAlign: 'left'
            }}
          >
            {operationalPillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-warm-offwhite)',
                  padding: '1.75rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(23, 25, 30, 0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-ocean-blue)' }} />
                  <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--color-primary-text)' }}>
                    {p.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-secondary-text)', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(23, 25, 30, 0.08)',
            maxWidth: '1080px',
            margin: '0 auto 5.5rem auto'
          }}
        />

        {/* Section 13: Service Process */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div className="eyebrow-tag" style={{ justifyContent: 'center' }}>
            <span className="bullet" />
            06 // ENGAGEMENT METHODOLOGY
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.5rem)',
              color: 'var(--color-primary-text)',
              lineHeight: 1.15,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem'
            }}
          >
            A Clearer Path from <span className="serif-italic" style={{ fontWeight: 400 }}>Idea to Action.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-secondary-text)', lineHeight: 1.65 }}>
            A structured, repeatable approach designed to eliminate uncertainty and maintain focus throughout every phase of work.
          </p>
        </div>

        {/* 4 Process Stages with Fine Connecting Architecture */}
        <div
          className="process-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            position: 'relative'
          }}
        >
          {steps.map((item, idx) => (
            <div
              key={item.step}
              style={{
                position: 'relative',
                padding: '2.25rem 1.75rem',
                borderRadius: '16px',
                border: '1px solid rgba(23, 25, 30, 0.08)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(16, 28, 53, 0.02)',
                transition: 'var(--transition-standard)'
              }}
              className="process-card"
            >
              {/* Step indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(23, 25, 30, 0.06)',
                  paddingBottom: '1rem'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-ocean-blue)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {item.step}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-secondary-text)',
                    fontWeight: 600
                  }}
                >
                  STAGE
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: 'var(--color-primary-text)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.015em'
                }}
              >
                {item.name}
              </h3>

              <div
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--color-ocean-blue)',
                  marginBottom: '0.85rem'
                }}
              >
                {item.tagline}
              </div>

              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--color-secondary-text)',
                  lineHeight: 1.6
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Process CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button
            onClick={() => onOpenConsultation('consultation')}
            className="btn btn-outline-light"
            style={{
              padding: '0.88rem 1.8rem',
              fontSize: '0.9rem'
            }}
          >
            <span>Initiate Discovery Review</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>

      <style>{`
        .process-card:hover {
          transform: translateY(-4px);
          border-color: rgba(22, 125, 181, 0.3);
          box-shadow: 0 16px 36px rgba(16, 28, 53, 0.06);
        }
      `}</style>
    </section>
  );
}
