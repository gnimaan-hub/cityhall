import { motion } from 'framer-motion'
import './Services.css'

const SERVICES = [
  {
    n: '01',
    title: 'Mariages & Fiançailles',
    desc: 'Cérémonie, henné, walima : nous habillons la grande salle à vos couleurs, de l’estrade des mariés au tapis d’honneur.',
  },
  {
    n: '02',
    title: 'Cérémonies & Réceptions',
    desc: 'Baptêmes, retrouvailles familiales, fêtes traditionnelles : un cadre chaleureux pensé pour rassembler.',
  },
  {
    n: '03',
    title: 'Conférences & Séminaires',
    desc: 'Espace modulable, sonorisation intégrée et confort climatisé pour vos événements professionnels et institutionnels.',
  },
  {
    n: '04',
    title: 'Expositions & Salons',
    desc: 'Une surface généreuse et lumineuse, idéale pour présenter vos produits, marques ou collections.',
  },
  {
    n: '05',
    title: 'Anniversaires & Galas',
    desc: 'Décor scénique, jeux de lumière et mise en scène pour des soirées mémorables, petites ou grandes.',
  },
  {
    n: '06',
    title: 'Scénographie sur-mesure',
    desc: 'Arches florales, drapés, éclairages d’ambiance, sonorisation : notre équipe compose votre décor de A à Z.',
  },
]

const fade = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__head">
          <motion.span className="eyebrow" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            Nos prestations
          </motion.span>
          <motion.h2 className="section-title" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            Un seul lieu, <em>mille occasions</em><br />de célébrer
          </motion.h2>
          <motion.p className="section-lede" initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
            Conférence &middot; Mariage &middot; Séminaire &middot; Cérémonie &middot; Exposition
            &mdash; Le City Hall accueille tous vos événements dans une salle modulable
            de 500 m², équipée et entièrement décorée.
          </motion.p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.n}
              className="service-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fade}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <span className="service-card__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-card__line" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
