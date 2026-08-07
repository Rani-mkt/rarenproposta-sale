import { Check, Minus } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { Logo } from './logo'
import { cn } from '@/lib/utils'

const features = [
  'Templates inteligentes por segmento',
  'Editor completo e visual',
  'Cálculo automático de valores',
  'Exportação em PDF profissional',
  'Identidade visual personalizada',
  'Padronização de todas as propostas',
  'Acesso pelo celular',
]

const columns = [
  { key: 'planilhas', label: 'Planilhas' },
  { key: 'word', label: 'Word' },
  { key: 'canva', label: 'Canva' },
] as const

// support matrix: which generic tool has which feature
const matrix: boolean[][] = [
  [false, false, false],
  [false, true, true],
  [true, false, false],
  [false, true, true],
  [false, false, true],
  [false, false, false],
  [false, false, true],
]

export function Comparison() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Comparativo"
          title="Por que trocar o improviso pelo Raren Proposta"
          description="Ferramentas genéricas não foram feitas para vender. O Raren Proposta foi."
        />

        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card/60">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <caption className="sr-only">
                  Comparativo de recursos entre Planilhas, Word, Canva e Raren Proposta
                </caption>
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="p-5 text-sm font-medium text-muted-foreground">
                      Recurso
                    </th>
                    {columns.map((c) => (
                      <th
                        key={c.key}
                        scope="col"
                        className="p-5 text-center text-sm font-medium text-muted-foreground"
                      >
                        {c.label}
                      </th>
                    ))}
                    <th scope="col" className="bg-primary/10 p-5 text-center">
                      <div className="flex justify-center">
                        <Logo showWordmark={false} />
                      </div>
                      <span className="mt-1 block text-xs font-bold text-brand-light">Raren</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feat, r) => (
                    <tr key={feat} className="border-b border-border last:border-0">
                      <th scope="row" className="p-5 text-sm font-medium text-foreground">
                        {feat}
                      </th>
                      {matrix[r].map((has, c) => (
                        <td key={c} className="p-5 text-center">
                          {has ? (
                            <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Minus className="mx-auto h-5 w-5 text-muted-foreground/40" />
                          )}
                        </td>
                      ))}
                      <td className={cn('bg-primary/10 p-5 text-center')}>
                        <span className="mx-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-light/20">
                          <Check className="h-4 w-4 text-brand-light" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
