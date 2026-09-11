import { useRef, useState } from 'react'
import type { LeticiaCardData } from '../data/leticias'

type LeticiaCardProps = {
  card: LeticiaCardData
  onOpen: () => void
}

export function LeticiaCard({ card, onOpen }: LeticiaCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const shouldOpen = useRef(false)

  const handleClick = () => {
    if (isAnimating) return
    shouldOpen.current = true
    setIsAnimating(true)
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false)
    if (shouldOpen.current) {
      shouldOpen.current = false
      onOpen()
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative w-full cursor-pointer overflow-hidden rounded-3xl border-0 bg-white text-left ${isAnimating ? 'animate-envelope-tap' : ''}`}
      style={{
        boxShadow: `0 12px 28px -8px color-mix(in oklab, ${card.color} 55%, transparent)`,
      }}
      onAnimationEnd={handleAnimationEnd}
    >
      <div
        className="absolute inset-x-0 top-0 z-10 rounded-t-3xl border-t-[3px]"
        style={{ borderColor: card.color }}
      />

      <div className="relative">
        <img
          src={card.image}
          alt={card.title}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      <div className="px-3 py-3">
        <h2 className="font-display text-sm leading-snug text-ink">{card.title}</h2>
        <p className="mt-1 text-xs leading-snug text-muted-foreground">{card.description}</p>
      </div>
    </button>
  )
}
