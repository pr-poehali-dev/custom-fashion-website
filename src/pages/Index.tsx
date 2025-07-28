import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8">
            vivangelduuust
            <span className="block text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal mt-4">
              Кастомная дизайнерская одежда
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Создаём уникальные образы, воплощающие вашу индивидуальность. 
            Каждое изделие — произведение искусства, созданное вручную с безупречным вниманием к деталям.
          </p>
          
          {/* Telegram CTA */}
          <div className="mb-16">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/vivangelduuust', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-3" size={24} />
              Заказать через Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground mb-16">
            Наши работы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <Card className="group overflow-hidden border-none shadow-lg bg-card rounded-lg">
              <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                <img 
                  src="img/fa18711a-aedd-4532-89b7-28cdb61366d2.jpg" 
                  alt="Luxury fashion piece"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-card-foreground mb-2">Эксклюзивное пальто</h3>
                <p className="text-muted-foreground">Роскошный кашемир, индивидуальный крой</p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-none shadow-lg bg-card rounded-lg">
              <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                <img 
                  src="img/c1026c6e-68c5-48d7-891b-8d215a83877c.jpg" 
                  alt="Custom designer jacket"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-card-foreground mb-2">Дизайнерский жакет</h3>
                <p className="text-muted-foreground">Авторский дизайн, премиальные материалы</p>
              </div>
            </Card>

            <Card className="group overflow-hidden border-none shadow-lg bg-card rounded-lg md:col-span-2 lg:col-span-1">
              <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                <img 
                  src="img/0b909831-2cbf-485d-84e2-68a700737359.jpg" 
                  alt="Design process workspace"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-card-foreground mb-2">Творческий процесс</h3>
                <p className="text-muted-foreground">От идеи до воплощения</p>
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
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                Философия бренда
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы верим, что одежда — это способ самовыражения. Каждое изделие создаётся с учётом 
                ваших пожеланий, особенностей фигуры и образа жизни.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Используем только премиальные ткани и фурнитуру. Каждый шов выполнен вручную 
                мастерами с многолетним опытом в высокой моде.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Crown" className="mr-4 text-primary" size={24} />
                  <span className="text-muted-foreground">Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Scissors" className="mr-4 text-primary" size={24} />
                  <span className="text-muted-foreground">Ручная работа высочайшего качества</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Sparkles" className="mr-4 text-primary" size={24} />
                  <span className="text-muted-foreground">Эксклюзивные дизайны и материалы</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary/50 to-accent/50 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Heart" className="mx-auto mb-4 text-primary" size={48} />
                    <p className="text-muted-foreground font-medium">Создано с любовью</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">
            Начните создание вашего образа
          </h2>
          <p className="text-lg text-background/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Свяжитесь с нами для консультации и обсуждения вашего индивидуального заказа. 
            Мы ответим на все вопросы и поможем воплотить ваши идеи в жизнь.
          </p>
          
          {/* Main Telegram CTA */}
          <div className="mb-12">
            <Button 
              className="bg-background text-foreground hover:bg-background/90 px-12 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/vivangelduuust', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-3" size={24} />
              Написать в Telegram
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <button 
              className="text-background/60 hover:text-background transition-colors duration-300"
              onClick={() => window.open('https://instagram.com/vivangelduuust', '_blank')}
            >
              <Icon name="Instagram" size={24} />
            </button>
            <button 
              className="text-background/60 hover:text-background transition-colors duration-300"
              onClick={() => window.open('mailto:info@vivangelduuust.com', '_blank')}
            >
              <Icon name="Mail" size={24} />
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-background/20">
            <p className="text-background/60 text-sm">
              © 2024 vivangelduuust. Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}