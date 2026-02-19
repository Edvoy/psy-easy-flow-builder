import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
  hideFooter?: boolean;
}

function AnnouncementBanner() {
  return (
    <div
      className="w-full py-2 overflow-hidden text-white text-sm font-medium"
      style={{ backgroundColor: "hsl(354, 100%, 77%)" }}
    >
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-8">
          Site web en construction. Lancement officiel le 31 mars. Pour tout bug ou questions, contacter contact@psy-easy.fr
        </span>
        <span className="mx-8">
          Site web en construction. Lancement officiel le 31 mars. Pour tout bug ou questions, contacter contact@psy-easy.fr
        </span>
      </div>
    </div>
  );
}

export function Layout({ children, isLoggedIn = false, hideFooter = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <Header isLoggedIn={isLoggedIn} />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
