import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Gallery.css'

import stage from '../assets/images/stage-arch-1.jpg'
import tables1 from '../assets/images/hall-tables-wide-1.jpg'
import tables2 from '../assets/images/hall-tables-wide-2.jpg'
import doors from '../assets/images/entrance-doors.jpg'
import facade from '../assets/images/exterior-facade.jpg'
import centerpiece from '../assets/images/table-centerpiece.jpg'
import drapery from '../assets/images/drapery-detail.jpg'
import crystals from '../assets/images/crystal-curtain.jpg'
import salle from '../assets/images/salle-reception.jpg'

const PHOTOS = [
  { src: stage, title: 'L’estrade & l’arche dorée', tag: 'Scénographie', span: 'tall' },
  { src: salle, title: 'La grande salle dressée', tag: 'Réception', span: 'wide' },
  { src: tables2, title: 'Allée d’honneur & tables d’hôtes', tag: 'Réception', span: 'normal' },
  { src: doors, title: 'L’entrée principale', tag: 'Architecture', span: 'normal' },
  { src: centerpiece, title: 'Centres de table ambrés', tag: 'Détails', span: 'normal' },
  { src: drapery, title: 'Le canapé des mariés', tag: 'Décoration', span: 'tall' },
  { src: crystals, title: 'Rideaux de cristal', tag: 'Détails', span: 'normal' },
  { src: tables1, title: 'Vue d’ensemble depuis la scène', tag: 'Réception', span: 'wide' },
  { src: facade, title: 'La façade du City Hall', tag: 'Architecture', span: 'normal' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="container gallery__head">
        <span className="eyebrow">Galerie</span>
        <h2 className="section-title">
          Plongez dans <em>l’atmosphère</em> du lieu
        </h2>
        <p className="section-lede">
          Ces images sont issues de la salle telle qu’elle est, dressée pour
          accueillir vos invités &mdash; de la façade en pierre claire jusqu’aux
          moindres détails de la décoration florale et lumineuse.
        </p>
      </div>

      <div className="gallery__grid container">
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.src}
            className={`gallery__item gallery__item--${p.span}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setLightbox(p)}
          >
            <img src={p.src} alt={p.title} loading="lazy" />
            <figcaption>
              <span className="gallery__tag">{p.tag}</span>
              <span className="gallery__title">{p.title}</span>
            </figcaption>
            <span className="gallery__zoom">+</span>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.figure
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} />
              <figcaption>
                <span className="gallery__tag">{lightbox.tag}</span>
                <span className="gallery__title">{lightbox.title}</span>
              </figcaption>
            </motion.figure>
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Fermer">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
