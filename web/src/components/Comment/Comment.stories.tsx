// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'

declare const mockCurrentUser: (user: {
  id: number
  email: string
  roles: string
}) => void

const meta: Meta<typeof Comment> = {
  title: 'Components/Comment',
  component: Comment,
}

export default meta

type Story = StoryObj<typeof Comment>



export const DefaultView: Story = {
  args: {
    comment: {
      id: 1,
      name: 'Uncle Fonso',
      body: 'This is the first comment',
      createdAt: '2025-09-01T12:34:56Z',
      postId: 1,
    }
  }
}


export const ModeratorView: Story = {
  args: {
    comment: {
      id: 1,
      name: 'Rob Cameron',
      body: 'This is the first comment!',
      createdAt: '2020-01-01T12:34:56Z',
      postId: 1,
    }
  },
  render: (args) => {
    mockCurrentUser({
      id: 1,
      email: 'moderator@moderator.com',
      roles: 'moderator',
    })
    return <Comment {...args} />
  }
}


