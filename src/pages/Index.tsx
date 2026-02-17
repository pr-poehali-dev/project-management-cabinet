import { useState } from "react";
import Icon from "@/components/ui/icon";

const PROJECT_IMAGES = [
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/783013d9-3450-4cdf-8e5e-01a3db52312c.jpg", alt: "Шкаф управления центрифугой — общий вид" },
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/9efd57b8-567c-4e45-be5a-e98eb3e0b0eb.jpg", alt: "Внутренняя компоновка ПЛК и контакторов" },
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/65e773fb-e757-4836-98f3-db92b851aa2c.jpg", alt: "Система контроля маслосистемы" },
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/691d4965-2f3a-4c46-9124-534e53f5b09b.jpg", alt: "Датчики вибрации на центрифуге" },
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/aa243d76-3234-4276-80b8-a0d8223b497e.jpg", alt: "Автоматические выключатели и частотный привод" },
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/1cc0d80a-1e42-4ba1-a2f2-e482f1989d62.jpg", alt: "Панель оператора HMI" },
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/a7789fc7-1353-4065-af67-5005b52e5721.jpg", alt: "Промышленная центрифуга" },
  { src: "https://cdn.poehali.dev/projects/80ebec3a-fd58-4c76-a956-667a19e073a7/files/e5254f13-1f3d-41ee-b363-dea459511daf.jpg", alt: "Пусконаладочные работы" },
];

const advantages = [
  {
    icon: "Activity",
    title: "Контроль вибрации",
    desc: "Для вибрационных центрифуг предусмотрена функция контроля амплитуды вибрации, позволяющая обнаруживать дисбаланс и неисправности на ранней стадии.",
  },
  {
    icon: "Droplets",
    title: "Контроль маслосистемы",
    desc: "Универсальная система мониторинга давления, температуры и расхода масла, применимая на центрифугах любого типа.",
  },
  {
    icon: "ShieldCheck",
    title: "Надёжность и безопасность",
    desc: "Повышение надежности технологического процесса и снижение риска аварийных остановок оборудования.",
  },
  {
    icon: "Wrench",
    title: "Снижение затрат",
    desc: "Своевременное выявление отклонений сокращает расходы на обслуживание и внеплановый ремонт оборудования.",
  },
  {
    icon: "Timer",
    title: "Увеличение ресурса",
    desc: "Предотвращение перегрева и износа узлов позволяет значительно продлить срок службы центрифуги.",
  },
  {
    icon: "Network",
    title: "Интеграция в АСУ ТП",
    desc: "Возможность интеграции в существующие системы автоматизации и диспетчеризации предприятия.",
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
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f1a2e]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a2e]/60 via-[#0f1a2e]/80 to-[#0f1a2e] z-10" />
          <img
            src={PROJECT_IMAGES[0].src}
            alt="Шкаф управления"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-20 container mx-auto px-6 pt-32 pb-24 md:pt-44 md:pb-36 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sm text-sky-300 font-medium">Реализованный проект</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Шкаф управления{" "}
            <span className="text-gradient">центрифугой</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Современное промышленное оборудование для автоматизированного
            управления и мониторинга работы центрифуг различного типа
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} className="text-sky-400" />
              <span>Срок: 45 дней</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="text-sky-400" />
              <span>Россия, Екатеринбург</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Factory" size={16} className="text-sky-400" />
              <span>Нефтеперерабатывающий завод</span>
            </div>
          </div>
        </div>

        <div className="section-divider" />
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              О проекте
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight">
              Комплексное решение для управления промышленной центрифугой
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Шкаф управления центрифугой представляет собой современное промышленное оборудование, предназначенное для автоматизированного управления и мониторинга работы центрифуг различного типа.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Данное решение обеспечивает стабильную эксплуатацию, повышает надежность технологического процесса и снижает риск аварийных остановок оборудования. Шкаф управления оснащен системой контроля маслосистемы, включающей мониторинг давления, температуры и расхода масла в системе смазки.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Контроль маслосистемы применим на любых центрифугах и позволяет своевременно выявлять отклонения в работе, предотвращать перегрев и износ узлов, а также продлевать срок службы центрифуги.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Для вибрационных центрифуг предусмотрена функция контроля амплитуды вибрации. Контроль вибрации позволяет обнаруживать дисбаланс, механические повреждения и другие неисправности на ранней стадии, обеспечивая безопасную и бесперебойную работу оборудования.
              </p>

              <div className="grid grid-cols-3 gap-4">
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

            {/* Gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg mb-4">
                <img
                  src={PROJECT_IMAGES[activeImage].src}
                  alt={PROJECT_IMAGES[activeImage].alt}
                  className="w-full aspect-[4/3] object-cover transition-all duration-300"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mb-4">
                {PROJECT_IMAGES[activeImage].alt}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {PROJECT_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i
                        ? "border-primary shadow-md scale-[1.02]"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
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
                <div className="w-12 h-12 rounded-xl bg-[#FFA200] flex items-center justify-center mb-5 group-hover:brightness-110 transition-all">
                  <Icon name={item.icon} size={24} className="text-white" />
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
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FFA200] flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={22} className="text-white" />
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