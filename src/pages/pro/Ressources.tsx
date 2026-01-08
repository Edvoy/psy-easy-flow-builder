import { ProLayout } from "@/components/layout/ProLayout";
import { TempProNav } from "@/components/TempProNav";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download,
  FileText,
  Video,
  BookOpen,
  Brain,
  Zap,
  Heart,
  Users,
  ExternalLink
} from "lucide-react";

const protocols = [
  {
    title: "Protocole d'accueil HPI",
    description: "Guide de première consultation pour les profils HPI",
    type: "PDF",
    pages: 8,
    category: "HPI",
  },
  {
    title: "Grille d'évaluation TDAH",
    description: "Outils d'évaluation complémentaires post-test Psy-Easy",
    type: "PDF",
    pages: 12,
    category: "TDAH",
  },
  {
    title: "Accompagnement TSA adulte",
    description: "Stratégies et aménagements recommandés",
    type: "PDF",
    pages: 15,
    category: "TSA",
  },
  {
    title: "Restitution des résultats",
    description: "Comment présenter les résultats Psy-Easy au client",
    type: "PDF",
    pages: 6,
    category: "Général",
  },
];

const videos = [
  {
    title: "Comprendre le rapport Psy-Easy",
    duration: "12 min",
    category: "Formation",
  },
  {
    title: "Cas pratique : profil mixte HPI-TDAH",
    duration: "25 min",
    category: "Cas clinique",
  },
  {
    title: "Entretien de restitution",
    duration: "18 min",
    category: "Technique",
  },
];

const articles = [
  {
    title: "Dernières recherches sur le HPI",
    source: "Journal of Psychology",
    date: "Janvier 2026",
  },
  {
    title: "TDAH : nouvelles approches thérapeutiques",
    source: "Neuroscience Today",
    date: "Décembre 2025",
  },
  {
    title: "Neurodiversité en milieu professionnel",
    source: "HR Magazine",
    date: "Novembre 2025",
  },
];

export default function ProRessources() {
  return (
    <ProLayout>
      <TempProNav />
      <div className="p-6 md:p-8 space-y-8 pb-24">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Ressources</h1>
          <p className="text-muted-foreground">
            Protocoles, formations et outils pour accompagner vos clients
          </p>
        </div>

        <Tabs defaultValue="protocols" className="space-y-6">
          <TabsList className="border-2 border-foreground">
            <TabsTrigger value="protocols" className="gap-2">
              <FileText className="h-4 w-4" />
              Protocoles
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2">
              <Video className="h-4 w-4" />
              Vidéos
            </TabsTrigger>
            <TabsTrigger value="articles" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="tools" className="gap-2">
              <Zap className="h-4 w-4" />
              Outils
            </TabsTrigger>
          </TabsList>

          {/* Protocols Tab */}
          <TabsContent value="protocols" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {protocols.map((protocol, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{protocol.title}</h3>
                          <Badge variant="outline">{protocol.category}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{protocol.description}</p>
                        <p className="text-xs text-muted-foreground">{protocol.pages} pages • {protocol.type}</p>
                      </div>
                      <Button variant="outline" size="icon" className="shrink-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {videos.map((video, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted flex items-center justify-center border-b-2">
                      <Video className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2">{video.category}</Badge>
                      <h3 className="font-semibold mb-1">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">{video.duration}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Articles Tab */}
          <TabsContent value="articles" className="space-y-6">
            <div className="space-y-3">
              {articles.map((article, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{article.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {article.source} • {article.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      Lire
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Brain className="h-8 w-8" />
                    <div>
                      <CardTitle>Simulateur de profil</CardTitle>
                      <CardDescription>Testez différentes configurations de résultats</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Accéder à l'outil</Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="h-8 w-8" />
                    <div>
                      <CardTitle>Générateur de recommandations</CardTitle>
                      <CardDescription>Créez des recommandations personnalisées</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Accéder à l'outil</Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8" />
                    <div>
                      <CardTitle>Annuaire des partenaires</CardTitle>
                      <CardDescription>Réseau de professionnels pour orientation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Consulter l'annuaire</Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8" />
                    <div>
                      <CardTitle>Modèles de documents</CardTitle>
                      <CardDescription>Comptes-rendus, attestations, courriers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Voir les modèles</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ProLayout>
  );
}
