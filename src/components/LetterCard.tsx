import { Sparkles } from 'lucide-react'

export function LetterCard() {
  return (
    <div className="group relative z-10 perspective-[1000px] transition-transform duration-500 ease-out hover:rotate-[3deg] hover:scale-[1.02]">
      <div className="relative w-full max-w-md px-4 lg:max-w-lg">
        <button
          type="button"
          className="paper tape relative flex w-full cursor-pointer flex-col items-center gap-8 rounded-3xl border-0 bg-card px-6 py-10 text-left transition-transform duration-500 group-hover:-rotate-[1deg] md:flex-row md:items-center md:gap-4 md:px-6 md:py-10 lg:gap-5 lg:px-8 lg:py-12"
          style={{ boxShadow: 'var(--shadow-paper)' }}
        >
          <div className="flex flex-1 justify-center">
            <div className="flex max-w-[6rem] items-center gap-2">
              <Sparkles
                className="h-4 w-4 shrink-0 text-[oklch(0.58_0.22_15)]"
                strokeWidth={2}
              />
              <p className="hand text-center text-xl leading-snug text-ink lg:text-2xl">
                tem
                <br />
                um
                <br />
                mundo
                <br />
                inteiro
                <br />
                aqui
                <br />
                dentro
              </p>
            </div>
          </div>

          <div className="ink-title shrink-0 text-center">
            <p className="text-6xl leading-tight font-bold text-ink lg:text-6xl">
              o
              <br />
              mundo
              <br />
              da
            </p>
            <p className="text-6xl leading-none font-bold text-primary lg:text-6xl">Letícia</p>
          </div>

          <div className="flex flex-1 justify-center">
            <p className="max-w-[12rem] text-center font-body text-sm leading-relaxed text-muted-foreground lg:text-base">
              A gente pintou cada pedacinho de você em um card. Toca aqui pra abrir a porta.
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}
