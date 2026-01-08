import { Header } from "./Header";
import { Footer } from "./Footer";
import { SidebarNav } from "./SidebarNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={true} />
      <div className="flex flex-1">
        <SidebarNav />
        <main className="flex-1 bg-muted/30">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
