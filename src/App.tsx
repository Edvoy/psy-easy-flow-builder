import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TestStart from "./pages/TestStart";
import Questionnaire from "./pages/Questionnaire";
import TestEnd from "./pages/TestEnd";
import Results from "./pages/Results";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Connexion from "./pages/Connexion";
import Pzy from "./pages/Pzy";
import Parametres from "./pages/Parametres";
import Profil from "./pages/Profil";
import Particuliers from "./pages/Particuliers";
import Pros from "./pages/Pros";
import Entreprises from "./pages/Entreprises";
import Premium from "./pages/Premium";
import PremiumSuccess from "./pages/PremiumSuccess";
import Rapport from "./pages/Rapport";
import Achats from "./pages/Achats";
import Partenaires from "./pages/Partenaires";
import EntrepriseDashboard from "./pages/entreprise/Dashboard";
import EntrepriseEquipe from "./pages/entreprise/Equipe";
import EntrepriseInvitations from "./pages/entreprise/Invitations";
import EntrepriseRessources from "./pages/entreprise/Ressources";
import EntrepriseParametres from "./pages/entreprise/Parametres";
import ProDashboard from "./pages/pro/Dashboard";
import ProProfil from "./pages/pro/Profil";
import ProClients from "./pages/pro/Clients";
import ProRessources from "./pages/pro/Ressources";
import ProParametres from "./pages/pro/Parametres";
import Philosophie from "./pages/Philosophie";
import Equipe from "./pages/Equipe";
import Recherche from "./pages/Recherche";
import Roadmap from "./pages/Roadmap";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Temoignages from "./pages/Temoignages";
import Termes from "./pages/Termes";
import Confidentialite from "./pages/Confidentialite";
import Accessibilite from "./pages/Accessibilite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/test" element={<TestStart />} />
          <Route path="/test/questionnaire" element={<Questionnaire />} />
          <Route path="/test/fin" element={<TestEnd />} />
          <Route path="/resultats" element={<Results />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/pzy" element={<Pzy />} />
          <Route path="/parametres" element={<Parametres />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/particuliers" element={<Particuliers />} />
          <Route path="/pros" element={<Pros />} />
          <Route path="/entreprises" element={<Entreprises />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/premium/success" element={<PremiumSuccess />} />
          <Route path="/rapport" element={<Rapport />} />
          <Route path="/achats" element={<Achats />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/entreprise/dashboard" element={<EntrepriseDashboard />} />
          <Route path="/entreprise/equipe" element={<EntrepriseEquipe />} />
          <Route path="/entreprise/invitations" element={<EntrepriseInvitations />} />
          <Route path="/entreprise/ressources" element={<EntrepriseRessources />} />
          <Route path="/entreprise/parametres" element={<EntrepriseParametres />} />
          <Route path="/pro/dashboard" element={<ProDashboard />} />
          <Route path="/pro/profil" element={<ProProfil />} />
          <Route path="/pro/clients" element={<ProClients />} />
          <Route path="/pro/ressources" element={<ProRessources />} />
          <Route path="/pro/parametres" element={<ProParametres />} />
          <Route path="/philosophie" element={<Philosophie />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/termes" element={<Termes />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
