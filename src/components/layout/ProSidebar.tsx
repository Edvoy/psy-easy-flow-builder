import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, User, Users, BookOpen, Settings, Award } from "lucide-react";

export function ProSidebar() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", href: "/pro/dashboard", icon: LayoutDashboard },
    { label: "Mon profil", href: "/pro/profil", icon: User },
    { label: "Mes clients", href: "/pro/clients", icon: Users },
    { label: "Ressources", href: "/pro/ressources", icon: BookOpen },
    { label: "Paramètres", href: "/pro/parametres", icon: Settings },
  ];

  return (
    <nav className="w-64 border-r-2 border-foreground bg-background min-h-[calc(100vh-4rem)]">
      <div className="p-4 border-b-2 border-foreground">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-sm">Dr. Marie Dupont</p>
            <p className="text-xs text-muted-foreground">Partenaire certifié</p>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "hover:bg-accent"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
