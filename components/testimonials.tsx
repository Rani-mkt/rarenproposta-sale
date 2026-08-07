import { Star, Quote } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'Conseguimos padronizar todas as nossas propostas e a taxa de fechamento subiu de forma visível. Hoje o cliente percebe o valor antes mesmo de olhar o preço.',
    name: 'Marina Costa',
    role: 'Sócia · Clínica Odontológica',
    initials: 'MC',
  },
  {
    quote:
      'Antes eu perdia horas montando orçamento no Word. Agora faço uma proposta impecável em minutos e envio na hora. Foi um divisor de águas na minha consultoria.',
    name: 'Rafael Andrade',
    role: 'Consultor de Negócios',
    initials: 'RA',
  },
  {
    quote:
      'O visual das propostas passou a transmitir exatamente a credibilidade que a gente queria. Fechamos contratos maiores só pela apresentação profissional.',
    name: 'Juliana Prado',
    role: 'Diretora · Agência de Marketing',
    initials: 'JP',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem usa, fecha mais negócios"
          description="Empresas de diferentes segmentos já transformaram a forma de apresentar seus serviços."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} as="article">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-7 transition-colors hover:border-brand-light/30">
                <Quote className="h-8 w-8 text-brand-blue/50" aria-hidden />
                <div className="mt-4 flex" aria-label="Avaliação 5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-brand-light text-brand-light" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
