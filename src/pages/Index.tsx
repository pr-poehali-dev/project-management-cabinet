import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/783013d9-3450-4cdf-8e5e-01a3db52312c.jpg";

const advantages = [
  {
    icon: "Shield",
    title: "Надёжность",
    desc: "Комплектующие ведущих мировых производителей и многоуровневая система защиты обеспечивают бесперебойную работу 24/7.",
  },
  {
    icon: "Cpu",
    title: "Интеллектуальное управление",
    desc: "Программируемые контроллеры с гибкой логикой позволяют адаптировать систему под любые технологические процессы.",
  },
  {
    icon: "Gauge",
    title: "Энергоэффективность",
    desc: "Частотное регулирование и оптимизация режимов работы снижают энергопотребление до 35%.",
  },
  {
    icon: "Wrench",
    title: "Простота обслуживания",
    desc: "Модульная конструкция и удобный доступ к компонентам сокращают время технического обслуживания.",
  },
  {
    icon: "MonitorSmartphone",
    title: "Удалённый мониторинг",
    desc: "Интеграция с SCADA-системами и возможность дистанционного управления через защищённые каналы связи.",
  },
  {
    icon: "Award",
    title: "Сертификация",
    desc: "Полное соответствие ГОСТ, ТР ТС и международным стандартам промышленной безопасности.",
  },
];

const industries = [
  { icon: "Droplets", title: "Нефтегазовая", desc: "Переработка, сепарация, подготовка сырья" },
  { icon: "Pill", title: "Фармацевтика", desc: "Чистые производства, GMP-стандарты" },
  { icon: "Wheat", title: "Пищевая промышленность", desc: "Молочная, сахарная, масложировая отрасли" },
  { icon: "FlaskConical", title: "Химическая", desc: "Реакторные процессы, фильтрация, очистка" },
  { icon: "Pickaxe", title: "Горнодобывающая", desc: "Обогащение руд, обезвоживание шламов" },
  { icon: "Recycle", title: "Экология", desc: "Очистка сточных вод, утилизация отходов" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-10" />
          <img
            src={HERO_IMAGE}
            alt="Шкаф управления"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 pt-32 pb-24 md:pt-44 md:pb-36 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Реализованный проект</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Шкаф управления{" "}
            <span className="text-gradient">центрифугой</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Проектирование и производство шкафа управления промышленной
            центрифугой с системой частотного регулирования и защитой от аварийных режимов
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} className="text-primary" />
              <span>Срок: 45 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span>Россия, Екатеринбург</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Factory" size={16} className="text-primary" />
              <span>Нефтеперерабатывающий завод</span>
            </div>
          </div>
        </div>

        <div className="section-divider" />
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                О проекте
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
                Комплексное решение для управления промышленной центрифугой
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                По заказу нефтеперерабатывающего предприятия мы разработали и изготовили
                шкаф управления промышленной центрифугой мощностью 75 кВт.
                Система обеспечивает плавный пуск, частотное регулирование скорости
                вращения и полную защиту оборудования от аварийных режимов.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Проект включал проектирование электрической схемы, подбор
                комплектующих, сборку шкафа, программирование ПЛК и пусконаладочные
                работы на объекте заказчика. Все работы выполнены под ключ с
                гарантией 36 месяцев.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">75</div>
                  <div className="text-xs text-muted-foreground">кВт мощность</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">36</div>
                  <div className="text-xs text-muted-foreground">мес. гарантия</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">IP54</div>
                  <div className="text-xs text-muted-foreground">степень защиты</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden glow-blue border border-border">
                <img
                  src={HERO_IMAGE}
                  alt="Шкаф управления центрифугой"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Проект завершён</div>
                    <div className="text-xs text-muted-foreground">Сдан в эксплуатацию</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Advantages */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Преимущества
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Почему выбирают наши решения
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Каждый проект — это сочетание инженерной экспертизы, качественных
              комплектующих и индивидуального подхода
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Industries */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Применение
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Отрасли применения
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Наши шкафы управления успешно работают на предприятиях
              различных отраслей промышленности
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-secondary/30 border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;