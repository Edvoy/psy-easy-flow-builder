import { Layout } from "@/components/layout/Layout";

export default function Termes() {
  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Termes et Conditions</h1>
        <p className="text-muted-foreground mb-8">Dernière mise à jour : Janvier 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p className="text-muted-foreground">
              Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités 
              et conditions d'utilisation des services proposés par Psy-Easy, ainsi que de définir les droits 
              et obligations des parties dans ce cadre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Acceptation des conditions</h2>
            <p className="text-muted-foreground">
              L'utilisation de la plateforme Psy-Easy implique l'acceptation pleine et entière des présentes 
              conditions générales d'utilisation. En accédant à nos services, vous reconnaissez avoir pris 
              connaissance de ces conditions et les accepter sans réserve.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Description des services</h2>
            <p className="text-muted-foreground mb-4">
              Psy-Easy propose des services d'évaluation cognitive en ligne, comprenant :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Un questionnaire d'évaluation cognitive gratuit</li>
              <li>Un rapport d'analyse Premium payant</li>
              <li>Des licences professionnelles pour les praticiens</li>
              <li>Des solutions pour les entreprises</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Création de compte</h2>
            <p className="text-muted-foreground">
              L'accès à certains services nécessite la création d'un compte utilisateur. Vous vous engagez 
              à fournir des informations exactes et à maintenir la confidentialité de vos identifiants de connexion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Tarifs et paiement</h2>
            <p className="text-muted-foreground">
              Les tarifs de nos services payants sont indiqués en euros TTC. Le paiement s'effectue en ligne 
              par carte bancaire via notre prestataire de paiement sécurisé. Une facture est automatiquement 
              générée après chaque achat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Droit de rétractation</h2>
            <p className="text-muted-foreground">
              Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours pour exercer 
              votre droit de rétractation. Ce droit ne s'applique pas aux contenus numériques fournis 
              immédiatement après l'achat avec votre accord exprès.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Propriété intellectuelle</h2>
            <p className="text-muted-foreground">
              L'ensemble des contenus présents sur la plateforme Psy-Easy (textes, images, questionnaires, 
              algorithmes, rapports) sont protégés par les droits de propriété intellectuelle. Toute reproduction 
              ou utilisation non autorisée est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation de responsabilité</h2>
            <p className="text-muted-foreground">
              Les évaluations proposées par Psy-Easy ont une vocation informative et ne constituent en aucun 
              cas un diagnostic médical ou psychologique. Nous vous recommandons de consulter un professionnel 
              de santé pour toute question relative à votre santé mentale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Modification des CGU</h2>
            <p className="text-muted-foreground">
              Psy-Easy se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs 
              seront informés des modifications par email ou par notification sur la plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant ces conditions, vous pouvez nous contacter à l'adresse : 
              contact@psy-easy.fr
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
