import { Link, useLocation } from "react-router-dom";
import { User, Bot, ShoppingBag, Settings, Users, Crown, Lock } from "lucide-react";

export function SidebarNav() {
  const location = useLocation();
  
  // TODO: Replace with real auth/premium state from context
  const isPremium = false;

  const navItems = [
    { label: "Mon profil", href: "/profil", icon: User },
    { label: "Partenaires", href: "/partenaires", icon: Users },
    { label: "P-zy", href: "/pzy", icon: Bot, premium: true },
    { label: "Achats", href: "/achats", icon: ShoppingBag },
    { label: "Paramètres", href: "/parametres", icon: Settings },
  ];

  return (
    <nav className="w-64 border-r-2 border-foreground bg-background min-h-[calc(100vh-4rem)]">
      <div className="p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          const isPremiumLocked = item.premium && !isPremium;
          
          return (
            <Link
              key={item.href}
              to={isPremiumLocked ? "/premium" : item.href}
              className={`flex items-center justify-between gap-3 px-4 py-3 rounded-md font-medium transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "hover:bg-accent"
              } ${isPremiumLocked ? "opacity-70" : ""}`}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                {item.label}
              </span>
              {item.premium && (
                isPremium ? (
                  <Crown className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Lock className="h-4 w-4" />
                )
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
