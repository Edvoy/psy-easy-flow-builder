import { EntrepriseLayout } from "@/components/layout/EntrepriseLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Link2, 
  Mail, 
  Globe,
  Copy,
  RefreshCw,
  Send,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  X
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const invitationLink = "https://psy-easy.app/join/acme-corp-x7k2m";

const pendingInvitations = [
  { email: "jean.dupont@acme.com", sentAt: "08/01/2026", status: "pending" },
  { email: "marie.martin@acme.com", sentAt: "07/01/2026", status: "pending" },
  { email: "pierre.durand@acme.com", sentAt: "06/01/2026", status: "accepted" },
];

const authorizedDomains = [
  { domain: "acme.com", addedAt: "01/01/2026", employees: 45 },
  { domain: "acme-group.fr", addedAt: "01/01/2026", employees: 22 },
];

export default function EntrepriseInvitations() {
  const [emailInput, setEmailInput] = useState("");
  const [domainInput, setDomainInput] = useState("");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(invitationLink);
    toast.success("Lien copié dans le presse-papier");
  };

  const handleSendInvitation = () => {
    if (emailInput) {
      toast.success(`Invitation envoyée à ${emailInput}`);
      setEmailInput("");
    }
  };

  const handleAddDomain = () => {
    if (domainInput) {
      toast.success(`Domaine ${domainInput} ajouté`);
      setDomainInput("");
    }
  };

  return (
    <EntrepriseLayout>
      <div className="p-6 md:p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Invitations</h1>
          <p className="text-muted-foreground">
            Gérez les différentes méthodes pour inviter vos collaborateurs.
          </p>
        </div>

        <Tabs defaultValue="link" className="space-y-6">
          <TabsList className="border-2 border-foreground">
            <TabsTrigger value="link" className="gap-2">
              <Link2 className="h-4 w-4" />
              Lien unique
            </TabsTrigger>
            <TabsTrigger value="email" className="gap-2">
              <Mail className="h-4 w-4" />
              Par email
            </TabsTrigger>
            <TabsTrigger value="domain" className="gap-2">
              <Globe className="h-4 w-4" />
              Domaines autorisés
            </TabsTrigger>
          </TabsList>

          {/* Invitation Link Tab */}
          <TabsContent value="link">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Lien d'invitation unique</CardTitle>
                <CardDescription>
                  Partagez ce lien avec vos collaborateurs. Toute personne qui l'utilise sera 
                  automatiquement rattachée à votre entreprise.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    value={invitationLink} 
                    readOnly 
                    className="border-2 font-mono text-sm"
                  />
                  <Button variant="outline" onClick={handleCopyLink} className="gap-2 shrink-0">
                    <Copy className="h-4 w-4" />
                    Copier
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Ce lien expire dans 30 jours</span>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <RefreshCw className="h-4 w-4" />
                    Régénérer le lien
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Email Invitations Tab */}
          <TabsContent value="email" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Envoyer une invitation</CardTitle>
                <CardDescription>
                  Invitez un collaborateur par email. Il recevra un lien personnalisé.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    type="email"
                    placeholder="email@entreprise.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="border-2"
                  />
                  <Button onClick={handleSendInvitation} className="gap-2 shrink-0">
                    <Send className="h-4 w-4" />
                    Envoyer
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Invitations envoyées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pendingInvitations.map((inv, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border-2 rounded-md">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{inv.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{inv.sentAt}</span>
                        {inv.status === "accepted" ? (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Acceptée
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <Clock className="h-3 w-3 mr-1" />
                            En attente
                          </Badge>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Domain Authorization Tab */}
          <TabsContent value="domain" className="space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Ajouter un domaine autorisé</CardTitle>
                <CardDescription>
                  Tout utilisateur s'inscrivant avec une adresse email de ce domaine sera 
                  automatiquement rattaché à votre entreprise.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder="entreprise.com"
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    className="border-2"
                  />
                  <Button onClick={handleAddDomain} className="gap-2 shrink-0">
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Domaines autorisés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {authorizedDomains.map((domain, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border-2 rounded-md">
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">@{domain.domain}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">
                          {domain.employees} salariés inscrits
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Ajouté le {domain.addedAt}
                        </span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </EntrepriseLayout>
  );
}
