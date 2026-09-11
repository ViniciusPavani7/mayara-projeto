import { Mail } from 'lucide-react'
import { useRef, useState } from 'react'

const ENVELOPE_BODY = '#f6e6cc'
const ENVELOPE_FLAP = '#edd8b8'
const ENVELOPE_SEAL = '#8c1c1c'

type EnvelopeCardProps = {
  onOpen: () => void
}

export function EnvelopeCard({ onOpen }: EnvelopeCardProps) {
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
    <div className="relative z-10 w-full max-w-sm px-4">
      <button
        type="button"
        onClick={handleClick}
        className="w-full cursor-pointer border-0 bg-transparent p-0"
      >
        <div
          className={`relative aspect-[3/2] w-full ${isAnimating ? 'animate-envelope-tap' : ''}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0" style={{ backgroundColor: ENVELOPE_BODY }} />

            <div
              className="absolute inset-x-0 top-0 h-[55%]"
              style={{
                backgroundColor: ENVELOPE_FLAP,
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full shadow-md"
              style={{ backgroundColor: ENVELOPE_SEAL }}
            >
              <Mail className="h-6 w-6" strokeWidth={1.5} style={{ color: ENVELOPE_BODY }} />
            </div>
          </div>

          <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-lg italic lg:text-xl"
            style={{ color: ENVELOPE_SEAL }}
          >
            para a Letícia
          </p>
        </div>
      </button>
    </div>
  )
}
