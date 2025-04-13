
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-medical-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-medical-800 leading-tight">
              Современная медицина<br />
              <span className="text-medical-600">для вашего здоровья</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Клиника МАК-МЕД предлагает качественные медицинские услуги с использованием современного оборудования и индивидуальным подходом к каждому пациенту.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-6 text-lg gap-2">
                Записаться на прием
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="border-medical-600 text-medical-700 hover:bg-medical-50 px-6 py-6 text-lg gap-2">
                <Calendar size={18} />
                Расписание врачей
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-medical-600">15+</p>
                <p className="text-sm text-muted-foreground">лет опыта</p>
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-medical-600">20+</p>
                <p className="text-sm text-muted-foreground">специалистов</p>
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-medical-600">5000+</p>
                <p className="text-sm text-muted-foreground">пациентов</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-medical-400 rounded-full opacity-20 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Современная медицинская клиника" 
                className="rounded-2xl shadow-lg z-10 relative w-full max-w-md"
              />
              <div className="absolute -top-4 right-10 bg-white p-3 rounded-lg shadow-md z-20 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-sm font-medium">Работаем сейчас</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
