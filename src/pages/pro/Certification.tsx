import { ProLayout } from "@/components/layout/ProLayout";
import { TempProNav } from "@/components/TempProNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  GraduationCap,
  CheckCircle2,
  Clock,
  Lock,
  Play,
  Award,
  FileText,
  Calendar,
  ArrowRight
} from "lucide-react";

const certificationSteps = [
  {
    id: 1,
    title: "Inscription validée",
    description: "Votre dossier a été accepté",
    status: "completed",
    date: "15/11/2025",
  },
  {
    id: 2,
    title: "Formation en ligne",
    description: "4 modules de formation (8h)",
    status: "completed",
    date: "22/11/2025",
  },
  {
    id: 3,
    title: "Examen de certification",
    description: "QCM de 60 questions",
    status: "completed",
    date: "01/12/2025",
  },
  {
    id: 4,
    title: "Certification obtenue",
    description: "Vous êtes partenaire certifié Psy-Easy",
    status: "completed",
    date: "01/12/2025",
  },
];

const trainingModules = [
  {
    id: 1,
    title: "Introduction à Psy-Easy",
    duration: "1h30",
    status: "completed",
    score: 95,
  },
  {
    id: 2,
    title: "Comprendre les résultats",
    duration: "2h",
    status: "completed",
    score: 88,
  },
  {
    id: 3,
    title: "Accompagnement post-test",
    duration: "2h30",
    status: "completed",
    score: 92,
  },
  {
    id: 4,
    title: "Éthique et déontologie",
    duration: "2h",
    status: "completed",
    score: 100,
  },
];

const continuingEducation = [
  {
    title: "Nouveautés HPI 2026",
    date: "15/02/2026",
    duration: "2h",
    type: "Webinaire",
    required: true,
  },
  {
    title: "TDAH chez l'adulte",
    date: "01/03/2026",
    duration: "3h",
    type: "Formation",
    required: false,
  },
  {
    title: "Outils de communication",
    date: "15/03/2026",
    duration: "1h30",
    type: "Atelier",
    required: false,
  },
];

export default function ProCertification() {
  return (
    <ProLayout>
      <TempProNav />
      <div className="p-6 md:p-8 space-y-8 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Certification</h1>
            <p className="text-muted-foreground">
              Gérez votre certification et accédez à la formation continue
            </p>
          </div>
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-base py-2 px-4">
            <Award className="h-4 w-4 mr-2" />
            Certifié jusqu'au 01/12/2026
          </Badge>
        </div>

        {/* Certification Timeline */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Parcours de certification</CardTitle>
            <CardDescription>Votre progression vers la certification Psy-Easy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {certificationSteps.map((step, index) => (
                <div key={step.id} className="flex gap-4 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      step.status === "completed" 
                        ? "bg-green-100 border-green-500 text-green-600" 
                        : step.status === "current"
                        ? "bg-blue-100 border-blue-500 text-blue-600"
                        : "bg-muted border-muted-foreground/30 text-muted-foreground"
                    }`}>
                      {step.status === "completed" ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : step.status === "current" ? (
                        <Clock className="h-5 w-5" />
                      ) : (
                        <Lock className="h-5 w-5" />
                      )}
                    </div>
                    {index < certificationSteps.length - 1 && (
                      <div className={`w-0.5 flex-1 mt-2 ${
                        step.status === "completed" ? "bg-green-500" : "bg-muted"
                      }`} />
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{step.title}</h4>
                      {step.status === "completed" && (
                        <span className="text-xs text-muted-foreground">{step.date}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Training Modules */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Modules de formation</CardTitle>
            <CardDescription>Vos résultats aux modules de certification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trainingModules.map((module) => (
                <div key={module.id} className="flex items-center justify-between p-4 border-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <p className="text-sm text-muted-foreground">{module.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-lg">{module.score}%</p>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Validé
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Continuing Education */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Formation continue</CardTitle>
            <CardDescription>
              Maintenez votre certification avec les formations obligatoires et optionnelles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-accent/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Progression annuelle</span>
                <span className="text-sm">4h / 8h requises</span>
              </div>
              <Progress value={50} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">
                Vous devez compléter 8h de formation continue avant le 01/12/2026
              </p>
            </div>

            <div className="space-y-3">
              {continuingEducation.map((formation, index) => (
                <div key={index} className="flex items-center justify-between p-4 border-2 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{formation.title}</h4>
                        {formation.required && (
                          <Badge variant="destructive" className="text-xs">Obligatoire</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {formation.date} • {formation.duration} • {formation.type}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" className="gap-1">
                    S'inscrire
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certificate Download */}
        <Card className="border-2 bg-accent/30">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileText className="h-10 w-10" />
              <div>
                <h3 className="font-bold">Certificat officiel</h3>
                <p className="text-sm text-muted-foreground">
                  Téléchargez votre certificat de partenaire Psy-Easy
                </p>
              </div>
            </div>
            <Button className="gap-2">
              <FileText className="h-4 w-4" />
              Télécharger le PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </ProLayout>
  );
}
