
import { Button } from "@/components/ui/button";
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

export default Contact;
