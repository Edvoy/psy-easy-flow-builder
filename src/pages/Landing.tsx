import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Info } from "lucide-react";
import { BrandIcon } from "@/components/BrandPicto";
import heroBrainImg from "@/assets/illustrations/hero-brain.png";
import entreprisesTeamImg from "@/assets/illustrations/entreprises-team.png";

export default function Landing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft pattern-overlay" />
        <div className="container relative section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium">
                <BrandIcon type="brain" size="sm" variant="primary" />
                <span>Évaluation cognitive</span>
              </div>
              
              <h1 className="text-h1 md:text-display text-foreground">
                Cultivez vos{" "}
                <span className="text-pink">talents cachés</span>
              </h1>
              
              <p className="text-body-lg text-muted-foreground max-w-lg">
                Découvrez votre profil cognitif unique. Un test interactif et un parcours 
                d'accompagnement pour transformer vos différences en forces.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/test">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    Passer le test gratuitement
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/a-propos">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    En savoir plus
                  </Button>
                </Link>
              </div>
              
              {/* Disclaimer */}
              <div className="disclaimer-box flex items-start gap-3">
                <Info className="h-5 w-5 flex-shrink-0 mt-0.5 text-info" />
                <p className="text-small">Cet outil propose des pistes de réflexion et ne remplace pas un diagnostic professionnel.

                </p>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">
              <img
                src={heroBrainImg}
                alt="Illustration représentant la diversité cognitive"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-lg" />

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            { value: "130K+", label: "Profils analysés" },
            { value: "500+", label: "Praticiens partenaires" },
            { value: "91%", label: "Satisfaction" },
            { value: "5", label: "Axes évalués" }].
            map((stat, i) =>
            <div key={i} className="space-y-2">
                <div className="text-h2 font-bold text-brand-blue">{stat.value}</div>
                <div className="text-small text-muted-foreground">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Typologies Section */}
      <section className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">Explorez les profils cognitifs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque profil apporte ses forces et ses particularités. Mieux les comprendre, 
            c'est mieux s'accompagner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
          {
            title: "HPI",
            subtitle: "Haut Potentiel Intellectuel",
            description: "Pensée rapide, sensibilité accrue, besoin de stimulation intellectuelle.",
            color: "bg-teal/10 border-teal/30"
          },
          {
            title: "TDA/TDAH",
            subtitle: "Attention & Hyperactivité",
            description: "Créativité, énergie, pensée divergente et recherche de nouveauté.",
            color: "bg-brand-blue/10 border-brand-blue/30"
          },
          {
            title: "TSA",
            subtitle: "Spectre de l'Autisme",
            description: "Pensée en détails, intérêts profonds, besoin de prévisibilité.",
            color: "bg-mint/30 border-mint/50"
          }].
          map((type, i) =>
          <div
            key={i}
            className={`psy-card ${type.color} border hover:shadow-md transition-all`}>

              <div className="inline-block px-3 py-1 bg-foreground/5 rounded-lg text-sm font-semibold mb-3">
                {type.title}
              </div>
              <h3 className="text-h3 mb-2">{type.subtitle}</h3>
              <p className="text-small text-muted-foreground mb-4">{type.description}</p>
              <Link to="/articles" className="text-small font-medium text-brand-blue flex items-center gap-1 hover:gap-2 transition-all">
                Comprendre ce profil <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* For Teams Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={entreprisesTeamImg}
              alt="Équipe collaborant avec diversité cognitive"
              className="rounded-2xl w-full shadow-md" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 rounded-full text-sm font-medium text-brand-blue">
                Pour les entreprises
              </div>
              <h2 className="text-h2">
                Comprenez réellement votre équipe
              </h2>
              <p className="text-muted-foreground">
                Révélez les dynamiques réelles avec une vue agrégée et anonymisée. 
                Pas de labels individuels, uniquement des insights actionnables pour améliorer 
                le bien-être et la performance.
              </p>
              <ul className="space-y-3">
                {[
                "Vue agrégée des profils d'équipe",
                "Aucun diagnostic individuel",
                "Kits managers et ressources",
                "Ateliers personnalisés"].
                map((item, i) =>
                <li key={i} className="flex items-center gap-3">
                    <BrandIcon type="check" size="sm" variant="teal" className="w-5 h-5" />
                    <span className="text-small">{item}</span>
                  </li>
                )}
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

      {/* Values Section */}
      <section className="container section-padding">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-4">Notre approche</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une démarche bienveillante, fondée sur la science, pour vous aider à mieux vous comprendre.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
          {
            type: "shield" as const,
            variant: "primary" as const,
            title: "Sérénité",
            description: "Un espace sécurisé et bienveillant, loin de toute stigmatisation."
          },
          {
            type: "lightbulb" as const,
            variant: "teal" as const,
            title: "Clarté",
            description: "Des explications accessibles, sans jargon, pour vraiment comprendre."
          },
          {
            type: "heart" as const,
            variant: "pink" as const,
            title: "Douceur",
            description: "Des pistes, pas des verdicts. Vous restez maître de votre parcours."
          }].
          map((value, i) =>
          <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center">
                <BrandIcon type={value.type} size="lg" variant={value.variant} />
              </div>
              <h3 className="text-h3">{value.title}</h3>
              <p className="text-small text-muted-foreground">{value.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container section-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">
              Ce qu'ils en disent
            </h2>
            <p className="text-muted-foreground">
              Des milliers de personnes ont déjà découvert leur profil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
            {
              text: "Enfin un outil qui m'a aidé à comprendre mon fonctionnement sans me coller une étiquette. Les pistes proposées sont vraiment utiles.",
              name: "Marie D.",
              role: "Utilisatrice Premium"
            },
            {
              text: "J'ai pu préparer ma consultation avec mon psychologue grâce au rapport. Un vrai gain de temps et de clarté.",
              name: "Thomas L.",
              role: "Parent concerné"
            },
            {
              text: "L'approche bienveillante m'a permis d'aborder le sujet sereinement. Je recommande à tous ceux qui se posent des questions.",
              name: "Sophie M.",
              role: "Enseignante"
            }].
            map((testimonial, i) =>
            <div key={i} className="psy-card">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) =>
                <Star key={star} className="h-4 w-4 fill-teal text-teal" />
                )}
                </div>
                <p className="text-small text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium text-small">{testimonial.name}</div>
                    <div className="text-meta text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/test">
              <Button size="lg" className="gap-2">
                Découvrir mon profil
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>);

}