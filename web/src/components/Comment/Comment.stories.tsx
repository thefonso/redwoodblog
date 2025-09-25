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

const meta: Meta<typeof Comment> = {
        title: 'Components/Comment',
        component: Comment,
}

export default meta

type Story = StoryObj<typeof Comment>

export const Generated: Story = {
        args: {
                comment: {
                        name: 'Uncle Fonso',
                        body: 'This is the first comment',
                        createdAt: '2025-09-01T12:34:56Z'
                }
        }

}
