import { Box, BoxProps } from '@design-system-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
