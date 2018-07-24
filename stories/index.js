import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {
  Box,
  Button,
  Image,
  List,
  ListItem,
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

storiesOf('Button', module)
.add('default', () => (
  <Button onClick={action('clicked')}>Click Me</Button>
))

storiesOf('Image', module)
.add('default', () => (
  <Image
    src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-gallery-1022a-2000x960.jpg"
  />
))

storiesOf('List', module)
.add('default', () => (
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </List>
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
