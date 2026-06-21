import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Panorama360 from '../components/Panorama360.jsx'
import panoCeremonie from '../assets/panoramas/scene-ceremonie.jpg'
import panoReception from '../assets/panoramas/scene-reception.jpg'
import './Showroom.css'

const SCENES = [
  {
    id: 'ceremonie',
    label: 'Cérémonie & estrade',
    image: panoCeremonie,
    startLon: 200,
    hotspots: [
      {
        id: 'arche',
        top: '46%',
        left: '50%',
        title: 'L’estrade des mariés',
        text: 'Une arche dorée, des drapés ivoire et un éclairage scénographié composent un point focal mémorable pour l’échange des vœux et la séance photo.',
      },
      {
        id: 'volumes',
        top: '32%',
        left: '74%',
        title: 'Volumes & hauteur sous plafond',
        text: 'De larges volumes et une hauteur généreuse offrent une acoustique soignée et une sensation de grandeur, idéales pour une cérémonie solennelle.',
      },
    ],
  },
  {
    id: 'reception',
    label: 'Grande salle de réception',
    image: panoReception,
    startLon: 160,
    hotspots: [
      {
        id: 'tables',
        top: '58%',
        left: '38%',
        title: 'Tables & art de la table',
        text: 'Tables rondes habillées de blanc et d’or, vaisselle raffinée et compositions florales sur-mesure : chaque détail est pensé pour sublimer votre réception.',
      },
      {
        id: 'lumieres',
        top: '28%',
        left: '60%',
        title: 'Lumières & atmosphère',
        text: 'Lustres, dorures et jeux de lumière modulables recomposent l’ambiance selon le ton de votre événement — élégant, chaleureux ou festif.',
      },
    ],
  },
]

export default function Showroom() {
  const [sceneId, setSceneId] = useState(SCENES[0].id)
  const [activeHotspot, setActiveHotspot] = useState(null)
  const scene = SCENES.find((s) => s.id === sceneId)

  const selectScene = (id) => {
    setSceneId(id)
    setActiveHotspot(null)
  }

  return (
    <section id="showroom" className="showroom">
      <div className="showroom__head container">
        <span className="eyebrow">Showroom virtuel 360°</span>
        <h2 className="section-title">
          Plongez dans <em>l’ambiance</em>, avant l’heure
        </h2>
        <p className="section-lede">
          Glissez pour regarder autour de vous, naviguez entre les scènes et cliquez
          sur les points dorés pour découvrir nos prestations &mdash; une mise en
          situation immersive pensée pour vous projeter avant la visite.
        </p>
      </div>

      <div className="showroom__stage container">
        <div className="showroom__viewer">
          <div className="showroom__scene-tabs">
            {SCENES.map((s) => (
              <button
                key={s.id}
                className={`showroom__scene-tab ${sceneId === s.id ? 'is-active' : ''}`}
                onClick={() => selectScene(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="showroom__canvas-wrap">
            <Panorama360 image={scene.image} startLon={scene.startLon} />

            {scene.hotspots.map((h) => (
              <button
                key={h.id}
                className={`showroom__hotspot ${activeHotspot === h.id ? 'is-active' : ''}`}
                style={{ top: h.top, left: h.left }}
                onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                aria-label={h.title}
              >
                <span className="showroom__hotspot-ping" />
                <span className="showroom__hotspot-dot" />
              </button>
            ))}

            <div className="showroom__hint">
              <span className="showroom__hint-icon">⟳</span>
              Glissez pour explorer à 360°
            </div>

            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  key={activeHotspot}
                  className="showroom__popover"
                  initial={{ opacity: 0, y: 14, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {(() => {
                    const h = scene.hotspots.find((x) => x.id === activeHotspot)
                    return (
                      <>
                        <button className="showroom__popover-close" onClick={() => setActiveHotspot(null)} aria-label="Fermer">×</button>
                        <h4>{h.title}</h4>
                        <p>{h.text}</p>
                      </>
                    )
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="showroom__caption">
            Aperçu d’ambiance &mdash; suggestion stylistique pour la mise en scène de vos
            événements (ne représente pas une photographie de la salle City Hall).
          </p>
        </div>

        <div className="showroom__panel">
          <span className="eyebrow">Navigation</span>
          <h3>Une expérience à votre rythme</h3>
          <p>
            Chaque scène vous propose un point de vue à 360° et des points d’intérêt
            cliquables. Explorez l’estrade de cérémonie, puis la grande salle de
            réception, pour imaginer votre journée dans ses moindres détails.
          </p>
          <div className="gold-divider" />
          <ul className="showroom__legend">
            <li><span>01</span> Glissez pour orienter la vue</li>
            <li><span>02</span> Changez de scène à tout moment</li>
            <li><span>03</span> Cliquez sur les points dorés</li>
          </ul>
          <a href="#contact" className="btn btn-solid showroom__cta">Planifier une visite guidée</a>
        </div>
      </div>
    </section>
  )
}
