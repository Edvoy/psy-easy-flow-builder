import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    particuliers: [
      { label: "Pack Premium", href: "/particuliers#pack-premium" },
      { label: "Réseaux partenaires", href: "/particuliers#reseaux-partenaires" },
      { label: "Plateformes partenaires", href: "/particuliers#plateformes-partenaires" },
      { label: "Praticiens partenaires", href: "/particuliers#praticiens-partenaires" },
    ],
    entreprises: [
      { label: "Évaluation d'équipe", href: "/entreprises#evaluation" },
      { label: "Rapport professionnel", href: "/entreprises#rapport" },
      { label: "Test gratuit", href: "/entreprises#test-gratuit" },
    ],
    pros: [
      { label: "Bases scientifiques", href: "/pros#bases-scientifiques" },
      { label: "Avantages", href: "/pros#avantages" },
      { label: "Réseau partenaires", href: "/pros#reseau-partenaires" },
    ],
    aides: [
      { label: "FAQ", href: "/faq" },
      { label: "Paramètres", href: "/parametres" },
      { label: "Nous contacter", href: "/contact" },
      { label: "Témoignages", href: "/temoignages" },
    ],
    apropos: [
      { label: "Philosophie", href: "/philosophie" },
      { label: "Équipe", href: "/equipe" },
      { label: "Recherche", href: "/recherche" },
      { label: "Feuille de route", href: "/roadmap" },
    ],
  };

  return (
    <footer className="border-t-2 border-foreground bg-background mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Particuliers */}
          <div>
            <h3 className="font-bold mb-4">Particuliers</h3>
            <ul className="space-y-2">
              {footerLinks.particuliers.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprises */}
          <div>
            <h3 className="font-bold mb-4">Entreprises</h3>
            <ul className="space-y-2">
              {footerLinks.entreprises.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pros */}
          <div>
            <h3 className="font-bold mb-4">Pros</h3>
            <ul className="space-y-2">
              {footerLinks.pros.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aides */}
          <div>
            <h3 className="font-bold mb-4">Aides</h3>
            <ul className="space-y-2">
              {footerLinks.aides.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div>
            <h3 className="font-bold mb-4">À propos</h3>
            <ul className="space-y-2">
              {footerLinks.apropos.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            ©2025-2026 Psy-Easy
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <Link to="/termes" className="text-muted-foreground hover:text-foreground underline">
              Termes & Conditions
            </Link>
            <Link to="/confidentialite" className="text-muted-foreground hover:text-foreground underline">
              Politique de confidentialité
            </Link>
            <Link to="/accessibilite" className="text-muted-foreground hover:text-foreground underline">
              Accessibilité
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://discord.gg/psyeasy" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-foreground rounded-md hover:bg-accent transition-colors" aria-label="Discord">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://facebook.com/psyeasy" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-foreground rounded-md hover:bg-accent transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/psyeasy" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-foreground rounded-md hover:bg-accent transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://twitter.com/psyeasy" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-foreground rounded-md hover:bg-accent transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/company/psyeasy" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-foreground rounded-md hover:bg-accent transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
