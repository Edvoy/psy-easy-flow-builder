import { ProLayout } from "@/components/layout/ProLayout";
import { TempProNav } from "@/components/TempProNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User,
  CreditCard,
  Bell,
  Shield,
  Calendar,
  MapPin,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";

export default function ProParametres() {
  return (
    <ProLayout>
      <TempProNav />
      <div className="p-6 md:p-8 space-y-8 max-w-4xl pb-24">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Paramètres</h1>
          <p className="text-muted-foreground">
            Gérez votre compte partenaire et vos préférences
          </p>
        </div>

        {/* Account Info */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <CardTitle>Informations du compte</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value="marie.dupont@cabinet.fr" className="border-2" />
              </div>
              <div className="space-y-2">
                <Label>Téléphone</Label>
                <Input value="+33 6 12 34 56 78" className="border-2" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Mot de passe</Label>
              <div className="flex gap-2">
                <Input type="password" value="••••••••••" className="border-2" readOnly />
                <Button variant="outline">Modifier</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Availability */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <CardTitle>Disponibilités</CardTitle>
            </div>
            <CardDescription>
              Gérez votre visibilité dans l'annuaire des partenaires
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Profil visible</p>
                <p className="text-sm text-muted-foreground">
                  Apparaître dans la liste des partenaires
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Accepte de nouveaux clients</p>
                <p className="text-sm text-muted-foreground">
                  Afficher le badge "Disponible" sur votre profil
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Consultations en visio</p>
                <p className="text-sm text-muted-foreground">
                  Proposer des consultations à distance
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Délai moyen de prise de RDV</Label>
              <Input value="2-3 semaines" className="border-2" />
            </div>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <CardTitle>Abonnement partenaire</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border-2 rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Plan Pro</h4>
                  <Badge>Actif</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Visibilité illimitée + outils premium</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">49€<span className="text-sm font-normal">/mois</span></p>
                <p className="text-sm text-muted-foreground">Prochaine facturation : 01/02/2026</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Voir les factures</Button>
              <Button variant="outline">Changer de plan</Button>
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
                <p className="font-medium">Nouveau client référencé</p>
                <p className="text-sm text-muted-foreground">
                  Recevoir un email quand un utilisateur vous choisit
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Rappels de formation</p>
                <p className="text-sm text-muted-foreground">
                  Notifications pour les formations continues
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Newsletter partenaires</p>
                <p className="text-sm text-muted-foreground">
                  Actualités et nouveautés Psy-Easy
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <CardTitle>Confidentialité</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Afficher mon numéro de téléphone</p>
                <p className="text-sm text-muted-foreground">
                  Visible sur votre profil public
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Afficher mon adresse exacte</p>
                <p className="text-sm text-muted-foreground">
                  Sinon, seule la ville sera affichée
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
                <p className="font-medium">Suspendre mon compte</p>
                <p className="text-sm text-muted-foreground">
                  Masquer temporairement votre profil
                </p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <EyeOff className="h-4 w-4" />
                Suspendre
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Supprimer mon compte partenaire</p>
                <p className="text-sm text-muted-foreground">
                  Action irréversible
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
    </ProLayout>
  );
}
