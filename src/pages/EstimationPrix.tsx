import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import { Calculator, Check } from "lucide-react";

export default function EstimationPrix() {
  const [licenses, setLicenses] = useState(10);

  const getPricePerLicense = (count: number) => {
    if (count >= 100) return 6;
    if (count >= 50) return 7;
    if (count >= 20) return 8;
    if (count >= 10) return 9;
    return 10;
  };

  const pricePerLicense = getPricePerLicense(licenses);
  const totalPrice = licenses * pricePerLicense;
  const savings = licenses * 10 - totalPrice;

  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Estimation des Prix</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Simulez le coût de vos licences en fonction de vos besoins.
        </p>

        <Card className="border-2 border-foreground mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6" />
              <CardTitle>Simulateur de tarifs</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Nombre de licences</span>
                <span className="text-2xl font-bold">{licenses}</span>
              </div>
              <Slider
                value={[licenses]}
                onValueChange={(value) => setLicenses(value[0])}
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

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Prix unitaire</p>
                <p className="text-3xl font-bold">{pricePerLicense}€</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-3xl font-bold">{totalPrice}€</p>
              </div>
              <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm text-muted-foreground">Économies</p>
                <p className="text-3xl font-bold text-green-600">{savings}€</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-foreground mb-8">
          <CardHeader>
            <CardTitle>Grille tarifaire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
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
            </div>
          </CardContent>
        </Card>

        <div className="bg-muted p-6 rounded-lg border-2 border-foreground">
          <h3 className="font-bold mb-4">Chaque licence inclut :</h3>
          <ul className="space-y-2">
            {[
              "1 passation complète du questionnaire",
              "Rapport professionnel détaillé",
              "Export PDF personnalisable",
              "Accès au tableau de bord pro",
              "Support technique prioritaire",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link to="/pros">Demander un devis personnalisé</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
