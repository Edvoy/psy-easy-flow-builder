import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Globe, User, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  isLoggedIn?: boolean;
}

export function Header({ isLoggedIn = false }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLang, setCurrentLang] = useState("FR");

  const isActive = (path: string) => location.pathname.startsWith(path);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/articles?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-foreground">Psy-Easy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to={isLoggedIn ? "/profil" : "/test"}
              className={`nav-link ${isActive(isLoggedIn ? "/profil" : "/test") ? "nav-link-active" : ""}`}
            >
              {isLoggedIn ? "Mon profil" : "Se tester"}
            </Link>

            <Link
              to="/articles"
              className={`nav-link ${isActive("/articles") ? "nav-link-active" : ""}`}
            >
              Comprendre
            </Link>

            {/* Valoriser dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`nav-link flex items-center gap-1 ${
                    isActive("/particuliers") || isActive("/pros") || isActive("/entreprises")
                      ? "nav-link-active"
                      : ""
                  }`}
                >
                  Valoriser
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/particuliers" className="cursor-pointer">Particuliers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pros" className="cursor-pointer">Professionnels</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/entreprises" className="cursor-pointer">Entreprises</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-muted rounded-lg transition-colors" 
              aria-label="Rechercher"
            >
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-1" aria-label="Langue">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{currentLang}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setCurrentLang("FR")}>
                  🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCurrentLang("EN")}>
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                    <User className="h-5 w-5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/profil">Mon profil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pzy">P-zy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/achats">Mes achats</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/parametres">Paramètres</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/">Déconnexion</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/connexion">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Connexion
                </Button>
              </Link>
            )}

            <Link to="/test">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Se tester
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-slide-up">
            <nav className="container py-4 flex flex-col gap-2">
              <Link
                to={isLoggedIn ? "/profil" : "/test"}
                className="py-3 px-4 rounded-lg font-medium hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isLoggedIn ? "Mon profil" : "Se tester"}
              </Link>
              <Link
                to="/articles"
                className="py-3 px-4 rounded-lg font-medium hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comprendre
              </Link>
              <div className="py-3 px-4 rounded-lg border border-border">
                <span className="font-medium text-muted-foreground">Valoriser</span>
                <div className="mt-2 space-y-1">
                  <Link
                    to="/particuliers"
                    className="block py-2 px-3 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Particuliers
                  </Link>
                  <Link
                    to="/pros"
                    className="block py-2 px-3 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Professionnels
                  </Link>
                  <Link
                    to="/entreprises"
                    className="block py-2 px-3 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Entreprises
                  </Link>
                </div>
              </div>
              <hr className="my-2 border-border" />
              {isLoggedIn ? (
                <>
                  <Link
                    to="/profil"
                    className="py-3 px-4 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mon profil
                  </Link>
                  <Link
                    to="/parametres"
                    className="py-3 px-4 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Paramètres
                  </Link>
                </>
              ) : (
                <Link
                  to="/connexion"
                  className="py-3 px-4 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Connexion
                </Link>
              )}
              <Link
                to="/test"
                className="py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Se tester
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Rechercher</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher dans les articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full">
              Rechercher
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
