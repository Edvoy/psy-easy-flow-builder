import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Edit, Download, FileText, Bot } from "lucide-react";

export default function Profil() {
  const resultAxes = [
    { name: "HPI", score: 72 },
    { name: "TDA", score: 45 },
    { name: "TDAH", score: 58 },
    { name: "TSA", score: 35 },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center text-2xl font-bold">
                ED
              </div>
              <div>
                <h1 className="text-2xl font-bold">Édouard Voyer</h1>
                <p className="text-muted-foreground">edouard.voyer@email.com</p>
                <p className="text-sm text-muted-foreground mt-1">Membre depuis janvier 2025</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Edit className="h-4 w-4" />
              Modifier
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {resultAxes.map((axis) => (
              <div key={axis.name} className="wireframe-card text-center">
                <div className="text-3xl font-bold">{axis.score}%</div>
                <div className="text-sm text-muted-foreground">{axis.name}</div>
              </div>
            ))}
          </div>

          {/* Last Test */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Dernier test</h2>
            <div className="wireframe-card">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Test TDA & HPI</h3>
                  <p className="text-sm text-muted-foreground">Complété le 10 janvier 2025</p>
                </div>
                <div className="flex gap-2">
                  <Link to="/resultats">
                    <Button variant="outline" className="gap-2">
                      Voir les résultats
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Actions rapides</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/pzy" className="wireframe-card hover:bg-accent transition-colors">
                <Bot className="h-8 w-8 mb-3" />
                <h3 className="font-bold mb-1">Parler à P-zy</h3>
                <p className="text-sm text-muted-foreground">Posez vos questions à notre assistant IA</p>
              </Link>

              <Link to="/resultats" className="wireframe-card hover:bg-accent transition-colors">
                <FileText className="h-8 w-8 mb-3" />
                <h3 className="font-bold mb-1">Mes résultats</h3>
                <p className="text-sm text-muted-foreground">Consultez votre profil détaillé</p>
              </Link>

              <div className="wireframe-card hover:bg-accent transition-colors cursor-pointer">
                <Download className="h-8 w-8 mb-3" />
                <h3 className="font-bold mb-1">Exporter le rapport</h3>
                <p className="text-sm text-muted-foreground">Téléchargez votre rapport en PDF</p>
              </div>
            </div>
          </section>

          {/* Premium Upsell */}
          <section>
            <div className="wireframe-card bg-accent/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold mb-1">Passez à Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Débloquez l'analyse complète avec recommandations personnalisées
                  </p>
                </div>
                <Link to="/premium">
                  <Button className="gap-2">
                    Découvrir Premium
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
