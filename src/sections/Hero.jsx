import { motion } from 'framer-motion'
import heroImg from '../assets/images/stage-arch-1.jpg'
import './Hero.css'

const fadeUp = {
  hidden: { opacity: 0, y: 38 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.14, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <motion.img
          src={heroImg}
          alt="L'estrade et l'arche dorée du City Hall, Djibouti"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__content container">
        <motion.span className="eyebrow" variants={fadeUp} initial="hidden" animate="show" custom={0}>
          Showroom virtuel &mdash; Djibouti
        </motion.span>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
          <motion.h1
            className="hero__title"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
          >
            LE CITY HALL
          </motion.h1>
        </motion.div>

        <motion.p className="hero__tagline" variants={fadeUp} initial="hidden" animate="show" custom={2}>
          Une <em>expérience immersive</em> avant même de franchir la porte.<br />
          Mariages, fiançailles, anniversaires &amp; réceptions d’exception.
        </motion.p>

        <motion.div className="hero__actions" variants={fadeUp} initial="hidden" animate="show" custom={3}>
          <a href="#showroom" className="btn btn-solid">Visiter en 360°</a>
          <a href="#contact" className="btn btn-ghost">Demander un devis</a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span className="hero__scroll-line" />
        <span>Faites défiler</span>
      </motion.div>
    </section>
  )
}
