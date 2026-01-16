import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, FlaskConical } from "lucide-react";
import { BrandIcon } from "@/components/BrandPicto";

export default function APropos() {
  const sections = [
    {
      id: "philosophie",
      icon: BookOpen,
      brandType: "lightbulb" as const,
      title: "Notre philosophie",
      description: "Une approche bienveillante de la neurodiversité, fondée sur la compréhension plutôt que l'étiquetage. Nous croyons que chaque profil cognitif est une richesse à cultiver.",
      link: "/philosophie",
      linkText: "Découvrir notre philosophie",
      color: "bg-mint/20 border-mint/40",
    },
    {
      id: "equipe",
      icon: Users,
      brandType: "heart" as const,
      title: "Notre équipe",
      description: "Des psychologues, chercheurs et designers unis par une mission commune : rendre la compréhension de soi accessible à tous, sans stigmatisation.",
      link: "/equipe",
      linkText: "Rencontrer l'équipe",
      color: "bg-brand-blue/10 border-brand-blue/30",
    },
    {
      id: "recherches",
      icon: FlaskConical,
      brandType: "brain" as const,
      title: "Nos recherches",
      description: "Notre outil s'appuie sur des fondements scientifiques rigoureux. Découvrez les études et méthodologies qui guident notre approche.",
      link: "/recherche",
      linkText: "Explorer nos recherches",
      color: "bg-teal/10 border-teal/30",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft pattern-overlay" />
        <div className="container relative section-padding text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h1 className="text-h1 md:text-display text-foreground">
              À propos de <span className="text-brand-blue">Psy-Easy</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Découvrez qui nous sommes, notre vision de la neurodiversité 
              et les fondements scientifiques de notre approche.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="container section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div 
              key={section.id}
              className={`psy-card ${section.color} border hover:shadow-lg transition-all duration-300 flex flex-col`}
            >
              <div className="w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center mb-6">
                <BrandIcon type={section.brandType} size="lg" variant="primary" />
              </div>
              <h2 className="text-h3 mb-3">{section.title}</h2>
              <p className="text-small text-muted-foreground mb-6 flex-grow">
                {section.description}
              </p>
              <Link to={section.link}>
                <Button variant="outline" className="gap-2 w-full">
                  {section.linkText}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container section-padding">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium">
              <BrandIcon type="shield" size="sm" variant="teal" />
              <span>Notre mission</span>
            </div>
            <h2 className="text-h2">
              Transformer la perception de la neurodiversité
            </h2>
            <p className="text-muted-foreground">
              Psy-Easy a été créé pour offrir un premier pas bienveillant vers la compréhension de soi. 
              Notre outil d'orientation ne remplace pas un diagnostic professionnel, mais il ouvre 
              des portes et propose des pistes de réflexion accessibles à tous.
            </p>
            <div className="pt-4">
              <Link to="/test">
                <Button size="lg" className="gap-2">
                  Découvrir mon profil
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
