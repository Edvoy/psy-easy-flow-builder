import { Layout } from "@/components/layout/Layout";
import { TempProNav } from "@/components/TempProNav";
import { Button } from "@/components/ui/button";
import { Check, Users, FileText, Shield, ArrowRight, Brain, FlaskConical, BookOpen, Award, Clock, Zap, Calculator } from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pros() {
  const [licenseCount, setLicenseCount] = useState([10]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const getPricePerLicense = (count: number) => {
    if (count >= 100) return 6;
    if (count >= 50) return 7;
    if (count >= 20) return 8;
    if (count >= 10) return 9;
    return 10;
  };

  const pricePerLicense = getPricePerLicense(licenseCount[0]);
  const totalPrice = licenseCount[0] * pricePerLicense;
  const savings = licenseCount[0] * 10 - totalPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <TempProNav />
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
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

      {/* Estimation des prix */}
      <section id="estimation-prix" className="border-y-2 border-foreground bg-muted/30">
        <div className="container py-16 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-4">Estimation des Prix</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Simulez le coût de vos licences en fonction de vos besoins.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Simulateur */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6" />
                  <CardTitle>Simulateur de tarif</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Nombre de licences</span>
                    <span className="text-2xl font-bold">{licenseCount[0]}</span>
                  </div>
                  <Slider
                    value={licenseCount}
                    onValueChange={setLicenseCount}
                    min={1}
                    max={200}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1</span>
                    <span>200+</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Prix unitaire</p>
                    <p className="text-2xl font-bold">{pricePerLicense}€</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">{totalPrice}€</p>
                  </div>
                  <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <p className="text-xs text-muted-foreground">Économies</p>
                    <p className="text-2xl font-bold text-green-600">{savings}€</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grille tarifaire */}
            <Card className="border-2 border-foreground">
              <CardHeader>
                <CardTitle>Grille tarifaire</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Quantité</th>
                      <th className="text-right py-3">Prix unitaire</th>
                      <th className="text-right py-3">Réduction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">1 - 9 licences</td>
                      <td className="text-right">10€</td>
                      <td className="text-right">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">10 - 19 licences</td>
                      <td className="text-right">9€</td>
                      <td className="text-right text-green-600">-10%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">20 - 49 licences</td>
                      <td className="text-right">8€</td>
                      <td className="text-right text-green-600">-20%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">50 - 99 licences</td>
                      <td className="text-right">7€</td>
                      <td className="text-right text-green-600">-30%</td>
                    </tr>
                    <tr>
                      <td className="py-3">100+ licences</td>
                      <td className="text-right">6€</td>
                      <td className="text-right text-green-600">-40%</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="font-medium mb-2">Chaque licence inclut :</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> 1 passation complète</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Rapport professionnel</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-600" /> Export PDF</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
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
