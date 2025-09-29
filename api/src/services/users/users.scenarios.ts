import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String7314359',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-09-27T04:14:52.902Z',
      },
    },
    two: {
      data: {
        email: 'String7913853',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-09-27T04:14:52.902Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
