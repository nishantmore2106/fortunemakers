import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  return (
    <footer
      style={{
        backgroundColor: '#07080B',
        color: 'rgba(255, 255, 255, 0.7)',
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        fontSize: '0.86rem'
      }}
    >
      <div className="container" style={{ maxWidth: '1360px' }}>
        
        {/* Top Footer Grid */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2' }} className="brand-col">
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, marginBottom: '1.25rem' }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '1.2rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#FFFFFF'
              }}>
                FortuneMakers
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-sky-blue)',
                marginTop: '0.25rem',
                fontWeight: 600
              }}>
                Services
              </span>
            </div>

            <p style={{ color: 'rgba(220, 239, 248, 0.65)', lineHeight: 1.65, maxWidth: '340px', fontSize: '0.86rem' }}>
              Strategic marketplace management, wholesale product sourcing, and operator education for modern creative commerce brands.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                Advisory desk active & taking inquiries
              </span>
            </div>
          </div>

          {/* Column 1: Marketplace */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Marketplace
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#marketplace" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Account Onboarding
                </a>
              </li>
              <li>
                <a href="#marketplace" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Catalog Management
                </a>
              </li>
              <li>
                <a href="#marketplace" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Product Research
                </a>
              </li>
              <li>
                <a href="#marketplace" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Advertising Support
                </a>
              </li>
              <li>
                <a href="#marketplace" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Account Health
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Product Supply */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Product Supply
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#sourcing" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Sourcing Inquiries
                </a>
              </li>
              <li>
                <a href="#sourcing" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Wholesale Supply
                </a>
              </li>
              <li>
                <a href="#sourcing" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Bulk Purchasing
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('quote')}
                  style={{ background: 'none', border: 'none', padding: 0, color: 'var(--color-sky-blue)', cursor: 'pointer', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <span>Request Quote</span>
                  <ArrowUpRight size={13} />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Academy & Company */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Academy & Practice
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <a href="#academy" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Seller Education
                </a>
              </li>
              <li>
                <a href="#academy" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Listing Principles
                </a>
              </li>
              <li>
                <a href="#process" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Our 4-Stage Process
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Advisory Standards
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Direct Inquiries
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingTop: '2.5rem',
            fontSize: '0.78rem',
            color: 'rgba(255, 255, 255, 0.45)'
          }}
        >
          <div>
            © {new Date().getFullYear()} FortuneMakers Services. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Operational Disclosures</span>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .brand-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
