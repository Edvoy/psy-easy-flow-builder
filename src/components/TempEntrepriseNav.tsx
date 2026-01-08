import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Mail, 
  BookOpen, 
  Settings,
  AlertTriangle
} from "lucide-react";

const pages = [
  { label: "Dashboard", href: "/entreprise/dashboard", icon: LayoutDashboard },
  { label: "Équipe", href: "/entreprise/equipe", icon: Users },
  { label: "Invitations", href: "/entreprise/invitations", icon: Mail },
  { label: "Ressources", href: "/entreprise/ressources", icon: BookOpen },
  { label: "Paramètres", href: "/entreprise/parametres", icon: Settings },
];

export function TempEntrepriseNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-500 rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-4 w-4 text-yellow-600" />
        <span className="text-xs font-medium text-yellow-800 dark:text-yellow-200">
          Navigation temporaire – à supprimer
        </span>
      </div>
      <div className="flex gap-2">
        {pages.map((page) => {
          const Icon = page.icon;
          const isActive = location.pathname === page.href;
          return (
            <Link key={page.href} to={page.href}>
              <Button
                variant={isActive ? "default" : "outline"}
                size="sm"
                className="gap-1 text-xs"
              >
                <Icon className="h-3 w-3" />
                {page.label}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
