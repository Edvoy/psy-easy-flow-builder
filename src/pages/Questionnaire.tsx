import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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

  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Progress Header */}
        <div className="border-b-2 border-foreground bg-background sticky top-16 z-40">
          <div className="container py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} sur {totalQuestions}
              </span>
              <Button variant="ghost" size="sm" className="gap-2">
                <Save className="h-4 w-4" />
                Sauvegarder
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 container py-12 flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full space-y-8">
            {/* Question */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">{question.text}</h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 text-left border-2 rounded-lg transition-all ${
                    answers[question.id] === option.value
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        answers[question.id] === option.value
                          ? "border-background"
                          : "border-foreground"
                      }`}
                    >
                      {answers[question.id] === option.value && (
                        <div className="w-3 h-3 rounded-full bg-background" />
                      )}
                    </div>
                    <span className="font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Error message */}
            {showError && (
              <div className="text-center text-destructive text-sm animate-fade-in">
                Veuillez sélectionner une réponse pour continuer.
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
