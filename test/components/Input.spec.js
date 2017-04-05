import React from 'react'
import { shallow } from 'enzyme'

import { Input } from '../../src'

describe('Input', () => {
  let component

  beforeEach(() => {
    component = shallow(<Input />)
  })

  it('should render default Input component', () => {
    expect(component).not.toBeNull()
    expect(component.html()).toBe('<input type="text"/>')
  })

  it('should render an input with given props', () => {
    component.setProps({
      className: 'my-custom-css-class',
      disabled: true,
      placeholder: 'Type to search...',
      type: 'url',
    })

    const props = component.props()

    expect(props).toHaveProperty('className', 'my-custom-css-class')
    expect(props).toHaveProperty('disabled', true)
    expect(props).toHaveProperty('placeholder', 'Type to search...')
    expect(props).toHaveProperty('type', 'url')
  })

  it('should handle onChange event', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
    })

    expect(handleChange).not.toHaveBeenCalled()

    const changeEvent = { target: { value: '123' } }
    component.simulate('change', changeEvent)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('123', changeEvent)
  })

  it('should handle onKeyUp event', () => {
    const handleKeyUp = jest.fn()

    component.setProps({
      onKeyUp: handleKeyUp,
    })

    expect(handleKeyUp).not.toHaveBeenCalled()
    component.simulate('keyUp', { keyCode: 13 })
    expect(handleKeyUp).toHaveBeenCalledTimes(1)
  })
})
