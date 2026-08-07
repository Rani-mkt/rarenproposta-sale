'use client'

import Image from 'next/image'
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react'
import { Reveal } from './reveal'

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-[130px] animate-glow-pulse" />
        <div className="absolute right-[8%] top-[30%] h-[320px] w-[320px] rounded-full bg-brand-purple/20 blur-[120px]" />
        <div className="absolute left-[6%] top-[45%] h-[280px] w-[280px] rounded-full bg-brand-light/15 blur-[110px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand-light" />
              Propostas que fecham negócios, geradas em minutos
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Pare de perder clientes por apresentar{' '}
              <span className="bg-gradient-to-r from-brand-light via-primary to-brand-purple bg-clip-text text-transparent">
                propostas comuns.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Crie propostas comerciais profissionais em poucos minutos, impressione
              seus clientes e aumente suas chances de fechar negócios.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#preco"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-4px_var(--brand-light)] transition-all hover:shadow-[0_0_46px_-2px_var(--brand-light)] hover:brightness-110"
              >
                Quero criar propostas profissionais
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#demonstracao"
                className="glass inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand-light/50"
              >
                <Play className="h-4 w-4 text-brand-light" />
                Ver demonstração
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-light text-brand-light" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">4,9/5</strong> · +180 empresas
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-foreground">+12.000</strong> propostas geradas
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="animate-float">
            <div className="relative rounded-2xl border border-border bg-card/80 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* window bar */}
              <div className="mb-2.5 flex items-center gap-2 px-2 pt-1">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-brand-light/60" />
                <span className="h-3 w-3 rounded-full bg-brand-purple/60" />
                <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-secondary/70 px-3 text-[10px] text-muted-foreground">
                  app.rarenproposta.com
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/images/print-hero.png"
                  alt="Tela do app Raren Proposta para criar propostas comerciais"
                  width={1336}
                  height={575}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 shadow-xl shadow-black/40 sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple/20">
                <Star className="h-4 w-4 text-brand-purple" />
              </span>
              <div>
                <p className="text-xs font-semibold leading-none">+38% de fechamento</p>
                <p className="mt-1 text-[10px] text-muted-foreground">vs. orçamentos comuns</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
