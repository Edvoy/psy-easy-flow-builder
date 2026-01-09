import { ProLayout } from "@/components/layout/ProLayout";
import { TempProNav } from "@/components/TempProNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  Star,
  Eye,
  ArrowRight,
  Calendar,
  MessageSquare,
  Award
} from "lucide-react";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Link } from "react-router-dom";

const monthlyData = [
  { name: "Juil", clients: 4 },
  { name: "Août", clients: 6 },
  { name: "Sep", clients: 8 },
  { name: "Oct", clients: 12 },
  { name: "Nov", clients: 15 },
  { name: "Déc", clients: 11 },
];

const recentClients = [
  { id: 1, date: "08/01/2026", profile: "HPI", status: "Premier RDV planifié" },
  { id: 2, date: "05/01/2026", profile: "TDAH", status: "En suivi" },
  { id: 3, date: "02/01/2026", profile: "TSA", status: "En suivi" },
];

export default function ProDashboard() {
  return (
    <ProLayout>
      <TempProNav />
      <div className="p-6 md:p-8 space-y-8 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">Bonjour, Dr. Dupont</h1>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Award className="h-3 w-3 mr-1" />
                Certifié
              </Badge>
            </div>
            <p className="text-muted-foreground">Voici un aperçu de votre activité partenaire</p>
          </div>
          <Button className="gap-2">
            <Calendar className="h-4 w-4" />
            Gérer mes disponibilités
          </Button>
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
                  <p className="text-2xl font-bold">56</p>
                  <p className="text-sm text-muted-foreground">Clients total</p>
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
                  <p className="text-2xl font-bold">11</p>
                  <p className="text-sm text-muted-foreground">Ce mois</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.9</p>
                  <p className="text-sm text-muted-foreground">Note moyenne</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold">234</p>
                  <p className="text-sm text-muted-foreground">Vues profil</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts & Recent */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Clients via Psy-Easy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--background))",
                        border: "2px solid hsl(var(--foreground))"
                      }}
                    />
                    <Bar dataKey="clients" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Derniers clients</CardTitle>
              <Link to="/pro/clients">
                <Button variant="ghost" size="sm" className="gap-1">
                  Voir tous
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-3 border-2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center text-sm font-bold">
                      #{client.id}
                    </div>
                    <div>
                      <p className="font-medium">Client #{client.id}</p>
                      <p className="text-sm text-muted-foreground">{client.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">{client.profile}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{client.status}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/pro/profil">
            <Card className="border-2 hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <Eye className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Voir mon profil public</p>
                  <p className="text-sm text-muted-foreground">Tel que vu par les utilisateurs</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </CardContent>
            </Card>
          </Link>
          <Link to="/pro/ressources">
            <Card className="border-2 hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <MessageSquare className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Nouveaux protocoles</p>
                  <p className="text-sm text-muted-foreground">3 ressources ajoutées</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </CardContent>
            </Card>
          </Link>
          <Link to="/pro/parametres">
            <Card className="border-2 hover:bg-accent/50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <Award className="h-6 w-6" />
                <div>
                  <p className="font-semibold">Gérer mon compte</p>
                  <p className="text-sm text-muted-foreground">Paramètres et préférences</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </ProLayout>
  );
}
