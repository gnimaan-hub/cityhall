import { motion } from 'framer-motion'
import salleImg from '../assets/images/salle-reception.webp'
import './About.css'

const fade = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: '350+', label: 'Invités accueillis' },
  { value: '500 m²', label: 'D’espace modulable' },
  { value: '+10', label: 'Ans au service des familles djiboutiennes' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__grid">
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={salleImg} alt="Intérieur de la salle de réception Le City Hall, décor blanc et or" loading="lazy" decoding="async" />
          <div className="about__visual-frame" />
          <span className="about__visual-tag">La grande salle &mdash; configuration mariage</span>
        </motion.div>

        <motion.div
          className="about__copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span className="eyebrow" variants={fade}>L’adresse des grands moments</motion.span>
          <motion.h2 className="section-title" variants={fade}>
            Bienvenue dans un <em>nouvel art</em><br />de la réception
          </motion.h2>
          <motion.p className="section-lede" variants={fade}>
            Au cœur de Djibouti, <strong>Le City Hall</strong> est pensé comme un écrin :
            une salle généreuse, baignée de lumière dorée, où chaque détail &mdash; du tapis
            rouge à l’estrade des mariés &mdash; raconte une histoire d’élégance. Ici, les
            familles célèbrent fiançailles, mariages, anniversaires et grandes
            réceptions dans un cadre raffiné, modulable selon vos envies.
          </motion.p>
          <motion.p className="section-lede" variants={fade}>
            Notre équipe imagine avec vous une scénographie sur-mesure &mdash; arche
            florale, jeux de lumière, mise en place des tables &mdash; pour que votre
            réception ressemble enfin à ce que vous avez toujours imaginé.
          </motion.p>

          <motion.div className="about__stats" variants={fade}>
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
