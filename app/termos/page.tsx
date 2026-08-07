import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { Logo } from '@/components/logo'

export const metadata: Metadata = {
  title: 'Termos de Uso e Política de Privacidade | Raren Proposta',
  description:
    'Termos de uso, modelo de licença vitalícia, política de privacidade (LGPD) e direito de arrependimento do Raren Proposta.',
}

const sections = [
  {
    title: '1. Modelo de Licença e Pagamento',
    paragraphs: [
      'O Raren Proposta é comercializado sob o modelo de Licença Vitalícia mediante pagamento único. Não há cobrança de mensalidades ou taxas de renovação recorrentes para a versão adquirida.',
    ],
  },
  {
    title: '2. Privacidade e Armazenamento de Dados (LGPD)',
    intro: 'O Raren Proposta preza pela privacidade extrema dos seus usuários:',
    items: [
      'Não possuímos banco de dados na nuvem para armazenamento das propostas geradas.',
      'Todas as informações de orçamentos, valores, nomes de clientes e escopos inseridos no gerador ficam guardados estritamente na memória local (LocalStorage) do navegador do próprio usuário.',
      'Se o usuário limpar o histórico ou o cache do navegador, os dados locais serão apagados. É de inteira responsabilidade do usuário exportar suas propostas em formato PDF imediatamente após a criação.',
      'Coletamos apenas o Nome e E-mail do comprador no ato do pagamento (via Asaas) para fins exclusivos de emissão do recibo e envio do link de ativação da licença.',
    ],
  },
  {
    title: '3. Direito de Arrependimento e Reembolso',
    paragraphs: [
      'Em conformidade com o Artigo 49 do Código de Defesa do Consumidor (Decreto Federal nº 7.962/2013), o comprador tem o direito de solicitar o cancelamento e o reembolso integral do valor pago em até 7 (sete) dias corridos após a compra, sem necessidade de justificativa, bastando entrar em contato pelo e-mail de suporte.',
    ],
  },
  {
    title: '4. Atualizações e Disponibilidade',
    paragraphs: [
      'A licença vitalícia garante ao usuário o acesso às atualizações e novos templates disponibilizados para a versão corrente do software sem custos adicionais.',
    ],
  },
]

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Termos de Uso e Política de Privacidade
        </h1>
        <p className="mt-2 text-sm font-medium text-brand-light">Raren Proposta</p>

        <p className="mt-8 leading-relaxed text-muted-foreground">
          Este documento estabelece as regras de uso e a política de privacidade do software Raren
          Proposta, operado de forma independente por{' '}
          <span className="text-foreground">Ranielle Mauren Barbosa Mota</span>, sob o CPF{' '}
          <span className="text-foreground">04503790510</span>, com suporte através do e-mail{' '}
          <a
            href="mailto:raren.adm@gmail.com"
            className="text-brand-light underline underline-offset-2"
          >
            raren.adm@gmail.com
          </a>
          .
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.intro ? (
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.intro}</p>
              ) : null}
              {section.items ? (
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-light"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Raren. Todos os direitos reservados.
          </p>
        </div>
      </article>
    </main>
  )
}
