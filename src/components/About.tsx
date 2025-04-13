
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              entry.target.classList.add("show");
            } else if (entry.target === contentRef.current) {
              setTimeout(() => {
                entry.target.classList.add("show");
              }, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const benefits = [
    "Команда опытных врачей с высокой квалификацией",
    "Современное медицинское оборудование",
    "Комфортная и доброжелательная атмосфера",
    "Индивидуальный подход к каждому пациенту",
    "Доступные цены и программы лояльности"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-bl from-white to-medical-50">
      <div className="container mx-auto px-4" ref={aboutRef}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" ref={imageRef}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-medical-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-400 rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="О клинике МАК-МЕД" 
                className="rounded-2xl shadow-lg z-10 relative"
              />
              <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 p-4 bg-white rounded-xl shadow-lg z-20 max-w-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1584516150909-c2f7f846e85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Медицинское оборудование"
                  className="rounded-lg mb-2"
                />
                <p className="text-sm font-medium text-medical-800">Современное оборудование</p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll" ref={contentRef}>
            <div className="inline-block px-4 py-1 bg-medical-100 rounded-full text-medical-700 text-sm font-medium mb-4">
              О нас
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Клиника <span className="text-medical-600">МАК-МЕД</span> — ваше здоровье в надежных руках
            </h2>
            <p className="text-muted-foreground mb-6">
              Мы — современная многопрофильная клиника, работающая на рынке медицинских услуг уже более 15 лет. Наша миссия — сделать качественную медицинскую помощь доступной для каждого пациента.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-medical-600 shrink-0 mt-1" size={18} />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-medical-600 hover:bg-medical-700 gap-2 text-white">
              Узнать больше
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
