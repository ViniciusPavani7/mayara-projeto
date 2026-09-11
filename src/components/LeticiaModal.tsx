import { useEffect, useRef } from 'react'
import type { LeticiaCardData } from '../data/leticias'

type LeticiaModalProps = {
  card: LeticiaCardData | null
  onClose: () => void
}

export function LeticiaModal({ card, onClose }: LeticiaModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!card) return

    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      videoRef.current?.pause()
    }
  }, [card])

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
          <h2 id="leticia-modal-title" className="font-display text-3xl leading-tight text-ink">
            {card.title}
          </h2>

          <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
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

          {card.video && (
            <video
              ref={videoRef}
              src={card.video}
              controls
              playsInline
              preload="metadata"
              className="mt-4 w-full rounded-2xl"
            />
          )}
        </div>
      </div>
    </div>
  )
}
