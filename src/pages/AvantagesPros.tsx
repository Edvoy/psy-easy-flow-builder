import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, FileText, Shield, Users, Zap, Award } from "lucide-react";

export default function AvantagesPros() {
  const advantages = [
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Automatisez la passation et la correction. Recevez les rapports instantanément.",
    },
    {
      icon: FileText,
      title: "Rapports professionnels",
      description: "Des rapports détaillés et personnalisables que vous pouvez partager avec vos clients.",
    },
    {
      icon: Shield,
      title: "Conformité RGPD",
      description: "Données hébergées en France, chiffrées et conformes aux réglementations en vigueur.",
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
      description: "Une équipe à votre écoute pour vous accompagner dans l'utilisation de l'outil.",
    },
  ];

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Avantages pour les Professionnels</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Pourquoi plus de 500 professionnels font confiance à Psy-Easy.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((advantage) => (
            <Card key={advantage.title} className="border-2 border-foreground">
              <CardHeader>
                <advantage.icon className="h-10 w-10 mb-2" />
                <CardTitle>{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à optimiser votre pratique ?</h2>
          <p className="mb-6 opacity-90">
            Rejoignez les professionnels qui utilisent Psy-Easy au quotidien.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/pros">Découvrir nos offres</Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
}
