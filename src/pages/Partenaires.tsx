import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Heart, 
  GraduationCap, 
  MapPin, 
  Star, 
  Search,
  Filter,
  ExternalLink,
  Phone,
  Mail
} from "lucide-react";
import { useState } from "react";

interface Partner {
  id: number;
  name: string;
  specialty: string;
  type: "psychologue" | "neuropsychologue" | "coach" | "therapeute";
  location: string;
  rating: number;
  reviews: number;
  specializations: string[];
  description: string;
  available: boolean;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Dr. Marie Dupont",
    specialty: "Neuropsychologue",
    type: "neuropsychologue",
    location: "Paris 11ème",
    rating: 4.9,
    reviews: 127,
    specializations: ["HPI", "TDAH", "Bilans neuropsychologiques"],
    description: "Spécialisée dans l'accompagnement des profils atypiques adultes et adolescents.",
    available: true,
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    specialty: "Coach certifié HPI",
    type: "coach",
    location: "Lyon",
    rating: 4.8,
    reviews: 89,
    specializations: ["HPI", "Coaching professionnel", "Reconversion"],
    description: "Accompagnement personnalisé pour valoriser vos singularités au travail.",
    available: true,
  },
  {
    id: 3,
    name: "Dr. Sophie Bernard",
    specialty: "Psychologue clinicienne",
    type: "psychologue",
    location: "Bordeaux",
    rating: 4.7,
    reviews: 156,
    specializations: ["TSA", "Anxiété", "TCC"],
    description: "Approche bienveillante et adaptée aux neuroatypiques.",
    available: false,
  },
  {
    id: 4,
    name: "Camille Lefebvre",
    specialty: "Thérapeute spécialisée",
    type: "therapeute",
    location: "Toulouse",
    rating: 4.9,
    reviews: 73,
    specializations: ["TDAH", "Gestion émotionnelle", "Méditation"],
    description: "Techniques douces et pratiques pour mieux vivre au quotidien.",
    available: true,
  },
  {
    id: 5,
    name: "Dr. Lucas Moreau",
    specialty: "Neuropsychologue",
    type: "neuropsychologue",
    location: "Nantes",
    rating: 4.6,
    reviews: 94,
    specializations: ["DYS", "Troubles de l'apprentissage", "Bilans"],
    description: "Expert en troubles DYS et accompagnement scolaire.",
    available: true,
  },
  {
    id: 6,
    name: "Émilie Rousseau",
    specialty: "Coach de vie",
    type: "coach",
    location: "Marseille",
    rating: 4.8,
    reviews: 112,
    specializations: ["HPI", "Hypersensibilité", "Développement personnel"],
    description: "Coaching holistique pour profils sensibles et créatifs.",
    available: true,
  },
];

const typeIcons = {
  psychologue: Brain,
  neuropsychologue: Brain,
  coach: GraduationCap,
  therapeute: Heart,
};

const typeColors = {
  psychologue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  neuropsychologue: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  coach: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  therapeute: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export default function Partenaires() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredPartners = partners.filter((partner) => {
    const matchesSearch = 
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = !selectedType || partner.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Réseau de partenaires</h1>
          <p className="text-muted-foreground">
            Trouvez un professionnel qualifié près de chez vous, sélectionné pour son expertise 
            dans l'accompagnement des profils neuroatypiques.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher par nom, spécialité ou ville..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedType === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(null)}
            >
              Tous
            </Button>
            <Button
              variant={selectedType === "psychologue" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("psychologue")}
            >
              Psychologues
            </Button>
            <Button
              variant={selectedType === "neuropsychologue" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("neuropsychologue")}
            >
              Neuropsychologues
            </Button>
            <Button
              variant={selectedType === "coach" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("coach")}
            >
              Coachs
            </Button>
            <Button
              variant={selectedType === "therapeute" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("therapeute")}
            >
              Thérapeutes
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold">150+</p>
              <p className="text-sm text-muted-foreground">Psychologues</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold">75+</p>
              <p className="text-sm text-muted-foreground">Neuropsychologues</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold">200+</p>
              <p className="text-sm text-muted-foreground">Coachs certifiés</p>
            </CardContent>
          </Card>
          <Card className="border-2">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm text-muted-foreground">Villes couvertes</p>
            </CardContent>
          </Card>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => {
            const Icon = typeIcons[partner.type];
            return (
              <Card key={partner.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{partner.specialty}</p>
                      </div>
                    </div>
                    {partner.available ? (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Disponible
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Liste d'attente</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{partner.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {partner.location}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{partner.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({partner.reviews} avis)
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {partner.specializations.map((spec) => (
                      <Badge key={spec} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 gap-2" size="sm">
                      <Phone className="h-4 w-4" />
                      Contacter
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Aucun partenaire ne correspond à votre recherche.
            </p>
          </div>
        )}

        {/* CTA */}
        <Card className="border-2 bg-accent/30">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Vous êtes professionnel ?</h3>
            <p className="text-muted-foreground mb-4">
              Rejoignez notre réseau de partenaires et accompagnez des profils neuroatypiques.
            </p>
            <Button variant="outline">Devenir partenaire</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
