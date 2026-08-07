import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className, showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-white/10">
        <Image
          src="/images/raren-logo.png"
          alt="Logotipo Raren"
          fill
          sizes="36px"
          className="object-cover"
          priority
        />
      </div>
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          Raren<span className="text-brand-light"> Proposta</span>
        </span>
      )}
    </div>
  )
}
