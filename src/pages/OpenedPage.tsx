import { OpenEnvelopeCollage } from '../components/OpenEnvelopeCollage'

export function OpenedPage() {
  return (
    <main className="world-bg flex min-h-screen items-center justify-center p-4">
      <div className="animate-fade-in w-full">
        <OpenEnvelopeCollage />
      </div>
    </main>
  )
}
