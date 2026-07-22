'use client'
<<<<<<< HEAD
import { person, SITE_URL } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '32px 0',
      background: 'var(--bg-base)',
    }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo + tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--r-sm)',
            border: '1px solid var(--gold-border)', background: 'var(--gold-subtle)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--gold)' }}>M</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>Marwan Ahmed</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-tertiary)', letterSpacing: '0.12em' }}>Senior ERP Consultant</div>
          </div>
        </div>

        {/* Links */}
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
          {[
            { label: 'Portfolio', href: SITE_URL },
            { label: 'LinkedIn', href: person.linkedin },
            { label: 'Email', href: `mailto:${person.email}` },
          ].map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                padding: '6px 12px', borderRadius: 'var(--r-xs)',
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--text-tertiary)', textDecoration: 'none',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--gold)'; (e.target as HTMLElement).style.background = 'var(--gold-subtle)'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--text-tertiary)'; (e.target as HTMLElement).style.background = 'transparent'; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>
          © {year} Marwan Ahmed
        </div>
      </div>

      {/* Bottom: correct URL displayed */}
      <div className="container" style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'center' }}>
        <a href={SITE_URL} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-tertiary)', textDecoration: 'none' }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--gold)')}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-tertiary)')}>
          {SITE_URL}
        </a>
      </div>
=======

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded border border-[var(--gold)]/40 flex items-center justify-center">
            <span className="font-display text-xs font-semibold text-[var(--gold)]">M</span>
          </div>
          <span className="font-body text-sm text-[var(--text-muted)]">Marwan Ahmed · ERP Consultant</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:marwan.a.gaballah@gmail.com" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
            Email
          </a>
          <a href="https://www.linkedin.com/in/marwan-ahmed-035472222/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">
            LinkedIn
          </a>
          <span className="font-mono text-xs text-[var(--text-muted)]">© {year}</span>
        </div>
      </div>
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
    </footer>
  )
}
