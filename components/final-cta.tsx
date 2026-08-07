import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-light/25 bg-gradient-to-br from-[#0f1a3f] via-card to-[#0e1530] px-6 py-16 text-center md:px-16 md:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-brand-purple/20 blur-[100px]" />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
                Transforme sua maneira de vender. Pare de enviar documentos comuns.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                Comece hoje a apresentar propostas que impressionam, transmitem
                autoridade e fecham mais negócios.
              </p>
              <div className="mt-9 flex justify-center">
                <a
                  href="#preco"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_0_36px_-4px_var(--brand-light)] transition-all hover:shadow-[0_0_54px_-2px_var(--brand-light)] hover:brightness-110"
                >
                  Quero começar agora
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
