
import { ReactNode } from "react";
import ThemeToggle from "../components/Toggle";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-row justify-between bg-gray-800 text-white px-8 py-4">
       <div>Where in the world?</div>
       <ThemeToggle />
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-midnight text-white p-4">
       Footer
      </footer>
    </div>
  );
};

export default MainLayout;
