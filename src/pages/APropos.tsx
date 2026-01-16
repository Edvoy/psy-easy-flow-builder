import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { BrandIcon } from "@/components/BrandPicto";

export default function APropos() {
  const team = [
    {
      name: "Dr. Marie Dupont",
      role: "Directrice Scientifique",
      description: "Docteure en psychologie cognitive, 15 ans d'expérience en recherche.",
    },
    {
      name: "Thomas Martin",
      role: "Directeur Technique",
      description: "Expert en développement d'applications de santé mentale.",
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Produit",
      description: "Spécialiste UX avec une passion pour l'accessibilité.",
    },
    {
      name: "Dr. Lucas Petit",
      role: "Chercheur Principal",
      description: "Neuroscientifique spécialisé dans l'évaluation cognitive.",
    },
  ];

  const publications = [
    {
      title: "Validation du questionnaire cognitif Psy-Easy",
      journal: "Journal de Psychologie Cognitive",
      year: "2024",
    },
    {
      title: "Étude longitudinale sur l'auto-évaluation cognitive",
      journal: "Revue Européenne de Neurosciences",
      year: "2023",
    },
    {
      title: "Impact des outils numériques sur la conscience de soi",
      journal: "Frontiers in Psychology",
      year: "2023",
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
              À propos de <span className="text-brand-blue">nous</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Découvrez qui nous sommes, notre vision de la neurodiversité 
              et les fondements scientifiques de notre approche.
            </p>
            
            {/* Navigation anchors */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a href="#philosophie">
                <Button variant="outline" size="sm" className="gap-2">
                  <BrandIcon type="lightbulb" size="sm" variant="primary" />
                  Notre philosophie
                </Button>
              </a>
              <a href="#equipe">
                <Button variant="outline" size="sm" className="gap-2">
                  <BrandIcon type="heart" size="sm" variant="pink" />
                  Notre équipe
                </Button>
              </a>
              <a href="#recherches">
                <Button variant="outline" size="sm" className="gap-2">
                  <BrandIcon type="brain" size="sm" variant="teal" />
                  Nos recherches
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Notre philosophie */}
      <section id="philosophie" className="container section-padding scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-mint/30 flex items-center justify-center">
              <BrandIcon type="lightbulb" size="md" variant="primary" />
            </div>
            <h2 className="text-h2">Notre philosophie</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="psy-card bg-mint/10 border border-mint/30">
                <h3 className="text-h3 mb-3">Une approche centrée sur l'humain</h3>
                <p className="text-muted-foreground">
                  Chez Psy-Easy, nous croyons que chaque individu possède un potentiel unique. 
                  Notre mission est de fournir des outils d'évaluation cognitive accessibles 
                  et scientifiquement validés pour aider chacun à mieux se comprendre.
                </p>
              </div>
              
              <div className="psy-card bg-teal/10 border border-teal/30">
                <h3 className="text-h3 mb-3">L'excellence scientifique</h3>
                <p className="text-muted-foreground">
                  Nos tests sont développés en collaboration avec des chercheurs en psychologie 
                  cognitive et neurosciences. Chaque questionnaire est rigoureusement validé 
                  pour garantir des résultats fiables et pertinents.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="psy-card bg-brand-blue/10 border border-brand-blue/30">
                <h3 className="text-h3 mb-3">Accessibilité et confidentialité</h3>
                <p className="text-muted-foreground">
                  Nous nous engageons à rendre l'évaluation cognitive accessible à tous, 
                  tout en garantissant la protection absolue de vos données personnelles. 
                  Votre vie privée est notre priorité.
                </p>
              </div>
              
              <div className="psy-card bg-secondary border border-border">
                <h3 className="text-h3 mb-3">Innovation continue</h3>
                <p className="text-muted-foreground">
                  Notre équipe travaille constamment à l'amélioration de nos outils et au 
                  développement de nouvelles fonctionnalités pour vous offrir la meilleure 
                  expérience possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Notre équipe */}
      <section id="equipe" className="bg-muted/30 border-y border-border scroll-mt-20">
        <div className="container section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-pink/20 flex items-center justify-center">
                <BrandIcon type="heart" size="md" variant="pink" />
              </div>
              <h2 className="text-h2">Notre équipe</h2>
            </div>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Des experts passionnés au service de votre bien-être cognitif, unis par une 
              mission commune : rendre la compréhension de soi accessible à tous.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="bg-background border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-xl font-bold text-brand-blue">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-center">{member.name}</h3>
                    <p className="text-small text-brand-blue text-center mb-2">{member.role}</p>
                    <p className="text-meta text-muted-foreground text-center">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nos recherches */}
      <section id="recherches" className="container section-padding scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-teal/20 flex items-center justify-center">
              <BrandIcon type="brain" size="md" variant="teal" />
            </div>
            <h2 className="text-h2">Nos recherches</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Notre engagement pour une approche scientifique rigoureuse.
          </p>

          {/* Research pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-mint/10 border-mint/30">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-mint/30 flex items-center justify-center mb-2">
                  <BrandIcon type="brain" size="sm" variant="primary" />
                </div>
                <CardTitle className="text-h3">Neurosciences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-small text-muted-foreground">
                  Nos tests s'appuient sur les dernières découvertes en neurosciences cognitives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-teal/10 border-teal/30">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-teal/30 flex items-center justify-center mb-2">
                  <BrandIcon type="heart" size="sm" variant="teal" />
                </div>
                <CardTitle className="text-h3">Études cliniques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-small text-muted-foreground">
                  Validation auprès de milliers de participants pour garantir la fiabilité.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-blue/10 border-brand-blue/30">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-2">
                  <BrandIcon type="shield" size="sm" variant="primary" />
                </div>
                <CardTitle className="text-h3">Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-small text-muted-foreground">
                  Nos résultats sont publiés dans des revues scientifiques de référence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Publications list */}
          <h3 className="text-h3 mb-6">Publications récentes</h3>
          <div className="space-y-4">
            {publications.map((pub) => (
              <Card key={pub.title} className="bg-secondary/50 border-border hover:bg-secondary transition-colors">
                <CardContent className="py-4">
                  <h4 className="font-semibold">{pub.title}</h4>
                  <p className="text-small text-muted-foreground">
                    {pub.journal} • {pub.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 border-t border-border">
        <div className="container section-padding">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium">
              <BrandIcon type="shield" size="sm" variant="teal" />
              <span>Prêt à vous découvrir ?</span>
            </div>
            <h2 className="text-h2">
              Faites le premier pas
            </h2>
            <p className="text-muted-foreground">
              Notre outil d'orientation ne remplace pas un diagnostic professionnel, 
              mais il ouvre des portes et propose des pistes de réflexion accessibles à tous.
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
