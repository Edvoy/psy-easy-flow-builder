import { EntrepriseLayout } from "@/components/layout/EntrepriseLayout";
import { TempEntrepriseNav } from "@/components/TempEntrepriseNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Video, 
  Calendar,
  Users,
  Lightbulb,
  BookOpen,
  ArrowRight,
  Clock,
  Star
} from "lucide-react";

const managerKits = [
  {
    title: "Kit Manager HPI",
    description: "Comment accompagner un collaborateur à haut potentiel intellectuel.",
    type: "PDF",
    pages: 12,
    downloadCount: 234,
  },
  {
    title: "Kit Manager TDAH",
    description: "Aménagements et bonnes pratiques pour les profils TDAH.",
    type: "PDF",
    pages: 15,
    downloadCount: 189,
  },
  {
    title: "Kit Manager TSA",
    description: "Communication et environnement adaptés aux profils TSA.",
    type: "PDF",
    pages: 18,
    downloadCount: 156,
  },
  {
    title: "Guide de la neurodiversité",
    description: "Introduction complète à la neurodiversité en entreprise.",
    type: "PDF",
    pages: 32,
    downloadCount: 412,
  },
];

const workshops = [
  {
    title: "Sensibilisation à la neurodiversité",
    duration: "2h",
    format: "Présentiel ou visio",
    participants: "10-50",
    description: "Comprendre les différents profils et leurs forces.",
  },
  {
    title: "Manager des profils atypiques",
    duration: "Demi-journée",
    format: "Présentiel",
    participants: "10-20",
    description: "Techniques d'accompagnement pour les managers.",
  },
  {
    title: "Inclusion et aménagements",
    duration: "1h30",
    format: "Visio",
    participants: "Illimité",
    description: "Mettre en place des aménagements efficaces.",
  },
];

const webinars = [
  {
    title: "Les forces cachées des profils HPI",
    date: "15 janvier 2026",
    time: "14h00",
    speaker: "Dr. Marie Lambert",
    registered: 124,
  },
  {
    title: "TDAH au travail : mythes et réalités",
    date: "22 janvier 2026",
    time: "11h00",
    speaker: "Jean-Marc Duval",
    registered: 89,
  },
];

export default function EntrepriseRessources() {
  return (
    <EntrepriseLayout>
      <TempEntrepriseNav />
      <div className="p-6 md:p-8 space-y-8 pb-24">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Ressources</h1>
          <p className="text-muted-foreground">
            Kits manager, guides pratiques et formations pour accompagner vos équipes.
          </p>
        </div>

        {/* Manager Kits */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Kits Manager</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {managerKits.map((kit, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{kit.title}</h3>
                        <Badge variant="outline">{kit.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{kit.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{kit.pages} pages</span>
                        <span>{kit.downloadCount} téléchargements</span>
                      </div>
                    </div>
                    <Button variant="outline" size="icon" className="shrink-0">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Workshops */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Ateliers & Formations</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {workshops.map((workshop, index) => (
              <Card key={index} className="border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{workshop.description}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      <span>{workshop.format}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{workshop.participants} participants</span>
                    </div>
                  </div>
                  <Button className="w-full gap-2">
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Webinars */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Webinaires à venir</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold mb-1">{webinar.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Par {webinar.speaker}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{webinar.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <Badge variant="secondary" className="mb-2">
                        {webinar.registered} inscrits
                      </Badge>
                      <Button size="sm">S'inscrire</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommended Articles */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Articles recommandés</h2>
          </div>
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 shrink-0" />
                  <div>
                    <h4 className="font-medium">10 aménagements simples</h4>
                    <p className="text-sm text-muted-foreground">Pour tous les profils</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 shrink-0" />
                  <div>
                    <h4 className="font-medium">Entretien annuel adapté</h4>
                    <p className="text-sm text-muted-foreground">Guide pratique</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-yellow-500 shrink-0" />
                  <div>
                    <h4 className="font-medium">Recruter neurodivers</h4>
                    <p className="text-sm text-muted-foreground">Bonnes pratiques</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <Card className="border-2 bg-accent/30">
          <CardContent className="p-6 text-center">
            <Lightbulb className="h-10 w-10 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Besoin d'un accompagnement sur-mesure ?</h3>
            <p className="text-muted-foreground mb-4">
              Notre équipe peut créer des contenus adaptés à votre contexte spécifique.
            </p>
            <Button>Contactez-nous</Button>
          </CardContent>
        </Card>
      </div>
    </EntrepriseLayout>
  );
}
