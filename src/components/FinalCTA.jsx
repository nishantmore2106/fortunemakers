import React from 'react';
import { ArrowUpRight, ArrowRight, MessageSquare, ShieldCheck, Mail } from 'lucide-react';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section
      id="contact"
      style={{
        paddingTop: '7.5rem',
        paddingBottom: '7.5rem',
        backgroundColor: 'var(--color-deep-black)',
        background: 'radial-gradient(circle at 50% 100%, rgba(22, 125, 181, 0.35) 0%, rgba(16, 28, 53, 0.98) 50%, #090A0E 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF'
      }}
    >
      {/* Ambient subtle glow ring */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(119, 199, 234, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ maxWidth: '980px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* Eyebrow */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-sky-blue)',
            marginBottom: '2rem'
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
          07 // ENGAGE FORTUNEMAKERS
        </div>

        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(2.6rem, 5.2vw, 4.6rem)',
            lineHeight: 1.08,
            fontWeight: 500,
            letterSpacing: '-0.03em',
            marginBottom: '1.75rem',
            color: 'var(--color-pure-white)'
          }}
        >
          Let's Build Your <span className="serif-italic" style={{ fontWeight: 400 }}>Next Opportunity.</span>
        </h2>

        {/* Supporting text */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)',
            color: 'rgba(220, 239, 248, 0.85)',
            lineHeight: 1.65,
            maxWidth: '640px',
            margin: '0 auto 3rem auto',
            fontWeight: 400
          }}
        >
          Tell us what your business needs, and let's explore the right way forward.
        </p>

        {/* Dual Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          <button
            onClick={() => onOpenConsultation('consultation')}
            className="btn btn-primary-dark"
            style={{
              fontSize: '0.96rem',
              padding: '1rem 2.2rem'
            }}
          >
            <span>Book a Consultation</span>
            <ArrowUpRight size={17} />
          </button>

          <button
            onClick={() => onOpenConsultation('quote')}
            className="btn btn-secondary-dark"
            style={{
              fontSize: '0.96rem',
              padding: '1rem 2rem'
            }}
          >
            <span>Request a Product Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Reassurance pills */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(220, 239, 248, 0.65)',
            fontSize: '0.82rem'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={15} style={{ color: 'var(--color-sky-blue)' }} />
            Confidential Consultation
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={15} style={{ color: 'var(--color-sky-blue)' }} />
            Response within 24 business hours
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <MessageSquare size={15} style={{ color: 'var(--color-sky-blue)' }} />
            Zero hard sales obligation
          </span>
        </div>

      </div>
    </section>
  );
}
