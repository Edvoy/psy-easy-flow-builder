import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Download, ArrowLeft, BookOpen, MessageCircle, Users, AlertTriangle, 
  Lightbulb, Target, CheckCircle2, ArrowRight, Brain, Zap, Eye, BookMarked,
  TrendingUp, Heart, Sparkles, Clock, Shield
} from "lucide-react";
import { 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Cell
} from "recharts";

interface KPIData {
  id: string;
  name: string;
  fullName: string;
  score: number;
  level: "faible" | "modéré" | "élevé" | "très élevé";
  color: string;
  description: string;
  whatItSuggests: string;
  whatItDoesntSuggest: string;
  strengths: string[];
  challenges: string[];
  recommendations: { title: string; description: string }[];
  nextSteps: { action: string; timeframe: string }[];
  resources: string[];
}

const kpiData: KPIData[] = [
  {
    id: "hpi",
    name: "HPI",
    fullName: "Haut Potentiel Intellectuel",
    score: 78,
    level: "élevé",
    color: "hsl(var(--chart-1))",
    description: "Le Haut Potentiel Intellectuel caractérise un fonctionnement cognitif particulier, marqué par une pensée rapide, en arborescence, et une sensibilité accrue.",
    whatItSuggests: "Vos réponses indiquent une forte tendance vers des caractéristiques associées au HPI : pensée rapide et en arborescence, besoin de stimulation intellectuelle, sensibilité élevée, perfectionnisme, et une capacité à faire des liens entre des concepts apparemment éloignés.",
    whatItDoesntSuggest: "Ce résultat n'est pas un test de QI et ne mesure pas votre intelligence de manière objective. Seul un bilan psychométrique complet (WAIS) réalisé par un psychologue peut établir officiellement un HPI.",
    strengths: [
      "Capacité d'analyse et de synthèse développée",
      "Créativité et pensée originale",
      "Apprentissage rapide de nouvelles compétences",
      "Sensibilité et empathie élevées"
    ],
    challenges: [
      "Tendance au perfectionnisme paralysant",
      "Difficultés à trouver des interlocuteurs au même rythme",
      "Ennui face aux tâches répétitives",
      "Hypersensibilité émotionnelle"
    ],
    recommendations: [
      { title: "Nourrissez votre curiosité", description: "Accordez-vous du temps pour explorer des sujets qui vous passionnent, même s'ils semblent 'inutiles'." },
      { title: "Gérez le perfectionnisme", description: "Fixez-vous des limites de temps pour les tâches afin d'éviter la procrastination liée à la recherche de perfection." },
      { title: "Trouvez vos pairs", description: "Rejoignez des groupes ou communautés de personnes partageant vos centres d'intérêt." }
    ],
    nextSteps: [
      { action: "Lire un article sur le fonctionnement HPI", timeframe: "Cette semaine" },
      { action: "Identifier 3 activités intellectuellement stimulantes", timeframe: "Ce mois" },
      { action: "Envisager un bilan psychométrique si besoin de confirmation", timeframe: "3-6 mois" }
    ],
    resources: ["Trop intelligent pour être heureux ? - Jeanne Siaud-Facchin", "Je pense trop - Christel Petitcollin"]
  },
  {
    id: "tda",
    name: "TDA",
    fullName: "Trouble Déficit de l'Attention",
    score: 65,
    level: "élevé",
    color: "hsl(var(--chart-2))",
    description: "Le TDA se caractérise par des difficultés à maintenir l'attention sur des tâches qui ne génèrent pas suffisamment de stimulation, sans hyperactivité motrice marquée.",
    whatItSuggests: "Vos réponses révèlent des traits compatibles avec un fonctionnement TDA : tendance à la rêverie, difficulté à maintenir l'attention sur des tâches longues ou peu stimulantes, et une préférence pour les environnements calmes.",
    whatItDoesntSuggest: "Un score élevé ne signifie pas que vous avez un TDA clinique. Le diagnostic nécessite une évaluation complète par un psychiatre ou neuropsychologue prenant en compte votre histoire personnelle.",
    strengths: [
      "Capacité de concentration intense (hyperfocus) sur les sujets passionnants",
      "Pensée créative et non-linéaire",
      "Sensibilité aux détails subtils",
      "Capacité à voir les situations sous un angle différent"
    ],
    challenges: [
      "Maintien de l'attention sur les tâches administratives",
      "Organisation et planification à long terme",
      "Gestion du temps et respect des délais",
      "Tendance à la procrastination"
    ],
    recommendations: [
      { title: "Fragmentez vos tâches", description: "Divisez les grandes tâches en étapes de 25 minutes maximum (technique Pomodoro)." },
      { title: "Externalisez votre mémoire", description: "Utilisez des outils (agenda, rappels, listes) pour ne pas surcharger votre mémoire de travail." },
      { title: "Créez un environnement propice", description: "Minimisez les distractions visuelles et sonores dans votre espace de travail." }
    ],
    nextSteps: [
      { action: "Tester la technique Pomodoro pendant une semaine", timeframe: "Cette semaine" },
      { action: "Mettre en place un système de rappels quotidien", timeframe: "Ce mois" },
      { action: "Consulter un spécialiste si les difficultés impactent le quotidien", timeframe: "2-3 mois" }
    ],
    resources: ["Driven to Distraction - Edward Hallowell", "Application Forest pour la concentration"]
  },
  {
    id: "tdah",
    name: "TDAH",
    fullName: "Trouble Déficit de l'Attention avec Hyperactivité",
    score: 82,
    level: "très élevé",
    color: "hsl(var(--chart-3))",
    description: "Le TDAH combine des difficultés attentionnelles avec une hyperactivité motrice ou mentale et une impulsivité. C'est un fonctionnement neurologique particulier, pas un défaut.",
    whatItSuggests: "Vos réponses montrent des caractéristiques marquées du TDAH : énergie mentale intense, besoin de mouvement ou d'action, impulsivité dans les décisions, et une recherche constante de nouveauté et de stimulation.",
    whatItDoesntSuggest: "Un score élevé reflète des traits comportementaux, pas un diagnostic médical. Le TDAH est un trouble neurodéveloppemental dont le diagnostic requiert une évaluation clinique approfondie.",
    strengths: [
      "Énergie et enthousiasme contagieux",
      "Capacité à gérer plusieurs projets simultanément",
      "Réactivité et adaptabilité face aux imprévus",
      "Créativité et innovation naturelles"
    ],
    challenges: [
      "Gestion de l'impulsivité dans les décisions",
      "Difficulté à terminer les projets commencés",
      "Régulation de l'énergie (hauts et bas)",
      "Relations interpersonnelles (impatience)"
    ],
    recommendations: [
      { title: "Canalisez votre énergie", description: "Intégrez de l'activité physique quotidienne pour réguler votre énergie mentale." },
      { title: "Utilisez votre impulsivité", description: "Transformez-la en capacité de décision rapide dans des contextes appropriés." },
      { title: "Structurez sans rigidifier", description: "Créez des routines flexibles qui vous donnent un cadre sans vous enfermer." }
    ],
    nextSteps: [
      { action: "Intégrer 30 min d'activité physique quotidienne", timeframe: "Cette semaine" },
      { action: "Identifier les situations où l'impulsivité est un atout", timeframe: "Ce mois" },
      { action: "Explorer les options d'accompagnement (coaching, thérapie)", timeframe: "2-3 mois" }
    ],
    resources: ["TDAH : La boîte à outils - Ariane Hébert", "Association HyperSupers TDAH France"]
  },
  {
    id: "tsa",
    name: "TSA",
    fullName: "Trouble du Spectre de l'Autisme",
    score: 35,
    level: "modéré",
    color: "hsl(var(--chart-4))",
    description: "Le TSA englobe un ensemble de particularités dans la communication sociale, les comportements et les intérêts. Le spectre est vaste et chaque profil est unique.",
    whatItSuggests: "Vos réponses indiquent quelques traits pouvant s'inscrire dans le spectre autistique : préférence pour la routine, sensibilités sensorielles, intérêts spécifiques intenses, ou un mode de communication différent.",
    whatItDoesntSuggest: "Un score modéré ne signifie pas que vous êtes autiste. Ces traits peuvent être présents chez de nombreuses personnes neurotypiques. Seul un bilan spécialisé peut poser un diagnostic.",
    strengths: [
      "Attention aux détails et rigueur",
      "Honnêteté et authenticité",
      "Expertise approfondie dans les domaines d'intérêt",
      "Pensée logique et systématique"
    ],
    challenges: [
      "Adaptation aux changements imprévus",
      "Lecture des codes sociaux implicites",
      "Gestion des environnements sensoriellement chargés",
      "Expression des émotions de manière attendue"
    ],
    recommendations: [
      { title: "Respectez vos besoins sensoriels", description: "Identifiez et limitez votre exposition aux stimuli qui vous fatiguent (bruit, lumière, foule)." },
      { title: "Préparez les transitions", description: "Anticipez les changements et accordez-vous du temps pour vous adapter." },
      { title: "Valorisez vos intérêts", description: "Vos passions sont une force, trouvez des moyens de les intégrer dans votre quotidien." }
    ],
    nextSteps: [
      { action: "Faire un inventaire de vos sensibilités sensorielles", timeframe: "Cette semaine" },
      { action: "Créer des stratégies de régulation (casque anti-bruit, pauses)", timeframe: "Ce mois" },
      { action: "Explorer la littérature sur le spectre autistique", timeframe: "2-3 mois" }
    ],
    resources: ["L'autisme expliqué aux non-autistes - Brigitte Harrisson", "Autisme France"]
  },
  {
    id: "dys",
    name: "DYS",
    fullName: "Troubles DYS (Dyslexie, Dysorthographie, etc.)",
    score: 42,
    level: "modéré",
    color: "hsl(var(--chart-5))",
    description: "Les troubles DYS regroupent les difficultés spécifiques d'apprentissage : lecture (dyslexie), écriture (dysorthographie), calcul (dyscalculie), coordination (dyspraxie).",
    whatItSuggests: "Vos réponses révèlent quelques indicateurs pouvant être associés aux troubles DYS : stratégies particulières pour lire ou écrire, rapport différent aux chiffres, ou coordination qui demande plus d'effort conscient.",
    whatItDoesntSuggest: "Ces indicateurs ne constituent pas un diagnostic. Les troubles DYS sont identifiés par des bilans orthophoniques ou neuropsychologiques spécifiques.",
    strengths: [
      "Pensée visuelle et spatiale développée",
      "Créativité et approche non-conventionnelle",
      "Résilience face aux difficultés",
      "Capacité à trouver des solutions alternatives"
    ],
    challenges: [
      "Tâches impliquant lecture ou écriture prolongée",
      "Mémorisation de séquences (dates, numéros)",
      "Prise de notes rapide",
      "Fatigue cognitive accrue"
    ],
    recommendations: [
      { title: "Utilisez des supports adaptés", description: "Privilégiez les formats audio, vidéo, ou les polices de caractères spécialisées (OpenDyslexic)." },
      { title: "Accordez-vous du temps", description: "Ne vous comparez pas aux autres dans les tâches de lecture/écriture." },
      { title: "Exploitez vos forces visuelles", description: "Utilisez des schémas, mind maps et codes couleur pour organiser l'information." }
    ],
    nextSteps: [
      { action: "Tester les outils de synthèse vocale", timeframe: "Cette semaine" },
      { action: "Identifier les aménagements utiles au quotidien", timeframe: "Ce mois" },
      { action: "Consulter un orthophoniste si besoin d'un bilan", timeframe: "2-3 mois" }
    ],
    resources: ["Dyslexie et autres maux d'école - Marie-Claude Béliveau", "Fédération Française des DYS"]
  }
];

