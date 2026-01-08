import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, BookOpen, Users, MessageCircle, Lock, Sparkles, Heart, Lightbulb, Target, Shield } from "lucide-react";

interface ResultAxis {
  id: string;
  name: string;
  score: number;
  level: "faible" | "modéré" | "élevé" | "très élevé";
  description: string;
}

const resultAxes: ResultAxis[] = [
  {
    id: "hpi",
    name: "HPI",
    score: 78,
    level: "élevé",
    description: "Fonctionnement cognitif rapide, pensée en arborescence, grande capacité d'analyse. Peut s'accompagner d'une sensibilité particulière et d'une façon unique de percevoir le monde.",
  },
  {
    id: "tda",
    name: "TDA",
    score: 98,
    level: "très élevé",
    description: "Traits marquants liés à l'attention. Cela peut se manifester par une tendance à suivre plusieurs fils de pensée simultanément ou à avoir besoin de stimulation pour rester engagé.",
  },
  {
    id: "tdah",
    name: "TDAH",
    score: 100,
    level: "très élevé",
    description: "Énergie mentale intense, créativité bouillonnante, recherche constante de nouveauté. Ces traits peuvent être de formidables atouts une fois compris et canalisés.",
  },
  {
    id: "tsa",
    name: "TSA",
    score: 27,
    level: "faible",
    description: "Peu de traits associés au spectre de l'autisme dans vos réponses. Certaines préférences (routine, besoin de clarté) peuvent être présentes à un niveau subtil.",
  },
  {
    id: "dys",
    name: "DYS",
    score: 48,
    level: "modéré",
    description: "Quelques indicateurs liés aux apprentissages. Cela n'affecte pas votre intelligence mais peut expliquer certaines préférences dans votre façon d'apprendre.",
  },
];

const strengths = [
  {
    icon: Lightbulb,
    title: "Créativité et innovation",
    description: "Votre façon de penser favorise les idées originales et les solutions créatives.",
  },
  {
    icon: Shield,
    title: "Résilience et adaptabilité",
    description: "Vous savez rebondir et vous adapter rapidement aux nouvelles situations.",
  },
  {
    icon: Heart,
    title: "Empathie et compréhension",
    description: "Votre sensibilité vous permet de comprendre finement les dynamiques humaines.",
  },
  {
    icon: Sparkles,
    title: "Énergie et passion",
    description: "Votre intensité peut se traduire par un engagement profond dans vos projets.",
  },
];

const challenges = [
  {
    title: "Organisation du temps",
    description: "Trouver un rythme qui respecte votre besoin de variété tout en maintenant vos engagements.",
  },
  {
    title: "Régulation émotionnelle",
    description: "Apprivoiser votre sensibilité pour qu'elle devienne une force plutôt qu'une source de fatigue.",
  },
  {
    title: "Communication",
    description: "Adapter votre façon de partager vos idées pour être mieux compris par votre entourage.",
  },
];

