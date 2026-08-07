import { LayoutTemplate, Wand2, FileDown, Send } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const steps = [
  {
    icon: LayoutTemplate,
    step: '01',
    title: 'Escolha um modelo',
    desc: 'Selecione um template profissional pensado para o seu segmento e comece de uma base que já converte.',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'Personalize',
    desc: 'Adicione sua marca, ajuste textos, itens e valores. O cálculo dos totais é feito automaticamente.',
  },
  {
    icon: FileDown,
    step: '03',
    title: 'Gere o PDF',
    desc: 'Com um clique, sua proposta vira um PDF impecável, pronto para causar a melhor impressão.',
  },
  {
    icon: Send,
    step: '04',
    title: 'Envie ao cliente',
    desc: 'Compartilhe por e-mail, WhatsApp ou link e acompanhe o resultado. Simples assim.',
  },
]

export function HowItWorks() {
  return (
    <section id="beneficios" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Da ideia à proposta enviada em 4 passos"
          description="Um fluxo simples e direto, do modelo ao envio, sem complicação e sem perder tempo."
        />

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 90} as="article">
              <div className="group relative h-full rounded-2xl border border-border bg-card/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-light/40">
                <span className="font-display text-4xl font-bold text-brand-blue/40 transition-colors group-hover:text-brand-light/60">
                  {s.step}
                </span>
                <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary ring-1 ring-inset ring-border">
                  <s.icon className="h-5 w-5 text-brand-light" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
