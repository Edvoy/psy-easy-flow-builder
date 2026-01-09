import { Layout } from "@/components/layout/Layout";
import { TempProNav } from "@/components/TempProNav";
import { Button } from "@/components/ui/button";
import { Check, Users, FileText, Shield, ArrowRight, Brain, FlaskConical, BookOpen, Award, Clock, Zap, UserPlus, TrendingUp, Star, Handshake } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prosProfessionalImg from "@/assets/illustrations/pros-professional.png";

export default function Pros() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <TempProNav />
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium border-2 border-foreground rounded-full">
              Pour les professionnels
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Intégrez l'évaluation cognitive à votre pratique
            </h1>
            <p className="text-xl text-muted-foreground">
              Psychologues, thérapeutes et coachs : proposez à vos clients un outil d'évaluation 
              fiable et bienveillant avec des licences adaptées à votre volume.
            </p>
          </div>
          <img 
            src={prosProfessionalImg} 
            alt="Professionnel de santé mentale" 
            className="rounded-2xl w-full max-w-md mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* Bases scientifiques */}
      <section id="bases-scientifiques" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Bases Scientifiques</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Une méthodologie rigoureuse au service de votre pratique professionnelle.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <Brain className="h-10 w-10 mb-2" />
                <CardTitle>Fondements théoriques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Basé sur la théorie CHC et les avancées en neuropsychologie cognitive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <FlaskConical className="h-10 w-10 mb-2" />
                <CardTitle>Validation empirique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Validé sur 5000+ participants avec alpha de Cronbach {">"} 0.85.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2" />
                <CardTitle>Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Travaux publiés dans des revues à comité de lecture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardHeader>
                <Award className="h-10 w-10 mb-2" />
                <CardTitle>Normes françaises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Étalonnage réalisé sur la population française.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-background p-8 rounded-lg border-2 border-foreground max-w-3xl mx-auto">
            <h3 className="font-bold mb-4">Documentation technique incluse</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Manuel technique détaillé</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Guide d'interprétation</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Articles de validation</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Webinaires de formation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section id="avantages" className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Avantages pour les Professionnels</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Pourquoi plus de 500 professionnels font confiance à Psy-Easy.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Clock,
              title: "Gain de temps",
              description: "Automatisez la passation et la correction. Recevez les rapports instantanément.",
            },
            {
              icon: FileText,
              title: "Rapports professionnels",
              description: "Des rapports détaillés et personnalisables à partager avec vos clients.",
            },
            {
              icon: Shield,
              title: "Conformité RGPD",
              description: "Données hébergées en France, chiffrées et conformes aux réglementations.",
            },
            {
              icon: Users,
              title: "Suivi des clients",
              description: "Tableau de bord centralisé pour gérer tous vos clients et leurs évaluations.",
            },
            {
              icon: Zap,
              title: "Intégration facile",
              description: "Intégrez l'outil dans votre pratique existante sans formation complexe.",
            },
            {
              icon: Award,
              title: "Support dédié",
              description: "Une équipe à votre écoute pour vous accompagner dans l'utilisation.",
            },
          ].map((advantage, i) => (
            <Card key={i} className="border-2 border-foreground">
              <CardHeader>
                <advantage.icon className="h-10 w-10 mb-2" />
                <CardTitle>{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Réseau de partenaires */}
      <section id="reseau-partenaires" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-4">Intégrer notre Réseau de Partenaires</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Rejoignez un écosystème de professionnels certifiés et bénéficiez d'un flux régulier de nouveaux patients.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Avantages du réseau */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Star className="h-5 w-5" />
                Pourquoi rejoindre le réseau ?
              </h3>
              
              <div className="space-y-4">
                <Card className="border-2 border-foreground">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <UserPlus className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Apport de patientèle qualifiée</h4>
                        <p className="text-sm text-muted-foreground">
                          Recevez des patients pré-qualifiés par notre questionnaire, avec un profil cognitif détaillé avant même la première consultation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-foreground">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Flux régulier de demandes</h4>
                        <p className="text-sm text-muted-foreground">
                          Notre plateforme génère un flux constant de demandes de consultation. Les utilisateurs ayant complété leur profil sont orientés vers vous.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-foreground">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <Handshake className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Mise en relation simplifiée</h4>
                        <p className="text-sm text-muted-foreground">
                          Les patients vous contactent directement via la plateforme. Plus besoin de prospection, concentrez-vous sur votre cœur de métier.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Ce qui est inclus */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Award className="h-5 w-5" />
                Avantages partenaire certifié
              </h3>

              <Card className="border-2 border-foreground">
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    {[
                      "Profil visible dans l'annuaire des praticiens partenaires",
                      "Badge 'Praticien Psy-Easy Certifié' pour votre communication",
                      "Accès aux rapports détaillés de vos patients référés",
                      "Formation continue sur nos méthodologies",
                      "Priorité dans l'orientation des patients de votre zone",
                      "Statistiques mensuelles sur vos recommandations",
                      "Support dédié et communauté de praticiens",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full gap-2">
                      Rejoindre le réseau
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 bg-accent/50 rounded-lg border-2 border-foreground/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">+500 professionnels</strong> ont déjà rejoint notre réseau de praticiens certifiés dans toute la France.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="container py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Commander des licences</h2>
          <p className="text-center text-muted-foreground mb-8">
            Recevez un devis personnalisé sous 24h
          </p>

          <Card className="border-2 border-foreground">
            <CardContent className="pt-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Demande envoyée !</h3>
                  <p className="text-muted-foreground">
                    Notre équipe vous contactera sous 24h pour finaliser votre commande.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet</Label>
                      <Input id="name" placeholder="Dr. Marie Dupont" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email professionnel</Label>
                      <Input id="email" type="email" placeholder="contact@cabinet.fr" required />
                    </div>
                    <div>
                      <Label htmlFor="profession">Profession</Label>
                      <Input id="profession" placeholder="Psychologue, Thérapeute, Coach..." required />
                    </div>
                    <div>
                      <Label htmlFor="licenses">Nombre de licences souhaitées</Label>
                      <Input id="licenses" type="number" min="1" placeholder="10" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Paiement sécurisé • Facture professionnelle
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
