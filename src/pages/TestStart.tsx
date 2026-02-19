import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import testStartImg from "@/assets/illustrations/test-start.png";

export default function TestStart() {
  const navigate = useNavigate();
  const [consentService, setConsentService] = useState(false);
  const [consentRecherche, setConsentRecherche] = useState(false);

  const handleStart = () => {
    if (consentService && consentRecherche) {
      navigate("/test/questionnaire");
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Header with illustration */}
        <div className="text-center mb-12">
          <img 
            src={testStartImg} 
            alt="Illustration du test cognitif" 
            className="w-40 h-40 mx-auto mb-6 rounded-2xl object-cover"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Test cognitif</h1>
          <p className="text-muted-foreground">
            Découvrez votre profil cognitif en quelques minutes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {[
            { num: 1, label: "Compléter le test", active: true },
            { num: 2, label: "Voir les résultats", active: false },
            { num: 3, label: "Débloquer votre potentiel", active: false },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-center">
                <div
                  className={`progress-step mx-auto mb-2 ${
                    step.active ? "progress-step-active" : ""
                  }`}
                >
                  {step.num}
                </div>
                <div className="text-xs font-medium max-w-24">{step.label}</div>
              </div>
              {i < 2 && <div className="w-12 h-0.5 bg-border" />}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Disclaimer */}
          <div className="disclaimer-box flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium mb-1">Important</p>
              <p className="text-sm">
                Cet outil est un outil d'orientation et ne remplace pas un avis professionnel. 
                Les résultats fournis sont des indicateurs et non un diagnostic médical.
              </p>
            </div>
          </div>

          {/* What to expect */}
          <div className="wireframe-card">
            <h2 className="text-xl font-bold mb-4">Ce que vous allez découvrir</h2>
            <ul className="space-y-3">
              {[
                "Ad proident nul mollit inculpaq in dolo rep exea utlaboreetd cupi.",
                "Doeiu lab ulla temporincid null doeiusmodt cil conse co labo cill.",
                "Sedd enim invo mini volu eiusmodtemp eni ven utenim veniamqu eius nostrude minim.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consent Section */}
          <div className="wireframe-card space-y-6">
            <h2 className="text-xl font-bold">Consentements</h2>

            {/* Service consent - Required */}
            <div className="flex items-start gap-3 p-4 border-2 border-foreground rounded-lg">
              <Checkbox
                id="consent-service"
                checked={consentService}
                onCheckedChange={(checked) => setConsentService(checked as boolean)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <label htmlFor="consent-service" className="font-medium cursor-pointer">
                  J'accepte les conditions d'utilisation du service *
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  Requis pour utiliser le service. Vos données sont traitées conformément à notre politique de confidentialité.
                </p>
              </div>
            </div>

            {/* Research consent - Required for free access */}
            <div className="flex items-start gap-3 p-4 border-2 border-foreground rounded-lg">
              <Checkbox
                id="consent-recherche"
                checked={consentRecherche}
                onCheckedChange={(checked) => setConsentRecherche(checked as boolean)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <label htmlFor="consent-recherche" className="font-medium cursor-pointer">
                  J'accepte de participer à la recherche *
                </label>
                <p className="text-sm text-muted-foreground mt-1">
                  <span className="text-brand-blue font-medium">C'est ce qui rend le test gratuit.</span>{" "}
                  Vos données anonymisées seront utilisées pour améliorer nos outils et faire avancer la recherche.
                </p>
              </div>
            </div>
          </div>


          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleStart}
              disabled={!consentService || !consentRecherche}
              className="gap-2"
            >
              Commencer le test
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Durée estimée : 10-15 minutes • Aliqu Utlabore
          </p>
        </div>
      </div>
    </Layout>
  );
}
