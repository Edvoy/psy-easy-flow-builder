import { EntrepriseLayout } from "@/components/layout/EntrepriseLayout";
import { TempEntrepriseNav } from "@/components/TempEntrepriseNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  CreditCard, 
  Users, 
  Shield,
  Bell,
  Download,
  Trash2
} from "lucide-react";

export default function EntrepriseParametres() {
  return (
    <EntrepriseLayout>
      <TempEntrepriseNav />
      <div className="p-6 md:p-8 space-y-8 max-w-4xl pb-24">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Paramètres</h1>
          <p className="text-muted-foreground">
            Gérez les informations et les préférences de votre compte entreprise.
          </p>
        </div>

        {/* Company Info */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <CardTitle>Informations entreprise</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nom de l'entreprise</Label>
                <Input value="Acme Corp" className="border-2" />
              </div>
              <div className="space-y-2">
                <Label>Secteur d'activité</Label>
                <Input value="Technologie" className="border-2" />
              </div>
              <div className="space-y-2">
                <Label>Email de contact</Label>
                <Input value="rh@acme.com" className="border-2" />
              </div>
              <div className="space-y-2">
                <Label>Téléphone</Label>
                <Input value="+33 1 23 45 67 89" className="border-2" />
              </div>
            </div>
            <Button>Enregistrer les modifications</Button>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <CardTitle>Abonnement</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border-2 rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Plan Entreprise</h4>
                  <Badge>Actif</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Jusqu'à 100 salariés</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">490€<span className="text-sm font-normal">/mois</span></p>
                <p className="text-sm text-muted-foreground">Prochaine facturation : 01/02/2026</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-3 border-2 rounded-lg">
                <p className="text-2xl font-bold">67</p>
                <p className="text-sm text-muted-foreground">Salariés utilisés</p>
              </div>
              <div className="p-3 border-2 rounded-lg">
                <p className="text-2xl font-bold">100</p>
                <p className="text-sm text-muted-foreground">Limite du plan</p>
              </div>
              <div className="p-3 border-2 rounded-lg">
                <p className="text-2xl font-bold">33</p>
                <p className="text-sm text-muted-foreground">Places restantes</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">Voir les factures</Button>
              <Button variant="outline">Changer de plan</Button>
            </div>
          </CardContent>
        </Card>

        {/* Administrators */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <CardTitle>Administrateurs</CardTitle>
            </div>
            <CardDescription>
              Les personnes ayant accès au dashboard entreprise.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border-2 rounded-lg">
                <div>
                  <p className="font-medium">Sophie Martin</p>
                  <p className="text-sm text-muted-foreground">sophie.martin@acme.com</p>
                </div>
                <Badge>Propriétaire</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border-2 rounded-lg">
                <div>
                  <p className="font-medium">Thomas Dubois</p>
                  <p className="text-sm text-muted-foreground">thomas.dubois@acme.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Admin</Badge>
                  <Button variant="ghost" size="sm">Retirer</Button>
                </div>
              </div>
            </div>
            <Button variant="outline">Ajouter un administrateur</Button>
          </CardContent>
        </Card>

        {/* Privacy & Data */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <CardTitle>Confidentialité & Données</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Anonymisation renforcée</p>
                <p className="text-sm text-muted-foreground">
                  Masquer les départements dans les données agrégées
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications aux salariés</p>
                <p className="text-sm text-muted-foreground">
                  Informer les salariés de leur rattachement
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Export des données agrégées</p>
                <p className="text-sm text-muted-foreground">
                  Télécharger un rapport complet de votre équipe
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Exporter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <CardTitle>Notifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Nouveau test complété</p>
                <p className="text-sm text-muted-foreground">
                  Recevoir un email quand un salarié termine son test
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Rapport mensuel</p>
                <p className="text-sm text-muted-foreground">
                  Recevoir un récapitulatif mensuel des statistiques
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Nouvelles recommandations</p>
                <p className="text-sm text-muted-foreground">
                  Être notifié des nouvelles actions suggérées
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-2 border-destructive/50">
          <CardHeader>
            <CardTitle className="text-destructive">Zone de danger</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Supprimer toutes les données</p>
                <p className="text-sm text-muted-foreground">
                  Efface définitivement toutes les données de l'entreprise
                </p>
              </div>
              <Button variant="destructive" size="sm" className="gap-2">
                <Trash2 className="h-4 w-4" />
                Supprimer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </EntrepriseLayout>
  );
}
