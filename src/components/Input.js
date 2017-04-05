import React from 'react'

const Input = ({ onChange, type = 'text', ...rest }) => (
  <input
    onChange={event => onChange && onChange(event.target.value, event)}
    type={type}
    {...rest}
  />
)

export default Input
