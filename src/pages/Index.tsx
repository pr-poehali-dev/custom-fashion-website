import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-8">
            ATELIER
            <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-600 font-normal mt-4">
              Кастомная дизайнерская одежда
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Создаём уникальные образы, воплощающие вашу индивидуальность. 
            Каждое изделие — произведение искусства, созданное вручную с безупречным вниманием к деталям.
          </p>
          
          {/* Telegram CTA */}
          <div className="mb-16">
            <Button 
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/ateliercustom', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-3" size={24} />
              Заказать через Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-black mb-16">
            Наши работы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <Card className="group overflow-hidden border-none shadow-none bg-white">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="img/fa18711a-aedd-4532-89b7-28cdb61366d2.jpg" 
                  alt="Luxury fashion piece"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-2">Эксклюзивное пальто</h3>
                <p className="text-gray-600">Роскошный кашемир, индивидуальный крой</p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-none shadow-none bg-white">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="img/c1026c6e-68c5-48d7-891b-8d215a83877c.jpg" 
                  alt="Custom designer jacket"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-2">Дизайнерский жакет</h3>
                <p className="text-gray-600">Авторский дизайн, премиальные материалы</p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-none shadow-none bg-white md:col-span-2 lg:col-span-1">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src="img/0b909831-2cbf-485d-84e2-68a700737359.jpg" 
                  alt="Design process workspace"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-black mb-2">Творческий процесс</h3>
                <p className="text-gray-600">От идеи до воплощения</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-black mb-8">
                Философия бренда
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Мы верим, что одежда — это способ самовыражения. Каждое изделие создаётся с учётом 
                ваших пожеланий, особенностей фигуры и образа жизни.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Используем только премиальные ткани и фурнитуру. Каждый шов выполнен вручную 
                мастерами с многолетним опытом в высокой моде.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Crown" className="mr-4 text-gray-800" size={24} />
                  <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Scissors" className="mr-4 text-gray-800" size={24} />
                  <span className="text-gray-700">Ручная работа высочайшего качества</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Sparkles" className="mr-4 text-gray-800" size={24} />
                  <span className="text-gray-700">Эксклюзивные дизайны и материалы</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Heart" className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-500 font-medium">Создано с любовью</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Начните создание вашего образа
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Свяжитесь с нами для консультации и обсуждения вашего индивидуального заказа. 
            Мы ответим на все вопросы и поможем воплотить ваши идеи в жизнь.
          </p>
          
          {/* Main Telegram CTA */}
          <div className="mb-12">
            <Button 
              className="bg-white text-black hover:bg-gray-100 px-12 py-4 text-lg font-medium rounded-none transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/ateliercustom', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-3" size={24} />
              Написать в Telegram
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <button 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => window.open('https://instagram.com/ateliercustom', '_blank')}
            >
              <Icon name="Instagram" size={24} />
            </button>
            <button 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              onClick={() => window.open('mailto:info@ateliercustom.com', '_blank')}
            >
              <Icon name="Mail" size={24} />
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Atelier. Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}