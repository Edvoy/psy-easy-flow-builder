import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, Award, FlaskConical } from "lucide-react";

export default function BasesScientifiques() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Bases Scientifiques</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Une méthodologie rigoureuse au service de votre pratique professionnelle.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <Brain className="h-10 w-10 mb-2" />
              <CardTitle>Fondements théoriques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Notre questionnaire s'appuie sur les modèles cognitifs les plus récents, notamment la théorie CHC (Cattell-Horn-Carroll) et les avancées en neuropsychologie.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <FlaskConical className="h-10 w-10 mb-2" />
              <CardTitle>Validation empirique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Chaque échelle a été validée sur un échantillon représentatif de plus de 5000 participants, avec des indices de fiabilité (alpha de Cronbach) supérieurs à 0.85.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <BookOpen className="h-10 w-10 mb-2" />
              <CardTitle>Publications peer-reviewed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Nos travaux sont publiés dans des revues scientifiques à comité de lecture, garantissant la rigueur et la transparence de notre approche.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-foreground">
            <CardHeader>
              <Award className="h-10 w-10 mb-2" />
              <CardTitle>Normes françaises</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                L'étalonnage a été réalisé sur la population française, permettant des comparaisons pertinentes et culturellement adaptées.
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="bg-muted p-8 rounded-lg border-2 border-foreground">
          <h2 className="text-2xl font-bold mb-4">Pour les professionnels</h2>
          <p className="text-muted-foreground mb-4">
            En tant que professionnel, vous avez accès à la documentation technique complète incluant :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Manuel technique détaillé avec les propriétés psychométriques</li>
            <li>Guide d'interprétation des résultats</li>
            <li>Articles scientifiques de validation</li>
            <li>Webinaires de formation à l'outil</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
