import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "Веб-дизайн",
      description: "Современные адаптивные сайты",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Мобильные приложения",
      description: "iOS и Android разработка",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Брендинг",
      description: "Создание уникального стиля",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "UI/UX",
      description: "Интерфейсы нового поколения",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const skills = [
    "React", "TypeScript", "Figma", "Tailwind CSS",
    "Node.js", "Python", "Adobe Creative Suite", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #FF006E, #FF6B35, #FFD60A, #0EA5E9, #9b87f5)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Файёз
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
                Креативный разработчик
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Создаю современные цифровые решения, которые объединяют креативность и технологии. 
                Превращаю идеи в яркие визуальные истории.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Связаться
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать CV
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in lg:order-first">
              <div className="relative w-full max-w-md mx-auto">
                <div 
                  className="absolute inset-0 blur-3xl opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, #FF006E, #FF6B35, #FFD60A, #0EA5E9)',
                  }}
                />
                <img 
                  src="https://cdn.poehali.dev/files/4cec86da-e3d2-459e-93a1-116d2f229d6d.jpg"
                  alt="Файёз"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионал в области цифрового дизайна и разработки с фокусом на создание 
              незабываемых пользовательских впечатлений
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="text-base px-4 py-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">Креативность</h3>
              <p className="text-muted-foreground">
                Уникальный подход к каждому проекту
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-2">Скорость</h3>
              <p className="text-muted-foreground">
                Быстрая реализация идей в продукт
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">Инновации</h3>
              <p className="text-muted-foreground">
                Использование новейших технологий
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Проекты</h2>
            <p className="text-xl text-muted-foreground">
              Избранные работы из моего портфолио
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon 
                      name="Eye" 
                      size={48} 
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110" 
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <Card className="max-w-3xl mx-auto p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать проект?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Давайте создадим что-то невероятное вместе
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Send" className="mr-2" size={20} />
              Начать сотрудничество
            </Button>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 Файёз. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
