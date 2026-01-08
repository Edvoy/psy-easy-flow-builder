import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, BookOpen, Users, MessageCircle, Lock, Download } from "lucide-react";

interface ResultAxis {
  id: string;
  name: string;
  score: number;
  description: string;
  meaning: string;
  notMeaning: string;
}

const resultAxes: ResultAxis[] = [
  {
    id: "hpi",
    name: "HPI",
    score: 72,
    description: "Haut Potentiel Intellectuel",
    meaning: "Vous présentez des caractéristiques associées à une pensée rapide et complexe.",
    notMeaning: "Ceci n'est pas un test de QI et ne mesure pas votre intelligence.",
  },
  {
    id: "tda",
    name: "TDA",
    score: 45,
    description: "Trouble du Déficit de l'Attention",
    meaning: "Quelques indicateurs liés à l'attention ont été relevés.",
    notMeaning: "Seul un professionnel peut poser un diagnostic de TDA.",
  },
  {
    id: "tdah",
    name: "TDAH",
    score: 58,
    description: "Trouble du Déficit de l'Attention avec Hyperactivité",
    meaning: "Des traits d'hyperactivité et d'impulsivité semblent présents.",
    notMeaning: "Ce résultat n'est pas un diagnostic médical.",
  },
  {
    id: "tsa",
    name: "TSA",
    score: 35,
    description: "Trouble du Spectre de l'Autisme",
    meaning: "Peu d'indicateurs TSA ont été détectés dans vos réponses.",
    notMeaning: "Ce test ne peut pas exclure ou confirmer un TSA.",
  },
  {
    id: "axe5",
    name: "Axe 5",
    score: 50,
    description: "Dimension complémentaire",
    meaning: "Axe en cours de définition pour une analyse plus complète.",
    notMeaning: "À préciser dans les prochaines versions.",
  },
];

export default function Results() {
  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vos résultats</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Voici une synthèse de votre profil cognitif basée sur vos réponses au questionnaire.
          </p>
        </div>

        {/* Main Disclaimer */}
        <div className="disclaimer-box flex items-start gap-3 max-w-3xl mx-auto mb-12">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Important</p>
            <p className="text-sm">
              Ces résultats sont des indicateurs et des hypothèses, pas un diagnostic.
              Seul un professionnel de santé qualifié peut établir un diagnostic.
              En cas de détresse ou besoin d'aide urgente : <a href="#" className="underline font-medium">ressources d'urgence</a>
            </p>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resultAxes.map((axis) => (
            <div key={axis.id} className="result-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{axis.name}</h3>
                <div className="text-2xl font-bold">{axis.score}%</div>
              </div>

              {/* Progress bar */}
              <div className="h-3 bg-muted rounded-full mb-4 overflow-hidden">
                <div
                  className="h-full bg-foreground rounded-full transition-all duration-500"
                  style={{ width: `${axis.score}%` }}
                />
              </div>

              <p className="text-sm text-muted-foreground mb-4">{axis.description}</p>

              <div className="space-y-3 text-sm">
                <div className="p-3 bg-muted/50 rounded">
                  <p className="font-medium mb-1">✓ Ce que ça suggère :</p>
                  <p className="text-muted-foreground">{axis.meaning}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded">
                  <p className="font-medium mb-1">✗ Ce que ça ne veut PAS dire :</p>
                  <p className="text-muted-foreground">{axis.notMeaning}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Actions */}
        <div className="wireframe-card max-w-3xl mx-auto mb-12">
          <h2 className="text-xl font-bold mb-6">Vos 3 prochaines actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Lire les articles",
                description: "Approfondissez vos connaissances sur votre profil",
                href: "/articles",
              },
              {
                icon: MessageCircle,
                title: "Parler à P-zy",
                description: "Notre assistant IA répond à vos questions",
                href: "/pzy",
              },
              {
                icon: Users,
                title: "Trouver un partenaire",
                description: "Consultez notre réseau de professionnels",
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

        {/* Premium Upsell */}
        <div className="wireframe-card max-w-3xl mx-auto mb-12 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Lock className="h-6 w-6 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-bold mb-2">Débloquez l'analyse Premium</h2>
          <p className="text-muted-foreground mb-6">
            Accédez à un rapport détaillé avec des recommandations personnalisées, des pistes d'aménagement et un suivi de progression.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-bold mb-2">Gratuit</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✓ Résultats par axe</li>
                <li>✓ Explications générales</li>
                <li>✓ 3 actions recommandées</li>
                <li className="line-through">Rapport PDF détaillé</li>
                <li className="line-through">Recommandations personnalisées</li>
              </ul>
            </div>
            <div className="p-4 border-2 border-foreground rounded-lg bg-accent/50">
              <h3 className="font-bold mb-2">Premium</h3>
              <ul className="text-sm space-y-1">
                <li>✓ Tout le gratuit</li>
                <li>✓ Rapport PDF détaillé</li>
                <li>✓ Recommandations personnalisées</li>
                <li>✓ Pistes d'aménagement</li>
                <li>✓ Accès prioritaire à P-zy</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link to="/premium">
              <Button size="lg" className="gap-2">
                Débloquer l'analyse Premium
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <span className="text-sm text-muted-foreground">à partir de 29€</span>
          </div>
        </div>

        {/* Recommended Articles */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Articles recommandés pour vous</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Comprendre le HPI au quotidien", category: "HPI" },
              { title: "Stratégies pour améliorer sa concentration", category: "TDA/TDAH" },
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
