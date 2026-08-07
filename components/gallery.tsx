'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LayoutGrid, Route, Layers, BadgeDollarSign } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const screens = [
  {
    id: 'segmentos',
    label: 'Segmentos',
    icon: LayoutGrid,
    src: '/images/print-segmentos.png',
    alt: 'Seleção de segmento da proposta com copy pronta por nicho',
    caption: 'Comece com uma copy persuasiva pronta para o seu nicho.',
    width: 820,
    height: 606,
  },
  {
    id: 'metodologia',
    label: 'Metodologia',
    icon: Route,
    src: '/images/print-metodologia.png',
    alt: 'Editor de metodologia com pilares e linha do tempo do projeto',
    caption: 'Apresente seu método com etapas e linha do tempo.',
    width: 1346,
    height: 605,
  },
  {
    id: 'valuestack',
    label: 'Value Stack',
    icon: Layers,
    src: '/images/print-valuestack.png',
    alt: 'Editor de value stack com itens, valores e bônus da proposta',
    caption: 'Mostre tudo o que está incluso e destaque os bônus.',
    width: 1334,
    height: 611,
  },
  {
    id: 'investimento',
    label: 'Investimento',
    icon: BadgeDollarSign,
    src: '/images/print-investimento.png',
    alt: 'Tela de investimento com valor parcelado e garantia',
    caption: 'Ancore o valor e apresente o investimento com clareza.',
    width: 791,
    height: 604,
  },
] as const

type ScreenId = (typeof screens)[number]['id']

export function Gallery() {
  const [active, setActive] = useState<ScreenId>('segmentos')
  const current = screens.find((s) => s.id === active)!

  return (
    <section id="demonstracao" className="relative py-24 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Demonstração"
          title="Veja o Raren por dentro"
          description="Do primeiro rascunho ao investimento final: cada etapa foi pensada para você criar propostas premium em minutos."
        />

        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="glass inline-flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-border p-1">
              {screens.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s.id)}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all',
                    active === s.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  aria-pressed={active === s.id}
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12">
            <div className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-card/80 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="mb-2.5 flex items-center gap-2 px-2 pt-1">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-brand-light/60" />
                <span className="h-3 w-3 rounded-full bg-brand-purple/60" />
                <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-secondary/70 px-3 text-[10px] text-muted-foreground">
                  app.rarenproposta.com
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-[#0a1024]">
                <Image
                  key={current.id}
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-muted-foreground">{current.caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
