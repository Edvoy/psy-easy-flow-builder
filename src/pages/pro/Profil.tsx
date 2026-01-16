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
  X,
  Clock,
  Euro,
  Briefcase,
  GripVertical
} from "lucide-react";

const specializations = ["HPI", "TDAH", "Bilans neuropsychologiques"];
const languages = ["Français", "Anglais"];

interface Prestation {
  id: string;
  nom: string;
  description: string;
  duree: string;
  prix: string;
  categorie: string;
}

const prestationsData: Prestation[] = [
  {
    id: "1",
    nom: "Bilan neuropsychologique complet",
    description: "Évaluation approfondie des fonctions cognitives avec rapport détaillé",
    duree: "3h",
    prix: "450€",
    categorie: "Bilans"
  },
  {
    id: "2",
    nom: "Consultation de suivi",
    description: "Séance de suivi et d'accompagnement personnalisé",
    duree: "45min",
    prix: "80€",
    categorie: "Consultations"
  },
  {
    id: "3",
    nom: "Restitution de bilan",
    description: "Présentation des résultats et recommandations",
    duree: "1h30",
    prix: "120€",
    categorie: "Bilans"
  }
];

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

            {/* Mes Prestations */}
            <Card className="border-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  <CardTitle>Mes prestations</CardTitle>
                </div>
                <Button size="sm" className="gap-1">
                  <Plus className="h-4 w-4" />
                  Ajouter une prestation
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Créez votre catalogue de prestations personnalisé. Ces informations seront visibles sur votre profil public.
                </p>
                
                <div className="space-y-3">
                  {prestationsData.map((prestation) => (
                    <div 
                      key={prestation.id} 
                      className="border-2 rounded-lg p-4 hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 cursor-grab opacity-0 group-hover:opacity-50 transition-opacity">
                          <GripVertical className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold">{prestation.nom}</h4>
                              <Badge variant="outline" className="mt-1 text-xs">
                                {prestation.categorie}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {prestation.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {prestation.duree}
                            </span>
                            <span className="flex items-center gap-1 font-semibold text-primary">
                              <Euro className="h-4 w-4" />
                              {prestation.prix}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {prestationsData.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Briefcase className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>Aucune prestation ajoutée</p>
                    <p className="text-sm">Cliquez sur "Ajouter une prestation" pour commencer</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Tarifs de base</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Tarifs par défaut si vous n'avez pas créé de prestations spécifiques.
                </p>
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
