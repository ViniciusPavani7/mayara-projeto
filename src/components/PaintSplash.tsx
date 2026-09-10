import { useEffect, useState } from 'react'

type Splash = { id: number; x: number; y: number; hue: string; size: number }

const HUES = [
  'var(--rose-paint)',
  'var(--sun-paint)',
  'var(--mint-paint)',
  'var(--grape-paint)',
  'var(--sky-paint)',
]

export function PaintSplash() {
  const [splashes, setSplashes] = useState<Splash[]>([])

  useEffect(() => {
    let id = 0
    const onClick = (e: MouseEvent) => {
      const next: Splash[] = Array.from({ length: 3 }, (_, i) => ({
        id: ++id * 10 + i,
        x: e.clientX + (Math.random() - 0.5) * 60,
        y: e.clientY + (Math.random() - 0.5) * 60,
        hue: HUES[Math.floor(Math.random() * HUES.length)]!,
        size: 14 + Math.random() * 26,
      }))
      setSplashes((s) => [...s, ...next])
      window.setTimeout(() => {
        setSplashes((s) => s.filter((sp) => !next.some((n) => n.id === sp.id)))
      }, 750)
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {splashes.map((s) => (
        <span
          key={s.id}
          className="animate-splat absolute rounded-full blur-[1px]"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: s.hue,
            borderRadius: '60% 40% 55% 45% / 45% 60% 40% 55%',
          }}
        />
      ))}
    </div>
  )
}
