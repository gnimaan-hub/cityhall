import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'L’Adresse' },
  { href: '#services', label: 'Prestations' },
  { href: '#showroom', label: 'Showroom 3D' },
  { href: '#gallery', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand">
          <span className="nav__brand-mark">CH</span>
          <span className="nav__brand-text">
            LE CITY HALL
            <small>Salle de Mariage &amp; Réception &mdash; Djibouti</small>
          </span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn nav__cta">Réserver une visite</a>

        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Ouvrir le menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav__backdrop"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            />
            <motion.div
              className="nav__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 36 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.55 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 90 || info.velocity.x > 500) close()
              }}
            >
              <span className="nav__mobile-handle" aria-hidden="true" />
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn btn-solid"
                onClick={close}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + LINKS.length * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Réserver une visite
              </motion.a>
              <p className="nav__mobile-hint">Glissez vers la droite pour fermer</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
