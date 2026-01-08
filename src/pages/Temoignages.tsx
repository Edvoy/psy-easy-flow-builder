import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Temoignages() {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Particulier",
      rating: 5,
      text: "Le questionnaire m'a vraiment aidée à mieux me comprendre. Le rapport Premium vaut largement son prix !",
    },
    {
      name: "Dr. Jean-Pierre M.",
      role: "Psychologue",
      rating: 5,
      text: "Un outil précieux pour ma pratique clinique. Les rapports sont clairs et scientifiquement solides.",
    },
    {
      name: "Sophie D.",
      role: "DRH",
      rating: 5,
      text: "Nous utilisons Psy-Easy pour nos recrutements. Les insights sur les profils cognitifs sont très pertinents.",
    },
    {
      name: "Thomas R.",
      role: "Coach professionnel",
      rating: 4,
      text: "Excellent complément à mes séances de coaching. Mes clients apprécient la précision des résultats.",
    },
    {
      name: "Claire B.",
      role: "Particulier",
      rating: 5,
      text: "Simple, rapide et très instructif. Je recommande à tous ceux qui veulent mieux se connaître.",
    },
    {
      name: "Antoine G.",
      role: "Thérapeute",
      rating: 5,
      text: "La plateforme est intuitive et les licences professionnelles offrent un excellent rapport qualité-prix.",
    },
  ];

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-4">Témoignages</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Découvrez ce que nos utilisateurs disent de Psy-Easy.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-foreground">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
