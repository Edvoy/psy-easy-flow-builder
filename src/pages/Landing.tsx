import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Users, BarChart3 } from "lucide-react";

export default function Landing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cultivez vos talents cachés
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Découvrez votre potentiel. Grâce à un test interactif et un parcours d'accompagnement, transformez vos différences en forces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/test">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Passer le test
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Disclaimer */}
            <div className="disclaimer-box">
              <p className="text-xs">
                ⚠️ Cet outil est un outil d'orientation et ne remplace pas un avis professionnel.
              </p>
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="wireframe-placeholder aspect-square max-w-md mx-auto">
            <div className="text-center p-8">
              <div className="text-6xl font-bold">91.2%</div>
              <div className="text-sm mt-2">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "PROI+", label: "Cupid elits ut Labori" },
              { value: "DES+", label: "Cupid elits ut Labori" },
              { value: "VOLUP+", label: "Cupid elits ut Labori" },
              { value: "91.2%", label: "Cupid elits ut Labori" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typologies Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Typologies cognitives</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorez les différents profils cognitifs et découvrez comment ils influencent votre façon de penser et d'interagir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "HPI", description: "Haut Potentiel Intellectuel - Capacités cognitives élevées" },
            { title: "TDA/TDAH", description: "Trouble du Déficit de l'Attention avec ou sans Hyperactivité" },
            { title: "TSA", description: "Trouble du Spectre de l'Autisme - Neurodivergence" },
          ].map((type, i) => (
            <div key={i} className="wireframe-card hover:bg-accent transition-colors">
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
              <Link to="/articles" className="text-sm font-medium flex items-center gap-1 hover:underline">
                En savoir plus <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* For Teams Section */}
      <section className="border-y-2 border-foreground">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="wireframe-placeholder aspect-video">
              <Users className="h-16 w-16" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Comprenez réellement votre équipe
              </h2>
              <p className="text-muted-foreground">
                Révélez les dynamiques réelles de votre équipe avec une vue agrégée et anonymisée. Aucun label individuel, juste des insights actionnables.
              </p>
              <ul className="space-y-3">
                {[
                  "Vue agrégée des profils d'équipe",
                  "Pas de labels individuels",
                  "Kits managers inclus",
                  "Ateliers personnalisés",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/entreprises">
                <Button variant="outline" className="gap-2">
                  Découvrir l'offre entreprises
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voyez ce que les autres en disent
          </h2>
          <p className="text-muted-foreground">
            Dolorem nis quioffic pr rep estla par?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="wireframe-card">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-foreground" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
                  <span className="text-sm font-bold">M{i}</span>
                </div>
                <div>
                  <div className="font-medium text-sm">Marie D.</div>
                  <div className="text-xs text-muted-foreground">Utilisatrice Premium</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/test">
            <Button size="lg" className="gap-2">
              Passer le test
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
