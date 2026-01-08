import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Equipe() {
  const team = [
    {
      name: "Dr. Marie Dupont",
      role: "Directrice Scientifique",
      description: "Docteure en psychologie cognitive, 15 ans d'expérience en recherche.",
    },
    {
      name: "Thomas Martin",
      role: "Directeur Technique",
      description: "Expert en développement d'applications de santé mentale.",
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Produit",
      description: "Spécialiste UX avec une passion pour l'accessibilité.",
    },
    {
      name: "Dr. Lucas Petit",
      role: "Chercheur Principal",
      description: "Neuroscientifique spécialisé dans l'évaluation cognitive.",
    },
  ];

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Notre Équipe</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Des experts passionnés au service de votre bien-être cognitif.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card key={member.name} className="border-2 border-foreground">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold text-center">{member.name}</h3>
                <p className="text-sm text-primary text-center mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground text-center">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
