import { EntrepriseLayout } from "@/components/layout/EntrepriseLayout";
import { TempEntrepriseNav } from "@/components/TempEntrepriseNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter,
  Eye,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: number;
  anonymousId: string;
  department: string;
  status: "completed" | "in_progress" | "pending";
  completedAt?: string;
  dominantProfile?: string;
  score?: number;
}

const teamMembers: TeamMember[] = [
  { id: 1, anonymousId: "Salarié #001", department: "Tech", status: "completed", completedAt: "12/01/2026", dominantProfile: "HPI", score: 78 },
  { id: 2, anonymousId: "Salarié #002", department: "Marketing", status: "completed", completedAt: "11/01/2026", dominantProfile: "TDAH", score: 65 },
  { id: 3, anonymousId: "Salarié #003", department: "Tech", status: "completed", completedAt: "10/01/2026", dominantProfile: "HPI", score: 82 },
  { id: 4, anonymousId: "Salarié #004", department: "RH", status: "in_progress" },
  { id: 5, anonymousId: "Salarié #005", department: "Finance", status: "completed", completedAt: "09/01/2026", dominantProfile: "TSA", score: 58 },
  { id: 6, anonymousId: "Salarié #006", department: "Tech", status: "pending" },
  { id: 7, anonymousId: "Salarié #007", department: "Marketing", status: "completed", completedAt: "08/01/2026", dominantProfile: "DYS", score: 45 },
  { id: 8, anonymousId: "Salarié #008", department: "Tech", status: "completed", completedAt: "07/01/2026", dominantProfile: "HPI", score: 71 },
  { id: 9, anonymousId: "Salarié #009", department: "Support", status: "in_progress" },
  { id: 10, anonymousId: "Salarié #010", department: "Finance", status: "completed", completedAt: "06/01/2026", dominantProfile: "TDA", score: 52 },
];

const statusConfig = {
  completed: { label: "Complété", icon: CheckCircle2, className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  in_progress: { label: "En cours", icon: Clock, className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
  pending: { label: "En attente", icon: AlertCircle, className: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
};

export default function EntrepriseEquipe() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch = 
      member.anonymousId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || member.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: teamMembers.length,
    completed: teamMembers.filter(m => m.status === "completed").length,
    inProgress: teamMembers.filter(m => m.status === "in_progress").length,
    pending: teamMembers.filter(m => m.status === "pending").length,
  };

  return (
    <EntrepriseLayout>
      <TempEntrepriseNav />
      <div className="p-6 md:p-8 space-y-8 pb-24">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Équipe</h1>
          <p className="text-muted-foreground">
            Liste anonymisée de vos salariés inscrits. Aucune donnée individuelle n'est accessible.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{stats.total}</p>
              <p className="text-sm text-muted-foreground">Total</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
              <p className="text-sm text-muted-foreground">Complétés</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-yellow-600">{stats.inProgress}</p>
              <p className="text-sm text-muted-foreground">En cours</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-gray-500">{stats.pending}</p>
              <p className="text-sm text-muted-foreground">En attente</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher par ID ou département..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={statusFilter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(null)}
            >
              Tous
            </Button>
            <Button
              variant={statusFilter === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("completed")}
            >
              Complétés
            </Button>
            <Button
              variant={statusFilter === "in_progress" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("in_progress")}
            >
              En cours
            </Button>
            <Button
              variant={statusFilter === "pending" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("pending")}
            >
              En attente
            </Button>
          </div>
        </div>

        {/* Team List */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Liste des salariés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 px-4 py-2 bg-accent/50 rounded-md font-medium text-sm">
                <span>ID</span>
                <span>Département</span>
                <span>Statut</span>
                <span>Date</span>
                <span>Profil dominant</span>
                <span>Score</span>
              </div>
              
              {/* Table Rows */}
              {filteredMembers.map((member) => {
                const StatusIcon = statusConfig[member.status].icon;
                return (
                  <div key={member.id} className="grid grid-cols-6 gap-4 px-4 py-3 border-2 rounded-md items-center">
                    <span className="font-medium">{member.anonymousId}</span>
                    <span className="text-muted-foreground">{member.department}</span>
                    <Badge className={statusConfig[member.status].className}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {statusConfig[member.status].label}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {member.completedAt || "—"}
                    </span>
                    <span>
                      {member.dominantProfile ? (
                        <Badge variant="outline">{member.dominantProfile}</Badge>
                      ) : (
                        "—"
                      )}
                    </span>
                    <span className="font-medium">
                      {member.score ? `${member.score}%` : "—"}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <Card className="border-2 bg-accent/30">
          <CardContent className="p-4 flex items-start gap-3">
            <Eye className="h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">Protection des données</p>
              <p className="text-sm text-muted-foreground">
                Les identifiants sont anonymisés. Vous ne pouvez pas accéder aux résultats individuels 
                détaillés. Seules les données agrégées sont disponibles pour préserver la vie privée de vos collaborateurs.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </EntrepriseLayout>
  );
}
