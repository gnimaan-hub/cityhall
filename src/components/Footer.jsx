import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand">
          <span className="footer__brand-mark">CH</span>
          <span>
            LE CITY HALL
            <small>Conférence &middot; Mariage &middot; Séminaire &middot; Cérémonie &middot; Exposition</small>
          </span>
        </a>

        <nav className="footer__links">
          <a href="#about">L’Adresse</a>
          <a href="#services">Prestations</a>
          <a href="#showroom">Showroom 3D</a>
          <a href="#gallery">Galerie</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer__meta">
          © {new Date().getFullYear()} Le City Hall — Djibouti.<br />
          Maquette &amp; expérience immersive réalisées par <span>WebSense</span>.
        </p>
      </div>
    </footer>
  )
}
