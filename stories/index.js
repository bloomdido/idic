import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {
  Box,
  Text,
} from 'src'

storiesOf('Box', module)
.add('default', () => (
  <Box height={250} width={250} backgroundColor="red"/>
))
.add('border', () => (
  <Box
    height={250}
    width={250}
    borderWidth={1}
    borderStyle="solid"
    borderColor="red"
  />
))
.add('clickable', () => (
  <Box
    height={250}
    width={250}
    backgroundColor="red"
    cursor="pointer"
    onClick={action('clicked')}
  />
))

storiesOf('Text', module)
.add('default', () => (
  <Text>Hello, world!</Text>
))
.add('heading', () => (
  <Text component="h1">Hello, world!</Text>
))
.add('italic', () => (
  <Text fontStyle="italic">Hello, world!</Text>
))
