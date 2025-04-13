
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useRef } from "react";

interface DoctorProps {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  delay: number;
}

const DoctorCard = ({ name, specialty, experience, image, delay }: DoctorProps) => {
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
    <Card className="overflow-hidden animate-on-scroll group" ref={cardRef}>
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="font-display font-semibold text-xl">{name}</h3>
        <p className="text-medical-600 font-medium">{specialty}</p>
        <p className="text-muted-foreground text-sm mt-2">Стаж: {experience}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-medical-200 hover:bg-medical-50 hover:text-medical-700 gap-2">
          <Calendar size={16} />
          Записаться на прием
        </Button>
      </CardFooter>
    </Card>
  );
};

const Doctors = () => {
  const doctors = [
    {
      name: "Иванов Иван Иванович",
      specialty: "Кардиолог, к.м.н.",
      experience: "15 лет",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      delay: 100
    },
    {
      name: "Петрова Анна Сергеевна",
      specialty: "Невролог",
      experience: "10 лет",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      delay: 200
    },
    {
      name: "Сидоров Алексей Петрович",
      specialty: "Офтальмолог, к.м.н.",
      experience: "12 лет",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      delay: 300
    },
    {
      name: "Козлова Елена Викторовна",
      specialty: "Терапевт",
      experience: "8 лет",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      delay: 400
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Наши <span className="text-medical-600">Специалисты</span></h2>
          <p className="text-muted-foreground">Команда высококвалифицированных врачей с многолетним опытом работы, готовых помочь вам с любыми медицинскими проблемами.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              image={doctor.image}
              delay={doctor.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
