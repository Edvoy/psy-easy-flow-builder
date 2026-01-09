import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CSP_OPTIONS = [
  "Agriculteurs exploitants",
  "Artisans, commerçants et chefs d'entreprise",
  "Cadres et professions intellectuelles supérieures",
  "Professions intermédiaires",
  "Employés",
  "Ouvriers",
  "Retraités",
  "Étudiants",
  "Sans activité professionnelle",
];

const DEPARTEMENTS = [
  "01 - Ain", "02 - Aisne", "03 - Allier", "04 - Alpes-de-Haute-Provence", "05 - Hautes-Alpes",
  "06 - Alpes-Maritimes", "07 - Ardèche", "08 - Ardennes", "09 - Ariège", "10 - Aube",
  "11 - Aude", "12 - Aveyron", "13 - Bouches-du-Rhône", "14 - Calvados", "15 - Cantal",
  "16 - Charente", "17 - Charente-Maritime", "18 - Cher", "19 - Corrèze", "21 - Côte-d'Or",
  "22 - Côtes-d'Armor", "23 - Creuse", "24 - Dordogne", "25 - Doubs", "26 - Drôme",
  "27 - Eure", "28 - Eure-et-Loir", "29 - Finistère", "2A - Corse-du-Sud", "2B - Haute-Corse",
  "30 - Gard", "31 - Haute-Garonne", "32 - Gers", "33 - Gironde", "34 - Hérault",
  "35 - Ille-et-Vilaine", "36 - Indre", "37 - Indre-et-Loire", "38 - Isère", "39 - Jura",
  "40 - Landes", "41 - Loir-et-Cher", "42 - Loire", "43 - Haute-Loire", "44 - Loire-Atlantique",
  "45 - Loiret", "46 - Lot", "47 - Lot-et-Garonne", "48 - Lozère", "49 - Maine-et-Loire",
  "50 - Manche", "51 - Marne", "52 - Haute-Marne", "53 - Mayenne", "54 - Meurthe-et-Moselle",
  "55 - Meuse", "56 - Morbihan", "57 - Moselle", "58 - Nièvre", "59 - Nord",
  "60 - Oise", "61 - Orne", "62 - Pas-de-Calais", "63 - Puy-de-Dôme", "64 - Pyrénées-Atlantiques",
  "65 - Hautes-Pyrénées", "66 - Pyrénées-Orientales", "67 - Bas-Rhin", "68 - Haut-Rhin", "69 - Rhône",
  "70 - Haute-Saône", "71 - Saône-et-Loire", "72 - Sarthe", "73 - Savoie", "74 - Haute-Savoie",
  "75 - Paris", "76 - Seine-Maritime", "77 - Seine-et-Marne", "78 - Yvelines", "79 - Deux-Sèvres",
  "80 - Somme", "81 - Tarn", "82 - Tarn-et-Garonne", "83 - Var", "84 - Vaucluse",
  "85 - Vendée", "86 - Vienne", "87 - Haute-Vienne", "88 - Vosges", "89 - Yonne",
  "90 - Territoire de Belfort", "91 - Essonne", "92 - Hauts-de-Seine", "93 - Seine-Saint-Denis",
  "94 - Val-de-Marne", "95 - Val-d'Oise", "971 - Guadeloupe", "972 - Martinique",
  "973 - Guyane", "974 - La Réunion", "976 - Mayotte",
];

export default function TestEnd() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [age, setAge] = useState("");
  const [csp, setCsp] = useState("");
  const [departement, setDepartement] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = email && genre && age && csp && departement;

  const handleSubmit = () => {
    if (!isFormValid) return;
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
                  <Label className="text-base font-bold">
                    Votre genre <span className="text-destructive">*</span>
                  </Label>
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

              {/* Age Section */}
              <div className="wireframe-card space-y-4">
                <div>
                  <Label htmlFor="age" className="text-base font-bold">
                    Votre âge <span className="text-destructive">*</span>
                  </Label>
                </div>
                <Input
                  id="age"
                  type="number"
                  min="1"
                  max="120"
                  placeholder="Votre âge"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="border-2"
                />
              </div>

              {/* CSP Section */}
              <div className="wireframe-card space-y-4">
                <div>
                  <Label className="text-base font-bold">
                    Catégorie socioprofessionnelle <span className="text-destructive">*</span>
                  </Label>
                </div>
                <Select value={csp} onValueChange={setCsp}>
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Sélectionnez votre CSP" />
                  </SelectTrigger>
                  <SelectContent>
                    {CSP_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Département Section */}
              <div className="wireframe-card space-y-4">
                <div>
                  <Label className="text-base font-bold">
                    Département <span className="text-destructive">*</span>
                  </Label>
                </div>
                <Select value={departement} onValueChange={setDepartement}>
                  <SelectTrigger className="border-2">
                    <SelectValue placeholder="Sélectionnez votre département" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEPARTEMENTS.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  onClick={handleSubmit} 
                  className="w-full sm:w-auto"
                  disabled={!isFormValid}
                >
                  Voir les résultats
                </Button>
                <p className="text-xs text-muted-foreground">
                  <span className="text-destructive">*</span> Champs obligatoires. En continuant, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
