'use client'
<<<<<<< HEAD
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { caseStudies } from '@/lib/data'
import { fadeUp } from '@/lib/motion'
=======

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const cases = [
  {
    id: 1,
    tag: 'Oracle Fusion HCM Implementation',
    client: 'Redcon Construction',
    location: 'Cairo, Egypt',
    period: '2025 – Present',
    headline: 'Enterprise HR Transformation & Employee Experience Innovation',
    problem: 'Redcon Construction operated with fragmented HR processes across multiple projects and sites — manual workflows, siloed data, and no centralized visibility into workforce management. Employee onboarding was chaotic, benefits communication was ineffective, and HR had no meaningful reporting to inform business decisions.',
    solution: 'As ERP Functional Consultant, I led the full Oracle Fusion HCM implementation while designing innovative employee experience solutions. Beyond core HR configuration, I architected and implemented an Onboarding System (from business analysis through full implementation) and created a Benefits Portal — a modern, user-friendly feature inside Oracle Me that allows HR to manage benefits content without technical intervention. Designed organizational structures reflecting the company\'s complex project-based hierarchy and built automated approval workflows that replaced manual processes.',
    impact: [
      'Centralized HR operations on a single Oracle Cloud platform with real-time visibility',
      'Launched Onboarding System: reduced time-to-productivity by 40% with structured, consistent new-hire experience',
      'Delivered Benefits Portal: HR can now manage benefits independently, reducing administrative overhead by 60%',
      'Automated employee lifecycle processes from hire to exit, eliminating manual sign-off chains',
      'Achieved 90%+ user adoption within first month with comprehensive change management',
    ],
    tools: ['Oracle Fusion HCM', 'Oracle Visual Builder', 'Benefits Portal Design', 'Onboarding System Architecture', 'OUM Methodology', 'HDL Data Migration'],
    color: '#C9A84C',
  },
  {
    id: 2,
    tag: 'Business-Driven Platform Delivery',
    client: 'Al-Shaheen (Qatari Institution)',
    location: 'Qatar / Remote',
    period: '2024 – 2025',
    headline: 'Enterprise Mobile Platform Delivery for Qatari Government-Linked Institution',
    problem: 'Al-Shaheen required a custom enterprise mobile application to streamline internal operations, but leadership lacked a clear product vision, requirements were undefined, and communication between business stakeholders and the development team was breaking down.',
    solution: 'Founded Nexlify and partnered with Finova to deliver this solution. As Project Manager, Business Analyst, and UX Lead, I led the complete product lifecycle — from stakeholder discovery workshops in Doha to detailed Business Requirements Documents, interactive Figma prototypes, and rigorous agile delivery. Served as the critical bridge between business expectations and technical execution, ensuring alignment at every milestone.',
    impact: [
      'Delivered mobile platform on schedule through structured agile delivery with bi-weekly stakeholder sign-offs',
      'Eliminated requirement ambiguity with comprehensive BRDs and interactive prototypes before development',
      'Maintained alignment across remote teams spanning Cairo and Doha with zero major escalations',
      'Achieved 100% stakeholder approval on all major deliverables without scope creep',
    ],
    tools: ['Agile / Scrum Leadership', 'Business Requirements Design', 'Figma Prototyping', 'Stakeholder Management', 'Cross-functional Coordination', 'Product Strategy'],
    color: '#4a90d9',
  },
  {
    id: 3,
    tag: 'Hospital Management System',
    client: 'Helwan University Hospital',
    location: 'Cairo, Egypt',
    period: '2023 (Graduation Project)',
    headline: 'Hospital Management System: From Analysis to Operational Implementation',
    problem: 'Helwan University Hospital faced significant operational inefficiencies — patient registration was manual and fragmented, staff workflows were uncoordinated, and there was no central system to manage the complete patient lifecycle. This resulted in patient wait times, administrative errors, and operational blind spots for hospital leadership.',
    solution: 'Designed and implemented a comprehensive Hospital Management System addressing the entire patient journey. Conducted thorough business analysis of hospital operations, designed role-based systems for different user groups (admins, doctors, departments), and built a full platform supporting patient registration (mobile + web), staff workflows, and complete lifecycle management. Implemented role-based access control and a reporting system enabling data-driven operational decisions.',
    impact: [
      'Built end-to-end hospital management system handling patient registration, staff workflows, and data management',
      'Implemented role-based access ensuring appropriate visibility and controls for different staff levels',
      'Created reporting system enabling hospital leadership to track operations and identify improvement areas',
      'Demonstrated system analysis and process automation capabilities across complex, mission-critical operations',
    ],
    tools: ['System Analysis & Design', 'Process Automation', 'Role-Based Access Control', 'Reporting System Architecture', 'Full-Stack Development', 'Database Design'],
    color: '#7c9e7a',
  },
]
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
<<<<<<< HEAD
  const cs = caseStudies[active]

  return (
    <section id="work" className="section" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className="t-label" style={{ marginBottom: 16 }}>Case Studies</div>
            <h2 className="t-h1">
              Engagements that<br />
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>delivered results</span>
            </h2>
          </motion.div>
        </div>

        {/* Tab selector */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: `repeat(${caseStudies.length}, 1fr)`, gap: 8, marginBottom: 40 }}
          className="case-tabs">
          {caseStudies.map((c, i) => (
            <button key={c.id} onClick={() => setActive(i)}
              style={{
                textAlign: 'left', padding: '18px 22px',
                background: active === i ? 'var(--bg-overlay)' : 'var(--bg-raised)',
                border: `1px solid ${active === i ? c.color + '50' : 'var(--border-subtle)'}`,
                borderRadius: 'var(--r-md)', cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: active === i ? `0 0 24px ${c.color}12` : 'none',
              }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: active === i ? c.color : 'var(--text-tertiary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                {c.tag}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {c.client}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-tertiary)', marginTop: 4 }}>
                {c.period}
=======

  const c = cases[active]

  return (
    <section id="work" ref={ref} className="py-28 relative">
      <div className="absolute right-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Case Studies</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Engagements that
            <br />
            <span className="text-[var(--gold)] italic">delivered results</span>
          </h2>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-2 mb-10"
        >
          {cases.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActive(i)}
              className={`flex-1 text-left px-5 py-4 border transition-all duration-300 rounded-sm ${
                active === i
                  ? 'border-[var(--gold)]/60 bg-[var(--gold)]/8'
                  : 'border-white/8 hover:border-white/20 bg-transparent'
              }`}
            >
              <div className="font-mono text-[10px] mb-1" style={{ color: active === i ? cs.color : 'var(--text-muted)' }}>
                {cs.tag}
              </div>
              <div className={`font-body text-sm font-medium ${active === i ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                {cs.client}
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
              </div>
            </button>
          ))}
        </motion.div>

<<<<<<< HEAD
        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 24, alignItems: 'start' }}
            className="case-detail">

            {/* Main */}
            <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-lg)', padding: 'clamp(24px, 4vw, 40px)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                <span className="chip" style={{ borderColor: cs.color + '60', color: cs.color }}>{cs.tag}</span>
                <span className="chip chip-dim">{cs.location}</span>
                <span className="chip chip-dim">{cs.period}</span>
              </div>

              <h3 className="t-h2" style={{ marginBottom: 28 }}>{cs.title}</h3>

              <div style={{ display: 'grid', gap: 24 }}>
                <div>
                  <div className="t-label" style={{ marginBottom: 10, color: cs.color }}>The Challenge</div>
                  <p className="t-body" style={{ fontSize: '0.9rem' }}>{cs.problem}</p>
                </div>
                <div style={{ height: 1, background: 'var(--border-subtle)' }} />
                <div>
                  <div className="t-label" style={{ marginBottom: 10, color: cs.color }}>The Solution</div>
                  <p className="t-body" style={{ fontSize: '0.9rem' }}>{cs.solution}</p>
                </div>
              </div>

              <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cs.tools.map(t => <span key={t} className="chip chip-dim">{t}</span>)}
              </div>
            </div>

            {/* Impact sidebar */}
            <div style={{
              background: 'var(--bg-overlay)', border: `1px solid ${cs.color}30`,
              borderRadius: 'var(--r-lg)', padding: 28, height: '100%',
            }}>
              <div className="t-label" style={{ marginBottom: 20, color: cs.color }}>Business Impact</div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {cs.impact.map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.2 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: cs.color + '25', border: `1px solid ${cs.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: '0.6rem', color: cs.color, fontWeight: 700 }}>✓</span>
                    </div>
                    <span className="t-small" style={{ lineHeight: 1.6 }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
=======
        {/* Case study detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Main content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="section-label">{c.location}</span>
                  <span className="section-label text-[var(--text-muted)]">·</span>
                  <span className="section-label text-[var(--text-muted)]">{c.period}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                  {c.headline}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: c.color }}>
                    The Problem
                  </div>
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed text-sm">{c.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: c.color }}>
                    The Solution
                  </div>
                  <p className="font-body text-[var(--text-secondary)] leading-relaxed text-sm">{c.solution}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {c.tools.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[var(--surface-2)] border border-white/8 font-mono text-[10px] text-[var(--text-secondary)] rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact column */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--surface-2)] border border-white/5 p-6 rounded-sm h-full">
                <div className="font-mono text-xs uppercase tracking-widest mb-5" style={{ color: c.color }}>
                  Business Impact
                </div>
                <ul className="space-y-4">
                  {c.impact.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 + 0.2 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.color }} />
                      <span className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
<<<<<<< HEAD

      <style>{`
        @media (max-width: 900px) { .case-tabs { grid-template-columns: 1fr !important; } .case-detail { grid-template-columns: 1fr !important; } }
        @media (max-width: 767px) { .case-tabs { grid-template-columns: 1fr !important; } }
      `}</style>
=======
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    </section>
  )
}
