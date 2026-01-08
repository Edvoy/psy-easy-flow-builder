import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, BookOpen, MessageCircle, Users, AlertTriangle } from "lucide-react";

export default function Rapport() {
  const sections = [
    { id: "intro", title: "Introduction", page: 1 },
    { id: "hpi", title: "Analyse HPI", page: 3 },
    { id: "tda", title: "Analyse TDA", page: 7 },
    { id: "tdah", title: "Analyse TDAH", page: 11 },
    { id: "tsa", title: "Analyse TSA", page: 15 },
    { id: "recommandations", title: "Recommandations", page: 19 },
    { id: "ressources", title: "Ressources", page: 23 },
  ];

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/profil"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Retour au profil
          </Link>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Exporter en PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="wireframe-card sticky top-24">
              <h3 className="font-bold mb-4">Table des matières</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center justify-between text-sm py-2 px-3 rounded hover:bg-accent transition-colors"
                  >
                    <span>{section.title}</span>
                    <span className="text-muted-foreground">{section.page}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Report Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Report Header */}
            <div className="wireframe-card">
              <div className="text-center py-8">
                <h1 className="text-3xl font-bold mb-2">Rapport Premium</h1>
                <p className="text-muted-foreground">Profil Cognitif Personnalisé</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Généré le {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="disclaimer-box flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Important</p>
                <p className="text-sm">
                  Ce rapport présente des indicateurs et des hypothèses basés sur vos réponses au questionnaire. 
                  Il ne constitue pas un diagnostic médical. Seul un professionnel de santé qualifié peut établir un diagnostic.
                </p>
              </div>
            </div>

            {/* Introduction Section */}
            <section id="intro" className="wireframe-card">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Ce rapport présente une analyse approfondie de votre profil cognitif basée sur vos réponses 
                au questionnaire Psy-Easy. Il explore plusieurs dimensions de votre fonctionnement cognitif 
                et émotionnel, et propose des pistes de réflexion et d'action personnalisées.
              </p>
              <p className="text-muted-foreground">
                Chaque section de ce rapport aborde un axe spécifique, avec une explication détaillée 
                de ce que vos scores suggèrent et ne suggèrent pas, ainsi que des recommandations adaptées.
              </p>
            </section>

            {/* HPI Section */}
            <section id="hpi" className="wireframe-card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Analyse HPI</h2>
                <span className="text-3xl font-bold">72%</span>
              </div>
              
              <div className="h-4 bg-muted rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-foreground rounded-full" style={{ width: "72%" }} />
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-bold mb-2">Ce que cela suggère</h3>
                  <p className="text-sm text-muted-foreground">
                    Vos réponses indiquent une forte tendance vers des caractéristiques associées au Haut Potentiel 
                    Intellectuel : pensée rapide et en arborescence, besoin de stimulation intellectuelle, 
                    sensibilité élevée, et perfectionnisme.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-bold mb-2">Ce que cela NE suggère PAS</h3>
                  <p className="text-sm text-muted-foreground">
                    Ce résultat n'est pas un test de QI et ne mesure pas votre intelligence de manière objective. 
                    Seul un bilan psychométrique complet réalisé par un psychologue peut établir un HPI.
                  </p>
                </div>
              </div>

              <h3 className="font-bold mb-3">Recommandations pour vous</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span>Cherchez des activités qui stimulent votre curiosité intellectuelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span>Apprenez à gérer votre perfectionnisme pour éviter la procrastination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span>Entourez-vous de personnes qui comprennent votre mode de fonctionnement</span>
                </li>
              </ul>
            </section>

            {/* Placeholder sections */}
            {[
              { id: "tda", title: "Analyse TDA", score: 45 },
              { id: "tdah", title: "Analyse TDAH", score: 58 },
              { id: "tsa", title: "Analyse TSA", score: 35 },
            ].map((section) => (
              <section key={section.id} id={section.id} className="wireframe-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <span className="text-3xl font-bold">{section.score}%</span>
                </div>
                
                <div className="h-4 bg-muted rounded-full mb-6 overflow-hidden">
                  <div className="h-full bg-foreground rounded-full" style={{ width: `${section.score}%` }} />
                </div>

                <div className="wireframe-placeholder h-48">
                  <span className="text-muted-foreground">Contenu détaillé de l'analyse {section.title}</span>
                </div>
              </section>
            ))}

            {/* Recommendations Section */}
            <section id="recommandations" className="wireframe-card">
              <h2 className="text-2xl font-bold mb-6">Recommandations générales</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/articles" className="p-4 border-2 border-foreground rounded-lg hover:bg-accent transition-colors text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Articles</h3>
                  <p className="text-xs text-muted-foreground">Approfondissez vos connaissances</p>
                </Link>
                <Link to="/pzy" className="p-4 border-2 border-foreground rounded-lg hover:bg-accent transition-colors text-center">
                  <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">P-zy</h3>
                  <p className="text-xs text-muted-foreground">Posez vos questions</p>
                </Link>
                <Link to="/partenaires" className="p-4 border-2 border-foreground rounded-lg hover:bg-accent transition-colors text-center">
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Partenaires</h3>
                  <p className="text-xs text-muted-foreground">Trouvez un professionnel</p>
                </Link>
              </div>
            </section>

            {/* Resources Section */}
            <section id="ressources" className="wireframe-card">
              <h2 className="text-2xl font-bold mb-6">Ressources complémentaires</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-bold mb-2">Livres recommandés</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• "Trop intelligent pour être heureux ?" - Jeanne Siaud-Facchin</li>
                    <li>• "Différence et souffrance de l'adulte surdoué" - Cécile Bost</li>
                    <li>• "Je pense trop" - Christel Petitcollin</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-bold mb-2">Associations</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ANPEIP (Association Nationale Pour les Enfants Intellectuellement Précoces)</li>
                    <li>• HyperSupers TDAH France</li>
                    <li>• Autisme France</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
