import { useState } from 'react'
import { LeticiaCard } from '../components/LeticiaCard'
import { LeticiaModal } from '../components/LeticiaModal'
import type { LeticiaCardData } from '../data/leticias'
import { leticiasBottomCards, leticiasTopCards } from '../data/leticias'

export function LeticiasPage() {
  const [selectedCard, setSelectedCard] = useState<LeticiaCardData | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-md px-4 pt-8 pb-10 landscape:max-w-4xl">
        <header className="mb-8 text-center">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            AS VERSÕES DELA
          </p>
          <h1 className="mt-2 font-display text-3xl text-ink">Todas as Letícias</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Toque em cada card para abrir a história, as fotos e os recadinhos.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {leticiasTopCards.map((card) => (
            <LeticiaCard key={card.id} card={card} onOpen={() => setSelectedCard(card)} />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 landscape:grid-cols-3">
          {leticiasBottomCards.map((card, index) => (
            <div
              key={card.id}
              className={index === 2 ? 'col-span-2 landscape:col-span-1' : undefined}
            >
              <LeticiaCard card={card} onOpen={() => setSelectedCard(card)} />
            </div>
          ))}
        </div>
      </div>

      <LeticiaModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </main>
  )
}
