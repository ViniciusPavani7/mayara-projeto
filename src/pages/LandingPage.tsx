import { EnvelopeCard } from '../components/EnvelopeCard'

type LandingPageProps = {
  onOpen: () => void
}

export function LandingPage({ onOpen }: LandingPageProps) {
  return (
    <main className="world-bg flex min-h-screen items-center justify-center p-4">
      <EnvelopeCard onOpen={onOpen} />
    </main>
  )
}
