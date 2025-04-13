
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-medical-50 pt-16">
        <div className="text-center px-4 py-12">
          <h1 className="text-7xl md:text-9xl font-bold text-medical-600 mb-4">404</h1>
          <p className="text-xl md:text-2xl text-foreground mb-6">Страница не найдена</p>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Извините, запрашиваемая вами страница не существует или была перемещена.
          </p>
          <Button className="bg-medical-600 hover:bg-medical-700 gap-2">
            <Home size={18} />
            Вернуться на главную
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
