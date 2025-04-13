
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Brain, Stethoscope, Eye, Microscope, UserPlus, LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, delay }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <Card className="animate-on-scroll transition-all hover:shadow-md hover:shadow-medical-100/50 hover:-translate-y-1 cursor-pointer group" ref={cardRef}>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center mb-4 group-hover:bg-medical-600 transition-colors">
          <Icon className="text-medical-600 group-hover:text-white transition-colors" size={24} />
        </div>
        <CardTitle className="text-xl font-display font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Кардиология",
      description: "Диагностика и лечение заболеваний сердечно-сосудистой системы с использованием современных методов.",
      icon: Heart,
      delay: 100
    },
    {
      title: "Неврология",
      description: "Лечение заболеваний нервной системы с применением последних научных достижений в области неврологии.",
      icon: Brain,
      delay: 200
    },
    {
      title: "Терапия",
      description: "Общая терапевтическая помощь при различных заболеваниях внутренних органов и систем организма.",
      icon: Stethoscope,
      delay: 300
    },
    {
      title: "Офтальмология",
      description: "Диагностика и лечение заболеваний глаз с использованием современного офтальмологического оборудования.",
      icon: Eye,
      delay: 400
    },
    {
      title: "Лабораторная диагностика",
      description: "Широкий спектр лабораторных исследований с быстрыми и точными результатами для диагностики заболеваний.",
      icon: Microscope,
      delay: 500
    },
    {
      title: "Профосмотры",
      description: "Комплексные медицинские осмотры для профилактики заболеваний и раннего выявления патологий.",
      icon: UserPlus,
      delay: 600
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Наши <span className="text-medical-600">Услуги</span></h2>
          <p className="text-muted-foreground">Мы предлагаем широкий спектр медицинских услуг, направленных на поддержание и восстановление вашего здоровья.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
