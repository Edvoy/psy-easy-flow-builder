import { Layout } from "@/components/layout/Layout";
import { TempProNav } from "@/components/TempProNav";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Clock, FileText, Shield, Users, Zap, Award, Star, UserPlus, TrendingUp, Handshake, Network, BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";
import { BrandIcon } from "@/components/BrandPicto";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
              Devenir Partenaire
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez notre réseau de partenaires experts
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Psychologues, thérapeutes, coachs : développez votre activité en intégrant un écosystème 
              de professionnels reconnus et bénéficiez d'un flux constant de nouveaux patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#devenir-partenaire">
                  Devenir partenaire
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#avantages">
                  Découvrir les avantages
                </a>
              </Button>
            </div>
          </div>
          <img 
            src={prosProfessionalImg} 
            alt="Réseau de partenaires Psy-Easy" 
            className="rounded-2xl w-full max-w-md mx-auto shadow-lg"
          />
        </div>
      </section>

      {/* Statistiques clés */}
      <section className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-muted-foreground text-sm">Partenaires actifs</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">15 000+</p>
              <p className="text-muted-foreground text-sm">Orientations par mois</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-muted-foreground text-sm">Satisfaction partenaires</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">72h</p>
              <p className="text-muted-foreground text-sm">Délai moyen d'orientation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi devenir partenaire */}
      <section id="avantages" className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Pourquoi devenir partenaire Psy-Easy ?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Rejoindre notre réseau, c'est intégrer un écosystème qui valorise votre expertise 
          et vous connecte directement à des patients pré-qualifiés.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <UserPlus className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Flux de clientèle qualifiée</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Recevez des patients pré-évalués par notre outil, avec un profil cognitif détaillé 
                avant même la première consultation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <BadgeCheck className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Reconnaissance scientifique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Associez votre pratique à un outil validé scientifiquement, basé sur la théorie CHC 
                et étalonnage français.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <Network className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Réseau de pairs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Intégrez une communauté de professionnels certifiés pour échanger, collaborer 
                et vous enrichir mutuellement.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <TrendingUp className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Développement d'activité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Augmentez votre visibilité auprès de milliers d'utilisateurs qui recherchent 
                un accompagnement professionnel adapté.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <FileText className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Rapports professionnels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Accédez aux rapports détaillés de vos patients orientés, facilitant 
                la prise en charge dès le premier rendez-vous.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <HeartHandshake className="h-10 w-10 mb-2 text-primary" />
              <CardTitle>Accompagnement dédié</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Bénéficiez d'un support personnalisé et de formations continues 
                sur nos méthodologies d'évaluation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-4">Comment fonctionne le partenariat ?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Un processus simple pour intégrer notre réseau et commencer à recevoir des patients.
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-foreground flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Candidature</h3>
              <p className="text-sm text-muted-foreground">
                Remplissez le formulaire de candidature avec vos informations professionnelles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-foreground flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Validation</h3>
              <p className="text-sm text-muted-foreground">
                Notre équipe vérifie vos qualifications et vous contacte sous 48h.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-foreground flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Intégration</h3>
              <p className="text-sm text-muted-foreground">
                Créez votre profil public, définissez vos spécialités et zones d'intervention.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border-2 border-foreground flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2">Réception</h3>
              <p className="text-sm text-muted-foreground">
                Recevez vos premiers patients orientés par notre plateforme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-muted-foreground mb-8">
              En tant que partenaire certifié Psy-Easy, vous bénéficiez d'un ensemble complet 
              d'outils et d'avantages pour développer votre pratique.
            </p>

            <div className="space-y-4">
              {[
                { icon: Star, text: "Profil visible dans l'annuaire des partenaires certifiés" },
                { icon: BadgeCheck, text: "Badge 'Praticien Psy-Easy Certifié' pour votre communication" },
                { icon: FileText, text: "Accès aux rapports détaillés de vos patients référés" },
                { icon: Users, text: "Communauté privée de praticiens pour échanger" },
                { icon: TrendingUp, text: "Statistiques mensuelles sur vos orientations" },
                { icon: Sparkles, text: "Priorité d'orientation dans votre zone géographique" },
                { icon: Award, text: "Formation continue sur nos méthodologies" },
                { icon: Zap, text: "Support dédié et réactif" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-2 border-foreground bg-muted/30">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-2">Partenariat</p>
                <p className="text-4xl font-bold mb-2">Gratuit</p>
                <p className="text-muted-foreground text-sm">
                  Aucun frais d'adhésion, aucune commission sur vos consultations
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Visibilité dans l'annuaire",
                  "Réception de patients qualifiés",
                  "Badge certifié",
                  "Accès aux rapports patients",
                  "Support dédié",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full gap-2" size="lg" asChild>
                <a href="#devenir-partenaire">
                  Rejoindre le réseau
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bases scientifiques */}
      <section id="bases-scientifiques" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-4">Reconnu scientifiquement</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Associez votre expertise à un outil rigoureux et validé.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-foreground">
              <CardHeader>
                <BrandIcon type="brain" size="lg" variant="primary" />
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
                <BrandIcon type="flask" size="lg" variant="teal" />
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
                <BrandIcon type="book" size="lg" variant="pink" />
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
                <BrandIcon type="award" size="lg" variant="mint" />
                <CardTitle>Normes françaises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Étalonnage réalisé sur la population française.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulaire de candidature */}
      <section id="devenir-partenaire" className="container py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Devenir partenaire</h2>
          <p className="text-center text-muted-foreground mb-8">
            Complétez votre candidature et rejoignez notre réseau de praticiens certifiés.
          </p>

          <Card className="border-2 border-foreground">
            <CardContent className="pt-6">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-foreground flex items-center justify-center">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Candidature envoyée !</h3>
                  <p className="text-muted-foreground">
                    Notre équipe étudiera votre dossier et vous contactera sous 48h pour finaliser votre intégration.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Marie" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Dupont" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email professionnel</Label>
                      <Input id="email" type="email" placeholder="contact@cabinet.fr" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" type="tel" placeholder="06 12 34 56 78" required />
                    </div>
                    <div>
                      <Label htmlFor="profession">Profession</Label>
                      <Input id="profession" placeholder="Psychologue, Thérapeute, Coach..." required />
                    </div>
                    <div>
                      <Label htmlFor="location">Ville / Zone d'exercice</Label>
                      <Input id="location" placeholder="Paris, Lyon, Marseille..." required />
                    </div>
                    <div>
                      <Label htmlFor="specialties">Spécialités (optionnel)</Label>
                      <Input id="specialties" placeholder="HPI, TDA/H, TSA, anxiété..." />
                    </div>
                    <div>
                      <Label htmlFor="motivation">Pourquoi souhaitez-vous rejoindre le réseau ?</Label>
                      <Textarea 
                        id="motivation" 
                        placeholder="Décrivez brièvement votre pratique et vos motivations..."
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full gap-2" size="lg">
                    Envoyer ma candidature
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez nos conditions de partenariat. 
                    Nous vérifions les qualifications de chaque candidat.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Témoignages */}
      <section className="border-t-2 border-foreground bg-muted/30">
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos partenaires</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-foreground">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Depuis que j'ai rejoint le réseau, je reçois régulièrement des patients pré-évalués. 
                  Les rapports détaillés me font gagner un temps précieux en consultation."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                    SD
                  </div>
                  <div>
                    <p className="font-bold text-sm">Dr. Sophie D.</p>
                    <p className="text-xs text-muted-foreground">Psychologue, Paris</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Le partenariat m'a permis de développer mon cabinet tout en restant concentré 
                  sur mon cœur de métier. Je recommande vivement."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                    ML
                  </div>
                  <div>
                    <p className="font-bold text-sm">Marc L.</p>
                    <p className="text-xs text-muted-foreground">Coach certifié, Lyon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-foreground">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "La communauté de praticiens est enrichissante. On échange régulièrement 
                  sur nos pratiques et on se forme mutuellement."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                    CB
                  </div>
                  <div>
                    <p className="font-bold text-sm">Claire B.</p>
                    <p className="text-xs text-muted-foreground">Thérapeute, Bordeaux</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
