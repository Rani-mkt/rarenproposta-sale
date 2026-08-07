import Image from 'next/image'
import { X, Check, FileWarning, Sparkles } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function BeforeAfter() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="A diferença"
          title="A diferença entre enviar um orçamento e apresentar uma proposta profissional."
          description="O mesmo serviço, dois resultados completamente diferentes. Veja o que o seu cliente recebe hoje — e o que ele poderia receber."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* BEFORE */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-secondary/30 p-6">
              <div className="mb-5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/15 px-3 py-1 text-xs font-semibold text-destructive">
                  <FileWarning className="h-3.5 w-3.5" />
                  Orçamento comum
                </span>
              </div>

              <div className="flex-1 rounded-xl border border-border bg-[#0e1526] p-6 font-mono text-sm text-muted-foreground">
                <p className="text-foreground/80">Orçamento</p>
                <div className="mt-4 space-y-1.5 text-xs leading-relaxed">
                  <p>Serviço 1 .................... R$ 800</p>
                  <p>Serviço 2 .................... R$ 450</p>
                  <p>Serviço 3 .................... R$ 300</p>
                  <p className="pt-2">Total: R$ 1.550</p>
                  <p className="pt-4">Qualquer dúvida estou à disposição.</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2">
                {['Sem identidade visual', 'Passa insegurança e amadorismo', 'Fácil de comparar só pelo preço'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <X className="h-4 w-4 shrink-0 text-destructive" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal delay={120}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-light/30 bg-card p-6 shadow-[0_0_60px_-20px_var(--brand-light)]">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-purple/20 blur-3xl" />
              <div className="mb-5 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light/15 px-3 py-1 text-xs font-semibold text-brand-light">
                  <Sparkles className="h-3.5 w-3.5" />
                  Proposta Raren
                </span>
              </div>

              <div className="flex-1 overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/print-incluso.png"
                  alt="Proposta profissional gerada no Raren com escopo, itens e valores"
                  width={663}
                  height={462}
                  className="h-auto w-full"
                />
              </div>

              <ul className="mt-5 space-y-2">
                {['Identidade visual profissional', 'Transmite confiança e autoridade', 'Vende valor, não apenas preço'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 shrink-0 text-brand-light" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
