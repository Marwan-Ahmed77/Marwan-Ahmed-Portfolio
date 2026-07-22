'use client'
<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { person } from '@/lib/data'

const LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Expertise',  href: '#expertise' },
  { label: 'Work',       href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
=======

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
<<<<<<< HEAD
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.4s ease, border-color 0.4s ease, padding 0.4s ease',
          paddingBlock: scrolled ? '12px' : '22px',
          background: scrolled ? 'rgba(7,8,16,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 'var(--r-sm)',
              border: '1px solid var(--gold-border)',
              background: 'var(--gold-subtle)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s, background 0.2s',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--gold)' }}>M</span>
            </div>
            <div style={{ display: 'none' }} className="sm-show">
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                Marwan Ahmed
              </div>
              <div className="t-label" style={{ fontSize: '0.6rem', lineHeight: 1 }}>ERP Consultant</div>
            </div>
          </a>

          {/* Desktop links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} style={{
                padding: '8px 16px', borderRadius: 'var(--r-sm)',
                fontSize: '0.875rem', color: 'var(--text-secondary)',
                textDecoration: 'none', transition: 'color 0.2s, background 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--text-primary)'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--text-secondary)'; (e.target as HTMLElement).style.background = 'transparent'; }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="desktop-nav">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
              {person.email}
            </span>
            <a href="#contact" className="btn btn-gold" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
            className="mobile-hamburger"
          >
            <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', height: 1.5, background: 'var(--text-primary)', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
              <span style={{ display: 'block', height: 1.5, background: 'var(--text-primary)', borderRadius: 2, transition: 'opacity 0.3s', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', height: 1.5, background: 'var(--text-primary)', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(7,8,16,0.97)', backdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: '0 clamp(20px, 5vw, 48px)',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href} href={l.href}
                  initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                    fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none',
                    padding: '12px 0', borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  {l.label}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.2em' }}>0{i + 1}</span>
                </motion.a>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold" style={{ justifyContent: 'center' }}>
                Let&apos;s Talk
              </a>
              <a href={`mailto:${person.email}`}
                style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                {person.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .desktop-nav { display: flex !important; } .mobile-hamburger { display: none !important; } .sm-show { display: block !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } .mobile-hamburger { display: flex !important; } }
      `}</style>
    </>
=======
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded border border-[var(--gold)]/40 flex items-center justify-center group-hover:border-[var(--gold)] transition-colors">
            <span className="font-display text-sm font-semibold text-[var(--gold)]">M</span>
          </div>
          <span className="font-display text-lg font-medium tracking-wide hidden sm:block">
            Marwan Ahmed
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 text-sm border border-[var(--gold)]/50 text-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all duration-300 rounded-sm font-body font-medium tracking-wide"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[var(--text-primary)] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[var(--text-primary)] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[var(--text-primary)] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-white/5"
          >
            <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 px-5 py-2.5 text-sm border border-[var(--gold)]/50 text-[var(--gold)] text-center rounded-sm font-body font-medium">
                Let's Talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
  )
}
