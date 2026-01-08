import { Layout } from "@/components/layout/Layout";
import { Check } from "lucide-react";

export default function Accessibilite() {
  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Accessibilité</h1>
        <p className="text-muted-foreground mb-8">
          Notre engagement pour une plateforme accessible à tous.
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Notre engagement</h2>
            <p className="text-muted-foreground">
              Psy-Easy s'engage à rendre son site web accessible à tous les utilisateurs, 
              y compris les personnes en situation de handicap. Nous travaillons continuellement 
              à améliorer l'accessibilité de notre plateforme conformément aux normes WCAG 2.1 niveau AA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Mesures d'accessibilité</h2>
            <p className="text-muted-foreground mb-4">
              Nous avons mis en place les mesures suivantes pour garantir l'accessibilité :
            </p>
            <div className="space-y-3">
              {[
                "Navigation possible au clavier",
                "Compatibilité avec les lecteurs d'écran",
                "Textes alternatifs pour les images",
                "Contraste des couleurs conforme aux standards",
                "Structure sémantique des pages",
                "Formulaires avec labels explicites",
                "Taille de texte ajustable",
                "Focus visible sur les éléments interactifs",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technologies d'assistance</h2>
            <p className="text-muted-foreground">
              Notre site est optimisé pour fonctionner avec les technologies d'assistance suivantes :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Lecteurs d'écran (JAWS, NVDA, VoiceOver)</li>
              <li>Logiciels de grossissement</li>
              <li>Navigation au clavier</li>
              <li>Commandes vocales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contenus non accessibles</h2>
            <p className="text-muted-foreground">
              Certains contenus peuvent ne pas être entièrement accessibles, notamment :
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
              <li>Certains graphiques complexes dans les rapports</li>
              <li>Certains documents PDF anciens</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Nous travaillons activement à rendre ces contenus accessibles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Retour d'expérience</h2>
            <p className="text-muted-foreground">
              Nous sommes à l'écoute de vos retours pour améliorer l'accessibilité de notre site. 
              Si vous rencontrez des difficultés ou avez des suggestions, n'hésitez pas à nous contacter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question ou signalement concernant l'accessibilité de notre site :
            </p>
            <ul className="text-muted-foreground mt-4 space-y-2">
              <li><strong>Email :</strong> accessibilite@psy-easy.fr</li>
              <li><strong>Téléphone :</strong> +33 1 23 45 67 89</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Déclaration de conformité</h2>
            <p className="text-muted-foreground">
              Cette déclaration d'accessibilité a été établie le 1er janvier 2025. 
              Elle sera mise à jour régulièrement pour refléter les améliorations apportées à notre plateforme.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
