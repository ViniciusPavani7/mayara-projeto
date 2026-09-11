import leticiaEntrePinceis from '../assets/leticia/leticias/leiticiaEntrePinceis.jpeg'
import leticiaNaoFazSentido from '../assets/leticia/leticias/leiticaNaoFazSentido.jpeg'
import leticiaCriaHobby from '../assets/leticia/leticias/leticiaCriaHobby.jpeg'
import leticiaNaoSabe from '../assets/leticia/leticias/leticiaNaoSabe.jpeg'
import leticiaQueAGenteConhece from '../assets/leticia/leticias/leticiaQueAGenteConhece.jpeg'
import leticiaQueCria from '../assets/leticia/leticias/leticiaQueCria.jpeg'
import leticiaQueDanca from '../assets/leticia/leticias/leticiaQueDanca.jpeg'
import naoSabeVideo from '../assets/leticia/leticias/naoSabe/video.mov'

export type LeticiaCardData = {
  id: number
  title: string
  description: string
  modalDescription: string
  color: string
  image: string
  gallery: string[]
  video?: string
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
    title: 'A Letícia que cria',
    description: 'Você entrega 100% da Letícia em tudo que faz.',
    modalDescription: `Amiga, o que falar de você no âmbito de trabalho, né?

É tão lindo, tão inspirador e tão incrível ver a forma como você cresceu, como a sua carreira foi se desenvolvendo e, principalmente, como ela parece ter se encaixado perfeitamente em quem você é.

Seja no seu trabalho do dia a dia, nas publis que você grava, nos vídeos que você edita ou nos conteúdos que você cria sobre os seus hobbies, os lugares que você vai e as dicas que você dá pras pessoas, dá pra ver você em tudo.

Porque acho que essa é uma das coisas que mais admiro em você: tudo que você se propõe a fazer, você entrega 100%. Você entrega 100% da Letícia. E a gente consegue enxergar nisso a sua criatividade, o seu brilho e, principalmente, o amor pelo que você tá entregando.

Ver a forma como você conduz a sua vida, como você se organiza, se dedica e faz as coisas tão bem feitas me inspira tanto. Me inspira no quanto eu também quero crescer, no quanto eu quero ser uma profissional melhor e no quanto eu quero me dedicar e me esforçar pra fazer as coisas pelo menos um pouquinho da forma que você faz.

Ver a sua carreira acontecendo, acompanhar o quanto você tá crescendo e saber até onde você ainda pode chegar enche a gente de orgulho cada dia mais.

Você é uma inspiração, pode ter certeza disso. O trabalho que você faz é lindo e reflete muito de quem você é, porque você é essa pessoa que coloca um pouco de si em tudo que faz e, de alguma forma, consegue fazer tudo brilhar um pouquinho mais.`,
    color: 'var(--mint-paint)',
    image: leticiaQueCria,
    gallery: getGallery('queCria'),
  },
  {
    id: 2,
    title: 'A Letícia que dança',
    description: 'Dança com o coração, a alma e essa vontade de melhorar.',
    modalDescription: `Amiga, eu consigo enxergar em cada vídeo que você manda das suas apresentações, em cada foto sua pronta pra um espetáculo e em cada conquista nova (como a sapatilha de ponta) o quanto você brilha fazendo isso.

A Letícia que dança, dança com o coração, com a alma e com essa vontade que você tem de fazer melhor todos os dias. De aprender um passo que antes não conseguia, de melhorar a cada ensaio, de se esforçar um pouquinho mais pra próxima apresentação.

E acho que tudo isso fica ainda mais bonito quando a gente lembra que o balé chegou na sua vida já adulta. Algo que poderia ser motivo pra pensar que era tarde demais, pra você parece ter virado mais um motivo pra se dedicar ainda mais.

Eu lembro que, antes da sua última apresentação, você tava contando pra gente na aula de inglês o quanto ficava chateada quando as pessoas não iam aos ensaios ou não se dedicavam de verdade às apresentações. E isso diz tanto sobre você. Porque você se importa. Você quer estar ali, quer fazer bem feito, quer aprender, melhorar e dar o melhor de si.

E é muito lindo poder acompanhar isso de perto. Ver a sua felicidade quando consegue algo que queria muito, acompanhar cada pequena evolução e, principalmente, ver você subir no palco e brilhar.

A gente admira muito a Letícia que dança. A que se esforça, se dedica, se desafia e continua querendo ser melhor a cada dia.

Você nasceu pra brilhar em todos os âmbitos da sua vida, amiga. E pode ter certeza que, quando você dança, a gente consegue ver esse brilho de um jeito ainda mais bonito.`,
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
    title: 'A Letícia que inventa um hobby novo',
    description: 'Uma mente inquieta que nunca tá parada.',
    modalDescription: `Amiga, a sua mente é uma mente inquieta e criativa, né? Você nunca tá parada. E mesmo quando tá, eu tenho certeza que tá pensando em alguma coisa nova que pode fazer, algum vídeo que pode gravar ou algum hobby novo que pode incluir na sua vida.

Eu amo como você vai atrás dessas coisas e pesquisa até encontrar algo novo que quer experimentar. E é muito legal ver como parece que você nasceu pra fazer cada coisinha que resolve tentar. Você começou ontem e hoje já tá fazendo algo lindo, delicado e 100% você.

Acho que isso diz muito sobre essa sua vontade de descobrir coisas novas e encontrar novas formas de viver a vida.

E essa é uma coisa que me inspira muito em você, amiga. Porque eu sei o quanto, pra mim, às vezes é difícil sair da minha própria cabeça e simplesmente viver. Te ver fazendo tantas coisas e querendo experimentar o mundo me dá vontade de olhar pra vida de um jeito diferente também.

Principalmente porque eu sei que isso não significa que a sua vida seja sempre fácil. Você também enfrenta os seus problemas e sofre com as suas coisas. Mas ainda assim continua com essa vontade de viver, de fazer coisas novas e de encontrar momentos que te fazem feliz ao lado das pessoas que você ama.

A Letícia que inventa um hobby novo me inspira porque me lembra, mesmo sem saber, que sempre pode existir alguma coisa nova lá fora esperando pela gente. E me dá um pouquinho mais de vontade de sair do meu mundo e descobrir também.`,
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
    video: naoSabeVideo,
  },
]

export const leticiasTopCards = leticiasCards.slice(0, 4)
export const leticiasBottomCards = leticiasCards.slice(4)