const radarData = kpiData.map(kpi => ({
  name: kpi.name,
  score: kpi.score,
  fullMark: 100
}));

export default function Rapport() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "très élevé": return "bg-foreground text-background";
      case "élevé": return "bg-foreground/80 text-background";
      case "modéré": return "bg-muted-foreground/50 text-background";
      default: return "bg-muted text-foreground";
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "très élevé": return <TrendingUp className="h-5 w-5" />;
      case "élevé": return <Zap className="h-5 w-5" />;
      case "modéré": return <Eye className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/profil"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Retour au profil
          </Link>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Exporter en PDF
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
            {/* Report Header */}
            <div className="wireframe-card bg-gradient-to-br from-accent/50 to-background">
              <div className="text-center py-8">
                <h1 className="text-3xl font-bold mb-2">Rapport Premium</h1>
                <p className="text-muted-foreground">Profil Cognitif Personnalisé</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Généré le {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="disclaimer-box flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Important à garder en tête</p>
                <p className="text-sm">
                  Ce rapport présente des indicateurs basés sur vos réponses au questionnaire. 
                  Il offre des pistes de réflexion mais ne constitue pas un diagnostic médical. 
                  Seul un professionnel de santé qualifié peut établir un diagnostic.
                </p>
              </div>
            </div>


            {/* Detailed KPI Sections */}
            {kpiData.map((kpi, index) => (
              <section key={kpi.id} id={kpi.id} className="wireframe-card">
                {/* KPI Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      {getLevelIcon(kpi.level)}
                      <h2 className="text-2xl font-bold">{kpi.name}</h2>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(kpi.level)}`}>
                        {kpi.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{kpi.fullName}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">{kpi.score}%</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-muted rounded-full mb-6 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000" 
                    style={{ 
                      width: `${kpi.score}%`,
                      backgroundColor: `hsl(var(--chart-${index + 1}))`
                    }} 
                  />
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{kpi.description}</p>

                {/* What it suggests / doesn't suggest */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-2 border-foreground/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Ce que cela suggère
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{kpi.whatItSuggests}</p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-foreground/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        Ce que cela NE suggère PAS
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{kpi.whatItDoesntSuggest}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Strengths & Challenges */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-green-600" />
                      Vos forces associées
                    </h4>
                    <ul className="space-y-2">
                      {kpi.strengths.map((strength, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900">
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-amber-600" />
                      Défis à apprivoiser
                    </h4>
                    <ul className="space-y-2">
                      {kpi.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Recommandations personnalisées
                  </h4>
                  <div className="grid gap-3">
                    {kpi.recommendations.map((rec, i) => (
                      <div key={i} className="p-4 bg-accent/30 rounded-lg">
                        <p className="font-semibold mb-1">{i + 1}. {rec.title}</p>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Prochaines étapes concrètes
                  </h4>
                  <div className="space-y-3">
                    {kpi.nextSteps.map((step, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border-2 border-foreground/10 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </div>
                          <span className="font-medium">{step.action}</span>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {step.timeframe}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <BookMarked className="h-5 w-5" />
                    Ressources recommandées
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {kpi.resources.map((resource, i) => (
                      <li key={i}>• {resource}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}

            {/* Global Synthesis */}
            <section id="synthesis" className="wireframe-card bg-gradient-to-br from-accent/30 to-background">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-6 w-6" />
                Synthèse de votre profil
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-muted-foreground mb-4">
                  Votre profil révèle une combinaison unique de traits cognitifs qui font votre singularité. 
                  Les scores les plus marqués (TDAH à 82% et HPI à 78%) suggèrent un fonctionnement 
                  caractérisé par une grande énergie mentale, une pensée rapide et créative, et un besoin 
                  constant de stimulation.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cette configuration peut être une source formidable de créativité et d'innovation, 
                  tout en nécessitant des stratégies adaptées pour canaliser cette énergie et maintenir 
                  l'attention sur les tâches moins stimulantes.
                </p>
                <p className="text-muted-foreground">
                  Les traits modérés en TSA et DYS indiquent des particularités sensorielles et 
                  d'apprentissage qui méritent attention sans être nécessairement problématiques. 
                  L'important est de les reconnaître pour mieux vous adapter.
                </p>
              </div>

              <div className="mt-8 p-6 bg-background border-2 border-foreground rounded-lg">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Le message essentiel
                </h3>
                <p className="text-muted-foreground italic">
                  "Ces résultats ne vous définissent pas — ils éclairent. Votre profil n'est ni un problème 
                  à résoudre ni une étiquette à porter, mais une carte qui vous aide à naviguer dans un 
                  monde qui n'a pas toujours été conçu pour des fonctionnements comme le vôtre. 
                  Vos particularités sont aussi vos forces."
                </p>
              </div>
            </section>

            {/* Global Next Steps / Action Plan */}
            <section id="next-steps" className="wireframe-card">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-6 w-6" />
                Votre plan d'action personnalisé
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Cette semaine
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Relire ce rapport et noter 3 points clés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Tester une technique de concentration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Explorer un article recommandé</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Ce mois
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Mettre en place 2-3 aménagements quotidiens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Échanger avec P-zy sur vos questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Lire un livre recommandé</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      À moyen terme
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Envisager un bilan professionnel si besoin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Trouver un accompagnement adapté</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Rejoindre une communauté de pairs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/articles" className="p-4 border-2 border-foreground rounded-lg hover:bg-accent transition-colors text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Lire les articles</h3>
                  <p className="text-xs text-muted-foreground">Approfondissez vos connaissances</p>
                </Link>
                <Link to="/pzy" className="p-4 border-2 border-foreground rounded-lg hover:bg-accent transition-colors text-center">
                  <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Échanger avec P-zy</h3>
                  <p className="text-xs text-muted-foreground">Posez vos questions</p>
                </Link>
                <Link to="/particuliers#praticiens-partenaires" className="p-4 border-2 border-foreground rounded-lg hover:bg-accent transition-colors text-center">
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Trouver un pro</h3>
                  <p className="text-xs text-muted-foreground">Praticiens partenaires</p>
                </Link>
              </div>
            </section>

            {/* Download CTA */}
            <div className="text-center py-8">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Télécharger ce rapport en PDF
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Conservez ce rapport et consultez-le à tout moment
              </p>
            </div>
        </div>
      </div>
    </Layout>
  );
}
