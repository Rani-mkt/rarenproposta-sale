import { FileText, LayoutTemplate, SlidersHorizontal, Gem, ShieldCheck, Timer } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const benefits = [
  {
    icon: FileText,
    title: 'Propostas em PDF',
    desc: 'Exporte documentos impecáveis, prontos para enviar, com layout que impressiona em qualquer tela ou impressão.',
  },
  {
    icon: LayoutTemplate,
    title: 'Templates profissionais',
    desc: 'Modelos criados por especialistas em vendas para cada segmento — comece de uma base que já converte.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Personalização completa',
    desc: 'Ajuste cores, logo, seções, itens e valores. Cada proposta com a identidade da sua empresa.',
  },
  {
    icon: Gem,
    title: 'Visual premium',
    desc: 'Tipografia refinada, espaçamento perfeito e detalhes que transmitem sofisticação em cada página.',
  },
  {
    icon: ShieldCheck,
    title: 'Mais credibilidade',
    desc: 'Apresente-se como uma empresa organizada e confiável — o que aumenta o valor percebido do seu serviço.',
  },
  {
    icon: Timer,
    title: 'Economia de tempo',
    desc: 'O que levava horas agora leva minutos. Cálculo automático de valores e reaproveitamento de modelos.',
  },
]

export function Benefits() {
  return (
    <section id="recursos" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Recursos"
          title="Tudo o que você precisa para vender melhor"
          description="Cada recurso do Raren Proposta foi pensado para transformar orçamentos comuns em apresentações que fecham negócios."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70} as="article">
              <div className="group h-full rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-light/40 hover:bg-card">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 ring-1 ring-inset ring-border transition-transform duration-300 group-hover:scale-110">
                  <b.icon className="h-6 w-6 text-brand-light" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
