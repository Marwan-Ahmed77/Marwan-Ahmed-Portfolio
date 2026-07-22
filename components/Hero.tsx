'use client'
<<<<<<< HEAD
import { motion } from 'framer-motion'
import { person, stats } from '@/lib/data'
import { fadeUp, scaleIn, EASE } from '@/lib/motion'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Grid background */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Glow blobs */}
      <div className="glow-blob" style={{ width: 480, height: 480, background: 'var(--gold-glow)', top: '20%', left: '10%', animationDelay: '0s' }} />
      <div className="glow-blob" style={{ width: 360, height: 360, background: 'rgba(74,144,217,0.04)', bottom: '20%', right: '10%', animationDelay: '4s' }} />

      {/* Corner accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 1, height: '30vh', background: 'linear-gradient(to bottom, var(--gold-border), transparent)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, height: 1, width: '20vw', background: 'linear-gradient(to right, var(--gold-border), transparent)' }} />

      <div className="container" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'center' }}>

          {/* ── Left content ── */}
          <div>
            {/* Label */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 'var(--r-full)',
                border: '1px solid var(--gold-border)', background: 'var(--gold-subtle)',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', display: 'inline-block' }} className="dot-blink" />
                <span className="t-label" style={{ fontSize: '0.62rem' }}>
                  {person.available ? 'Available for Projects' : 'Currently Engaged'}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show" className="t-display"
              style={{ marginBottom: 20 }}>
              ERP Consultant<br />
              <span style={{ fontStyle: 'italic' }} className="text-gold-gradient">&amp; Transformation</span><br />
              Leader
            </motion.h1>

            {/* Sub-roles */}
            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {['Oracle Fusion HCM', 'ERP Project Manager', 'Business Analysis', 'OUM Methodology'].map(r => (
                <span key={r} className="chip">{r}</span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="t-body" style={{ maxWidth: 520, marginBottom: 40 }}>
              {person.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show"
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 56 }}>
              <a href="#work" className="btn btn-gold">
                View Case Studies
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="btn btn-ghost">Let&apos;s Work Together</a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '13px 16px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
=======

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
      />

      {/* Top left accent */}
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
      <div className="absolute top-0 left-0 w-40 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mb-8"
            >
              <span className="section-label">ERP Functional Consultant & Project Manager</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent max-w-24" />
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6"
            >
              Driving Business
              <br />
              <span className="text-[var(--gold)] italic">Transformation</span>
              <br />
              Through Systems
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mb-10 font-body"
            >
              I partner with organizations to design and implement ERP solutions that drive real business impact. From business analysis and project leadership to technical delivery — I see the full picture and deliver results.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#work"
                className="group px-8 py-4 bg-[var(--gold)] text-[var(--ink)] font-body font-semibold text-sm tracking-widest uppercase hover:bg-[var(--gold-light)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/15 text-[var(--text-primary)] font-body font-medium text-sm tracking-wider hover:border-[var(--gold)]/40 hover:bg-white/3 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Work Together
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
              </a>
            </motion.div>

            {/* Stats */}
<<<<<<< HEAD
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show"
              style={{ display: 'flex', gap: 40, paddingTop: 32, borderTop: '1px solid var(--border-subtle)' }}>
              {stats.map(s => (
                <div key={s.label} style={{ cursor: 'default' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: 6, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
                    {s.label}
                  </div>
=======
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex gap-8 mt-14 pt-8 border-t border-white/5"
            >
              {[
                { value: '3+', label: 'Years ERP\nConsulting' },
                { value: '5+', label: 'Oracle HCM\nModules' },
                { value: '6+', label: 'Business\nTransformations' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-semibold text-[var(--gold)]">{stat.value}</div>
                  <div className="font-body text-xs text-[var(--text-muted)] mt-1 whitespace-pre-line leading-relaxed">{stat.label}</div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
                </div>
              ))}
            </motion.div>
          </div>

<<<<<<< HEAD
          {/* ── Right: Profile image ── */}
          <motion.div
            custom={0} variants={scaleIn} initial="hidden" animate="show"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="hero-photo-col"
          >
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: -28,
                borderRadius: '50%',
                border: '1px dashed var(--gold-border)',
                pointerEvents: 'none',
              }}
            />
            <div style={{
              position: 'absolute', inset: -12,
              borderRadius: '50%',
              border: '1px solid var(--gold-border)',
              pointerEvents: 'none',
            }} />

            {/* Photo */}
            <div style={{
              width: 'clamp(240px, 22vw, 310px)', height: 'clamp(240px, 22vw, 310px)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--gold-border)',
              boxShadow: 'var(--shadow-gold), var(--shadow-lg)',
              flexShrink: 0,
            }}>
              <img src="/profile.png" alt="Marwan Ahmed — ERP Consultant"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', transition: 'filter 0.6s ease' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(30%)')}
              />
            </div>

            {/* Floating badge: Status */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
              style={{
                position: 'absolute', bottom: -8, right: -24,
                background: 'var(--bg-float)', border: '1px solid var(--gold-border)',
                borderRadius: 'var(--r-sm)', padding: '10px 16px',
                boxShadow: 'var(--shadow-md)',
              }}>
              <div className="t-label" style={{ marginBottom: 2, fontSize: '0.58rem' }}>Status</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                Open to Projects
              </div>
            </motion.div>

            {/* Floating badge: Location */}
            <motion.div
              initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: EASE }}
              style={{
                position: 'absolute', top: 12, left: -28,
                background: 'var(--bg-float)', border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--r-sm)', padding: '8px 14px',
                display: 'flex', alignItems: 'center', gap: 8,
                boxShadow: 'var(--shadow-md)',
              }}>
              <span style={{ fontSize: '1rem' }}>🇪🇬</span>
              <div>
                <div className="t-label" style={{ fontSize: '0.55rem', marginBottom: 1 }}>Based in</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-primary)' }}>Cairo, Egypt</div>
              </div>
            </motion.div>
=======
          {/* Right — profile image + decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-6 rounded-full border border-[var(--gold)]/10" />
              <div className="absolute -inset-12 rounded-full border border-[var(--gold)]/5" />
              <div className="absolute -inset-20 rounded-full border border-white/3" />

              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-[var(--gold)]/30">
                <img
                  src="/profile.png"
                  alt="Marwan Ahmed"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-[var(--surface-2)] border border-[var(--gold)]/30 px-4 py-3 rounded-sm"
              >
                <div className="font-mono text-xs text-[var(--gold)] mb-0.5">Available for</div>
                <div className="font-body text-sm font-semibold text-[var(--text-primary)]">ERP Projects</div>
              </motion.div>

              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -top-2 -left-8 bg-[var(--surface-2)] border border-white/10 px-3 py-2 rounded-sm flex items-center gap-2"
              >
                <span className="text-sm">🇪🇬</span>
                <span className="font-body text-xs text-[var(--text-secondary)]">Cairo, Egypt</span>
              </motion.div>
            </div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
<<<<<<< HEAD
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div className="t-label" style={{ fontSize: '0.58rem' }}>Scroll</div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold-border), transparent)' }} />
      </motion.div>

      <style>{`
        @media (max-width: 767px) {
          .hero-photo-col { display: none !important; }
        }
      `}</style>
=======
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[0.6rem]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--gold)]/50 to-transparent" />
      </motion.div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    </section>
  )
}
