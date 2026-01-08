import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";

export default function TestEnd() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      navigate("/resultats");
    }, 2000);
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Test TDA & HPI</h1>
          <p className="text-muted-foreground">
            Vous avez complété toutes les questions !
          </p>
        </div>

        {/* Progress Steps - All complete */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {[
            { num: 1, label: "Compléter le test", completed: true },
            { num: 2, label: "Voir les résultats", active: true },
            { num: 3, label: "Débloquer votre potentiel", active: false },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-center">
                <div
                  className={`progress-step mx-auto mb-2 ${
                    step.completed
                      ? "progress-step-completed"
                      : step.active
                      ? "progress-step-active"
                      : ""
                  }`}
                >
                  {step.completed ? <Check className="h-4 w-4" /> : step.num}
                </div>
                <div className="text-xs font-medium max-w-24">{step.label}</div>
              </div>
              {i < 2 && <div className="w-12 h-0.5 bg-foreground" />}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-xl mx-auto space-y-8">
          {isLoading ? (
            <div className="wireframe-card text-center py-12 space-y-4">
              <Loader2 className="h-12 w-12 animate-spin mx-auto" />
              <h2 className="text-xl font-bold">Analyse en cours...</h2>
              <p className="text-muted-foreground">
                Nous analysons vos réponses pour générer votre profil personnalisé.
              </p>
            </div>
          ) : (
            <>
              {/* Email Section */}
              <div className="wireframe-card space-y-4">
                <div>
                  <Label htmlFor="email" className="text-base font-bold">
                    Votre email
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Cul enim eacommo ve conse con irur eius in sinto essecillumd volupta.
                  </p>
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2"
                />

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="newsletter"
                    checked={newsletter}
                    onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="newsletter" className="text-sm cursor-pointer">
                    Recevoir des conseils carrière et personnels
                  </Label>
                </div>
              </div>

              {/* Genre Section */}
              <div className="wireframe-card space-y-4">
                <div>
                  <Label className="text-base font-bold">Votre genre</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Anim fugi duisautei estl doeius ut ali veniamq irured
                  </p>
                </div>

                <RadioGroup value={genre} onValueChange={setGenre}>
                  {[
                    { value: "homme", label: "Homme" },
                    { value: "femme", label: "Femme" },
                    { value: "autre", label: "Autre / Ne souhaite pas répondre" },
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        genre === option.value ? "border-foreground" : "border-border"
                      }`}
                      onClick={() => setGenre(option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="cursor-pointer flex-1">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Submit */}
              <div className="text-center space-y-4">
                <Button size="lg" onClick={handleSubmit} className="w-full sm:w-auto">
                  Voir les résultats
                </Button>
                <p className="text-xs text-muted-foreground">
                  En continuant, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
