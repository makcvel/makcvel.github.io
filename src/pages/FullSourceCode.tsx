
import React from "react";
import { Button } from "@/components/ui/button";

const FullSourceCode = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Полный исходный код проекта МАК-МЕД</h1>
      
      <div className="space-y-8">
        {/* Index.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/pages/Index.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  // Initialize scroll animations
  initScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;`}
          </pre>
        </div>

        {/* scrollAnimation.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/utils/scrollAnimation.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { useEffect } from "react";

export const initScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("show");
        }
      });
    };
    
    // Run on initial load
    animateOnScroll();
    
    // Add event listener
    window.addEventListener("scroll", animateOnScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);
};`}
          </pre>
        </div>

        {/* Navbar.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/components/Navbar.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "О нас", path: "/about" },
    { name: "Врачи", path: "/doctors" },
    { name: "Клиника", path: "/clinic" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <nav className={\`fixed top-0 left-0 w-full z-50 transition-all duration-300 \${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"}\`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-medical-600 font-display font-bold text-2xl">МАК-МЕД</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-foreground hover:text-medical-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="bg-medical-600 hover:bg-medical-700 gap-2">
            <Phone size={16} />
            <span className="hidden lg:inline">+7 (123) 456-7890</span>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-foreground hover:text-medical-600 transition-colors font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button className="bg-medical-600 hover:bg-medical-700 w-full gap-2">
                  <Phone size={16} />
                  <span>+7 (123) 456-7890</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`}
          </pre>
        </div>

        {/* Hero.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/components/Hero.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Button } from "@/components/ui/button";
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

export default Hero;`}
          </pre>
        </div>

        {/* Services.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/components/Services.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export default Services;`}
          </pre>
        </div>

        {/* About.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/components/About.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Button } from "@/components/ui/button";
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

export default About;`}
          </pre>
        </div>

        {/* Doctors.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/components/Doctors.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Card, CardContent, CardFooter } from "@/components/ui/card";
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

export default Doctors;`}
          </pre>
        </div>

        {/* Contact.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/components/Contact.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const ContactCard = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => {
  return (
    <Card>
      <CardContent className="p-6 flex gap-4">
        <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center shrink-0">
          <Icon className="text-medical-600" size={20} />
        </div>
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="py-16 md:py-24 bg-medical-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Свяжитесь с <span className="text-medical-600">Нами</span></h2>
          <p className="text-muted-foreground">Мы всегда готовы ответить на ваши вопросы и помочь вам записаться на прием к нашим специалистам.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <ContactCard 
              icon={MapPin} 
              title="Адрес"
              content="г. Москва, ул. Примерная, д. 123"
            />
            <ContactCard 
              icon={Phone} 
              title="Телефон"
              content="+7 (123) 456-7890"
            />
            <ContactCard 
              icon={Mail} 
              title="Email"
              content="info@mak-med.ru"
            />
            <ContactCard 
              icon={Clock} 
              title="Часы работы"
              content="Пн-Пт: 8:00 - 20:00, Сб: 9:00 - 18:00"
            />
          </div>
          
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-display font-semibold mb-6">Оставьте сообщение</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Иван Иванов" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="+7 (___) ___-____" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="example@mail.ru" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Ваше сообщение..." 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="bg-medical-600 hover:bg-medical-700 text-white w-full md:w-auto gap-2">
                Отправить сообщение
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;`}
          </pre>
        </div>

        {/* Footer.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/components/Footer.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-medical-800 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <h3 className="font-display font-bold text-2xl mb-4">МАК-МЕД</h3>
            <p className="text-medical-100 mb-6">Современная многопрофильная клиника с индивидуальным подходом к каждому пациенту.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-medical-700 flex items-center justify-center hover:bg-medical-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-medical-700 flex items-center justify-center hover:bg-medical-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-medical-700 flex items-center justify-center hover:bg-medical-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Разделы сайта</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-medical-100 hover:text-white transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="text-medical-100 hover:text-white transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/about" className="text-medical-100 hover:text-white transition-colors">О клинике</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-medical-100 hover:text-white transition-colors">Врачи</Link>
              </li>
              <li>
                <Link to="/prices" className="text-medical-100 hover:text-white transition-colors">Цены</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-medical-100 hover:text-white transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/cardiology" className="text-medical-100 hover:text-white transition-colors">Кардиология</Link>
              </li>
              <li>
                <Link to="/services/neurology" className="text-medical-100 hover:text-white transition-colors">Неврология</Link>
              </li>
              <li>
                <Link to="/services/ophthalmology" className="text-medical-100 hover:text-white transition-colors">Офтальмология</Link>
              </li>
              <li>
                <Link to="/services/therapy" className="text-medical-100 hover:text-white transition-colors">Терапия</Link>
              </li>
              <li>
                <Link to="/services/diagnostics" className="text-medical-100 hover:text-white transition-colors">Диагностика</Link>
              </li>
              <li>
                <Link to="/services/check-ups" className="text-medical-100 hover:text-white transition-colors">Профосмотры</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-medical-300 shrink-0 mt-1" />
                <span className="text-medical-100">г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-medical-300 shrink-0" />
                <span className="text-medical-100">+7 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-medical-300 shrink-0" />
                <span className="text-medical-100">info@mak-med.ru</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-medical-300 shrink-0 mt-1" />
                <div>
                  <div className="text-medical-100">Пн-Пт: 8:00 - 20:00</div>
                  <div className="text-medical-100">Сб: 9:00 - 18:00</div>
                  <div className="text-medical-100">Вс: выходной</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-medical-700 pt-6 mt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-medical-300 text-sm">&copy; {currentYear} МАК-МЕД. Все права защищены.</p>
          <div className="mt-3 md:mt-0">
            <Link to="/privacy" className="text-medical-300 text-sm hover:text-white transition-colors mr-4">Политика конфиденциальности</Link>
            <Link to="/terms" className="text-medical-300 text-sm hover:text-white transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`}
          </pre>
        </div>

        {/* App.tsx */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4">src/App.tsx</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
{`import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;`}
          </pre>
        </div>

        <div className="mt-8">
          <Button onClick={() => window.location.href = "/"} className="bg-medical-600 hover:bg-medical-700">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FullSourceCode;
