import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  User,
  GraduationCap,
  Users,
  BookOpen,
  Settings,
  AlertTriangle
} from "lucide-react";

const pages = [
  { label: "Dashboard", href: "/pro/dashboard", icon: LayoutDashboard },
  { label: "Mon profil", href: "/pro/profil", icon: User },
  { label: "Certification", href: "/pro/certification", icon: GraduationCap },
  { label: "Mes clients", href: "/pro/clients", icon: Users },
  { label: "Ressources", href: "/pro/ressources", icon: BookOpen },
  { label: "Paramètres", href: "/pro/parametres", icon: Settings },
];

export function TempProNav() {
  const location = useLocation();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-4 w-4 text-blue-600" />
        <span className="text-xs font-medium text-blue-800 dark:text-blue-200">
          Navigation temporaire – à supprimer
        </span>
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
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
