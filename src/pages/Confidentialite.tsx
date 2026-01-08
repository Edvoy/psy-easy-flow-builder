import { Layout } from "@/components/layout/Layout";

export default function Confidentialite() {
  return (
    <Layout>
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        <p className="text-muted-foreground mb-8">Dernière mise à jour : Janvier 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Chez Psy-Easy, nous accordons une importance primordiale à la protection de vos données personnelles. 
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et 
              protégeons vos informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Responsable du traitement</h2>
            <p className="text-muted-foreground">
              Le responsable du traitement des données est Psy-Easy SAS, dont le siège social est situé 
              123 Avenue de la Cognition, 75001 Paris, France.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Données collectées</h2>
            <p className="text-muted-foreground mb-4">Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Données d'identification :</strong> nom, prénom, adresse email</li>
              <li><strong>Données de connexion :</strong> adresse IP, données de navigation</li>
              <li><strong>Données d'évaluation :</strong> réponses aux questionnaires, résultats</li>
              <li><strong>Données de paiement :</strong> traitées par notre prestataire sécurisé</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Finalités du traitement</h2>
            <p className="text-muted-foreground mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Fournir nos services d'évaluation cognitive</li>
              <li>Générer vos rapports personnalisés</li>
              <li>Gérer votre compte utilisateur</li>
              <li>Traiter vos paiements</li>
              <li>Améliorer nos services (avec votre consentement pour la recherche)</li>
              <li>Vous envoyer des communications (avec votre consentement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Base légale</h2>
            <p className="text-muted-foreground">
              Le traitement de vos données repose sur votre consentement, l'exécution du contrat de service, 
              nos obligations légales, et notre intérêt légitime à améliorer nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Durée de conservation</h2>
            <p className="text-muted-foreground">
              Vos données sont conservées pendant la durée de votre utilisation de nos services, puis pendant 
              3 ans après votre dernière activité. Les données de facturation sont conservées 10 ans conformément 
              aux obligations légales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Sécurité des données</h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos 
              données : chiffrement SSL/TLS, hébergement sécurisé en France, accès restreint aux données, 
              audits de sécurité réguliers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Vos droits</h2>
            <p className="text-muted-foreground mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
              <li>Droit de retirer votre consentement</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à : privacy@psy-easy.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
            <p className="text-muted-foreground">
              Nous utilisons des cookies essentiels au fonctionnement du site et, avec votre consentement, 
              des cookies d'analyse pour améliorer nos services. Vous pouvez gérer vos préférences de cookies 
              à tout moment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact DPO</h2>
            <p className="text-muted-foreground">
              Pour toute question relative à la protection de vos données, vous pouvez contacter notre 
              Délégué à la Protection des Données (DPO) à : dpo@psy-easy.fr
            </p>
            <p className="text-muted-foreground mt-4">
              Vous avez également le droit d'introduire une réclamation auprès de la CNIL.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
