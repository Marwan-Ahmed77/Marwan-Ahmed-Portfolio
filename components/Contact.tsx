'use client'
<<<<<<< HEAD
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { person, SITE_URL } from '@/lib/data'
import { fadeUp } from '@/lib/motion'

const contactItems = [
  {
    label: 'Email',
    value: person.email,
    href: `mailto:${person.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: person.phone,
    href: `tel:${person.phone.replace(/\s/g, '')}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2.25h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'marwan-ahmed-035472222',
    href: person.linkedin,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: person.location,
    href: 'https://maps.google.com/?q=New+Cairo+Egypt',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]
=======

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [copied, setCopied] = useState(false)

<<<<<<< HEAD
  const copy = () => {
    navigator.clipboard.writeText(person.email)
=======
  const copyEmail = () => {
    navigator.clipboard.writeText('marwan.a.gaballah@gmail.com')
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
<<<<<<< HEAD
    <section id="contact" className="section" ref={ref}
      style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, background: 'var(--gold-glow)', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          {/* Header */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
            style={{ marginBottom: 48 }}>
            <div className="t-label" style={{ marginBottom: 20 }}>Get In Touch</div>
            <h2 className="t-display" style={{ marginBottom: 20 }}>
              Let&apos;s build your<br />
              <span style={{ fontStyle: 'italic' }} className="text-gold-gradient">ERP success story</span>
            </h2>
            <p className="t-body" style={{ maxWidth: 480, margin: '0 auto' }}>
              Planning an Oracle HCM implementation, optimizing an existing system, or need a senior PM to lead your next ERP program? Let&apos;s talk.
            </p>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 56 }}>
            <a href={`mailto:${person.email}`} className="btn btn-gold" style={{ fontSize: '0.9rem', padding: '15px 32px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Send an Email
            </a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.9rem', padding: '15px 32px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
=======
    <section id="contact" ref={ref} className="py-28 relative">
      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label block mb-6">Get in Touch</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Let's build your next
              <br />
              <span className="text-[var(--gold)] italic">ERP success story</span>
            </h2>
            <p className="font-body text-[var(--text-secondary)] text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Whether you're planning a greenfield Oracle implementation, transforming your business processes, or need experienced leadership for a critical ERP project — let's discuss how I can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="mailto:marwan.a.gaballah@gmail.com"
              className="group px-8 py-4 bg-[var(--gold)] text-[var(--ink)] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[var(--gold-light)] transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
              Send Me an Email
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/marwan-ahmed-035472222/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/15 text-[var(--text-primary)] font-body font-medium text-sm tracking-wider hover:border-[var(--gold)]/40 hover:bg-white/3 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
              Connect on LinkedIn
            </a>
          </motion.div>

<<<<<<< HEAD
          {/* Contact details grid */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}
            className="contact-grid">
            {contactItems.map(item => (
              <a key={item.label} href={item.href} target={item.label === 'LinkedIn' || item.label === 'Location' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card"
                style={{
                  padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16,
                  textDecoration: 'none', color: 'inherit',
                }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--r-sm)',
                  background: 'var(--gold-subtle)', border: '1px solid var(--gold-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ textAlign: 'left', minWidth: 0 }}>
                  <div className="t-label" style={{ fontSize: '0.58rem', marginBottom: 3 }}>{item.label}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Copy email */}
          <motion.button custom={3} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
            onClick={copy}
            style={{
              marginTop: 24, padding: '10px 20px', borderRadius: 'var(--r-sm)',
              background: 'transparent', border: '1px solid var(--border-subtle)',
              color: 'var(--text-tertiary)', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              transition: 'all 0.2s ease',
              display: 'flex', alignItems: 'center', gap: 8, margin: '24px auto 0',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-border)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-tertiary)'; }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            {copied ? 'Copied!' : `Copy ${person.email}`}
          </motion.button>
        </div>
      </div>

      <style>{`@media (max-width: 600px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
=======
          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {[
              {
                label: 'Location',
                value: 'New Cairo, Egypt',
                sub: 'Open to remote & travel',
                icon: '📍',
              },
              {
                label: 'Phone',
                value: '+20 102 896 1808',
                sub: 'WhatsApp available',
                icon: '📱',
              },
              {
                label: 'Focus',
                value: 'ERP Consulting',
                sub: 'Oracle Fusion HCM',
                icon: '🎯',
              },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-[var(--surface-2)] border border-white/5 rounded-sm text-center">
                <div className="text-xl mb-2">{item.icon}</div>
                <div className="font-mono text-[10px] text-[var(--gold)] mb-1 uppercase tracking-widest">{item.label}</div>
                <div className="font-body text-sm font-medium text-[var(--text-primary)]">{item.value}</div>
                <div className="font-body text-xs text-[var(--text-muted)] mt-0.5">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    </section>
  )
}
