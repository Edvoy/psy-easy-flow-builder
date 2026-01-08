import { Header } from "./Header";
import { EntrepriseSidebar } from "./EntrepriseSidebar";

interface EntrepriseLayoutProps {
  children: React.ReactNode;
}

export function EntrepriseLayout({ children }: EntrepriseLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header isLoggedIn={true} />
      <div className="flex">
        <EntrepriseSidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
