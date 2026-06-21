import { motion } from 'framer-motion'
import './Experience.css'

const STEPS = [
  {
    n: '01',
    title: 'La rencontre',
    text: 'Échange avec notre équipe pour comprendre votre événement, le nombre d’invités et l’ambiance recherchée.',
  },
  {
    n: '02',
    title: 'La visite & le showroom',
    text: 'Découverte de la salle sur place &mdash; ou exploration de notre showroom virtuel 3D &mdash; pour visualiser chaque espace.',
  },
  {
    n: '03',
    title: 'La scénographie',
    text: 'Choix des couleurs, drapés, arches florales, éclairages et disposition des tables : votre décor prend forme.',
  },
  {
    n: '04',
    title: 'Le grand jour',
    text: 'Notre équipe orchestre l’accueil, la sonorisation et la mise en scène pour que vous ne pensiez qu’à célébrer.',
  },
]

const fade = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience__head">
          <motion.span className="eyebrow" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            Le déroulé
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            De l’idée <em>à la célébration</em>
          </motion.h2>
        </div>

        <div className="experience__timeline">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="experience__step"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fade}
              transition={{ delay: i * 0.12 }}
            >
              <div className="experience__marker">
                <span>{s.n}</span>
              </div>
              <div className="experience__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
