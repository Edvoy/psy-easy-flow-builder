import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Shield, Sparkles, Users, Building, UserCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import particuliersDiscoveryImg from "@/assets/illustrations/particuliers-discovery.png";

export default function Particuliers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="pack-premium" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pack Premium</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Plébiscité par plus de 130 000 clients. Débloquez l'analyse complète de votre profil cognitif.
            </p>
            <Link to="/premium">
              <Button size="lg" className="gap-2">
                Découvrir le Pack Premium
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <img 
            src={particuliersDiscoveryImg} 
            alt="Découverte de soi et croissance personnelle" 
            className="rounded-2xl w-full max-w-sm mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-y-2 border-foreground">
        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Analyse approfondie",
                description: "Rapport détaillé de 20+ pages avec explications personnalisées",
              },
              {
                icon: Shield,
                title: "Recommandations",
                description: "Pistes d'aménagement au quotidien et au travail",
              },
              {
                icon: Star,
                title: "Suivi personnalisé",
                description: "Accès prioritaire à P-zy et ressources exclusives",
              },
            ].map((feature, i) => (
              <div key={i} className="wireframe-card text-center">
                <feature.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Choisissez votre formule</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free */}
          <div className="wireframe-card">
            <h3 className="text-xl font-bold mb-2">Gratuit</h3>
            <div className="text-3xl font-bold mb-4">0€</div>
            <ul className="space-y-3 mb-6">
              {[
                "Résultats par axe",
                "Explications générales",
                "3 actions recommandées",
                "Accès à P-zy (limité)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/test">
              <Button variant="outline" className="w-full">Commencer gratuitement</Button>
            </Link>
          </div>

          {/* Premium */}
          <div className="wireframe-card border-2 border-foreground relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-1 text-xs font-bold rounded">
              POPULAIRE
            </div>
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <div className="text-3xl font-bold mb-4">12€</div>
            <ul className="space-y-3 mb-6">
              {[
                "Tout le gratuit inclus",
                "Rapport PDF complet (20+ pages)",
                "Recommandations personnalisées",
                "Pistes d'aménagement détaillées",
                "Accès prioritaire à P-zy",
                "Ressources exclusives",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/premium">
              <Button className="w-full">Obtenir Premium</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Réseaux partenaires */}
      <section id="reseaux-partenaires" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Réseaux partenaires</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous collaborons avec des réseaux de professionnels pour vous accompagner dans votre parcours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Associations spécialisées",
                description: "Partenariats avec les principales associations d'accompagnement cognitif",
              },
              {
                icon: Building,
                title: "Centres de ressources",
                description: "Accès privilégié aux centres de ressources régionaux",
              },
              {
                icon: UserCheck,
                title: "Groupes de soutien",
                description: "Mise en relation avec des groupes de soutien locaux",
              },
            ].map((item, i) => (
              <div key={i} className="wireframe-card text-center">
                <item.icon className="h-10 w-10 mx-auto mb-4" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plateformes partenaires */}
      <section id="plateformes-partenaires" className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Plateformes partenaires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des outils complémentaires pour enrichir votre expérience et votre développement personnel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "Applications de méditation",
            "Outils de productivité",
            "Plateformes d'apprentissage",
            "Services de coaching en ligne",
          ].map((platform, i) => (
            <div key={i} className="wireframe-card text-center p-6">
              <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">{i + 1}</span>
              </div>
              <p className="font-medium">{platform}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Praticiens partenaires */}
      <section id="praticiens-partenaires" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Praticiens partenaires</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un réseau de professionnels qualifiés pour vous accompagner si vous souhaitez aller plus loin.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Psychologues", count: "200+" },
              { title: "Neuropsychologues", count: "75+" },
              { title: "Coachs certifiés", count: "150+" },
            ].map((item, i) => (
              <div key={i} className="wireframe-card text-center">
                <div className="text-4xl font-bold mb-2">{item.count}</div>
                <p className="text-muted-foreground">{item.title}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Trouver un praticien près de chez moi
            </Button>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="container py-16">
        <div className="text-center">
          <Shield className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Garantie satisfait ou remboursé</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Si vous n'êtes pas satisfait de votre rapport Premium, nous vous remboursons intégralement sous 14 jours.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t-2 border-foreground">
        <div className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-12">Foire aux questions</h2>
          
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Qu'est-ce que le Pack Premium inclut exactement ?",
                  a: "Le Pack Premium comprend un rapport PDF détaillé de plus de 20 pages avec une analyse approfondie de votre profil, des recommandations personnalisées, des pistes d'aménagement et un accès prioritaire à notre assistant P-zy.",
                },
                {
                  q: "Puis-je obtenir un remboursement ?",
                  a: "Oui, nous offrons une garantie satisfait ou remboursé de 14 jours. Si le rapport ne répond pas à vos attentes, contactez-nous pour un remboursement intégral.",
                },
                {
                  q: "Comment accéder à mon rapport après l'achat ?",
                  a: "Votre rapport est disponible immédiatement après le paiement dans votre espace personnel. Vous pouvez le télécharger en PDF et y accéder à tout moment.",
                },
                {
                  q: "Les praticiens partenaires sont-ils certifiés ?",
                  a: "Oui, tous nos praticiens partenaires sont des professionnels certifiés (psychologues, neuropsychologues) inscrits aux registres officiels de leur profession.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="wireframe-card">
                  <AccordionTrigger className="text-left font-bold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
