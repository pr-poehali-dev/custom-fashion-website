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
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Представьте, что у вас есть любимая, но уже надоевшая вещь. Возможно, это старая куртка, джинсы, лонгслив. Что, если бы вы могли дать ей новую жизнь, превратив в нечто уникальное и отражающее вашу индивидуальность?
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Наш сайт создан именно для этого! Мы специализируемся на кастомизации ваших вещей, превращая обыденное в extraordinary. Забудьте о массовом производстве – здесь каждая вещь становится произведением искусства, созданным специально для вас, а так же есть модели которые мы покупаем в магазине и сами кастомизируем. <span className="font-medium text-primary">Важно: любая одежда купленная у нас будет оригинальной.</span>
          </p>
          
          {/* Telegram CTA */}
          <div className="mb-16">
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/zzzzzzzzzzizzzz', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-3" size={24} />
              Заказать через Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-foreground mb-16">
            Наши услуги
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <Card className="group border-none shadow-lg bg-card rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <Icon name="Palette" className="mx-auto text-primary" size={48} />
              </div>
              <h3 className="text-xl font-medium text-card-foreground mb-4">Кастомизация ваших вещей</h3>
              <p className="text-muted-foreground leading-relaxed">Превращаем ваши старые любимые вещи в уникальные произведения искусства</p>
            </Card>

            <Card className="group border-none shadow-lg bg-card rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <Icon name="ShoppingBag" className="mx-auto text-primary" size={48} />
              </div>
              <h3 className="text-xl font-medium text-card-foreground mb-4">Готовые кастомы</h3>
              <p className="text-muted-foreground leading-relaxed">Покупаем базовые вещи и создаём из них оригинальные дизайнерские модели</p>
            </Card>

            <Card className="group border-none shadow-lg bg-card rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Icon name="Sparkles" className="mx-auto text-primary" size={48} />
              </div>
              <h3 className="text-xl font-medium text-card-foreground mb-4">100% Оригинальность</h3>
              <p className="text-muted-foreground leading-relaxed">Каждая вещь уникальна и неповторима — никаких копий или массового производства</p>
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
                Как это работает
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                У каждого есть вещи, которые когда-то были любимыми, но теперь просто висят в шкафу. 
                Мы даём им вторую жизнь, создавая что-то совершенно новое и уникальное.
              </p>

              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Recycle" className="mr-4 text-primary" size={24} />
                  <span className="text-muted-foreground">Даём новую жизнь старым вещам</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Brush" className="mr-4 text-primary" size={24} />
                  <span className="text-muted-foreground">Уникальные техники кастомизации</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Star" className="mr-4 text-primary" size={24} />
                  <span className="text-muted-foreground">Каждая вещь — единственная в своём роде</span>
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
            Готовы к трансформации?
          </h2>
          <p className="text-lg text-background/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Напишите нам в Telegram и расскажите о своей идее! Мы обсудим все детали, 
            стоимость и сроки. Превратим вашу обычную вещь в extraordinary шедевр.
          </p>
          
          {/* Main Telegram CTA */}
          <div className="mb-12">
            <Button 
              className="bg-background text-foreground hover:bg-background/90 px-12 py-4 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/zzzzzzzzzzizzzz', '_blank')}
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