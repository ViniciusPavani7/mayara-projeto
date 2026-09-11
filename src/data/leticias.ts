import leticiaEntrePinceis from '../assets/leticia/leticias/leiticiaEntrePinceis.jpeg'
import leticiaNaoFazSentido from '../assets/leticia/leticias/leiticaNaoFazSentido.jpeg'
import leticiaCriaHobby from '../assets/leticia/leticias/leticiaCriaHobby.jpeg'
import leticiaNaoSabe from '../assets/leticia/leticias/leticiaNaoSabe.jpeg'
import leticiaQueAGenteConhece from '../assets/leticia/leticias/leticiaQueAGenteConhece.jpeg'
import leticiaQueCria from '../assets/leticia/leticias/leticiaQueCria.jpeg'
import leticiaQueDanca from '../assets/leticia/leticias/leticiaQueDanca.jpeg'

export type LeticiaCardData = {
  id: number
  title: string
  description: string
  modalDescription: string
  color: string
  image: string
  gallery: string[]
}

const galleryModules = import.meta.glob('../assets/leticia/leticias/*/*.{jpeg,jpg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function getGallery(folder: string): string[] {
  return Object.entries(galleryModules)
    .filter(([path]) => path.includes(`/leticias/${folder}/`))
    .sort(([a], [b]) => {
      const numA = Number(a.match(/\/(\d+)\./)?.[1] ?? 0)
      const numB = Number(b.match(/\/(\d+)\./)?.[1] ?? 0)
      return numA - numB
    })
    .map(([, url]) => url)
}

export const leticiasCards: LeticiaCardData[] = [
  {
    id: 1,
    title: 'a letícia que cria',
    description: 'descrição 1',
    modalDescription: 'descrição longa 1',
    color: 'var(--mint-paint)',
    image: leticiaQueCria,
    gallery: getGallery('queCria'),
  },
  {
    id: 2,
    title: 'a letícia que dança',
    description: 'descrição 2',
    modalDescription: 'descrição longa 2',
    color: 'var(--sun-paint)',
    image: leticiaQueDanca,
    gallery: getGallery('queDanca'),
  },
  {
    id: 3,
    title: 'a letícia entre pincéis',
    description: 'descrição 3',
    modalDescription: 'descrição longa 3',
    color: 'var(--rose-paint)',
    image: leticiaEntrePinceis,
    gallery: getGallery('entrePinceis'),
  },
  {
    id: 4,
    title: 'a letícia que inventa um hobby novo',
    description: 'descrição 4',
    modalDescription: 'descrição longa 4',
    color: 'var(--grape-paint)',
    image: leticiaCriaHobby,
    gallery: getGallery('inventaHobby'),
  },
  {
    id: 5,
    title: 'a letícia que a gente conhece',
    description: 'descrição 5',
    modalDescription: 'descrição longa 5',
    color: 'var(--sky-paint)',
    image: leticiaQueAGenteConhece,
    gallery: getGallery('genteConhece'),
  },
  {
    id: 6,
    title: 'as coisas que só fazem sentido porque é com a letícia',
    description: 'descrição 6',
    modalDescription: 'descrição longa 6',
    color: 'var(--cream-paint)',
    image: leticiaNaoFazSentido,
    gallery: getGallery('naoFazSentido'),
  },
  {
    id: 7,
    title: 'a letícia que talvez nem saiba que é',
    description: 'descrição 7',
    modalDescription: 'descrição longa 7',
    color: 'var(--primary)',
    image: leticiaNaoSabe,
    gallery: getGallery('naoSabe'),
  },
]

export const leticiasTopCards = leticiasCards.slice(0, 4)
export const leticiasBottomCards = leticiasCards.slice(4)
