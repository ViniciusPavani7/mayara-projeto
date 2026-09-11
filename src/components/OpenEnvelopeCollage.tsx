import { ArrowRight, Heart } from 'lucide-react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import leticiaPhoto from '../assets/leticia/img1.jpeg'

const CARD_BG = '#f5f0e8'
const CTA_BG = '#ebe4d6'

export function OpenEnvelopeCollage() {
  const navigate = useNavigate()
  const [ctaAnimating, setCtaAnimating] = useState(false)
  const shouldNavigate = useRef(false)

  const handleCtaClick = () => {
    if (ctaAnimating) return
    shouldNavigate.current = true
    setCtaAnimating(true)
  }

  const handleCtaAnimationEnd = () => {
    setCtaAnimating(false)
    if (shouldNavigate.current) {
      shouldNavigate.current = false
      navigate('/leticias')
    }
  }

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-center px-4">
      <div className="relative w-[68%] -rotate-3">
        <div className="tape relative bg-white p-2.5 pb-10 shadow-md">
          <img
            src={leticiaPhoto}
            alt="Letícia"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-20 -mt-12 w-[78%] pb-6">
        <div
          className="px-2 py-2.5 text-center shadow-md"
          style={{ backgroundColor: CARD_BG }}
        >
          <div className="hand space-y-1 text-lg leading-tight text-ink lg:text-xl">
            <p>
              A Letícia nunca coube
              <br />
              em uma coisa só.
            </p>
            <p>
              Então a gente resolveu
              <br />
              colocar algumas delas aqui.
            </p>
          </div>
          <Heart className="mx-auto mt-2 h-5 w-5 text-ink" strokeWidth={1.5} />
        </div>

        <button
          type="button"
          onClick={handleCtaClick}
          className={`hand absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-sm px-3 py-1 text-base text-ink shadow-md -rotate-6 border-0 cursor-pointer ${ctaAnimating ? 'animate-envelope-tap' : ''}`}
          style={{ backgroundColor: CTA_BG }}
          onAnimationEnd={handleCtaAnimationEnd}
        >
          vamos ver as outras?
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
