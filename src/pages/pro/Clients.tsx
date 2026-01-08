import { ProLayout } from "@/components/layout/ProLayout";
import { TempProNav } from "@/components/TempProNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search,
  User,
  Calendar,
  MessageSquare,
  FileText,
  Eye,
  MoreHorizontal
} from "lucide-react";
import { useState } from "react";

interface Client {
  id: number;
  referenceDate: string;
  dominantProfile: string;
  status: "new" | "scheduled" | "in_progress" | "completed";
  lastContact?: string;
  notes?: string;
}

const clients: Client[] = [
  { id: 1, referenceDate: "08/01/2026", dominantProfile: "HPI", status: "scheduled", lastContact: "09/01/2026", notes: "Premier RDV le 15/01" },
  { id: 2, referenceDate: "05/01/2026", dominantProfile: "TDAH", status: "in_progress", lastContact: "07/01/2026", notes: "Suivi mensuel" },
  { id: 3, referenceDate: "02/01/2026", dominantProfile: "TSA", status: "in_progress", lastContact: "06/01/2026" },
  { id: 4, referenceDate: "28/12/2025", dominantProfile: "HPI", status: "completed", lastContact: "05/01/2026", notes: "Bilan terminé" },
  { id: 5, referenceDate: "20/12/2025", dominantProfile: "TDA", status: "in_progress", lastContact: "03/01/2026" },
  { id: 6, referenceDate: "15/12/2025", dominantProfile: "TDAH", status: "new" },
  { id: 7, referenceDate: "10/12/2025", dominantProfile: "HPI", status: "completed", lastContact: "20/12/2025" },
  { id: 8, referenceDate: "05/12/2025", dominantProfile: "DYS", status: "in_progress", lastContact: "02/01/2026" },
];

const statusConfig = {
  new: { label: "Nouveau", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  scheduled: { label: "RDV planifié", className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  in_progress: { label: "En suivi", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  completed: { label: "Terminé", className: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
};

export default function ProClients() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredClients = clients.filter((client) => {
    const matchesSearch = 
      `Client #${client.id}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.dominantProfile.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <ProLayout>
      <TempProNav />
      <div className="p-6 md:p-8 space-y-8 pb-24">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Mes clients</h1>
          <p className="text-muted-foreground">
            Utilisateurs Psy-Easy qui vous ont été référencés
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{clients.length}</p>
              <p className="text-sm text-muted-foreground">Total</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-blue-600">
                {clients.filter(c => c.status === "new").length}
              </p>
              <p className="text-sm text-muted-foreground">Nouveaux</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">
                {clients.filter(c => c.status === "in_progress").length}
              </p>
              <p className="text-sm text-muted-foreground">En suivi</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-gray-500">
                {clients.filter(c => c.status === "completed").length}
              </p>
              <p className="text-sm text-muted-foreground">Terminés</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher par ID ou profil..."
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
              variant={statusFilter === "new" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("new")}
            >
              Nouveaux
            </Button>
            <Button
              variant={statusFilter === "in_progress" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("in_progress")}
            >
              En suivi
            </Button>
            <Button
              variant={statusFilter === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("completed")}
            >
              Terminés
            </Button>
          </div>
        </div>

        {/* Clients List */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Liste des clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-4 border-2 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">Client #{client.id}</h4>
                        <Badge variant="outline">{client.dominantProfile}</Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Référencé le {client.referenceDate}
                        </span>
                        {client.lastContact && (
                          <span className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            Dernier contact: {client.lastContact}
                          </span>
                        )}
                      </div>
                      {client.notes && (
                        <p className="text-sm text-muted-foreground mt-1">{client.notes}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={statusConfig[client.status].className}>
                      {statusConfig[client.status].label}
                    </Badge>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Privacy Notice */}
        <Card className="border-2 bg-accent/30">
          <CardContent className="p-4 flex items-start gap-3">
            <Eye className="h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">Confidentialité des données</p>
              <p className="text-sm text-muted-foreground">
                Vous avez accès uniquement aux profils des utilisateurs qui vous ont explicitement choisi 
                comme praticien. Les données détaillées ne sont accessibles qu'avec leur consentement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProLayout>
  );
}
