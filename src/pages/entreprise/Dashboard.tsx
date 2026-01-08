import { EntrepriseLayout } from "@/components/layout/EntrepriseLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2,
  ArrowRight,
  Brain,
  Zap,
  Eye,
  Puzzle
} from "lucide-react";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { Link } from "react-router-dom";

const radarData = [
  { axis: "HPI", value: 45 },
  { axis: "TDA", value: 28 },
  { axis: "TDAH", value: 35 },
  { axis: "TSA", value: 22 },
  { axis: "DYS", value: 18 },
];

const completionData = [
  { name: "Sem 1", completed: 12 },
  { name: "Sem 2", completed: 28 },
  { name: "Sem 3", completed: 45 },
  { name: "Sem 4", completed: 67 },
];

const recommendations = [
  {
    priority: "haute",
    title: "Sensibilisation TDAH",
    description: "35% de votre équipe présente des traits TDAH. Proposez un atelier sur l'organisation du travail.",
    action: "Planifier un atelier",
  },
  {
    priority: "moyenne",
    title: "Aménagements HPI",
    description: "Les profils HPI représentent 45% de l'équipe. Envisagez des missions stimulantes variées.",
    action: "Voir les recommandations",
  },
  {
    priority: "info",
    title: "Communication inclusive",
    description: "Adaptez vos canaux de communication pour les profils TSA (consignes écrites, délais clairs).",
    action: "Télécharger le guide",
  },
];

const priorityStyles = {
  haute: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  moyenne: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
};

export default function EntrepriseDashboard() {
  return (
    <EntrepriseLayout>
      <div className="p-6 md:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Entreprise</h1>
            <p className="text-muted-foreground">Vue d'ensemble de votre équipe</p>
          </div>
          <div className="flex gap-2">
            <Link to="/entreprise/invitations">
              <Button variant="outline">Inviter des salariés</Button>
            </Link>
            <Button>Exporter le rapport</Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">67</p>
                  <p className="text-sm text-muted-foreground">Salariés inscrits</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">54</p>
                  <p className="text-sm text-muted-foreground">Tests complétés</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">81%</p>
                  <p className="text-sm text-muted-foreground">Taux de complétion</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Actions suggérées</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Répartition des profils</CardTitle>
              <p className="text-sm text-muted-foreground">
                Données agrégées de votre équipe (sans identification individuelle)
              </p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="axis" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <Radar
                      name="Équipe"
                      dataKey="value"
                      stroke="hsl(var(--foreground))"
                      fill="hsl(var(--foreground))"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {radarData.map((item) => (
                  <div key={item.axis} className="text-center">
                    <p className="text-lg font-bold">{item.value}%</p>
                    <p className="text-xs text-muted-foreground">{item.axis}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Progression des inscriptions</CardTitle>
              <p className="text-sm text-muted-foreground">Tests complétés par semaine</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={completionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--background))",
                        border: "2px solid hsl(var(--foreground))"
                      }}
                    />
                    <Bar dataKey="completed" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Recommandations prioritaires
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Actions suggérées basées sur les profils de votre équipe
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start justify-between gap-4 p-4 border-2 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={priorityStyles[rec.priority as keyof typeof priorityStyles]}>
                      {rec.priority}
                    </Badge>
                    <h4 className="font-semibold">{rec.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </div>
                <Button variant="outline" size="sm" className="gap-1 shrink-0">
                  {rec.action}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/entreprise/equipe">
            <Card className="border-2 hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <Users className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Voir l'équipe</p>
                  <p className="text-sm text-muted-foreground">Liste anonymisée</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </CardContent>
            </Card>
          </Link>
          <Link to="/entreprise/ressources">
            <Card className="border-2 hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <Puzzle className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Kits manager</p>
                  <p className="text-sm text-muted-foreground">Guides et outils</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </CardContent>
            </Card>
          </Link>
          <Link to="/entreprise/invitations">
            <Card className="border-2 hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <Zap className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Inviter l'équipe</p>
                  <p className="text-sm text-muted-foreground">Lien ou email</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </EntrepriseLayout>
  );
}
