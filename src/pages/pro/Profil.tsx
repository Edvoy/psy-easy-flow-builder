import { ProLayout } from "@/components/layout/ProLayout";
import { TempProNav } from "@/components/TempProNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  User,
  MapPin,
  Star,
  Award,
  Edit,
  Eye,
  Camera,
  Plus,
  X
} from "lucide-react";

const specializations = ["HPI", "TDAH", "Bilans neuropsychologiques"];
const languages = ["Français", "Anglais"];

export default function ProProfil() {
  return (
    <ProLayout>
      <TempProNav />
      <div className="p-6 md:p-8 space-y-8 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Mon profil partenaire</h1>
            <p className="text-muted-foreground">
              Ces informations sont visibles par les utilisateurs Psy-Easy
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Eye className="h-4 w-4" />
            Prévisualiser
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Photo & Quick Info */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full border-4 border-foreground mx-auto flex items-center justify-center bg-muted">
                    <User className="h-16 w-16" />
                  </div>
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-10 w-10">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-bold mt-4">Dr. Marie Dupont</h2>
                <p className="text-muted-foreground">Neuropsychologue</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(127 avis)</span>
                </div>
                <Badge className="mt-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <Award className="h-3 w-3 mr-1" />
                  Partenaire certifié
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Localisation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <div>
                    <p className="font-medium">Cabinet principal</p>
                    <p className="text-sm text-muted-foreground">
                      45 rue de la Santé<br />
                      75014 Paris
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full gap-1">
                  <Plus className="h-4 w-4" />
                  Ajouter une adresse
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Informations générales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Titre</Label>
                    <Input value="Dr." className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label>Nom complet</Label>
                    <Input value="Marie Dupont" className="border-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Spécialité principale</Label>
                  <Input value="Neuropsychologue" className="border-2" />
                </div>
                <div className="space-y-2">
                  <Label>Numéro ADELI / RPPS</Label>
                  <Input value="759312456" className="border-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Présentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Biographie</Label>
                  <Textarea 
                    className="border-2 min-h-32"
                    defaultValue="Neuropsychologue spécialisée dans l'accompagnement des profils atypiques adultes et adolescents. Plus de 10 ans d'expérience dans l'évaluation et le suivi des personnes HPI et TDAH."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Approche thérapeutique</Label>
                  <Textarea 
                    className="border-2"
                    defaultValue="Approche intégrative combinant bilans neuropsychologiques, TCC et accompagnement personnalisé."
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Spécialisations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec) => (
                    <Badge key={spec} variant="secondary" className="gap-1 pr-1">
                      {spec}
                      <button className="ml-1 hover:bg-muted rounded p-0.5">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  <Button variant="outline" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Langues parlées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang} variant="outline">
                      {lang}
                    </Badge>
                  ))}
                  <Button variant="outline" size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Tarifs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Consultation initiale</Label>
                    <Input value="120€" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label>Consultation de suivi</Label>
                    <Input value="80€" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label>Bilan complet</Label>
                    <Input value="450€" className="border-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="gap-2">
                <Edit className="h-4 w-4" />
                Enregistrer les modifications
              </Button>
              <Button variant="outline">Annuler</Button>
            </div>
          </div>
        </div>
      </div>
    </ProLayout>
  );
}
