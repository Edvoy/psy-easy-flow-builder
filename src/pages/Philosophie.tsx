import { Layout } from "@/components/layout/Layout";

export default function Philosophie() {
  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-8">Notre Philosophie</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Une approche centrée sur l'humain</h2>
            <p className="text-muted-foreground mb-4">
              Chez Psy-Easy, nous croyons que chaque individu possède un potentiel unique. Notre mission est de fournir des outils d'évaluation cognitive accessibles et scientifiquement validés pour aider chacun à mieux se comprendre.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">L'excellence scientifique</h2>
            <p className="text-muted-foreground mb-4">
              Nos tests sont développés en collaboration avec des chercheurs en psychologie cognitive et neurosciences. Chaque questionnaire est rigoureusement validé pour garantir des résultats fiables et pertinents.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Accessibilité et confidentialité</h2>
            <p className="text-muted-foreground mb-4">
              Nous nous engageons à rendre l'évaluation cognitive accessible à tous, tout en garantissant la protection absolue de vos données personnelles. Votre vie privée est notre priorité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Innovation continue</h2>
            <p className="text-muted-foreground">
              Notre équipe travaille constamment à l'amélioration de nos outils et au développement de nouvelles fonctionnalités pour vous offrir la meilleure expérience possible.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
