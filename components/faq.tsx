'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'O software funciona offline?',
    a: 'O Raren Proposta funciona diretamente no navegador, com sincronização em nuvem para você acessar suas propostas de qualquer lugar. Também disponibilizamos recursos que permitem trabalhar mesmo com conexão instável, salvando seu progresso automaticamente.',
  },
  {
    q: 'Posso editar minhas propostas?',
    a: 'Sim. Você pode editar qualquer proposta a qualquer momento — textos, itens, valores, cores e identidade visual. Tudo é totalmente personalizável, quantas vezes precisar.',
  },
  {
    q: 'Preciso instalar algum programa?',
    a: 'Não. O Raren Proposta é 100% online. Basta acessar pelo navegador, fazer login e começar a criar. Sem instalação, sem configuração complicada.',
  },
  {
    q: 'Recebo atualizações?',
    a: 'Com a licença vitalícia, todas as atualizações e novos templates estão inclusos gratuitamente, para sempre. Você sempre terá a versão mais atual sem pagar nada a mais.',
  },
  {
    q: 'Posso usar na minha empresa?',
    a: 'Sim. A licença permite o uso dentro da sua empresa, para que toda a equipe padronize e crie propostas com a mesma qualidade e identidade visual.',
  },
  {
    q: 'Há limite de propostas?',
    a: 'Não existe limite. Crie, edite e exporte quantas propostas quiser, sem cobranças extras por volume.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Funciona perfeitamente. A interface é totalmente responsiva, então você pode criar e enviar propostas pelo celular, tablet ou computador com a mesma experiência premium.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas frequentes"
          description="Tudo o que você precisa saber antes de começar."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div
                  className={cn(
                    'rounded-2xl border bg-card/60 transition-colors',
                    isOpen ? 'border-brand-light/40' : 'border-border',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-foreground">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-brand-light transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
