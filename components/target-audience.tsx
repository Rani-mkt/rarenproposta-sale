import { Stethoscope, HeartPulse, Glasses, Briefcase, Megaphone, Ruler, Cpu, Building2 } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const segments = [
  { icon: Stethoscope, label: 'Odontologia', desc: 'Planos de tratamento que fecham' },
  { icon: HeartPulse, label: 'Clínicas Médicas', desc: 'Orçamentos claros e confiáveis' },
  { icon: Glasses, label: 'Óticas', desc: 'Propostas de produtos e serviços' },
  { icon: Briefcase, label: 'Consultorias', desc: 'Escopo e valor bem definidos' },
  { icon: Megaphone, label: 'Marketing', desc: 'Projetos e pacotes irresistíveis' },
  { icon: Ruler, label: 'Arquitetura', desc: 'Projetos com apresentação premium' },
  { icon: Cpu, label: 'Tecnologia', desc: 'Escopos técnicos descomplicados' },
  { icon: Building2, label: 'Empresas B2B', desc: 'Vendas complexas, propostas simples' },
]

export function TargetAudience() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Para quem"
          title="Feito para quem vive de fechar bons negócios"
          description="Seja qual for o seu segmento, o Raren Proposta se adapta ao seu jeito de vender."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((s, i) => (
            <Reveal key={s.label} delay={i * 60} as="article">
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-all duration-300 hover:border-brand-purple/40 hover:bg-card">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-purple/25 ring-1 ring-inset ring-border transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-5 w-5 text-brand-light" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{s.label}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
