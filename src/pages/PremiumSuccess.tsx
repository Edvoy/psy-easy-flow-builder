import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Download, FileText } from "lucide-react";

export default function PremiumSuccess() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Animation */}
          <div className="w-20 h-20 rounded-full border-4 border-foreground flex items-center justify-center mx-auto mb-8 animate-fade-in">
            <Check className="h-10 w-10" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            Paiement réussi !
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Votre rapport Premium est maintenant disponible.
          </p>

          {/* Download Card */}
          <div className="wireframe-card text-left mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-foreground rounded flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">Rapport Premium - Profil Cognitif</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  PDF • 24 pages • Généré le {new Date().toLocaleDateString('fr-FR')}
                </p>
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Télécharger le rapport
                </Button>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="wireframe-card text-left mb-8">
            <h2 className="font-bold mb-4">Et maintenant ?</h2>
            <ul className="space-y-3">
              {[
                { text: "Consultez votre rapport détaillé", done: false },
                { text: "Explorez les recommandations personnalisées", done: false },
                { text: "Discutez avec P-zy de vos résultats", done: false },
                { text: "Trouvez un professionnel si besoin", done: false },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center text-xs">
                    {i + 1}
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rapport">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Consulter le rapport
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pzy">
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                Parler à P-zy
              </Button>
            </Link>
          </div>

          {/* Email Confirmation */}
          <p className="text-sm text-muted-foreground mt-8">
            Un email de confirmation a été envoyé à votre adresse.
          </p>
        </div>
      </div>
    </Layout>
  );
}
