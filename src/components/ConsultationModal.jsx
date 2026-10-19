import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Send } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, initialType = 'consultation', defaultService = '' }) {
  const [formType, setFormType] = useState(initialType);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    brandName: '',
    serviceInterest: defaultService || 'Marketplace Management',
    estimatedUnits: '',
    timeframe: 'within_30_days',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialType) setFormType(initialType);
  }, [initialType]);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, serviceInterest: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief summary of your requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Successful submission simulation
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      brandName: '',
      serviceInterest: 'Marketplace Management',
      estimatedUnits: '',
      timeframe: 'within_30_days',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(9, 10, 14, 0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.25s ease'
      }}
      onClick={resetAndClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '620px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(23, 25, 30, 0.08)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '1.75rem 2rem 1.25rem 2rem',
            borderBottom: '1px solid rgba(23, 25, 30, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ocean-blue)' }}>
              Direct Inquiry Desk
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--color-primary-text)', marginTop: '0.2rem' }}>
              {formType === 'consultation' ? 'Book a Strategic Consultation' : 'Request a Product Sourcing Quote'}
            </h3>
          </div>

          <button
            onClick={resetAndClose}
            style={{
              background: 'none',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'var(--color-secondary-text)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: '2rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-pale-blue)',
                  color: 'var(--color-ocean-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h4 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.75rem' }}>
                Inquiry Received
              </h4>

              <p style={{ fontSize: '0.92rem', color: 'var(--color-secondary-text)', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                Thank you, {formData.fullName}. Our advisory team has received your briefing regarding{' '}
                <strong style={{ color: 'var(--color-primary-text)' }}>{formData.serviceInterest}</strong>. We will review your requirements and reach out via {formData.email} within 24 business hours.
              </p>

              <button
                onClick={resetAndClose}
                className="btn btn-primary-light"
                style={{ padding: '0.8rem 1.8rem' }}
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Type Toggle Tabs */}
              <div
                style={{
                  display: 'flex',
                  backgroundColor: 'var(--color-soft-lavender)',
                  padding: '4px',
                  borderRadius: '10px',
                  marginBottom: '1.75rem'
                }}
              >
                <button
                  type="button"
                  onClick={() => setFormType('consultation')}
                  style={{
                    flex: 1,
                    padding: '0.55rem',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    backgroundColor: formType === 'consultation' ? '#FFFFFF' : 'transparent',
                    color: formType === 'consultation' ? 'var(--color-midnight-navy)' : 'var(--color-secondary-text)',
                    boxShadow: formType === 'consultation' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('quote')}
                  style={{
                    flex: 1,
                    padding: '0.55rem',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    backgroundColor: formType === 'quote' ? '#FFFFFF' : 'transparent',
                    color: formType === 'quote' ? 'var(--color-midnight-navy)' : 'var(--color-secondary-text)',
                    boxShadow: formType === 'quote' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Product Quote
                </button>
              </div>

              {/* Form Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: errors.fullName ? '1px solid #ef4444' : '1px solid rgba(23, 25, 30, 0.15)',
                      fontSize: '0.88rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                  {errors.fullName && (
                    <span style={{ fontSize: '0.74rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.4rem' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@company.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: errors.email ? '1px solid #ef4444' : '1px solid rgba(23, 25, 30, 0.15)',
                      fontSize: '0.88rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '0.74rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.4rem' }}>
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder="e.g. Vance Goods"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(23, 25, 30, 0.15)',
                      fontSize: '0.88rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.4rem' }}>
                    Primary Focus
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(23, 25, 30, 0.15)',
                      fontSize: '0.88rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="Marketplace Management">Marketplace Management</option>
                    <option value="Product Sourcing & Bulk Supply">Product Sourcing & Bulk Supply</option>
                    <option value="FortuneMakers Academy">FortuneMakers Academy</option>
                    <option value="Complete E-commerce Advisory">Full Advisory Program</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Sourcing specific or timeframe */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.4rem' }}>
                    {formType === 'quote' ? 'Target Order Volume / Units' : 'Current Monthly Volume'}
                  </label>
                  <input
                    type="text"
                    value={formData.estimatedUnits}
                    onChange={(e) => setFormData({ ...formData, estimatedUnits: e.target.value })}
                    placeholder={formType === 'quote' ? 'e.g. 500 – 2,000 units' : 'e.g. 100 – 500 orders/mo'}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(23, 25, 30, 0.15)',
                      fontSize: '0.88rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.4rem' }}>
                    Desired Timeline
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(23, 25, 30, 0.15)',
                      fontSize: '0.88rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="immediate">Immediate (Next 7-14 days)</option>
                    <option value="within_30_days">Within 30 days</option>
                    <option value="next_quarter">Next quarter (Planning phase)</option>
                    <option value="exploratory">Exploratory / Initial inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message field */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-primary-text)', marginBottom: '0.4rem' }}>
                  Brief Description of Requirements *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your marketplace setup, target product category, sourcing specs, or educational goals..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.9rem',
                    borderRadius: '8px',
                    border: errors.message ? '1px solid #ef4444' : '1px solid rgba(23, 25, 30, 0.15)',
                    fontSize: '0.88rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
                {errors.message && (
                  <span style={{ fontSize: '0.74rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Bottom Submit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-secondary-text)' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--color-ocean-blue)' }} />
                  <span>Strict NDA and data protection</span>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary-light"
                  style={{
                    padding: '0.85rem 1.8rem',
                    fontSize: '0.9rem'
                  }}
                >
                  <span>Submit Inquiry</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
