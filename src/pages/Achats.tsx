import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink } from "lucide-react";

export default function Achats() {
  const purchases = [
    {
      id: "1",
      date: "10 janvier 2025",
      product: "Rapport Premium",
      price: "12,00€",
      status: "Complété",
      downloadable: true,
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-2">Historique des achats</h1>
          <p className="text-muted-foreground mb-8">
            Retrouvez l'ensemble de vos achats et téléchargez vos documents.
          </p>

          {purchases.length > 0 ? (
            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="wireframe-card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg border-2 border-foreground flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold">{purchase.product}</h3>
                        <p className="text-sm text-muted-foreground">
                          Acheté le {purchase.date}
                        </p>
                        <span className="inline-block mt-1 text-xs px-2 py-1 bg-accent rounded-full">
                          {purchase.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-lg">{purchase.price}</span>
                      {purchase.downloadable && (
                        <Button variant="outline" className="gap-2">
                          <Download className="h-4 w-4" />
                          Télécharger
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="wireframe-card text-center py-12">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-bold mb-2">Aucun achat</h3>
              <p className="text-muted-foreground mb-4">
                Vous n'avez pas encore effectué d'achat.
              </p>
              <Button asChild>
                <a href="/premium">Découvrir le rapport Premium</a>
              </Button>
            </div>
          )}

          <div className="mt-8 p-4 border-2 border-border rounded-lg bg-accent/20">
            <h3 className="font-bold mb-2">Besoin d'aide ?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Pour toute question concernant vos achats ou remboursements, contactez notre support.
            </p>
            <Button variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Contacter le support
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
