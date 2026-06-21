import { motion } from 'framer-motion'
import './Contact.css'

const fade = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const INFOS = [
  { label: 'Téléphone', value: '+253 21 36 00 36', href: 'tel:+25321360036' },
  { label: 'Mobile / WhatsApp', value: '+253 77 17 08 08', href: 'tel:+25377170808' },
  { label: 'E-mail', value: 'cityhall.djibouti@gmail.com', href: 'mailto:cityhall.djibouti@gmail.com' },
  { label: 'Adresse', value: 'Djibouti — sur rendez-vous', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <motion.div
          className="contact__copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span className="eyebrow" variants={fade}>Réservation &amp; devis</motion.span>
          <motion.h2 className="section-title" variants={fade}>
            Donnons vie à <em>votre événement</em>
          </motion.h2>
          <motion.p className="section-lede" variants={fade}>
            Conférence, mariage, séminaire, cérémonie ou exposition &mdash; parlons de
            votre date, du nombre d’invités et de l’ambiance que vous imaginez.
            Notre équipe vous propose une visite de la salle et un devis sur-mesure.
          </motion.p>

          <motion.ul className="contact__list" variants={fade}>
            {INFOS.map((info) => (
              <li key={info.label}>
                <span className="contact__label">{info.label}</span>
                <a href={info.href} className="contact__value">{info.value}</a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.form
          className="contact__form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contact__row">
            <label>
              <span>Nom complet</span>
              <input type="text" name="name" placeholder="Votre nom" required />
            </label>
            <label>
              <span>Téléphone</span>
              <input type="tel" name="phone" placeholder="+253 ..." required />
            </label>
          </div>
          <label>
            <span>Type d’événement</span>
            <select name="event" defaultValue="mariage">
              <option value="mariage">Mariage / Fiançailles</option>
              <option value="ceremonie">Cérémonie / Baptême</option>
              <option value="conference">Conférence / Séminaire</option>
              <option value="exposition">Exposition / Salon</option>
              <option value="anniversaire">Anniversaire / Gala</option>
            </select>
          </label>
          <label>
            <span>Votre message</span>
            <textarea name="message" rows="4" placeholder="Date envisagée, nombre d’invités, ambiance souhaitée…" />
          </label>
          <button type="submit" className="btn btn-solid contact__submit">Envoyer la demande</button>
          <p className="contact__note">
            Maquette de démonstration &mdash; ce formulaire n’envoie pas encore de message réel.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
