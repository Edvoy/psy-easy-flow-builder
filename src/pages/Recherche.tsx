import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Brain, Users } from "lucide-react";

export default function Recherche() {
  const publications = [
    {
      title: "Validation du questionnaire cognitif Psy-Easy",
      journal: "Journal de Psychologie Cognitive",
      year: "2024",
    },
    {
      title: "Étude longitudinale sur l'auto-évaluation cognitive",
      journal: "Revue Européenne de Neurosciences",
      year: "2023",
    },
    {
      title: "Impact des outils numériques sur la conscience de soi",
      journal: "Frontiers in Psychology",
      year: "2023",
    },
  ];

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Recherche</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Notre engagement pour une approche scientifique rigoureuse.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <Brain className="h-10 w-10 mb-2" />
              <CardTitle>Neurosciences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos tests s'appuient sur les dernières découvertes en neurosciences cognitives.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <Users className="h-10 w-10 mb-2" />
              <CardTitle>Études cliniques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Validation auprès de milliers de participants pour garantir la fiabilité.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <FileText className="h-10 w-10 mb-2" />
              <CardTitle>Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos résultats sont publiés dans des revues scientifiques de référence.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6">Publications récentes</h2>
        <div className="space-y-4">
          {publications.map((pub) => (
            <Card key={pub.title} className="border-2 border-foreground">
              <CardContent className="py-4">
                <h3 className="font-semibold">{pub.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {pub.journal} • {pub.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
