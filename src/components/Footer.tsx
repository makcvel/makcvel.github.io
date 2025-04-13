
import { Link } from "react-router-dom";
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

export default Footer;
