import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { LeticiaCardData } from '../data/leticias'

type LeticiaModalProps = {
  card: LeticiaCardData | null
  onClose: () => void
}

export function LeticiaModal({ card, onClose }: LeticiaModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!card) return

    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [card, onClose])

  if (!card) return null

  const paragraphs = card.modalDescription.split('\n\n').filter(Boolean)

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <button
        type="button"
        className="absolute inset-0 cursor-default border-0 bg-ink/40"
        onClick={onClose}
        aria-label="Fechar"
      />

      <div
        className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-background shadow-[var(--shadow-lift)] landscape:mx-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="leticia-modal-title"
      >
        <div className="overflow-y-auto px-5 pt-5 pb-8">
          <div className="mb-5 flex items-start justify-between gap-4">
            <p className="pt-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              CAPÍTULO
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-white text-ink"
              aria-label="Fechar modal"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          <h2 id="leticia-modal-title" className="font-display text-2xl leading-tight text-ink">
            {card.title}
          </h2>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {card.gallery.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={`${card.title} — foto ${index + 1}`}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
