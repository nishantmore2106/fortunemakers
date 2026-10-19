import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      label: 'Services',
      href: '#services',
      hasDropdown: true,
      items: [
        { title: 'Marketplace Management', desc: 'Account health, catalog operations & ads', href: '#marketplace' },
        { title: 'Product Sourcing', desc: 'Direct supply & bulk purchasing pipelines', href: '#sourcing' },
        { title: 'Service Process', desc: 'Our four-stage strategic methodology', href: '#process' }
      ]
    },
    { label: 'Product Supply', href: '#sourcing' },
    { label: 'Academy', href: '#academy' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: isScrolled ? 'rgba(248, 247, 245, 0.88)' : 'rgba(248, 247, 245, 0.45)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(23, 25, 30, 0.08)' : '1px solid transparent',
          padding: isScrolled ? '0.9rem 0' : '1.35rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Brand Wordmark */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              color: 'var(--color-primary-text)',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1
            }}
          >
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              FortuneMakers
            </span>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-ocean-blue)',
              marginTop: '0.25rem',
              fontWeight: 600
            }}>
              Services
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.2rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--color-primary-text)',
                    fontSize: '0.86rem',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    transition: 'var(--transition-standard)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.4rem 0'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ocean-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary-text)')}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={14} style={{ opacity: 0.6 }} />
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.label && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-1rem',
                      width: '280px',
                      backgroundColor: 'var(--color-pure-white)',
                      border: '1px solid rgba(23, 25, 30, 0.08)',
                      borderRadius: '12px',
                      boxShadow: '0 20px 40px rgba(16, 28, 53, 0.08)',
                      padding: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      zIndex: 1000
                    }}
                  >
                    {link.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        style={{
                          textDecoration: 'none',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '8px',
                          transition: 'var(--transition-standard)',
                          display: 'block'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-soft-lavender)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <div style={{ color: 'var(--color-primary-text)', fontSize: '0.84rem', fontWeight: 600 }}>
                          {item.title}
                        </div>
                        <div style={{ color: 'var(--color-secondary-text)', fontSize: '0.74rem', marginTop: '0.15rem' }}>
                          {item.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => onOpenConsultation('consultation')}
              className="btn btn-primary-light btn-pill-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              <span>Book a Consultation</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-primary-text)',
                cursor: 'pointer',
                padding: '0.4rem'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 890,
            backgroundColor: 'rgba(9, 10, 14, 0.7)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '6rem 1.5rem 2rem 1.5rem',
            animation: 'fadeIn 0.25s ease'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--color-warm-offwhite)',
              borderRadius: '16px',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 24px 60px rgba(0,0,0,0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a
                href="#marketplace"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-text)', textDecoration: 'none' }}
              >
                Marketplace Management
              </a>
              <a
                href="#sourcing"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-text)', textDecoration: 'none' }}
              >
                Product Sourcing & Bulk Supply
              </a>
              <a
                href="#academy"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-text)', textDecoration: 'none' }}
              >
                FortuneMakers Academy
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-text)', textDecoration: 'none' }}
              >
                Our 4-Stage Process
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary-text)', textDecoration: 'none' }}
              >
                About the Advisory
              </a>
            </div>

            <div style={{ borderTop: '1px solid rgba(23, 25, 30, 0.08)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('consultation');
                }}
                className="btn btn-primary-light"
                style={{ width: '100%' }}
              >
                Book a Consultation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation('quote');
                }}
                className="btn btn-outline-light"
                style={{ width: '100%' }}
              >
                Request a Product Quote
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
