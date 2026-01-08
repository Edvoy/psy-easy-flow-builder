import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Share2, Bookmark, User, Calendar } from "lucide-react";

export default function ArticleDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <article className="container py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/articles"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Retour aux articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium bg-muted px-2 py-1 rounded">HPI</span>
            <span className="text-xs text-muted-foreground">• 8 min de lecture</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Comprendre le Haut Potentiel Intellectuel : au-delà des idées reçues
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-sm">Dr. Marie Dupont</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> 15 janvier 2025
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" /> Partager
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Bookmark className="h-4 w-4" /> Sauvegarder
              </Button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="wireframe-placeholder aspect-video mb-8">
            <span className="text-muted-foreground">Image de couverture</span>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            Le Haut Potentiel Intellectuel (HPI) est un sujet qui suscite de plus en plus d'intérêt. 
            Mais que signifie réellement être HPI ? Quelles sont les caractéristiques et les défis 
            associés à ce profil cognitif ?
          </p>

          <h2 className="text-2xl font-bold mb-4">Qu'est-ce que le HPI ?</h2>
          <p className="text-muted-foreground mb-6">
            Le Haut Potentiel Intellectuel désigne une capacité cognitive significativement 
            supérieure à la moyenne. Traditionnellement, on considère qu'une personne est HPI 
            lorsque son quotient intellectuel (QI) dépasse 130, ce qui représente environ 2% 
            de la population.
          </p>

          <div className="disclaimer-box mb-6">
            <p className="text-sm">
              <strong>Important :</strong> Le QI n'est qu'un indicateur parmi d'autres. 
              Être HPI ne garantit pas le succès, tout comme un QI "normal" n'empêche pas 
              l'excellence dans de nombreux domaines.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Les caractéristiques du HPI</h2>
          <p className="text-muted-foreground mb-4">
            Les personnes HPI présentent souvent certaines caractéristiques communes :
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
            <li>Pensée en arborescence (multiples idées simultanées)</li>
            <li>Hypersensibilité émotionnelle et sensorielle</li>
            <li>Besoin de sens et de cohérence</li>
            <li>Perfectionnisme parfois paralysant</li>
            <li>Sens aigu de la justice</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Les défis au quotidien</h2>
          <p className="text-muted-foreground mb-6">
            Contrairement aux idées reçues, être HPI n'est pas toujours un avantage. 
            De nombreuses personnes HPI rencontrent des difficultés d'adaptation, 
            un sentiment de décalage avec leur entourage, ou une hypersensibilité 
            qui peut être source de souffrance.
          </p>

          <div className="wireframe-card my-8">
            <h3 className="font-bold mb-4">Ressources complémentaires</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="underline hover:no-underline">
                  "Différence et souffrance de l'adulte surdoué" - Cécile Bost
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:no-underline">
                  "Trop intelligent pour être heureux ?" - Jeanne Siaud-Facchin
                </a>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4">Et maintenant ?</h2>
          <p className="text-muted-foreground mb-6">
            Si vous vous reconnaissez dans ces descriptions, notre test d'orientation 
            peut vous aider à mieux comprendre votre profil. N'oubliez pas que seul un 
            professionnel qualifié peut établir un diagnostic formel.
          </p>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          <div className="wireframe-card flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="font-bold mb-2">Découvrez votre profil</h3>
              <p className="text-sm text-muted-foreground">
                Passez notre test d'orientation pour explorer vos caractéristiques cognitives.
              </p>
            </div>
            <Link to="/test">
              <Button className="gap-2">
                Passer le test <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="border-t-2 border-border pt-8">
            <h3 className="font-bold mb-6">Articles connexes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Les stratégies de gestion du stress pour les HPI", category: "HPI" },
                { title: "HPI et vie professionnelle : trouver sa place", category: "HPI" },
              ].map((article, i) => (
                <Link
                  key={i}
                  to="/articles/2"
                  className="wireframe-card hover:bg-accent transition-colors"
                >
                  <span className="text-xs font-medium bg-muted px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <h4 className="font-bold mt-3">{article.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
