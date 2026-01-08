import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Check, Users, BarChart3, BookOpen, Shield } from "lucide-react";

export default function Entreprises() {
  const [employeeCount, setEmployeeCount] = useState([50]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const calculatePrice = (count: number) => {
    if (count <= 10) return count * 25;
    if (count <= 50) return count * 20;
    if (count <= 200) return count * 15;
    return count * 12;
  };

  const estimatedPrice = calculatePrice(employeeCount[0]);

  const handleSubmitDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Révélez les dynamiques réelles de votre équipe
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprenez les profils cognitifs de vos collaborateurs pour créer un environnement de travail plus inclusif et performant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="wireframe-placeholder aspect-square max-w-md mx-auto">
            <BarChart3 className="h-16 w-16" />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quel impact pour votre organisation ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Vue agrégée",
                description: "Analysez les profils d'équipe sans identifier les individus",
              },
              {
                icon: Shield,
                title: "Pas de labels",
                description: "Aucun diagnostic individuel, uniquement des tendances collectives",
              },
              {
                icon: BookOpen,
                title: "Kits managers",
                description: "Ressources pratiques pour accompagner vos équipes",
              },
              {
                icon: BarChart3,
                title: "Ateliers",
                description: "Sessions de sensibilisation et de formation personnalisées",
              },
            ].map((benefit, i) => (
              <div key={i} className="wireframe-card text-center">
                <benefit.icon className="h-10 w-10 mx-auto mb-4" />
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Simulator */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simulateur de prix</h2>
          <p className="text-center text-muted-foreground mb-8">
            Estimez le coût pour votre organisation
          </p>

          <div className="wireframe-card space-y-6">
            <div>
              <Label className="text-base font-bold">Nombre de collaborateurs</Label>
              <div className="flex items-center gap-4 mt-4">
                <Slider
                  value={employeeCount}
                  onValueChange={setEmployeeCount}
                  max={500}
                  min={5}
                  step={5}
                  className="flex-1"
                />
                <span className="font-bold text-lg w-16 text-right">{employeeCount[0]}</span>
              </div>
            </div>

            <div className="p-6 bg-muted/50 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">Estimation</p>
              <div className="text-4xl font-bold">{estimatedPrice.toLocaleString()}€</div>
              <p className="text-sm text-muted-foreground mt-2">
                soit {(estimatedPrice / employeeCount[0]).toFixed(0)}€ par collaborateur
              </p>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Prix indicatif. Le tarif final dépend de vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="border-y-2 border-foreground">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Améliorez concrètement l'efficacité de vos équipes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Reprehen co con enima écupid duis occae nullapar",
              "Maîtrisez no essecillu au duisa évolup",
              "Évaluation d'équipe complète",
              "Rapport professionnel détaillé",
              "Test gratuit pour évaluer la solution",
              "Accompagnement personnalisé",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="h-5 w-5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo-form" className="container py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Demander une démo</h2>
          <p className="text-center text-muted-foreground mb-8">
            Un conseiller vous recontactera sous 24h
          </p>

          {formSubmitted ? (
            <div className="wireframe-card text-center py-12">
              <Check className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Demande envoyée !</h3>
              <p className="text-muted-foreground">
                Merci pour votre intérêt. Notre équipe vous contactera très prochainement.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitDemo} className="wireframe-card space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" placeholder="Jean" className="border-2" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" placeholder="Dupont" className="border-2" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email professionnel</Label>
                <Input id="email" type="email" placeholder="jean@entreprise.com" className="border-2" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="entreprise">Entreprise</Label>
                <Input id="entreprise" placeholder="Nom de votre entreprise" className="border-2" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="taille">Taille de l'entreprise</Label>
                <Input id="taille" placeholder="Ex: 50-200 collaborateurs" className="border-2" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Décrivez brièvement vos besoins..." 
                  className="border-2 min-h-24" 
                />
              </div>

              <Button type="submit" className="w-full">
                Envoyer ma demande
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe commerciale.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
