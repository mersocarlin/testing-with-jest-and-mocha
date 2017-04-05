import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { Input } from '../../src'

export const InputWithState = compose(
  withState('value', 'setValue', ({ value }) => value),
)(
  ({ setValue, ...rest }) => (
    <Input
      {...rest}
      onChange={newValue => setValue(newValue)}
    />
  ),
)

export default () => {
  storiesOf('Input', module)
    .add('Email', () => (
      <InputWithState
        className="my-custom-class"
        value="me@me.com"
        type="email"
      />
    ))
    .add('Password', () => (
      <InputWithState
        className="my-custom-class"
        value="1234567890"
        type="password"
      />
    ))
    .add('Text', () => (
      <InputWithState
        className="my-custom-class"
        value="Value"
      />
    ))
}
