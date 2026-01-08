import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Shield, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Particuliers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
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
            <div className="text-3xl font-bold mb-4">29€</div>
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

      {/* Money Back Guarantee */}
      <section className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-12 text-center">
          <Shield className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Garantie satisfait ou remboursé</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Risk-Free, 100% Money-Back Laborumlo. Si vous n'êtes pas satisfait, nous vous remboursons intégralement.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Foire aux questions</h2>
        
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "Ute nul utl Adipisc Repreh Ametc sint vo?",
                a: "Dol cup fugi qu incl invol Conseq Nisiutalli. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
              },
              {
                q: "Veli re mag veli inre adi ea mo aliquip?",
                a: "Eiu eiusm ide labor admini utalit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
              {
                q: "Sin incul reprehend adipiscingel mo laboru admilt?",
                a: "Com adipis S enima QUlsnostrudexer. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
              },
              {
                q: "Ni con essec v deseruntm?",
                a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      </section>
    </Layout>
  );
}
