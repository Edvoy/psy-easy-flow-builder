import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Parametres() {
  return (
    <DashboardLayout>
      <div className="p-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-8">Paramètres</h1>

        {/* Email Section */}
        <section className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="text-base font-bold">Ullamco e-mail</Label>
              <p className="text-sm text-muted-foreground mt-1">
                edouard.voyer@email.com
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Eu sint cupidat l'adresse e-mail attribuée à labor adipis, eu par id uteni généré ma manière aléatoire cons
              </p>
            </div>
            <Button variant="outline" size="sm">Modifier</Button>
          </div>
        </section>

        <Separator className="my-6" />

        {/* Toggle Settings */}
        <section className="space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="text-base font-bold">Labor ess</Label>
              <p className="text-sm text-muted-foreground mt-1">
                C'est duisa utl lore temp deseruntmol à admi, Venia dol apparaitra élaboruml proi fugia dolore
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="text-base font-bold">Cupid dolor</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Ametc Repr déterminera l'avatar nonp aliqu velite cupidatat Lorem Nulla
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="text-base font-bold">Quiof enimad</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Utaliquipexea iata ureor atnt
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="text-base font-bold">Adipiscingelité do incidi</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Venié Doeius Consectet d'autres eiusmodte à utaliquip nostr eiusmo ide la utla veniamé
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <Label className="text-base font-bold">Sitame temporincid</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Qui Etd Magnaal cul tempor supplémentaires cons quisnostr l'utilisation ut temp aute con eufugiatnul d'assistance
              </p>
            </div>
            <Switch />
          </div>
        </section>

        <Separator className="my-6" />

        {/* Consent Research Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Consentement recherche</h2>
          <div className="wireframe-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Label className="text-base font-bold">Participation à la recherche</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Vos données anonymisées peuvent être utilisées pour améliorer nos outils et contribuer à la recherche. 
                  Ce consentement est révocable à tout moment.
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </section>

        <Separator className="my-6" />

        {/* Data Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Mes données</h2>
          <div className="space-y-4">
            <div className="wireframe-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Label className="text-base font-bold">Télécharger mes données</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Obtenez une copie de toutes vos données personnelles au format JSON.
                  </p>
                </div>
                <Button variant="outline">Télécharger</Button>
              </div>
            </div>

            <div className="wireframe-card border-destructive/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Label className="text-base font-bold text-destructive">Supprimer mon compte</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cette action est irréversible. Toutes vos données seront définitivement supprimées.
                  </p>
                </div>
                <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Supprimer
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-6" />

        {/* Password Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">Sécurité</h2>
          <div className="wireframe-card space-y-4">
            <div>
              <Label className="text-base font-bold">Auteirur al dui la quiot</Label>
              <p className="text-sm text-muted-foreground mt-1">
                Venia ute co labor cupi dolorsita lo estla N caractères. Laborum ut exeacom de dol co exerc des exce a Inculpaq do ali nu inrep n duis sécurisé et except à mémoriser.
              </p>
            </div>
            <Button variant="outline">Modifier le mot de passe</Button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
