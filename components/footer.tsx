import Link from 'next/link'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0a1024]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-md">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            O jeito profissional de criar propostas comerciais que impressionam
            e fecham negócios. Um produto <span className="text-foreground">Raren</span>.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Raren.{' '}
            <Link
              href="/termos"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Todos os direitos reservados.
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            Feito com dedicação pela software house <span className="text-foreground">Raren</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
