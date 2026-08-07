import { Check, ShieldCheck, Lock, RefreshCw, Infinity as InfinityIcon } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

// Preço configurável — substitua o valor abaixo conforme necessário.
const PRECO = 'R$ 297'

const included = [
  'Acesso vitalício a todos os templates',
  'Editor completo e personalização total',
  'Exportação ilimitada em PDF',
  'Cálculo automático de valores',
  'Atualizações gratuitas para sempre',
  'Uso em toda a sua empresa',
  'Suporte prioritário',
]

const trust = [
  { icon: Lock, label: 'Checkout 100% seguro' },
  { icon: ShieldCheck, label: 'Garantia de 7 dias' },
  { icon: RefreshCw, label: 'Atualizações gratuitas' },
]

export function Pricing() {
  return (
    <section id="preco" className="relative py-24 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Preço"
          title="Um único pagamento. Uso para sempre."
          description="Sem mensalidades, sem surpresas. Adquira a licença vitalícia e crie quantas propostas quiser."
        />

        <Reveal delay={100}>
          <div className="mx-auto mt-14 max-w-lg">
            <div className="relative overflow-hidden rounded-3xl border border-brand-light/30 bg-card p-8 shadow-[0_0_80px_-30px_var(--brand-light)] md:p-10">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-purple/20 blur-3xl" />

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-1 text-xs font-semibold text-white">
                  <InfinityIcon className="h-3.5 w-3.5" />
                  Licença Vitalícia
                </span>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl font-bold tracking-tight">{PRECO}</span>
                <span className="mb-1.5 text-sm text-muted-foreground">pagamento único</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Acesso completo e vitalício. Sem mensalidade, sem renovação.
              </p>

              <a
                href="https://www.asaas.com/c/265wl2lyudngj1fl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_34px_-4px_var(--brand-light)] transition-all hover:shadow-[0_0_52px_-2px_var(--brand-light)] hover:brightness-110"
              >
                Comprar Agora
              </a>

              <ul className="mt-8 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light/20">
                      <Check className="h-3 w-3 text-brand-light" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {trust.map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-2 text-center">
                    <t.icon className="h-5 w-5 text-brand-light" />
                    <span className="text-[11px] leading-tight text-muted-foreground">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              <ShieldCheck className="mr-1.5 inline h-4 w-4 text-brand-light" />
              Garantia incondicional de 7 dias. Não gostou? Devolvemos 100% do valor.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
