import type { Prisma, Post } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  user: {
    admin: {
      data: {
        id: 1,
        email: 'admin@example.com',
        name: 'Admin User',
        hashedPassword: 'String',
        salt: 'String'
      }
    }
  },
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        user: { connect: { id: 1 } } // Connect to the admin user
      }
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        user: { connect: { id: 1 } }
      }
    }
  }
})

export type StandardScenario = ScenarioData<Post, 'post'>
