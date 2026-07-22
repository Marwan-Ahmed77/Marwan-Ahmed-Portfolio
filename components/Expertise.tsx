'use client'
<<<<<<< HEAD
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { expertise } from '@/lib/data'
import { fadeUp, fadeIn } from '@/lib/motion'
=======

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const areas = [
  {
    number: '01',
    title: 'Business Analysis & Strategy',
    subtitle: 'Understanding Your Business First',
    skills: ['Requirements Gathering', 'Business Case Development', 'Stakeholder Workshops', 'Process Mapping (AS-IS/TO-BE)', 'Gap Analysis', 'Impact Assessment'],
    desc: 'Every successful project starts with deep business understanding. I conduct thorough analysis of your operations, identify pain points, and design solutions aligned with your strategic objectives.',
  },
  {
    number: '02',
    title: 'ERP Implementation',
    subtitle: 'End-to-End Program Delivery',
    skills: ['OUM Methodology', 'Solution Design', 'System Configuration', 'UAT Management', 'Go-Live Support', 'Change Management'],
    desc: 'Full lifecycle ERP delivery from discovery to post-go-live support. I manage every phase with precision, maintaining stakeholder alignment and controlling risk throughout implementation.',
  },
  {
    number: '03',
    title: 'Oracle Fusion HCM',
    subtitle: 'Deep Module Expertise',
    skills: ['Core HR & Workforce', 'Recruiting & Onboarding', 'Absence Management', 'Performance Management', 'Oracle Visual Builder', 'Redwood UX Design'],
    desc: 'Hands-on expertise across the full HCM suite. I design systems focused on user adoption and business outcomes — configuring security, automating workflows, and building custom experiences.',
  },
  {
    number: '04',
    title: 'Project & Program Management',
    subtitle: 'Leadership & Governance',
    skills: ['Agile & Hybrid Delivery', 'Resource Planning', 'Risk Management', 'Budget Governance', 'Executive Reporting', 'Team Leadership'],
    desc: 'Structured program management that keeps complex implementations on track. I establish clear governance, maintain executive visibility, and lead teams through successful delivery.',
  },
  {
    number: '05',
    title: 'Process Design & Transformation',
    subtitle: 'Optimization Through Systems',
    skills: ['Workflow Design', 'Process Automation', 'Training Program Design', 'KPI Definition & Tracking', 'Change Impact Assessment', 'Continuous Improvement'],
    desc: 'I don\'t just implement systems — I redesign how organizations work. By aligning processes with platform capabilities, I drive measurable business transformation.',
  },
  {
    number: '06',
    title: 'Technical Problem-Solving',
    subtitle: 'Supporting Skill for Consultants',
    skills: ['Oracle Visual Builder', 'System Integration Design', 'Data Migration Strategy', 'Oracle SQL & Reporting', 'Full-Stack Development', 'Technical Architecture'],
    desc: 'My development background enables me to evaluate technical approaches, collaborate effectively with engineering teams, and deliver custom solutions other consultants must outsource.',
  },
]
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555

export default function Expertise() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
<<<<<<< HEAD
    <section id="expertise" className="section" ref={ref}
      style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', right: '-100px', width: 400, height: 400, borderRadius: '50%', background: 'var(--gold-glow)', filter: 'blur(80px)', pointerEvents: 'none', transform: 'translateY(-50%)' }} />

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <div className="t-label" style={{ marginBottom: 16 }}>Core Expertise</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 48px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <h2 className="t-h1">What I bring<br /><span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>to every project</span></h2>
              <p className="t-body" style={{ maxWidth: 320, fontSize: '0.9rem' }}>
                Six interconnected capabilities that cover every dimension of a successful Oracle HCM engagement.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 1, background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
          {expertise.map((area, i) => (
            <motion.div key={area.n}
              custom={i} variants={fadeIn} initial="hidden" animate={inView ? 'show' : 'hidden'}
              style={{
                background: 'var(--bg-base)', padding: 'clamp(24px, 3vw, 36px)',
                transition: 'background 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-overlay)'
                const line = (e.currentTarget as HTMLElement).querySelector('.expand-line') as HTMLElement | null
                if (line) line.style.width = '40px'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-base)'
                const line = (e.currentTarget as HTMLElement).querySelector('.expand-line') as HTMLElement | null
                if (line) line.style.width = '24px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <span className="t-mono" style={{ color: 'var(--gold)', opacity: 0.5, fontSize: '0.72rem' }}>{area.n}</span>
                <div style={{ width: 24, height: 1, background: 'var(--gold-border)', marginTop: 8, transition: 'width 0.4s ease' }} className="expand-line" />
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 500, marginBottom: 4 }}>{area.title}</h3>
              <div className="t-label" style={{ fontSize: '0.58rem', marginBottom: 12 }}>{area.sub}</div>
              <p className="t-small" style={{ marginBottom: 20, lineHeight: 1.7 }}>{area.desc}</p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {area.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)', opacity: 0.5, flexShrink: 0 }} />
                    <span className="t-xs" style={{ color: 'var(--text-secondary)' }}>{item}</span>
=======
    <section id="expertise" ref={ref} className="py-28 relative bg-[var(--surface)]/30">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="section-label block mb-4">Core Expertise</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold">
              What I bring
              <br />
              <span className="text-[var(--gold)] italic">to the table</span>
            </h2>
            <p className="font-body text-[var(--text-secondary)] max-w-xs text-sm leading-relaxed">
              Six interconnected capabilities that cover every dimension of a successful ERP engagement.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {areas.map((area, i) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-8 bg-[var(--ink)] hover:bg-[var(--surface-2)] transition-all duration-500 cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-[var(--gold)]/50 group-hover:text-[var(--gold)] transition-colors">
                  {area.number}
                </span>
                <div className="w-5 h-px bg-[var(--gold)]/20 group-hover:bg-[var(--gold)]/60 group-hover:w-10 transition-all duration-500 mt-2.5" />
              </div>

              <h3 className="font-display text-2xl font-semibold mb-1">{area.title}</h3>
              <p className="font-mono text-xs text-[var(--gold)] mb-4">{area.subtitle}</p>
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-6">{area.desc}</p>

              <ul className="space-y-2">
                {area.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 font-body text-xs text-[var(--text-secondary)]">
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)]/40 shrink-0" />
                    {s}
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
<<<<<<< HEAD

        {/* Skills strip */}
        <motion.div custom={7} variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
          style={{ marginTop: 48, padding: '28px 32px', background: 'var(--bg-overlay)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--r-md)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 48px', alignItems: 'center' }}>
            <div className="t-label" style={{ flexShrink: 0 }}>Oracle HCM Modules</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Core HR', 'Recruiting', 'Absence', 'Payroll', 'Performance', 'Talent', 'OTL', 'Visual Builder', 'Redwood', 'OTBI', 'BI Publisher', 'HDL'].map(m => (
                <span key={m} className="chip">{m}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

=======
      </div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    </section>
  )
}
