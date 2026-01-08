import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Qu'est-ce que le questionnaire Psy-Easy ?",
      answer: "Le questionnaire Psy-Easy est un outil d'évaluation cognitive scientifiquement validé qui vous permet de mieux comprendre vos forces et axes d'amélioration dans différents domaines cognitifs.",
    },
    {
      question: "Combien de temps dure le test ?",
      answer: "Le test complet prend environ 15 à 20 minutes. Nous vous recommandons de le faire dans un environnement calme pour des résultats optimaux.",
    },
    {
      question: "Mes données sont-elles protégées ?",
      answer: "Absolument. Toutes vos données sont chiffrées et stockées de manière sécurisée. Nous ne partageons jamais vos informations personnelles avec des tiers sans votre consentement explicite.",
    },
    {
      question: "Quelle est la différence entre le rapport gratuit et le Pack Premium ?",
      answer: "Le rapport gratuit vous donne un aperçu de vos résultats. Le Pack Premium (12€) inclut une analyse approfondie, des recommandations personnalisées et un suivi dans le temps.",
    },
    {
      question: "Puis-je refaire le test ?",
      answer: "Oui, vous pouvez refaire le test autant de fois que vous le souhaitez. Nous recommandons d'attendre au moins 3 mois entre deux évaluations pour observer des évolutions significatives.",
    },
    {
      question: "Comment fonctionne l'offre pour les professionnels ?",
      answer: "Les professionnels (psychologues, coachs, thérapeutes) peuvent acheter des licences pour faire passer le test à leurs clients. Plus vous achetez de licences, plus le prix unitaire diminue.",
    },
    {
      question: "Proposez-vous des solutions pour les entreprises ?",
      answer: "Oui, nous proposons des solutions sur mesure pour les DRH et responsables d'équipe souhaitant évaluer les profils cognitifs de leurs collaborateurs.",
    },
  ];

  return (
    <Layout>
      <div className="container py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Foire Aux Questions</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Trouvez rapidement les réponses à vos questions.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-foreground rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  );
}
