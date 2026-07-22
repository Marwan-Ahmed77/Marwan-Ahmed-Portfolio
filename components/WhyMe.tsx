'use client'
<<<<<<< HEAD
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { differentiators } from '@/lib/data'
import { fadeUp } from '@/lib/motion'

const metrics = [
  { value: '6+', label: 'Oracle HCM Modules', sub: 'Configured in production' },
  { value: '5+', label: 'Enterprise Engagements', sub: 'End-to-end led' },
  { value: '2', label: 'Methodologies', sub: 'OUM & Agile' },
  { value: '3', label: 'MENA Markets', sub: 'Egypt · Qatar · Saudi' },
=======

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const differentiators = [
  {
    number: '1',
    title: 'I speak both languages fluently.',
    body: 'Most ERP consultants are either business analysts who can\'t read code, or developers who don\'t understand business process. I\'m both — and that eliminates entire categories of project risk.',
  },
  {
    number: '2',
    title: 'I\'ve led from day one.',
    body: 'Not as a support analyst following senior consultants\' lead — but as the primary implementor managing requirements workshops, stakeholder alignments, configuration decisions, and go-live accountability.',
  },
  {
    number: '3',
    title: 'I deliver, not just advise.',
    body: 'My background is hands-on. I write the HDL files, configure the approval workflows, build the Visual Builder extensions. When something needs to get done, I don\'t wait — I do it.',
  },
  {
    number: '4',
    title: 'I\'m built for the MENA market.',
    body: 'I understand the cultural dynamics, business practices, and regulatory considerations specific to Egypt, Qatar, and the broader Gulf region — reducing friction in stakeholder engagement from day one.',
  },
]

const languages = [
  { lang: 'Arabic', level: 'Native', width: '100%' },
  { lang: 'English', level: 'Professional', width: '88%' },
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
]

export default function WhyMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
<<<<<<< HEAD
    <section ref={ref} className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, background: 'var(--gold-glow)', filter: 'blur(100px)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'center' }}>
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className="t-label" style={{ marginBottom: 16 }}>Differentiation</div>
            <h2 className="t-h1">
              Why clients choose<br />
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>to work with me</span>
            </h2>
          </motion.div>
        </div>

        {/* Differentiator cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginBottom: 48 }}>
          {differentiators.map((d, i) => (
            <motion.div key={d.n} custom={i} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
              className="card" style={{ padding: 'clamp(22px, 3vw, 32px)', position: 'relative', overflow: 'hidden' }}>
              {/* Watermark */}
              <div style={{
                position: 'absolute', top: 8, right: 16,
                fontFamily: 'var(--font-display)', fontSize: '4.5rem', fontWeight: 700,
                color: 'rgba(196,147,74,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
              }}>{d.n}</div>

              <div style={{ position: 'relative' }}>
                <h3 className="t-h3" style={{ marginBottom: 12, fontSize: '1.15rem' }}>{d.title}</h3>
                <p className="t-small" style={{ lineHeight: 1.75 }}>{d.body}</p>
=======
    <section id="why" ref={ref} className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />
      {/* Corner accents */}
      <div className="absolute bottom-0 right-0 w-48 h-px bg-gradient-to-l from-[var(--gold)]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 h-48 w-px bg-gradient-to-t from-[var(--gold)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label block mb-4">Differentiation</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Why clients choose
            <br />
            <span className="text-[var(--gold)] italic">to work with me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group p-8 bg-[var(--surface-2)] border border-white/5 hover:border-[var(--gold)]/25 transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 font-display text-6xl font-bold text-white/3 select-none">
                {d.number}
              </div>

              <div className="relative">
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4 leading-tight pr-8">
                  {d.title}
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  {d.body}
                </p>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
              </div>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Metrics bar */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
          style={{
            display: 'grid', gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
            border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-md)', overflow: 'hidden',
          }}
          className="metrics-grid">
          {metrics.map((m, i) => (
            <div key={m.label} style={{
              padding: 'clamp(20px, 3vw, 32px)',
              textAlign: 'center',
              borderRight: i < metrics.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              background: 'var(--bg-raised)',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-overlay)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-raised)')}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, marginBottom: 6 }}>
                {m.value}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>{m.label}</div>
              <div className="t-xs">{m.sub}</div>
=======
        {/* Bottom metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-sm overflow-hidden"
        >
          {[
            { metric: 'Oracle HCM Modules', value: '5+', sub: 'Configured in production' },
            { metric: 'Enterprise Projects', value: '4+', sub: 'Led end-to-end' },
            { metric: 'Methodologies', value: '2', sub: 'OUM & Agile' },
            { metric: 'MENA Markets', value: '3', sub: 'Egypt · Qatar · Saudi' },
          ].map((m) => (
            <div key={m.metric} className="bg-[var(--ink)] p-6 text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-[var(--gold)] mb-1">
                {m.value}
              </div>
              <div className="font-body text-xs font-medium text-[var(--text-primary)] mb-0.5">{m.metric}</div>
              <div className="font-mono text-[10px] text-[var(--text-muted)]">{m.sub}</div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
            </div>
          ))}
        </motion.div>
      </div>
<<<<<<< HEAD

      <style>{`
        @media (max-width: 767px) { .metrics-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .metrics-grid { grid-template-columns: 1fr !important; } }
      `}</style>
=======
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    </section>
  )
}
