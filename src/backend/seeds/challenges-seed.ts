import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const challengeData: Prisma.ChallengesCreateInput[] = [
  {
    type: 'BODY',
    description:
      'Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.',
    amount: 80
  },
  {
    type: 'BODY',
    description:
      'Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.',
    amount: 60
  },
  {
    type: 'BODY',
    description:
      'Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.',
    amount: 70
  },
  {
    type: 'BODY',
    description:
      'Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.',
    amount: 60
  },
  {
    type: 'BODY',
    description:
      'Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.',
    amount: 100
  },
  {
    type: 'BODY',
    description:
      'Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.',
    amount: 80
  },
  {
    type: 'BODY',
    description:
      'Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.',
    amount: 50
  },
  {
    type: 'BODY',
    description:
      'Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.',
    amount: 80
  },
  {
    type: 'EYE',
    description:
      'Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.',
    amount: 90
  },
  {
    type: 'EYE',
    description:
      'Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.',
    amount: 140
  },
  {
    type: 'EYE',
    description:
      'Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.',
    amount: 70
  },
  {
    type: 'BODY',
    description:
      'Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.',
    amount: 90
  }
]

async function main() {
  console.log('Start seeding...')

  for (const challenge of challengeData) {
    await prisma.challenges.create({
      data: challenge
    })
  }

  console.log('Seeding finished')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