export default function Results() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "très élevé":
        return "bg-foreground text-background";
      case "élevé":
        return "bg-foreground/80 text-background";
      case "modéré":
        return "bg-muted-foreground/50 text-background";
      default:
        return "bg-muted text-foreground";
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">Rapport de Profil</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Votre profil unique</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprendre votre fonctionnement pour mieux valoriser vos forces
          </p>
        </div>

        {/* User Info Summary */}
        <div className="wireframe-card max-w-3xl mx-auto mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Profil</p>
              <p className="font-bold">[Votre nom]</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Âge</p>
              <p className="font-bold">-- ans</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Situation</p>
              <p className="font-bold">--</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-bold">{new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>

        {/* Main Disclaimer */}
        <div className="disclaimer-box flex items-start gap-3 max-w-3xl mx-auto mb-12">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-1">À garder en tête</p>
            <p className="text-sm">
              Ces résultats sont des pistes de réflexion, pas un diagnostic. Ils vous aident à mieux vous comprendre, 
              mais seul un professionnel qualifié peut établir un bilan complet.
              En cas de besoin : <a href="#" className="underline font-medium">ressources d'écoute</a>
            </p>
          </div>
        </div>

        {/* Synthesis Section - FREE */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Synthèse de votre profil</h2>
          
          {/* Score Overview */}
          <div className="wireframe-card mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {resultAxes.map((axis) => (
                <div key={axis.id} className="text-center">
                  <div className="w-16 h-16 rounded-full border-4 border-foreground flex items-center justify-center mb-2">
                    <span className="text-lg font-bold">{axis.score}</span>
                  </div>
                  <p className="text-sm font-medium">{axis.name}</p>
                </div>
              ))}
            </div>
            
            {/* Profile Summary - More detailed */}
            <div className="p-6 bg-accent/30 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-center">Un profil riche et nuancé</h3>
              <p className="text-muted-foreground mb-4">
                Vos résultats révèlent un profil cognitif marqué par des spécificités qui font votre singularité. 
                Cette combinaison unique associe des traits de haut potentiel intellectuel avec une énergie mentale 
                particulièrement vive, offrant un potentiel précieux qui gagne à être compris et accompagné.
              </p>
              <p className="text-muted-foreground mb-4">
                Ce type de profil se caractérise souvent par une grande curiosité, une capacité à faire des liens 
                entre des idées apparemment éloignées, et une sensibilité qui peut être à la fois une richesse 
                et parfois une source de questionnements.
              </p>
              <p className="text-muted-foreground">
                Pour aller plus loin et découvrir en détail vos forces, vos défis et des recommandations 
                personnalisées, le rapport complet vous attend ci-dessous.
              </p>
            </div>
          </div>
        </div>

        {/* BLURRED PREMIUM CONTENT */}
        <div className="relative max-w-4xl mx-auto mb-8">
          {/* Blur overlay with CTA */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm rounded-lg">
            <div className="text-center p-8 max-w-md">
              <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Découvrez votre rapport complet</h3>
              <p className="text-muted-foreground mb-6">
                Accédez à l'analyse détaillée de chaque dimension, vos points forts, vos défis à relever, 
                et des recommandations personnalisées pour vous épanouir.
              </p>
              <Link to="/premium">
                <Button size="lg" className="gap-2 mb-3">
                  Obtenir le rapport complet — 12€
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground">Paiement sécurisé • Accès immédiat • PDF téléchargeable</p>
            </div>
          </div>

          {/* Blurred content underneath */}
          <div className="pointer-events-none select-none">
            {/* Detailed Results */}
            <h3 className="text-xl font-bold mb-4">Comprendre chaque dimension</h3>
            <div className="space-y-4 mb-8">
              {resultAxes.map((axis) => (
                <div key={axis.id} className="wireframe-card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold">{axis.name}</h4>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${getLevelColor(axis.level)}`}>
                        {axis.score}/100 — {axis.level.charAt(0).toUpperCase() + axis.level.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{axis.description}</p>
                </div>
              ))}
            </div>

            {/* Strengths & Challenges */}
            <h2 className="text-2xl font-bold mb-6 text-center">Vos forces et vos défis</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Strengths */}
              <div className="wireframe-card">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Vos points forts
                </h3>
                <div className="space-y-4">
                  {strengths.map((strength, i) => (
                    <div key={i} className="flex gap-3">
                      <strength.icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{strength.title}</p>
                        <p className="text-sm text-muted-foreground">{strength.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="wireframe-card">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Les défis à apprivoiser
                </h3>
                <div className="space-y-4">
                  {challenges.map((challenge, i) => (
                    <div key={i}>
                      <p className="font-medium">{challenge.title}</p>
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Positive Approach */}
            <div className="wireframe-card bg-accent/20 mb-8">
              <h3 className="text-lg font-bold mb-4 text-center">L'essentiel à retenir</h3>
              <p className="text-center text-muted-foreground">
                Ces pistes ne visent pas à vous "corriger", mais à vous aider à mieux vous connaître. 
                L'objectif est de créer les conditions pour que vos talents naturels s'expriment pleinement, 
                tout en trouvant des stratégies pour les aspects plus exigeants.
              </p>
            </div>
          </div>
        </div>

        {/* Next Actions - VISIBLE */}
        <div className="wireframe-card max-w-3xl mx-auto mb-12">
          <h2 className="text-xl font-bold mb-6 text-center">Vos prochaines étapes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Explorer les ressources",
                description: "Des articles pour approfondir la compréhension de votre profil",
                href: "/articles",
              },
              {
                icon: MessageCircle,
                title: "Échanger avec P-zy",
                description: "Notre assistant vous aide à clarifier vos questions",
                href: "/pzy",
              },
              {
                icon: Users,
                title: "Trouver un accompagnement",
                description: "Des professionnels formés à ces profils",
                href: "/partenaires",
              },
            ].map((action, i) => (
              <Link
                key={i}
                to={action.href}
                className="p-4 border-2 border-foreground rounded-lg hover:bg-accent transition-colors text-center"
              >
                <action.icon className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">{action.title}</h3>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended Articles */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Lectures recommandées pour vous</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Mieux vivre avec sa singularité au quotidien", category: "Bien-être" },
              { title: "Stratégies douces pour rester concentré", category: "Organisation" },
            ].map((article, i) => (
              <Link
                key={i}
                to="/articles/1"
                className="wireframe-card hover:bg-accent transition-colors"
              >
                <span className="text-xs font-medium bg-muted px-2 py-1 rounded">{article.category}</span>
                <h3 className="font-bold mt-3 mb-2">{article.title}</h3>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  Lire l'article <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
