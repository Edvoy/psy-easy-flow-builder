import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      status: "completed",
      items: [
        "Lancement du questionnaire cognitif v1",
        "Rapport d'analyse basique",
        "Interface utilisateur responsive",
      ],
    },
    {
      quarter: "Q2 2025",
      status: "in-progress",
      items: [
        "Pack Premium avec analyse approfondie",
        "Espace professionnel pour psychologues",
        "Système de licences pour entreprises",
      ],
    },
    {
      quarter: "Q3 2025",
      status: "planned",
      items: [
        "Application mobile iOS et Android",
        "Intégration avec plateformes RH",
        "Nouveaux modules d'évaluation",
      ],
    },
    {
      quarter: "Q4 2025",
      status: "planned",
      items: [
        "Intelligence artificielle pour recommandations",
        "Suivi longitudinal des progrès",
        "API pour partenaires",
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600">Terminé</Badge>;
      case "in-progress":
        return <Badge className="bg-yellow-600">En cours</Badge>;
      default:
        return <Badge variant="outline">Planifié</Badge>;
    }
  };

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Feuille de Route</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Découvrez les fonctionnalités à venir et notre vision pour l'avenir.
        </p>

        <div className="space-y-8">
          {roadmapItems.map((quarter) => (
            <Card key={quarter.quarter} className="border-2 border-foreground">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(quarter.status)}
                    <CardTitle>{quarter.quarter}</CardTitle>
                  </div>
                  {getStatusBadge(quarter.status)}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {quarter.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-foreground rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
