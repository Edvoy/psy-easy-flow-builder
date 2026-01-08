import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ArrowRight, Save } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: { value: number; label: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Je me sens souvent submergé(e) par les stimulations sensorielles (bruit, lumière, foule).",
    options: [
      { value: 1, label: "Pas du tout d'accord" },
      { value: 2, label: "Plutôt pas d'accord" },
      { value: 3, label: "Neutre" },
      { value: 4, label: "Plutôt d'accord" },
      { value: 5, label: "Tout à fait d'accord" },
    ],
  },
  {
    id: 2,
    text: "J'ai du mal à rester concentré(e) sur une tâche pendant une longue période.",
    options: [
      { value: 1, label: "Pas du tout d'accord" },
      { value: 2, label: "Plutôt pas d'accord" },
      { value: 3, label: "Neutre" },
      { value: 4, label: "Plutôt d'accord" },
      { value: 5, label: "Tout à fait d'accord" },
    ],
  },
  {
    id: 3,
    text: "Je pense souvent à plusieurs choses en même temps.",
    options: [
      { value: 1, label: "Pas du tout d'accord" },
      { value: 2, label: "Plutôt pas d'accord" },
      { value: 3, label: "Neutre" },
      { value: 4, label: "Plutôt d'accord" },
      { value: 5, label: "Tout à fait d'accord" },
    ],
  },
  {
    id: 4,
    text: "J'ai des intérêts très spécifiques et approfondis.",
    options: [
      { value: 1, label: "Pas du tout d'accord" },
      { value: 2, label: "Plutôt pas d'accord" },
      { value: 3, label: "Neutre" },
      { value: 4, label: "Plutôt d'accord" },
      { value: 5, label: "Tout à fait d'accord" },
    ],
  },
  {
    id: 5,
    text: "Les interactions sociales me demandent beaucoup d'énergie.",
    options: [
      { value: 1, label: "Pas du tout d'accord" },
      { value: 2, label: "Plutôt pas d'accord" },
      { value: 3, label: "Neutre" },
      { value: 4, label: "Plutôt d'accord" },
      { value: 5, label: "Tout à fait d'accord" },
    ],
  },
];

export default function Questionnaire() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showError, setShowError] = useState(false);

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [question.id]: value });
    setShowError(false);
  };

  const handleNext = () => {
    if (!answers[question.id]) {
      setShowError(true);
      return;
    }

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowError(false);
    } else {
      navigate("/test/fin");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowError(false);
    }
  };

  const getSliderLabel = (value: number) => {
    const labels = ["Pas du tout d'accord", "Plutôt pas d'accord", "Neutre", "Plutôt d'accord", "Tout à fait d'accord"];
    return labels[value - 1] || "";
  };

  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Header */}
        <div className="border-b-2 border-foreground bg-background sticky top-16 z-40">
          <div className="container py-4">
            <div className="flex items-center justify-end">
              <Button variant="ghost" size="sm" className="gap-2">
                <Save className="h-4 w-4" />
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 container py-12 flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full space-y-8">
            {/* Question */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">{question.text}</h2>
            </div>

            {/* Slider */}
            <div className="space-y-6 py-8">
              <div className="px-4">
                <Slider
                  value={[answers[question.id] || 3]}
                  onValueChange={(value) => handleAnswer(value[0])}
                  min={1}
                  max={5}
                  step={1}
                  className="w-full"
                />
              </div>
              
              {/* Slider Labels */}
              <div className="flex justify-between text-sm text-muted-foreground px-2">
                <span>Pas du tout d'accord</span>
                <span>Tout à fait d'accord</span>
              </div>
              
            </div>

            {/* Error message */}
            {showError && (
              <div className="text-center text-destructive text-sm animate-fade-in">
                Veuillez positionner le curseur pour continuer.
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Précédent
              </Button>

              <Button onClick={handleNext} className="gap-2">
                {currentQuestion === totalQuestions - 1 ? "Terminer" : "Suivant"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="border-t border-border py-4">
          <div className="container text-center text-sm text-muted-foreground">
            Vos réponses sont sauvegardées automatiquement sur cet appareil.
          </div>
        </div>
      </div>
    </Layout>
  );
}
