import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Globe, User, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  isLoggedIn?: boolean;
}

export function Header({ isLoggedIn = false }: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          Psy-easy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Se tester / Mon profil */}
          <Link
            to={isLoggedIn ? "/profil" : "/test"}
            className={`nav-link ${isActive(isLoggedIn ? "/profil" : "/test") ? "nav-link-active" : ""}`}
          >
            {isLoggedIn ? "Mon profil" : "Se tester"}
          </Link>

          {/* Comprendre - no dropdown arrow */}
          <Link
            to="/articles"
            className={`nav-link ${isActive("/articles") ? "nav-link-active" : ""}`}
          >
            Comprendre
          </Link>

          {/* Valoriser - with dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`nav-link ${
                  isActive("/particuliers") || isActive("/pros") || isActive("/entreprises")
                    ? "nav-link-active"
                    : ""
                }`}
              >
                Valoriser
                <span className="ml-1">▾</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/particuliers">Particuliers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/pros">Pros</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/entreprises">Entreprises</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 hover:bg-accent rounded-md transition-colors" aria-label="Rechercher">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-accent rounded-md transition-colors" aria-label="Langue">
            <Globe className="h-5 w-5" />
          </button>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-9 h-9 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-accent transition-colors">
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
              <Button variant="ghost" size="sm">
                Connexion
              </Button>
            </Link>
          )}

          <Link to="/test">
            <Button size="sm">Passer le test</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-foreground bg-background animate-slide-up">
          <nav className="container py-4 flex flex-col gap-2">
            <Link
              to={isLoggedIn ? "/profil" : "/test"}
              className="py-3 px-4 border-2 border-foreground rounded-md font-medium hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isLoggedIn ? "Mon profil" : "Se tester"}
            </Link>
            <Link
              to="/articles"
              className="py-3 px-4 border-2 border-foreground rounded-md font-medium hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comprendre
            </Link>
            <div className="py-3 px-4 border-2 border-foreground rounded-md">
              <span className="font-medium">Valoriser</span>
              <div className="mt-2 space-y-1">
                <Link
                  to="/particuliers"
                  className="block py-2 px-3 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Particuliers
                </Link>
                <Link
                  to="/pros"
                  className="block py-2 px-3 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pros
                </Link>
                <Link
                  to="/entreprises"
                  className="block py-2 px-3 hover:bg-accent rounded-md transition-colors"
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
                  className="py-3 px-4 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mon profil
                </Link>
                <Link
                  to="/parametres"
                  className="py-3 px-4 hover:bg-accent rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Paramètres
                </Link>
              </>
            ) : (
              <Link
                to="/connexion"
                className="py-3 px-4 hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </Link>
            )}
            <Link
              to="/test"
              className="py-3 px-4 bg-foreground text-background rounded-md font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Passer le test
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
