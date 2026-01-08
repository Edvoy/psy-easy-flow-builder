import { Header } from "./Header";
import { ProSidebar } from "./ProSidebar";

interface ProLayoutProps {
  children: React.ReactNode;
}

export function ProLayout({ children }: ProLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header isLoggedIn={true} />
      <div className="flex">
        <ProSidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
