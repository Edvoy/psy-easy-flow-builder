import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
  hideFooter?: boolean;
}

      
      <Header isLoggedIn={isLoggedIn} />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}
