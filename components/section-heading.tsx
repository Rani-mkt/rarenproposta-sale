import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-light">
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}
