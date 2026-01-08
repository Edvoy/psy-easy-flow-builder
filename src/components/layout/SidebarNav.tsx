import { Link, useLocation } from "react-router-dom";
import { User, Bot, ShoppingBag, Settings } from "lucide-react";

export function SidebarNav() {
  const location = useLocation();

  const navItems = [
    { label: "Mon profil", href: "/profil", icon: User },
    { label: "P-zy", href: "/pzy", icon: Bot },
    { label: "Achats", href: "/achats", icon: ShoppingBag },
    { label: "Paramètres", href: "/parametres", icon: Settings },
  ];

  return (
    <nav className="w-64 border-r-2 border-foreground bg-background min-h-[calc(100vh-4rem)]">
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
