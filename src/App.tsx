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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
