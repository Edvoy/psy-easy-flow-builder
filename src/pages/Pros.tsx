import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Users, FileText, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Pros() {
  const [licenseCount, setLicenseCount] = useState([10]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const pricePerLicense = licenseCount[0] >= 50 ? 8 : licenseCount[0] >= 20 ? 9 : 10;
  const totalPrice = licenseCount[0] * pricePerLicense;

  const features = [
    "Questionnaire complet multi-axes",
    "Rapport détaillé pour chaque client",
    "Interface professionnelle dédiée",
    "Suivi des passations",
    "Export des résultats en PDF",
    "Support prioritaire",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout isLoggedIn={false}>
      <div className="py-16">
        <div className="container max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium border-2 border-foreground rounded-full">
              Pour les professionnels
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Intégrez l'évaluation cognitive à votre pratique
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Psychologues, thérapeutes et coachs : proposez à vos clients un outil d'évaluation 
              fiable et bienveillant avec des licences adaptées à votre volume.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Ce que vous obtenez</h2>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Benefits cards */}
              <div className="grid gap-4">
                <div className="wireframe-card">
                  <Users className="h-8 w-8 mb-3" />
                  <h3 className="font-bold mb-1">Licences flexibles</h3>
                  <p className="text-sm text-muted-foreground">
                    Achetez le nombre de passations dont vous avez besoin, sans engagement.
                  </p>
                </div>
                <div className="wireframe-card">
                  <FileText className="h-8 w-8 mb-3" />
                  <h3 className="font-bold mb-1">Rapports professionnels</h3>
                  <p className="text-sm text-muted-foreground">
                    Des rapports détaillés que vous pouvez partager avec vos clients.
                  </p>
                </div>
                <div className="wireframe-card">
                  <Shield className="h-8 w-8 mb-3" />
                  <h3 className="font-bold mb-1">Confidentialité garantie</h3>
                  <p className="text-sm text-muted-foreground">
                    Données hébergées en France, conformité RGPD.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Pricing + Form */}
            <div className="wireframe-card">
              <h2 className="text-2xl font-bold mb-6">Simulateur de tarif</h2>
              
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Nombre de licences</span>
                  <span className="font-bold">{licenseCount[0]} licences</span>
                </div>
                <Slider
                  value={licenseCount}
                  onValueChange={setLicenseCount}
                  min={5}
                  max={100}
                  step={5}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5</span>
                  <span>50</span>
                  <span>100</span>
                </div>
              </div>

              <div className="p-4 bg-accent/30 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span>Prix par licence</span>
                  <span className="font-bold">{pricePerLicense}€</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-2xl">{totalPrice}€</span>
                </div>
                {licenseCount[0] >= 20 && (
                  <p className="text-sm text-muted-foreground mt-2">
                    ✓ Tarif dégressif appliqué
                  </p>
                )}
              </div>

              <hr className="my-6 border-border" />

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
                  <h3 className="font-bold mb-2">Commander des licences</h3>
                  
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
