import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check, CreditCard, Lock } from "lucide-react";
import premiumUnlockImg from "@/assets/illustrations/premium-unlock.png";

export default function Premium() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      navigate("/premium/success");
    }, 2000);
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src={premiumUnlockImg} 
              alt="Déverrouiller le contenu Premium" 
              className="w-32 h-32 mx-auto mb-6 rounded-2xl object-cover"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Débloquez l'analyse Premium
            </h1>
            <p className="text-muted-foreground">
              Accédez à votre rapport complet et personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="wireframe-card">
              <h2 className="text-xl font-bold mb-6">Votre commande</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Rapport complet</span>
                  <span className="font-bold">12,00€</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>12,00€</span>
                </div>
              </div>

              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <h3 className="font-bold">Ce qui est inclus :</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Rapport PDF détaillé (20+ pages)",
                    "Analyse personnalisée par axe",
                    "Recommandations d'aménagement",
                    "Pistes de développement personnel",
                    "Accès prioritaire à P-zy",
                    "Ressources exclusives",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Payment Form */}
            <div className="wireframe-card">
              <h2 className="text-xl font-bold mb-6">Paiement sécurisé</h2>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-name">Nom sur la carte</Label>
                  <Input 
                    id="card-name" 
                    placeholder="Jean Dupont" 
                    className="border-2"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card-number">Numéro de carte</Label>
                  <div className="relative">
                    <Input 
                      id="card-number" 
                      placeholder="4242 4242 4242 4242" 
                      className="border-2 pr-10"
                      required
                    />
                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Date d'expiration</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/AA" 
                      className="border-2"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input 
                      id="cvc" 
                      placeholder="123" 
                      className="border-2"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gap-2" 
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    "Traitement en cours..."
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      Payer 12,00€
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <Lock className="h-3 w-3" />
                  Paiement sécurisé par SSL
                </p>
              </form>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Garantie satisfait ou remboursé sous 14 jours.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
