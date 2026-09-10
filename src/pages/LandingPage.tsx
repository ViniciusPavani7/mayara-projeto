import { LetterCard } from '../components/LetterCard'
import { PaintSplash } from '../components/PaintSplash'

export function LandingPage() {
  return (
    <main className="world-bg flex min-h-screen items-center justify-center p-4">
      <PaintSplash />
      <LetterCard />
    </main>
  )
}
