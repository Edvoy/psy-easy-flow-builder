import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Check, Users, BarChart3, BookOpen, Shield, FileText, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

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

      {/* Évaluation d'équipe */}
      <section id="evaluation" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Évaluation d'équipe</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Une approche collective respectueuse de l'individu
          </p>
          
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
                description: "Ressources pratiques pour accompagner vos équipes au quotidien",
              },
              {
                icon: BarChart3,
                title: "Ateliers",
                description: "Sessions de sensibilisation et de formation personnalisées",
              },
            ].map((benefit, i) => (
              <Card key={i} className="border-2 border-foreground text-center">
                <CardContent className="pt-6">
                  <benefit.icon className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rapport professionnel */}
      <section id="rapport" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Rapport professionnel</h2>
            <p className="text-muted-foreground mb-6">
              Des insights actionnables pour améliorer la performance et le bien-être de vos équipes.
            </p>
            
            <div className="space-y-4">
              {[
                "Cartographie des profils cognitifs de l'équipe",
                "Analyse des complémentarités et points de friction",
                "Recommandations d'aménagements organisationnels",
                "Indicateurs de suivi dans le temps",
                "Benchmark sectoriel anonymisé",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="border-2 border-foreground">
            <CardHeader>
              <FileText className="h-10 w-10 mb-2" />
              <CardTitle>Exemple de rapport</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-20 bg-muted rounded" />
                <div className="h-4 bg-muted rounded w-5/6" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
              <Button variant="outline" className="w-full mt-6 gap-2">
                <Play className="h-4 w-4" />
                Voir un exemple
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Test gratuit */}
      <section id="test-gratuit" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Test gratuit</h2>
            <p className="text-muted-foreground mb-8">
              Évaluez notre solution gratuitement avant de vous engager. Faites passer le test à 5 collaborateurs et recevez un aperçu du rapport d'équipe.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { number: "5", label: "Passations offertes" },
                { number: "1", label: "Rapport synthétique" },
                { number: "0€", label: "Sans engagement" },
              ].map((item, i) => (
                <div key={i} className="wireframe-card text-center">
                  <div className="text-4xl font-bold mb-2">{item.number}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
            
            <Link to="/test">
              <Button size="lg" className="gap-2">
                Démarrer l'essai gratuit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
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

          <Card className="border-2 border-foreground">
            <CardContent className="pt-6 space-y-6">
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
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo-form" className="border-t-2 border-foreground bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Demander une démo</h2>
            <p className="text-center text-muted-foreground mb-8">
              Un conseiller vous recontactera sous 24h
            </p>

            {formSubmitted ? (
              <Card className="border-2 border-foreground text-center py-12">
                <CardContent>
                  <Check className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Demande envoyée !</h3>
                  <p className="text-muted-foreground">
                    Merci pour votre intérêt. Notre équipe vous contactera très prochainement.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmitDemo}>
                <Card className="border-2 border-foreground">
                  <CardContent className="pt-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom</Label>
                        <Input id="prenom" placeholder="Jean" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom</Label>
                        <Input id="nom" placeholder="Dupont" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email professionnel</Label>
                      <Input id="email" type="email" placeholder="jean@entreprise.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="entreprise">Entreprise</Label>
                      <Input id="entreprise" placeholder="Nom de votre entreprise" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="taille">Taille de l'entreprise</Label>
                      <Input id="taille" placeholder="Ex: 50-200 collaborateurs" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Décrivez brièvement vos besoins..." 
                        className="min-h-24" 
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Envoyer ma demande
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe commerciale.
                    </p>
                  </CardContent>
                </Card>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
