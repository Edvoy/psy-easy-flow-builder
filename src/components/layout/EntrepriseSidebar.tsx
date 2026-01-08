import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, Mail, Settings, BookOpen, Building2 } from "lucide-react";

export function EntrepriseSidebar() {
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", href: "/entreprise/dashboard", icon: LayoutDashboard },
    { label: "Équipe", href: "/entreprise/equipe", icon: Users },
    { label: "Invitations", href: "/entreprise/invitations", icon: Mail },
    { label: "Ressources", href: "/entreprise/ressources", icon: BookOpen },
    { label: "Paramètres", href: "/entreprise/parametres", icon: Settings },
  ];

  return (
    <nav className="w-64 border-r-2 border-foreground bg-background min-h-[calc(100vh-4rem)]">
      <div className="p-4 border-b-2 border-foreground">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg border-2 border-foreground flex items-center justify-center">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-sm">Acme Corp</p>
            <p className="text-xs text-muted-foreground">Compte Entreprise</p>
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
